/* Quiz sui termini giapponesi e sulle tecniche. Le domande vengono dal glossario (glossario.js) e dal catalogo (tecniche.js):
   aggiungendo voci là, il quiz le usa da solo. Il punteggio migliore resta solo su questo telefono. */
(function () {
  const { esc, store } = window.R;
  const ROUND = 10;
  const clean = s => String(s).replace(/\*\*/g, "");
  // risposta breve: la prima frase del significato
  const breve = d => { const s = clean(d); const m = s.match(/^(.{12,120}?[.;])(\s|$)/); return (m ? m[1] : s.slice(0, 110)).replace(/[.;]$/, ""); };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const TECH = /^(Proiezioni|Immobilizzazioni|Strangolamenti|Leve)/;

  const MODI = [
    { id: "termini", nome: "Parole del dojo", txt: "Saluti, cadute, numeri, principi: cosa significano?", ico: "🥋" },
    { id: "tecniche", nome: "Nomi delle tecniche", txt: "Cosa vuol dire il nome giapponese di ogni tecnica?", ico: "🌀" },
    { id: "gruppi", nome: "Gruppo e kyo", txt: "A che gruppo e a che kyo appartiene la tecnica?", ico: "🎯" },
    { id: "misto", nome: "Tutto mescolato", txt: "Un po' di tutto: la sfida completa.", ico: "⭐" }
  ];

  function domandeSignificato(filtro) {
    const pool = (window.GLOSSARIO || []).filter(g => g.d && filtro(g));
    return pool.map(g => {
      const giusta = breve(g.d);
      const stessa = pool.filter(x => x !== g && x.cat === g.cat && breve(x.d) !== giusta);
      const altre = pool.filter(x => x !== g && x.cat !== g.cat && breve(x.d) !== giusta);
      const dist = [...pick(stessa, 3), ...pick(altre, 3)].filter((x, i, a) => a.findIndex(y => breve(y.d) === breve(x.d)) === i).slice(0, 3);
      if (dist.length < 3) return null;
      return { q: `Cosa significa «${g.t}»?`, hint: g.jp || "", giusta, opz: shuffle([giusta, ...dist.map(x => breve(x.d))]), spiega: clean(g.d) + (g.n ? " " + clean(g.n) : "") };
    }).filter(Boolean);
  }

  function domandeGruppi() {
    const T = (window.TECNICHE || []).filter(t => !t.vietata && t.gruppo && t.kyo);
    const gruppi = [...new Set(T.map(t => t.gruppo))], kyo = [...new Set(T.map(t => t.kyo))].sort();
    const out = [];
    T.forEach(t => {
      if (gruppi.length >= 4) out.push({ q: `A quale gruppo appartiene «${t.nome}»?`, giusta: t.gruppo, opz: shuffle([t.gruppo, ...pick(gruppi.filter(g => g !== t.gruppo), 3)]), spiega: `${t.nome}: ${t.gruppo}, ${t.kyo}.` });
      if (kyo.length >= 4) out.push({ q: `In quale kyo (gruppo del Gokyo) c'è «${t.nome}»?`, giusta: t.kyo, opz: shuffle([t.kyo, ...pick(kyo.filter(k => k !== t.kyo), 3)]), spiega: `${t.nome}: ${t.kyo}, ${t.gruppo}.` });
    });
    return out;
  }

  const costruisci = id => {
    const termini = () => domandeSignificato(g => !TECH.test(g.cat) && !["Ju Jitsu", "Classificazione", "Arbitraggio"].includes(g.cat));
    const tecniche = () => domandeSignificato(g => TECH.test(g.cat) && !/vietate/.test(g.cat));
    if (id === "termini") return termini();
    if (id === "tecniche") return tecniche();
    if (id === "gruppi") return domandeGruppi();
    return [...pick(termini(), 8), ...pick(tecniche(), 8), ...pick(domandeGruppi(), 8)];
  };

  const best = id => parseInt(store.get("quiz-" + id), 10) || 0;

  function start(el) {
    const menu = () => {
      el.innerHTML = `<div class="quiz"><p class="lead">10 domande a risposta multipla. Tocca la risposta che pensi giusta: ti dico subito se hai indovinato e perché. Il punteggio resta solo sul tuo telefono.</p>
        <div class="menu">${MODI.map(m => `<button type="button" class="tile quiz-mode" data-m="${m.id}"><b>${m.ico} ${esc(m.nome)}</b><span>${esc(m.txt)}</span><span class="best">Miglior punteggio: ${best(m.id)}/${ROUND}</span></button>`).join("")}</div></div>`;
      el.querySelectorAll("[data-m]").forEach(b => b.addEventListener("click", () => gioca(b.dataset.m)));
    };

    const gioca = id => {
      const dom = pick(costruisci(id), ROUND);
      let i = 0, punti = 0;
      const mostra = () => {
        if (i >= dom.length) return fine();
        const d = dom[i];
        el.innerHTML = `<div class="quiz"><div class="quiz-top"><button type="button" class="link" data-menu>‹ Esci</button><span>Domanda ${i + 1} di ${dom.length} · Punti ${punti}</span></div>
          <div class="quiz-bar"><i style="width:${i / dom.length * 100}%"></i></div>
          <h2 class="quiz-q">${esc(d.q)}</h2>${d.hint ? `<p class="small jp" lang="ja">${esc(d.hint)}</p>` : ""}
          <div class="quiz-opz">${d.opz.map((o, k) => `<button type="button" class="quiz-o" data-k="${k}">${esc(o)}</button>`).join("")}</div>
          <div class="quiz-fb" aria-live="polite"></div></div>`;
        el.querySelector("[data-menu]").addEventListener("click", menu);
        el.querySelectorAll(".quiz-o").forEach(b => b.addEventListener("click", () => {
          const ok = d.opz[+b.dataset.k] === d.giusta;
          if (ok) punti++;
          el.querySelectorAll(".quiz-o").forEach(x => { x.disabled = true; const g = d.opz[+x.dataset.k] === d.giusta; x.classList.toggle("ok", g); if (x === b && !g) x.classList.add("no"); });
          const fb = el.querySelector(".quiz-fb");
          fb.innerHTML = `<p class="${ok ? "ok" : "no"}"><b>${ok ? "Esatto! 🎉" : "Quasi! La risposta giusta è quella con il ✓ in blu."}</b></p><p class="small">${esc(d.spiega)}</p><button type="button" class="btn" data-next>${i + 1 >= dom.length ? "Vedi il risultato" : "Avanti"}</button>`;
          const n = fb.querySelector("[data-next]"); n.addEventListener("click", () => { i++; mostra(); }); n.focus({preventScroll:true}); n.scrollIntoView({block:"center",behavior:"smooth"});
        }));
      };
      const fine = () => {
        const nuovo = punti > best(id); if (nuovo) store.set("quiz-" + id, String(punti));
        const frase = punti === dom.length ? "Perfetto! Sei una cintura nera del quiz." : punti >= dom.length * 0.7 ? "Bravissimo, ci sei quasi!" : punti >= dom.length * 0.4 ? "Buon inizio: rifallo e migliorerai." : "Si impara giocando: riprova, le parole diventano subito familiari.";
        el.innerHTML = `<div class="quiz quiz-end"><div class="quiz-score">${punti}<small>/${dom.length}</small></div><h2>${esc(frase)}</h2>${nuovo ? `<p class="ok"><b>Nuovo record! 🏆</b></p>` : `<p class="small">Il tuo record: ${best(id)}/${ROUND}</p>`}
          <div class="row"><button type="button" class="btn" data-again>Rigioca</button><button type="button" class="btn ghost" data-menu>Cambia gioco</button></div></div>`;
        el.querySelector("[data-again]").addEventListener("click", () => gioca(id));
        el.querySelector("[data-menu]").addEventListener("click", menu);
      };
      mostra();
    };
    menu();
  }
  window.Quiz = { start };
})();
