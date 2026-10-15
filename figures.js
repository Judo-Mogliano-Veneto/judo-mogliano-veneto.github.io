/* Motore di disegno delle figure (non serve modificarlo per cambiare testi o carichi).
   Coordinate in cm, vista laterale con la persona rivolta a destra, y verso l'alto. */
(function () {
  const WARN = [];
  const D = Math.PI / 180;
  const dv = a => [Math.cos(a * D), Math.sin(a * D)];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const mul = (a, k) => [a[0] * k, a[1] * k];
  const len = a => Math.hypot(a[0], a[1]);
  const rot = a => [-a[1], a[0]];
  const lerp = (a, b, t) => a + (b - a) * t;
  const interp = (prof, t) => {
    if (t <= prof[0][0]) return prof[0][1];
    for (let i = 1; i < prof.length; i++) if (t <= prof[i][0]) {
      const [t0, w0] = prof[i - 1], [t1, w1] = prof[i];
      return lerp(w0, w1, (t - t0) / (t1 - t0));
    }
    return prof[prof.length - 1][1];
  };

  // body dimensions in cm (175 cm adult, side view faces +x, y up)
  const TH = 44, SH = 44, UA = 30, FA = 26, TL = 50, NK = 9, HR = 10.5;
  const TF = [[0, 10], [.25, 9.5], [.6, 12.5], [.9, 9.5], [1, 6]];
  const TB = [[0, 14], [.2, 10.5], [.5, 9.5], [.8, 11.5], [1, 7]];
  const TW = [[0, 15], [.3, 13.5], [.7, 17.5], [1, 20]];
  const P_THIGH = [[0, 17], [.35, 16], [1, 11]];
  const P_SHIN = [[0, 11], [.3, 11.8], [.7, 8], [1, 6.2]];
  const P_UARM = [[0, 9.5], [.5, 9], [1, 7.2]];
  const P_FARM = [[0, 7.2], [.3, 7.6], [1, 5]];

  function ik(a, t, l1, l2, hint, tag) {
    const d = sub(t, a), dist = len(d);
    const max = l1 + l2 - 0.2, min = Math.abs(l1 - l2) + 0.5;
    if (dist > max + 2) WARN.push(`${tag}: reach ${dist.toFixed(1)} > ${max.toFixed(1)}`);
    const dd = Math.min(Math.max(dist, min), max);
    const base = Math.atan2(d[1], d[0]);
    const A = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + dd * dd - l2 * l2) / (2 * l1 * dd))));
    const e = [a[0] + Math.cos(base) * dd, a[1] + Math.sin(base) * dd];
    const j1 = [a[0] + l1 * Math.cos(base + A), a[1] + l1 * Math.sin(base + A)];
    const j2 = [a[0] + l1 * Math.cos(base - A), a[1] + l1 * Math.sin(base - A)];
    const m = [(a[0] + e[0]) / 2, (a[1] + e[1]) / 2], h = hint || [0, 0];
    const s1 = (j1[0] - m[0]) * h[0] + (j1[1] - m[1]) * h[1];
    const s2 = (j2[0] - m[0]) * h[0] + (j2[1] - m[1]) * h[1];
    return { j: s1 >= s2 ? j1 : j2, e };
  }

  function solve(p, tag) {
    const front = p.view === "front" || p.view === "top";
    let psi = p.ta ?? 90;
    if (p.auto) {
      const [k, dist] = p.auto, an = p[k].p;
      let best = 1e9;
      for (let a = -120; a <= 300; a += 0.25) {
        const h = sub(p.sh, mul(dv(a), TL));
        const e = Math.abs(len(sub(an, h)) - dist);
        if (e < best) { best = e; psi = a; }
      }
    }
    const u = dv(psi);
    const hip = p.sh ? sub(p.sh, mul(u, TL)) : p.hip;
    const sh = p.sh ? p.sh : add(hip, mul(u, TL));
    const flip = !!p.flip;                   // figura rivolta a sinistra (-x)
    const l = flip ? [-u[1], u[0]] : [u[1], -u[0]];                 // lateral/forward vector (+side "1")
    const S = { p, front, flip, psi, u, l, hip, sh, tag, legs: {}, arms: {}, plates: [], pts: [] };
    S.hdir = p.hh ?? (psi + (p.hd || 0));
    S.nk = add(add(sh, mul(u, 2)), mul(dv(S.hdir), NK));
    S.hc = add(S.nk, mul(dv(S.hdir), 8));
    for (const k of ["1", "2"]) {
      const sp = p["f" + k]; if (!sp) continue;
      const sgn = k === "1" ? 1 : -1;
      const hj = front ? add(hip, mul(l, sgn * 7)) : hip;
      let kn, an;
      if (sp.fk) { const sc = sp.sc || [1, 1]; kn = add(hj, mul(dv(sp.fk[0]), TH * sc[0])); an = add(kn, mul(dv(sp.fk[1]), SH * sc[1])); }
      else { const r = ik(hj, sp.p, TH, SH, sp.h || [1, 0], tag + " leg" + k); kn = r.j; an = r.e; }
      S.legs[k] = { hj, kn, an, d: sp.d ?? 0 };
    }
    for (const k of ["1", "2"]) {
      const A = p["w" + k], F = p["a" + k];
      if (!A && !F) continue;
      const sgn = k === "1" ? 1 : -1;
      const sj = front ? add(sh, mul(l, sgn * 17)) : sh;
      let el, wr;
      if (A) { const r = ik(sj, A.p, UA, FA, A.h || [-1, 0], tag + " arm" + k); el = r.j; wr = r.e; }
      else { el = add(sj, mul(dv(F[0]), UA)); wr = add(el, mul(dv(F[1]), FA * (p["fl" + k] ?? 1))); }
      const hd = p["hd" + k] ?? (Math.atan2(wr[1] - el[1], wr[0] - el[0]) / D);
      S.arms[k] = { sj, el, wr, hd };
    }
    for (const pl of p.plates || []) {
      let c;
      if (pl.at === "w1" || pl.at === "w2") c = add(S.arms[pl.at[1]].wr, pl.off || [0, 0]);
      else if (pl.at === "hip") c = add(hip, pl.off || [0, 0]);
      else c = pl.p;
      S.plates.push({ c, r: pl.r || 11, n: pl.n || 1 });
    }
    const pt = q => S.pts.push([q[0] - 14, q[1] - 14], [q[0] + 14, q[1] + 14]);
    [hip, sh, S.hc].forEach(pt);
    Object.values(S.legs).forEach(g => { pt(g.kn); pt(g.an); pt(add(g.an, mul(dv(g.d), 20))); });
    Object.values(S.arms).forEach(g => { pt(g.el); pt(g.wr); });
    S.plates.forEach(g => S.pts.push([g.c[0] - g.r - 3, g.c[1] - g.r - 3], [g.c[0] + g.r + 3, g.c[1] + g.r + 3]));
    (p.bench || []).forEach(b => S.pts.push([b.x1, 0], [b.x2, b.top + 8]));
    if (p.wall) S.pts.push([p.wall.x - 4, 0], [p.wall.x + 8, 200]);
    if (p.bar) S.pts.push([p.bar.x1, 0], [p.bar.x2, p.bar.y + 8]);
    return S;
  }

  // ---------- shapes ----------
  function seg(a, b, prof, t0 = 0, t1 = 1, cap = true) {
    const d = sub(b, a), L = len(d) || 1, u = [d[0] / L, d[1] / L], n = rot(u);
    const left = [], right = [];
    for (let i = 0; i <= 8; i++) {
      const t = t0 + (t1 - t0) * i / 8, w = interp(prof, t) / 2, c = add(a, mul(u, L * t));
      left.push(add(c, mul(n, w))); right.push(add(c, mul(n, -w)));
    }
    const s = [{ t: "p", pts: left.concat(right.reverse()) }];
    if (cap) {
      s.push({ t: "c", c: add(a, mul(u, L * t0)), r: interp(prof, t0) / 2 });
      s.push({ t: "c", c: add(a, mul(u, L * t1)), r: interp(prof, t1) / 2 });
    }
    return s;
  }
  function torso(S, t0 = 0, t1 = 1, pad = 0) {
    const pts = [], N = 10;
    for (let i = 0; i <= N; i++) {
      const t = t0 + (t1 - t0) * i / N, c = add(S.hip, mul(S.u, TL * t));
      pts.push(add(c, mul(S.l, S.front ? interp(TW, t) + pad : interp(TF, t) + pad)));
    }
    for (let i = N; i >= 0; i--) {
      const t = t0 + (t1 - t0) * i / N, c = add(S.hip, mul(S.u, TL * t));
      pts.push(add(c, mul(S.l, -(S.front ? interp(TW, t) + pad : interp(TB, t) + pad))));
    }
    return [{ t: "p", pts }];
  }
  function band(S, side, t0, t1, thick) {   // side +1 front/right, -1 back/left of the torso
    const pts = [], N = 8;
    const edge = t => (side > 0 ? interp(S.front ? TW : TF, t) : interp(S.front ? TW : TB, t));
    for (let i = 0; i <= N; i++) { const t = t0 + (t1 - t0) * i / N; pts.push(add(add(S.hip, mul(S.u, TL * t)), mul(S.l, side * (edge(t) + 0.4)))); }
    for (let i = N; i >= 0; i--) { const t = t0 + (t1 - t0) * i / N; pts.push(add(add(S.hip, mul(S.u, TL * t)), mul(S.l, side * (edge(t) - thick)))); }
    return [{ t: "p", pts }];
  }
  function shoe(an, d, front, flip) {
    const loc = front ? [[-8, -9], [8, -9], [9.5, -4], [6, 3], [-6, 3], [-9.5, -4]]
      : [[-6, -9], [17, -9], [21, -6.5], [20, -2], [11, 0.5], [6, 5.5], [-3, 5.5], [-6.5, 0]];
    const dd = front ? [1, 0] : dv(d), nn = flip ? mul(rot(dd), -1) : rot(dd);
    return [{ t: "p", pts: loc.map(q => add(an, add(mul(dd, q[0]), mul(nn, q[1])))) }];
  }
  function hand(wr, hd) {
    const dd = dv(hd), n = rot(dd);
    const tip = add(wr, mul(dd, 11));
    return [{ t: "c", c: wr, r: 4.2 }, { t: "p", pts: [add(wr, mul(n, 3.4)), add(tip, mul(n, 2.4)), add(tip, mul(n, -2.4)), add(wr, mul(n, -3.4))] }, { t: "c", c: tip, r: 2.5 }];
  }

  // ---------- rendering ----------
  function render(S, T, ex) {
    const f = n => n.toFixed(1);
    const path = pts => "M" + pts.map(q => { const c = T(q); return f(c[0]) + " " + f(c[1]); }).join("L") + "Z";
    const one = (s, fill, extra) => s.t === "p"
      ? `<path d="${path(s.pts)}" fill="${fill}" ${extra}/>`
      : `<circle cx="${f(T(s.c)[0])}" cy="${f(T(s.c)[1])}" r="${f(s.r)}" fill="${fill}" ${extra}/>`;
    const paint = (shapes, fill, ol = true) => (ol ? shapes.map(s => one(s, "var(--ol)", 'stroke="var(--ol)" stroke-width="1.8" stroke-linejoin="round"')).join("") : "") + shapes.map(s => one(s, fill, "")).join("");
    const p = S.p, front = S.front;
    let o = "";
    // environment
    if (!p.top && !ex.top) {
      const gx = ex._gx;
      o += `<line x1="${f(T([gx[0], 0])[0])}" y1="${f(T([0, 0])[1])}" x2="${f(T([gx[1], 0])[0])}" y2="${f(T([0, 0])[1])}" stroke="var(--line)" stroke-width="2.5" stroke-linecap="round"/>`;
    }
    if (p.wall) {
      const a = T([p.wall.x, 0]), b = T([p.wall.x, 205]);
      o += `<rect x="${f(Math.min(a[0], a[0] + 6 * (p.wall.side || 1)))}" y="${f(b[1])}" width="6" height="${f(a[1] - b[1])}" fill="var(--wall)"/>`;
    }
    (p.bench || []).forEach(b => {
      const tl = T([b.x1, b.top]), br = T([b.x2, b.top - 7]);
      const leg = (x) => { const a = T([x, b.top - 7]), c = T([x + 3.5, 0]); return `<rect x="${f(a[0])}" y="${f(a[1])}" width="${f(c[0] - a[0])}" height="${f(c[1] - a[1])}" fill="var(--bench-d)" stroke="var(--ol)" stroke-width=".8"/>`; };
      o += leg(b.x1 + 3) + leg(b.x2 - 6.5);
      o += `<rect x="${f(tl[0])}" y="${f(tl[1])}" width="${f(br[0] - tl[0])}" height="${f(br[1] - tl[1])}" rx="2" fill="var(--bench)" stroke="var(--ol)" stroke-width=".9"/>`;
    });
    if (p.bar) {
      const a = T([p.bar.x1, p.bar.y]), b = T([p.bar.x2, p.bar.y]), g0 = T([0, 0]);
      o += `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="var(--wall)" stroke-width="5" stroke-linecap="round"/>`;
      o += `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(a[0])}" y2="${f(g0[1])}" stroke="var(--wall)" stroke-width="3"/>`;
      o += `<line x1="${f(b[0])}" y1="${f(b[1])}" x2="${f(b[0])}" y2="${f(g0[1])}" stroke="var(--wall)" stroke-width="3"/>`;
    }
    const leg = (k, far) => {
      const g = S.legs[k]; if (!g) return "";
      const C = far ? ["var(--skin-far)", "var(--short-far)", "var(--shoe-far)"] : ["var(--skin)", "var(--short)", "var(--shoe)"];
      const skin = seg(g.hj, g.kn, P_THIGH, 0, 1).concat(seg(g.kn, g.an, P_SHIN, 0, 1));
      let s = paint(skin, C[0]);
      s += paint(seg(g.hj, g.kn, P_THIGH.map(q => [q[0], q[1] + 2.2]), 0, .5, false), C[1], false);
      if (ex.gi) {   // pantaloni del judogi: coprono coscia e parte alta dello stinco
        s += paint(seg(g.hj, g.kn, P_THIGH.map(q => [q[0] + 2.4, q[1] + 2.4]), 0, 1, true).concat(seg(g.kn, g.an, P_SHIN.map(q => [q[0] + 2.2, q[1] + 2.2]), 0, .62, true)), C[1], true);
      }
      s += paint(shoe(g.an, g.d, front, S.flip), C[2]);
      return s;
    };
    const arm = (k, far) => {
      const g = S.arms[k]; if (!g) return "";
      const C = far ? ["var(--skin-far)", "var(--top-far)"] : ["var(--skin)", "var(--top)"];
      let s = paint(seg(g.sj, g.el, P_UARM, 0, 1).concat(seg(g.el, g.wr, P_FARM, 0, 1)).concat(hand(g.wr, g.hd)), C[0]);
      if (ex.gi) {   // maniche della giacca: braccio e gran parte dell'avambraccio
        s += paint(seg(g.sj, g.el, P_UARM.map(q => [q[0] + 3, q[1] + 3]), 0, 1, true).concat(seg(g.el, g.wr, P_FARM.map(q => [q[0] + 2.6, q[1] + 2.6]), 0, .78, true)), C[1], true);
      } else s += paint(seg(g.sj, g.el, P_UARM.map(q => [q[0], q[1] + 2]), 0, .45), C[1], false);
      return s;
    };
    const head = () => {
      const dd = dv(S.hdir), fwd = S.flip ? [-dd[1], dd[0]] : [dd[1], -dd[0]];
      let s = paint(seg(add(S.sh, mul(S.u, 3)), add(S.nk, mul(dd, 3)), [[0, 10], [1, 8.5]]), "var(--skin)");
      const hc = S.hc;
      const hair = [];
      let a1 = front ? S.hdir - 85 : S.hdir - 35, a2 = front ? S.hdir + 85 : S.hdir + 150;
      if (S.flip && !front) { a1 = S.hdir - 150; a2 = S.hdir + 35; }
      for (let a = a1; a <= a2; a += 10) hair.push(add(hc, mul(dv(a), HR + 0.9)));
      s += paint([{ t: "c", c: hc, r: HR }], "var(--skin)");
      if (!front) s += paint([{ t: "c", c: add(hc, add(mul(fwd, HR - 0.5), mul(dd, -1.5))), r: 2.2 }], "var(--skin)", false);
      s += paint([{ t: "p", pts: hair }], "var(--hair)", false);
      if (front) {
        const lat = rot(dd);
        [-1, 1].forEach(sg => s += paint([{ t: "c", c: add(add(hc, mul(lat, 3.8 * sg)), mul(dd, -2)), r: 1 }], "var(--ol)", false));
      } else s += paint([{ t: "c", c: add(add(hc, mul(fwd, 5.2)), mul(dd, 1.5)), r: 1 }], "var(--ol)", false);
      return s;
    };
    const trunk = () => {
      let s = paint(torso(S, 0, 1), "var(--top)");
      s += paint(torso(S, 0, .2, .4), "var(--short)", false);
      const pel = front ? [] : [{ t: "c", c: add(S.hip, mul(S.l, -1)), r: 13.2 }];
      s += paint(pel, "var(--short)", false);
      return s;
    };
    const hot = () => {
      if (!p.hot) return "";
      let sh = [];
      for (const key of p.hot) {
        if (key === "t1" || key === "t2") { const g = S.legs[key[1]]; if (g) sh = sh.concat(seg(g.hj, g.kn, P_THIGH, 0, 1)); }
        else if (key === "s1" || key === "s2") { const g = S.legs[key[1]]; if (g) sh = sh.concat(seg(g.kn, g.an, P_SHIN, 0, 1)); }
        else if (key === "u1" || key === "u2") { const g = S.arms[key[1]]; if (g) sh = sh.concat(seg(g.sj, g.el, P_UARM, 0.1, 1)); }
        else if (key === "a1" || key === "a2") { const g = S.arms[key[1]]; if (g) sh = sh.concat(seg(g.el, g.wr, P_FARM, 0, 1)); }
        else if (key === "glute") sh.push({ t: "c", c: add(S.hip, mul(S.l, front ? 0 : -7)), r: front ? 11 : 9.5 });
        else if (key === "core") sh = sh.concat(torso(S, .16, .62, -1));
        else if (key === "backU") sh = sh.concat(band(S, -1, .3, .95, 8));
        else if (key === "chest") sh = sh.concat(band(S, 1, .55, .92, 7));
      }
      return `<g opacity=".62">${sh.map(s => one(s, "var(--hot)", "")).join("")}</g>`;
    };
    const plates = () => S.plates.map(g => {
      let s = "";
      for (let i = g.n - 1; i >= 0; i--) {
        const c = T([g.c[0] + i * 1.8, g.c[1] + i * 1.8]);
        s += `<circle cx="${f(c[0])}" cy="${f(c[1])}" r="${g.r}" fill="var(--plate)" stroke="var(--plate-d)" stroke-width="1.3"/>`;
        s += `<circle cx="${f(c[0])}" cy="${f(c[1])}" r="${f(g.r * .66)}" fill="none" stroke="var(--plate-d)" stroke-width=".8" opacity=".55"/>`;
        s += `<circle cx="${f(c[0])}" cy="${f(c[1])}" r="${f(g.r * .2)}" fill="var(--surface)" stroke="var(--plate-d)" stroke-width=".8"/>`;
      }
      return s;
    }).join("");
    if (front) o += leg("2", true) + leg("1", false) + trunk() + arm("2", true) + head() + arm("1", false);
    else o += arm("2", true) + leg("2", true) + trunk() + head() + leg("1", false) + arm("1", false);
    o += hot() + plates();
    (p.spin || []).forEach(sp => {
      const c = T(sp.at === "sh" ? S.sh : S.arms[sp.at[1]].wr), r = sp.r;
      const a0 = -150 * D, a1 = 120 * D;
      const x0 = c[0] + r * Math.cos(a0), y0 = c[1] + r * Math.sin(a0), x1 = c[0] + r * Math.cos(a1), y1 = c[1] + r * Math.sin(a1);
      o += `<path d="M${f(x0)} ${f(y0)} A${r} ${r} 0 1 1 ${f(x1)} ${f(y1)}" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="3 3"/>`;
      const tx = -Math.sin(a1), ty = Math.cos(a1);
      o += `<path d="M${f(x1 - 5 * tx + 3.5 * ty)} ${f(y1 - 5 * ty - 3.5 * tx)} L${f(x1)} ${f(y1)} L${f(x1 - 5 * tx - 3.5 * ty)} ${f(y1 - 5 * ty + 3.5 * tx)}" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
    });
    return o;
  }

  function mirror(p) {
    const q = JSON.parse(JSON.stringify(p));
    const mp = a => a && [-a[0], a[1]];
    if (q.hip) q.hip = mp(q.hip); if (q.sh) q.sh = mp(q.sh);
    q.ta = 180 - (q.ta ?? 90);
    if (q.hh !== undefined) q.hh = 180 - q.hh; if (q.hd) q.hd = -q.hd;
    ["f", "w"].forEach(c => ["1", "2"].forEach(k => {
      const s = q[c + k]; if (!s) return;
      if (s.p) s.p = mp(s.p); if (s.h) s.h = mp(s.h); if (s.fk) s.fk = [180 - s.fk[0], 180 - s.fk[1]]; if (s.d !== undefined) s.d = 180 - s.d;
    }));
    ["a"].forEach(c => ["1", "2"].forEach(k => { if (q[c + k]) q[c + k] = [180 - q[c + k][0], 180 - q[c + k][1]]; }));
    const sw = (a, b) => { const t = q[a]; q[a] = q[b]; q[b] = t; };
    ["f", "w", "a", "hd", "fl"].forEach(c => { sw(c + "1", c + "2"); });
    Object.keys(q).forEach(k => q[k] === undefined && delete q[k]);
    return q;
  }

  function figure(ex) {
    const frames = ex.f.map((p, i) => solve(Object.assign({ view: ex.view }, p), ex.name + " #" + i));
    let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    frames.forEach(S => S.pts.forEach(q => { minx = Math.min(minx, q[0]); maxx = Math.max(maxx, q[0]); miny = Math.min(miny, q[1]); maxy = Math.max(maxy, q[1]); }));
    const top = ex.top;
    const Wf = Math.max(190, maxx - minx + 28), Hf = top ? maxy - miny + 36 : Math.max(120, maxy + 44);
    const cx = (minx + maxx) / 2, cy = (miny + maxy) / 2, n = frames.length, gap = 26;
    ex._gx = [minx - 10, maxx + 10];
    let s = "";
    frames.forEach((S, i) => {
      const ox = i * (Wf + gap);
      const T = q => top ? [ox + Wf / 2 + (q[0] - cx), Hf / 2 - 6 - (q[1] - cy)] : [ox + Wf / 2 + (q[0] - cx), Hf - 26 - q[1]];
      s += render(S, T, ex);
      const lab = (ex.labels || (n === 2 ? ["inizio", "fine"] : []))[i];
      if (lab) s += `<text x="${ox + Wf / 2}" y="${Hf - 6}" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="IBM Plex Sans, system-ui, sans-serif">${lab}</text>`;
      if (i < n - 1) {
        const x = ox + Wf + gap / 2, y = Hf / 2 - 10;
        s += `<path d="M${x - 7} ${y} L${x + 6} ${y} M${x + 1} ${y - 5} L${x + 6} ${y} L${x + 1} ${y + 5}" stroke="var(--accent)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      }
    });
    const total = n * Wf + (n - 1) * gap;
    return `<svg viewBox="0 0 ${total} ${Hf}" style="max-width:${Math.round(total * (n === 1 ? 1.7 : 1.15))}px;margin-inline:auto" role="img" aria-label="${ex.name}">${s}</svg>`;
  }

  // ---------- poses ----------
  const STD = { sh: [0, 146], ta: 90, f1: { p: [3, 9] }, f2: { p: [-4, 9] }, a1: [-95, -80], a2: [-92, -84] };
  const P = o => Object.assign({}, STD, o);
  const fr = o => Object.assign({ view: "front", sh: [0, 146], ta: 90, f1: { p: [10, 9], h: [1, 0] }, f2: { p: [-10, 9], h: [-1, 0] }, a1: [-82, -82], a2: [-98, -98] }, o);
  const hang = [{ at: "w1", off: [0, -9], r: 11 }, { at: "w2", off: [0, -9], r: 11 }];

  const cossackL = fr({ hip: [-28, 56], sh: undefined, ta: 92, f2: { p: [-62, 9], h: [-1, 0.3] }, f1: { p: [52, 9], h: [1, 0.2] },
    w1: { p: [-26, 93], h: [1, -1] }, w2: { p: [-30, 93], h: [-1, -1] }, a1: undefined, a2: undefined, hh: 92 });

  const wgs = {
    hip: [-8, 41], ta: 20, f1: { p: [38, 9], h: [1, .2] }, f2: { p: [-85, 22], h: [0, 1], d: 230 },
    w1: { p: [36, 3], h: [-1, .3] }, w2: { p: [29, 3], h: [-1, .3] }, hd1: 0, hd2: 0, hh: 20, hot: []
  };
  const quad = {
    hip: [0, 50], ta: 9, f1: { p: [-44, 9], h: [0, -1], d: 180 }, f2: { p: [-47, 9], h: [0, -1], d: 180 },
    w1: { p: [50, 4], h: [-1, .2] }, w2: { p: [47, 4], h: [-1, .2] }, hd1: 0, hd2: 0, hh: 28
  };



  // ---------- scene a due figure (tori e uke) ----------
  // Ogni passo ha due pose in coordinate del mondo (cm, y verso l'alto): tori guarda a destra, uke a sinistra (flip).
  // I bersagli delle mani possono essere stringhe come "@uke.lapel": punti sul busto dell'altra figura.
  const GI = {
    tori: "--top:#2f66c4;--top-far:#2552a0;--short:#2a56a8;--short-far:#1f4585;--shoe:#e9c9a8;--shoe-far:#c9a888",
    uke: "--top:#f4f4ef;--top-far:#d4d4cc;--short:#ebebe4;--short-far:#c9c9c0;--shoe:#e9c9a8;--shoe-far:#c9a888"
  };
  function anchors(p) {
    const u = dv(p.ta ?? 90), hip = p.sh ? sub(p.sh, mul(u, TL)) : p.hip, sh = p.sh ? p.sh : add(hip, mul(u, TL));
    const l = p.flip ? [-u[1], u[0]] : [u[1], -u[0]], at = (t, side, w) => add(add(hip, mul(u, TL * t)), mul(l, side * w));
    return { sh, hip, lapel: at(.82, 1, interp(TF, .82) * .9), chest: at(.65, 1, interp(TF, .65)), belt: at(.1, 1, interp(TF, .1)), back: at(.6, -1, interp(TB, .6)),
      neck: at(1, 0, 0), head: add(add(sh, mul(u, 2)), mul(u, 18)), side: at(.3, 0, 0) };
  }
  function resolve(p, other, who) {
    const q = JSON.parse(JSON.stringify(p));
    const A = anchors(other);
    ["w1", "w2"].forEach(k => {
      if (q[k] && typeof q[k].p === "string") {
        const m = q[k].p.match(/^@(?:\w+\.)?(\w+)$/);
        if (!m || !A[m[1]]) throw new Error("bersaglio sconosciuto " + q[k].p);
        q[k].p = A[m[1]].slice();
        if (q[k].off) q[k].p = add(q[k].p, q[k].off);
      }
    });
    return q;
  }
  function scene(step) {
    const t0 = Object.assign({ view: "side" }, step.tori), u0 = Object.assign({ view: "side", flip: true, hd: 0 }, step.uke);
    const tp = resolve(t0, u0, "tori"), up = resolve(u0, t0, "uke");
    const St = solve(tp, "tori"), Su = solve(up, "uke");
    let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    [St, Su].forEach(S => S.pts.forEach(q => { minx = Math.min(minx, q[0]); maxx = Math.max(maxx, q[0]); miny = Math.min(miny, q[1]); maxy = Math.max(maxy, q[1]); }));
    (step.arrows || []).forEach(a => [a.from, a.to].forEach(q => { minx = Math.min(minx, q[0] - 6); maxx = Math.max(maxx, q[0] + 6); miny = Math.min(miny, q[1] - 6); maxy = Math.max(maxy, q[1] + 6); }));
    const Wf = Math.max(230, maxx - minx + 30), Hf = Math.max(150, maxy + 50), cx = (minx + maxx) / 2;
    const T = q => [Wf / 2 + (q[0] - cx), Hf - 26 - q[1]];
    const ex = { gi: true, name: step.titolo, _gx: [cx - Wf / 2 + 6, cx + Wf / 2 - 6] };
    const draw = (S, who) => `<g style="${GI[who]}">${render(S, T, ex)}</g>`;
    let o = step.front === "uke" ? draw(St, "tori") + draw(Su, "uke") : draw(Su, "uke") + draw(St, "tori");
    const lab = (S, name) => { const c = T(add(S.hc, [0, 17])); return `<text x="${c[0].toFixed(1)}" y="${c[1].toFixed(1)}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--muted)" font-family="system-ui, sans-serif">${name}</text>`; };
    o += lab(St, "TORI") + lab(Su, "UKE");
    (step.arrows || []).forEach(a => {
      const p0 = T(a.from), p1 = T(a.to), d = sub(p1, p0), L = len(d) || 1, e = mul(d, 1 / L), n = rot(e);
      const h1 = sub(p1, add(mul(e, 8), mul(n, 5))), h2 = sub(p1, sub(mul(e, 8), mul(n, 5)));
      o += `<g stroke="var(--hot)" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M${p0[0].toFixed(1)} ${p0[1].toFixed(1)}L${p1[0].toFixed(1)} ${p1[1].toFixed(1)}"${a.dash ? ' stroke-dasharray="5 4"' : ""}/><path d="M${h1[0].toFixed(1)} ${h1[1].toFixed(1)}L${p1[0].toFixed(1)} ${p1[1].toFixed(1)}L${h2[0].toFixed(1)} ${h2[1].toFixed(1)}"/></g>`;
      if (a.label) o += `<text x="${(p1[0] + 4).toFixed(1)}" y="${(p1[1] - 6).toFixed(1)}" font-size="10" font-weight="700" fill="var(--hot)" font-family="system-ui, sans-serif">${a.label}</text>`;
    });
    return `<svg viewBox="0 0 ${Wf.toFixed(0)} ${Hf.toFixed(0)}" style="max-width:${Math.round(Wf * 1.9)}px;margin-inline:auto" role="img" aria-label="${(step.titolo || "").replace(/"/g, "")}">${o}</svg>`;
  }

  window.Fig = { scene, figure, P, fr, mirror, hang, quad, wgs, cossackL, STD, WARN };
})();
