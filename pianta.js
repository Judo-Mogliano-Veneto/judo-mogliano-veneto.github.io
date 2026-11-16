/* Schemi visti dall'alto per le schede tecnica: piedi, spalle, prese e direzioni.
   Coordinate in cm: x verso destra, y verso l'alto dello schermo. Tori parte in basso e guarda in su (rot 0),
   uke sta in alto e guarda in giù (rot 180). Gli angoli sono in gradi, positivi in senso antiorario.
   Persona in piedi: { c: [x, y], rot, sx: [x, y, rot], dx: [x, y, rot], alza: "dx" | "sx" }
   Persona a terra:  { terra: true, testa: [x, y], bacino: [x, y] }   (supina, braccia e gambe semplificate)
   Seduta:           { seduta: true, c: [x, y], rot, sx: [x, y], dx: [x, y] }   (bacino a terra, ginocchia verso i piedi)
   Frecce: { da, a, tipo: "squilibrio" | "piede" | "falciata" | "caduta", testo, curva } */
(function () {
  const D = Math.PI / 180;
  const f = n => n.toFixed(1);
  const rotp = (p, a) => [p[0] * Math.cos(a * D) - p[1] * Math.sin(a * D), p[0] * Math.sin(a * D) + p[1] * Math.cos(a * D)];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const COL = {
    tori: { fill: "#2f66c4", soft: "#2f66c4", ink: "#fff", line: "#1d3f7c" },
    uke: { fill: "#f4f4ef", soft: "#d8d8cf", ink: "#1d2733", line: "#4b5561" }
  };
  const ARROW = { squilibrio: "#e8742a", caduta: "#e8742a", falciata: "#c8372d", piede: "var(--muted)" };

  // SVG di un passo visto dall'alto: { tori, uke, prese, frecce } nel formato descritto sopra
  function plan(step, opts) {
    const pts = [];
    const P = (q) => { pts.push(q); return q; };
    const parts = { under: "", body: "", feet: "", over: "" }, legenda = [];
    // testi lunghi: un numero nel disegno e la spiegazione sotto
    const badge = (x, y, txt, col) => { legenda.push({ txt, col }); const n = legenda.length; P([x - 7, y - 7]); P([x + 7, y + 7]);
      return `<circle cx="${f(x)}" cy="${f(-y)}" r="6.5" fill="${col}" stroke="#fff" stroke-width="1.2"/><text x="${f(x)}" y="${f(-y + 2.9)}" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff" font-family="system-ui, sans-serif">${n}</text>`; };
    // ingombro approssimato di un testo, per non tagliarlo ai bordi
    const T = (x, y, txt, size, end) => { const w = String(txt).length * size * .56; P([end ? x - w : x, y - 3]); P([end ? x : x + w, y + size]); };

    const foot = (who, q, side, lifted, ghost) => {
      const c = COL[who], [x, y, r = who === "tori" ? 0 : 180] = q;
      P([x - 16, y - 16]); P([x + 16, y + 16]);
      const op = ghost ? ' opacity=".28"' : "";
      const dash = lifted ? ' stroke-dasharray="3 2.5"' : "";
      return `<g transform="translate(${f(x)} ${f(-y)}) rotate(${f(-r)})"${op}><path d="M0 -14 C6 -14 7 -6 6.5 0 C6 7 4.5 12 0 12 C-4.5 12 -6 7 -6.5 0 C-7 -6 -6 -14 0 -14Z" fill="${lifted ? "none" : c.fill}" stroke="${c.line}" stroke-width="1.4"${dash}/>` +
        `<text x="0" y="3.4" text-anchor="middle" font-size="8.5" font-weight="800" fill="${lifted ? c.line : c.ink}" font-family="system-ui, sans-serif" transform="rotate(${f(r)})">${side === "dx" ? "D" : "S"}</text></g>`;
    };
    // spalle e testa viste dall'alto
    const body = (who, p) => {
      const c = COL[who], [x, y] = p.busto || p.c, r = p.rot ?? (who === "tori" ? 0 : 180);
      P([x - 30, y - 30]); P([x + 30, y + 30]);
      const nose = rotp([0, 12], r);
      return `<g transform="translate(${f(x)} ${f(-y)}) rotate(${f(-r)})"><ellipse cx="0" cy="0" rx="25" ry="11" fill="${c.fill}" fill-opacity=".45" stroke="${c.line}" stroke-width="1.6"/>` +
        `<circle cx="0" cy="-2" r="7.5" opacity=".9" fill="#dcbd9f" stroke="${c.line}" stroke-width="1.4"/><path d="M-3 -10 L0 -13.5 L3 -10Z" fill="${c.line}"/></g>`;
    };
    const lying = (who, p) => {
      const c = COL[who], [hx, hy] = p.testa, [bx, by] = p.bacino;
      const a = Math.atan2(hy - by, hx - bx) / D - 90, L = Math.hypot(hx - bx, hy - by);
      P([hx - 30, hy - 30]); P([bx - 40, by - 60]); P([bx + 40, by + 30]); P([hx + 30, hy + 30]);
      // in coordinate locali: bacino in 0,0, testa verso +y
      const g = `<g transform="translate(${f(bx)} ${f(-by)}) rotate(${f(-a)})">` +
        `<path d="M-9 4 L-16 -70 M9 4 L16 -70" stroke="${c.line}" stroke-width="12" stroke-linecap="round"/>` +
        `<path d="M-9 4 L-16 -70 M9 4 L16 -70" stroke="${c.fill}" stroke-width="9.4" stroke-linecap="round"/>` +
        `<path d="M-24 ${f(-(L - 16))} L-34 ${f(-(L - 50))} M24 ${f(-(L - 16))} L34 ${f(-(L - 50))}" stroke="${c.line}" stroke-width="9" stroke-linecap="round"/>` +
        `<path d="M-24 ${f(-(L - 16))} L-34 ${f(-(L - 50))} M24 ${f(-(L - 16))} L34 ${f(-(L - 50))}" stroke="${c.fill}" stroke-width="6.6" stroke-linecap="round"/>` +
        `<rect x="-24" y="${f(-(L - 12))}" width="48" height="${f(L - 6)}" rx="14" fill="${c.fill}" stroke="${c.line}" stroke-width="1.6"/>` +
        `<circle cx="0" cy="${f(-L)}" r="10" fill="#dcbd9f" stroke="${c.line}" stroke-width="1.4"/></g>`;
      return g;
    };
    const seated = (who, p) => {
      const c = COL[who], [x, y] = p.c;
      let s = "";
      ["sx", "dx"].forEach(k => {
        const q = p[k]; if (!q) return;
        P(q);
        s += `<path d="M${f(x)} ${f(-y)} L${f(q[0])} ${f(-q[1])}" stroke="${c.line}" stroke-width="13" stroke-linecap="round"/><path d="M${f(x)} ${f(-y)} L${f(q[0])} ${f(-q[1])}" stroke="${c.fill}" stroke-width="10.4" stroke-linecap="round"/>`;
      });
      return s;
    };
    const person = (who, p) => {
      if (!p) return;
      if (p.terra) { parts.under += lying(who, p); return; }
      if (p.seduta) parts.under += seated(who, p);
      ["sx", "dx"].forEach(k => {
        if (p.prima && p.prima[k]) parts.under += foot(who, p.prima[k], k, false, true);
        if (p[k] && !p.seduta) parts.feet += foot(who, p[k], k, p.alza === k || p.alza === "entrambi", false);
      });
      if (p.c) parts.body += body(who, p);
    };
    person("uke", step.uke);
    person("tori", step.tori);

    // prese: linea dalla spalla di tori al punto afferrato
    (step.prese || []).forEach(g => {
      P(g.a);
      parts.over += `<path d="M${f(g.da[0])} ${f(-g.da[1])} L${f(g.a[0])} ${f(-g.a[1])}" stroke="#1d3f7c" stroke-width="3" stroke-linecap="round" opacity=".75"/><circle cx="${f(g.a[0])}" cy="${f(-g.a[1])}" r="4.2" fill="#ffd166" stroke="#1d3f7c" stroke-width="1.4"/>`;
      if (g.testo && g.testo.length > 12) { parts.over += badge(g.a[0] + (g.fine ? -11 : 11), g.a[1] + 7, g.testo, "#1d3f7c"); return; }
      if (g.testo) T(g.a[0] + (g.dx ?? 6), g.a[1] - (g.dy ?? -6), g.testo, 8, g.fine);
      if (g.testo) parts.over += `<text x="${f(g.a[0] + (g.dx ?? 6))}" y="${f(-g.a[1] + (g.dy ?? -6))}" font-size="8" font-weight="700" fill="var(--ink)" font-family="system-ui, sans-serif"${g.fine ? ' text-anchor="end"' : ""}>${g.testo}</text>`;
    });
    (step.frecce || []).forEach(a => {
      P(a.da); P(a.a);
      const col = ARROW[a.tipo] || "var(--accent)", w = a.tipo === "piede" ? 1.8 : 3.2;
      const p0 = [a.da[0], -a.da[1]], p1 = [a.a[0], -a.a[1]];
      const mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2, dx = p1[0] - p0[0], dy = p1[1] - p0[1];
      const k = a.curva || 0, cx = mx - dy * k, cy = my + dx * k;
      const tx = p1[0] - cx, ty = p1[1] - cy, tl = Math.hypot(tx, ty) || 1, ux = tx / tl, uy = ty / tl, h = a.tipo === "piede" ? 5 : 8;
      const dash = a.tipo === "piede" || a.tipo === "falciata" ? ' stroke-dasharray="5 3.5"' : "";
      parts.over += `<g stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M${f(p0[0])} ${f(p0[1])} Q${f(cx)} ${f(cy)} ${f(p1[0])} ${f(p1[1])}"${dash}/><path d="M${f(p1[0] - ux * h - uy * h * .6)} ${f(p1[1] - uy * h + ux * h * .6)} L${f(p1[0])} ${f(p1[1])} L${f(p1[0] - ux * h + uy * h * .6)} ${f(p1[1] - uy * h - ux * h * .6)}"/></g>`;
      if (a.testo) {
        const lx = a.tx !== undefined ? a.tx : p1[0] + 5, ly = a.ty !== undefined ? -a.ty : p1[1] - 5;
        if (a.testo.length > 12) { parts.over += badge(p1[0] + (a.fine ? -10 : 10), -p1[1] + 4, a.testo, col === "var(--muted)" ? "#4b5561" : col); }
        else { T(lx, -ly, a.testo, 8.5, a.fine);
        parts.over += `<text x="${f(lx)}" y="${f(ly)}" font-size="8.5" font-weight="800" fill="${col === "var(--muted)" ? "var(--ink)" : col}" font-family="system-ui, sans-serif"${a.fine ? ' text-anchor="end"' : ""}>${a.testo}</text>`; }
      }
    });
    // etichette TORI / UKE
    const tag = (who, p, txt) => {
      if (!p || !p.etichetta) return;
      P(p.etichetta);
      parts.over += `<text x="${f(p.etichetta[0])}" y="${f(-p.etichetta[1])}" text-anchor="middle" font-size="9" font-weight="800" letter-spacing=".08em" fill="${who === "tori" ? "#2f66c4" : "var(--muted)"}" font-family="system-ui, sans-serif">${txt}</text>`;
    };
    tag("tori", step.tori, "TORI"); tag("uke", step.uke, "UKE");

    let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    if (opts && opts.cornice) pts.push(...opts.cornice);
    pts.forEach(q => { minx = Math.min(minx, q[0]); maxx = Math.max(maxx, q[0]); miny = Math.min(miny, q[1]); maxy = Math.max(maxy, q[1]); });
    const pad = 10, W = maxx - minx + pad * 2, H = maxy - miny + pad * 2;
    const vb = `${f(minx - pad)} ${f(-maxy - pad)} ${f(W)} ${f(H)}`;
    return `<svg viewBox="${vb}" style="max-width:${Math.round(W * 2.4)}px;margin-inline:auto;display:block" role="img" aria-label="${(step.titolo || "schema dall'alto").replace(/"/g, "")}"><rect x="${f(minx - pad)}" y="${f(-maxy - pad)}" width="${f(W)}" height="${f(H)}" fill="var(--bg)" rx="6"/>${parts.under}${parts.body}${parts.feet}${parts.over}</svg>` +
      (legenda.length ? `<ol class="plan-leg">${legenda.map(l => `<li style="--c:${l.col}">${l.txt}</li>`).join("")}</ol>` : "");
  }
  // cornice comune a più passi, così il disegno non cambia scala da un passo all'altro
  function cornice(steps) {
    let a = [1e9, 1e9], b = [-1e9, -1e9];
    steps.forEach(st => { const m = plan(st).match(/viewBox="([-\d. ]+)"/)[1].split(" ").map(Number);
      a = [Math.min(a[0], m[0]), Math.min(a[1], -(m[1] + m[3]))]; b = [Math.max(b[0], m[0] + m[2]), Math.max(b[1], -m[1])]; });
    return [[a[0] + 10, a[1] + 10], [b[0] - 10, b[1] - 10]];
  }
  window.Plan = { plan, cornice };
})();
