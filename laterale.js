/* Vista laterale (di tre quarti) per i passi delle tecniche.
   Le pose sono in cm nel mondo: x verso uke, y in alto, z verso chi guarda. Tori parte a sinistra e guarda verso +x
   (il suo lato destro è +z), uke guarda verso -x. body() calcola gomiti e ginocchia, render() disegna dal più lontano al più vicino:
   gli arti lontani sono più scuri. */
(function () {
const D = Math.PI / 180;
const v = (x, y, z) => [x, y, z];
const add = (a, b) => a.map((x, i) => x + b[i]), sub = (a, b) => a.map((x, i) => x - b[i]), mul = (a, k) => a.map(x => x * k);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], len = a => Math.hypot(...a), nrm = a => mul(a, 1 / (len(a) || 1));
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const rot = (a, axis, ang) => { const k = nrm(axis), c = Math.cos(ang * D), s = Math.sin(ang * D); return add(add(mul(a, c), mul(cross(k, a), s)), mul(k, dot(k, a) * (1 - c))); };
const S = { thigh: 44, shin: 44, uarm: 29, farm: 28, torso: 50, hip: 10, sh: 19, head: 11 };
// cinematica inversa in 3D: da anca/spalla A e piede/mano F trova ginocchio/gomito; hint = direzione in cui piegare
function ik(A, F, a, b, hint) {
  let d = sub(F, A), L = len(d); const u = nrm(d);
  if (L > a + b - .5) { F = add(A, mul(u, a + b - .5)); L = a + b - .5; }
  const x = (a * a - b * b + L * L) / (2 * L), h = Math.sqrt(Math.max(0, a * a - x * x));
  let w = sub(hint, mul(u, dot(hint, u))); w = nrm(w);
  return [add(add(A, mul(u, x)), mul(w, h)), F];
}
// p: {pelvis, yaw, lean (avanti +), tilt (verso destra +), twist, piedi: {dx, sx}, mani: {dx, sx}, ginocchio: {dx, sx} direzione}
function body(p) {
  const f = [Math.cos(p.yaw * D), 0, -Math.sin(p.yaw * D)], r0 = cross(f, [0, 1, 0]);
  let up = rot([0, 1, 0], r0, -(p.lean || 0)); up = rot(up, f, p.tilt || 0);
  const fw = rot(f, r0, -(p.lean || 0));
  const r = rot(r0, up, -(p.twist || 0));
  const P = p.pelvis, neck = add(P, mul(up, S.torso)), head = add(neck, add(mul(up, 13), mul(fw, 3)));
  const J = { P, neck, head, up, fw, r: r0 };
  ["dx", "sx"].forEach(k => {
    const sg = k === "dx" ? 1 : -1;
    const hip = add(P, mul(r0, sg * S.hip)), sh = add(add(neck, mul(up, -4)), mul(r, sg * S.sh));
    const kh = p.ginocchio && p.ginocchio[k] ? p.ginocchio[k] : f;
    const [knee, foot] = ik(hip, p.piedi[k], S.thigh, S.shin, kh);
    const eh = p.gomito && p.gomito[k] ? p.gomito[k] : add(mul(r, sg), [0, -1, 0]);
    const [elb, hand] = ik(sh, p.mani[k], S.uarm, S.farm, eh);
    Object.assign(J, { ["hip" + k]: hip, ["knee" + k]: knee, ["foot" + k]: foot, ["sh" + k]: sh, ["elb" + k]: elb, ["hand" + k]: hand, ["toe" + k]: add(foot, mul(nrm([p.punte && p.punte[k] ? p.punte[k][0] : f[0], 0, p.punte && p.punte[k] ? p.punte[k][2] : f[2]]), 14)) });
  });
  return J;
}
const COL = { tori: { gi: [47, 102, 196], line: "#173569" }, uke: { gi: [244, 244, 238], line: "#3d4752" } };
const SKIN = [224, 187, 152];
// disegna tori e uke visti dalla camera cam ({ yaw, pitch } in gradi), dal più lontano al più vicino
function render(scene, cam) {
  const yaw = cam.yaw, pitch = cam.pitch;
  const pr = q => { let a = rot(q, [0, 1, 0], yaw); a = rot(a, [1, 0, 0], pitch); return a; };
  const prims = [];
  let zmin = 1e9, zmax = -1e9;
  const seg = (who, a, b, w, col, tag) => { const A = pr(a), B = pr(b); prims.push({ k: "s", A, B, w, col, who, z: (A[2] + B[2]) / 2 + (tag || 0) }); };
  for (const who of ["uke", "tori"]) {
    const J = scene[who]; if (!J) continue; const gi = COL[who].gi;
    ["dx", "sx"].forEach(k => {
      seg(who, J["hip" + k], J["knee" + k], 17, gi); seg(who, J["knee" + k], J["foot" + k], 14, gi);
      seg(who, J["foot" + k], J["toe" + k], 9, SKIN, .5);
      seg(who, J["sh" + k], J["elb" + k], 12, gi); seg(who, J["elb" + k], J["hand" + k], 10, gi, -.3);
      prims.push({ k: "c", A: pr(J["hand" + k]), r: 5, col: SKIN, who, z: pr(J["hand" + k])[2] + 2 });
      prims.push({ k: "t", A: pr(J["foot" + k]), txt: k === "dx" ? "D" : "S", who, z: 1e6 });
    });
    // busto: quadrilatero spalle-anche
    const q = [J.shdx, J.shsx, J.hipsx, J.hipdx].map(pr);
    prims.push({ k: "q", q, col: gi, who, z: q.reduce((s, x) => s + x[2], 0) / 4 });
    const belt = [J.hipdx, J.hipsx].map(x => add(x, mul(J.up, 6))).map(pr);
    prims.push({ k: "s", A: belt[0], B: belt[1], w: 5, col: who === "tori" ? [30, 30, 30] : [30, 30, 30], who, z: q.reduce((s, x) => s + x[2], 0) / 4 + .5, cap: "butt" });
    prims.push({ k: "s", A: pr(J.neck), B: pr(add(J.neck, mul(J.up, 6))), w: 9, col: SKIN, who, z: pr(J.neck)[2] + .2 });
    prims.push({ k: "c", A: pr(J.head), r: S.head, col: SKIN, who, z: pr(J.head)[2] + .3, hair: true });
    prims.push({ k: "t", A: pr(add(J.head, [0, 22, 0])), txt: who.toUpperCase(), who, z: 1e6, big: true });
  }
  prims.forEach(p => { if (p.z < 1e5) { zmin = Math.min(zmin, p.z); zmax = Math.max(zmax, p.z); } });
  const shade = (c, z) => { const t = zmax > zmin ? (zmax - z) / (zmax - zmin) : 0; const k = 1 - .28 * t; return `rgb(${c.map(x => Math.round(x * k)).join(",")})`; };
  prims.sort((a, b) => a.z - b.z);
  let s = "", minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
  const B = (x, y) => { minx = Math.min(minx, x); maxx = Math.max(maxx, x); miny = Math.min(miny, y); maxy = Math.max(maxy, y); };
  for (const p of prims) {
    const ln = COL[p.who].line;
    if (p.k === "s") { const [x1, y1] = [p.A[0], -p.A[1]], [x2, y2] = [p.B[0], -p.B[1]]; B(x1, y1); B(x2, y2);
      s += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${ln}" stroke-width="${p.w + 3}" stroke-linecap="${p.cap || "round"}"/><path d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${shade(p.col, p.z)}" stroke-width="${p.w}" stroke-linecap="${p.cap || "round"}"/>`; }
    if (p.k === "c") { B(p.A[0] - p.r, -p.A[1] - p.r); B(p.A[0] + p.r, -p.A[1] + p.r);
      s += `<circle cx="${p.A[0].toFixed(1)}" cy="${(-p.A[1]).toFixed(1)}" r="${p.r}" fill="${shade(p.col, p.z)}" stroke="${ln}" stroke-width="1.5"/>`; }
    if (p.k === "q") { s += `<path d="M${p.q.map(x => x[0].toFixed(1) + " " + (-x[1]).toFixed(1)).join("L")}Z" fill="${shade(p.col, p.z)}" stroke="${ln}" stroke-width="2" stroke-linejoin="round"/>`; }
    if (p.k === "t") s += `<text x="${p.A[0].toFixed(1)}" y="${(-p.A[1] + 18).toFixed(1)}" text-anchor="middle" font-size="${p.big ? 11 : 9}" font-weight="800" fill="${p.who === "tori" ? "#2f66c4" : "#3d4752"}" font-family="system-ui, sans-serif">${p.txt}</text>`;
  }
  // frecce in coordinate mondo
  for (const a of scene.frecce || []) {
    const A = pr(a.da), Bb = pr(a.a); const x1 = A[0], y1 = -A[1], x2 = Bb[0], y2 = -Bb[1]; B(x1, y1); B(x2, y2);
    const ux = (x2 - x1), uy = (y2 - y1), L = Math.hypot(ux, uy), nx = ux / L, ny = uy / L, h = 9, col = a.col || "#e8742a";
    s += `<g stroke="${col}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"${a.dash ? ' stroke-dasharray="7 5"' : ""}><path d="M${x1} ${y1}L${x2} ${y2}"/><path d="M${x2 - nx * h - ny * h * .6} ${y2 - ny * h + nx * h * .6}L${x2} ${y2}L${x2 - nx * h + ny * h * .6} ${y2 - ny * h - nx * h * .6}"/></g>`;
  }
  // pavimento
  const fl = [[-60, 0, -60], [150, 0, -60], [150, 0, 60], [-60, 0, 60]].map(pr);
  const floor = `<path d="M${fl.map(x => x[0].toFixed(1) + " " + (-x[1]).toFixed(1)).join("L")}Z" fill="#e7ebe4" stroke="#cfd6cc"/>`;
  fl.forEach(x => B(x[0], -x[1]));
  const pad = 10;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${minx - pad} ${miny - pad} ${maxx - minx + 2 * pad} ${maxy - miny + 2 * pad}" role="img" aria-label="Vista laterale">${floor}${s}</svg>`;
}
  // passo: { tori: parametri, uke: parametri, frecce }, cam: { yaw, pitch }
  const scena = (passo, cam) => render({ tori: body(passo.tori), uke: body(passo.uke), frecce: passo.frecce }, cam);
  window.Side = { body, render, scena };
})();
