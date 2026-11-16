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
    { id: "trabocchetti", nome: "Trabocchetti", txt: "Domande secche ed infami", ico: "🪤" },
    { id: "gruppi", nome: "Gruppo e kyo", txt: "A che gruppo e a che kyo appartiene la tecnica?", ico: "🎯" },
    { id: "misto", nome: "Tutto mescolato", txt: "Un po' di tutto: la sfida completa.", ico: "⭐" }
  ];

  // livello 1 = fondamentali (anche cintura bianca), 2 = cintura gialla/arancio, 3 = tutto
  const livGloss = g => {
    if (/^Proiezioni/.test(g.cat)) return /1° kyo/.test(g.cat) ? 1 : /2° kyo/.test(g.cat) ? 2 : 3;
    if (/^Immobilizzazioni/.test(g.cat)) return 2;
    if (/^(Strangolamenti|Leve)/.test(g.cat)) return 3;
    if (["Dojo", "Cadute", "Numeri", "Spostamenti", "Posizioni e prese"].includes(g.cat)) return g.lv || 1;
    return 3;
  };
  // domande «cosa significa?» sulle voci del glossario scelte da filtro, con risposte sbagliate prese soprattutto dalla stessa categoria
  function domandeSignificato(filtro) {
    const pool = (window.GLOSSARIO || []).filter(g => g.d && filtro(g));
    return pool.map(g => {
      const giusta = breve(g.d);
      const stessa = pool.filter(x => x !== g && x.cat === g.cat && breve(x.d) !== giusta);
      const altre = pool.filter(x => x !== g && x.cat !== g.cat && breve(x.d) !== giusta);
      const dist = [...pick(stessa, 3), ...pick(altre, 3)].filter((x, i, a) => a.findIndex(y => breve(y.d) === breve(x.d)) === i).slice(0, 3);
      if (dist.length < 3) return null;
      return { q: `Cosa significa «${g.t}»?`, hint: g.jp || "", lv: livGloss(g), giusta, opz: shuffle([giusta, ...dist.map(x => breve(x.d))]), spiega: clean(g.d) + (g.n ? " " + clean(g.n) : "") };
    }).filter(Boolean);
  }

  // domande su gruppo (ashi waza, te waza...) e kyo delle tecniche di tecniche.js
  function domandeGruppi() {
    const T = (window.TECNICHE || []).filter(t => !t.vietata && t.gruppo && t.kyo);
    const gruppi = [...new Set(T.map(t => t.gruppo))], kyo = [...new Set(T.map(t => t.kyo))].sort();
    const out = [];
    T.forEach(t => {
      const lk = /1°/.test(t.kyo) ? 1 : /2°/.test(t.kyo) ? 2 : 3;
      if (gruppi.length >= 4) out.push({ lv: lk, q: `A quale gruppo appartiene «${t.nome}»?`, giusta: t.gruppo, opz: shuffle([t.gruppo, ...pick(gruppi.filter(g => g !== t.gruppo), 3)]), spiega: `${t.nome}: ${t.gruppo}, ${t.kyo}.` });
      if (kyo.length >= 4) out.push({ lv: 3, q: `In quale kyo (gruppo del Gokyo) c'è «${t.nome}»?`, giusta: t.kyo, opz: shuffle([t.kyo, ...pick(kyo.filter(k => k !== t.kyo), 3)]), spiega: `${t.nome}: ${t.kyo}, ${t.gruppo}.` });
    });
    return out;
  }


  /* Domande secche e trabocchetti scritte a mano: la prima risposta è quella giusta (poi si mescolano). Possono avere 2, 3 o 4 risposte. */
  const TRABOCCHETTI = [
    ["Tori: chi è?", ["Chi esegue la tecnica", "Chi la subisce"], "Tori esegue (attacca e proietta), uke subisce e cade."],
    ["Il tuo compagno ti proietta. In quel momento tu sei…", ["Uke", "Tori"], "Chi viene proiettato è uke, anche se magari stava attaccando."],
    ["Chi fa bene gli ukemi (le cadute) durante la proiezione?", ["Uke", "Tori"], "Le cadute le fa chi subisce: uke. Ukemi viene proprio da «uke»."],
    ["«Matte» vuol dire…", ["Fermi!", "Cominciate!"], "Matte = fermi. Hajime = cominciate."],
    ["«Hajime» vuol dire…", ["Cominciate", "Fermi"], "Hajime = via. Matte = fermi."],
    ["«Sono mama» vuol dire…", ["Non muoversi, restate fermi come siete", "L'immobilizzazione è finita"], "Sono mama: restate nella posizione. «Toketa» è l'immobilizzazione sciolta."],
    ["Dopo «Toketa» l'immobilizzazione…", ["È finita: uke è uscito", "Continua"], "Toketa = è sciolta."],
    ["Ippon in gara: cosa succede?", ["L'incontro finisce subito", "Si guadagna un punto e si continua"], "Ippon è il punto pieno: l'incontro termina."],
    ["Quanti secondi di osaekomi servono per l'ippon?", ["20", "10", "30", "5"], "Osaekomi: 20 s ippon, 10–19 s waza-ari, 5–9 s yuko."],
    ["Un osaekomi di 7 secondi vale…", ["Yuko", "Waza-ari", "Ippon"], "5–9 secondi = yuko."],
    ["Quale di questi NON è un katame waza (tecnica di controllo)?", ["Koshi waza", "Osaekomi waza", "Shime waza", "Kansetsu waza"], "Koshi waza sono proiezioni d'anca. I katame sono osaekomi, shime e kansetsu."],
    ["Quale di questi NON è un tachi waza (tecnica in piedi)?", ["Ne waza", "Te waza", "Koshi waza", "Ashi waza"], "Ne waza è il lavoro a terra. I tachi waza sono te, koshi e ashi waza."],
    ["Katame waza sono tecniche di…", ["Controllo a terra", "Proiezione"], "Katame = controllo; nage = proiezione."],
    ["Le percussioni (atemi waza) in gara…", ["Non si usano", "Sono permesse"], "Gli atemi waza fanno parte del programma ma non si usano in gara."],
    ["Tomoe nage è un…", ["Ma sutemi (cadi sulla schiena)", "Yoko sutemi (cadi di lato)"], "Tomoe nage: tori si lascia cadere all'indietro, quindi ma sutemi."],
    ["Uki goshi è una tecnica di…", ["Anca (koshi waza)", "Gamba (ashi waza)"], "Goshi = anca."],
    ["O soto gari è una tecnica di…", ["Gamba (ashi waza)", "Anca (koshi waza)"], "O soto gari è una falciata di gamba."],
    ["Hadaka jime è…", ["Uno strangolamento", "Una leva al braccio"], "Jime = strangolamento."],
    ["Ude garami è…", ["Una leva al braccio", "Uno strangolamento"], "Garami = intreccio: leva articolare."],
    ["Hon kesa gatame è…", ["Un'immobilizzazione", "Una proiezione"], "Gatame = bloccaggio: tecnica di controllo a terra."],
    ["Chi ha fondato il judo?", ["Jigoro Kano", "Morihei Ueshiba"], "Kano nel 1882. Ueshiba ha fondato l'aikido."],
    ["In che anno Kano ha fondato il Kodokan?", ["1882", "1932", "1792"], "1882."],
    ["«Ju» in judo vuol dire…", ["Cedevolezza", "Forza"], "Ju-do = «via della cedevolezza»."],
    ["Il «ju» di judo e il «ju» che vale 10…", ["Hanno lo stesso suono ma sono parole diverse", "Sono la stessa parola"], "Si pronunciano uguale ma si scrivono con caratteri diversi."],
    ["Quale è il giusto ordine?", ["Kuzushi, tsukuri, kake", "Kake, kuzushi, tsukuri", "Tsukuri, kake, kuzushi"], "Prima squilibrio (kuzushi), poi preparazione (tsukuri), infine l'esecuzione (kake)."],
    ["Kuzushi significa…", ["Squilibrio", "Proiezione finale"], "Kuzushi = squilibrare uke."],
    ["L'uchikomi è…", ["La ripetizione dell'entrata senza proiettare", "Un combattimento di gara"], "Si entra nella tecnica tante volte, senza lanciare."],
    ["Il randori è…", ["Combattimento libero di allenamento", "Una gara ufficiale"], "La gara è shiai."],
    ["Il kata è…", ["Una sequenza di tecniche con regole fisse", "Un combattimento libero"], "Kata = forma. Il libero è il randori."],
    ["«Obi» è…", ["La cintura", "La giacca"], "La giacca è uwagi, la divisa intera è judogi."],
    ["Il «Gokyo» ha…", ["5 gruppi (kyo)", "3 gruppi", "7 gruppi"], "Go = cinque: i cinque insegnamenti."],
    ["«Maitta» vuol dire…", ["Mi arrendo", "Ho vinto"], "È la resa dichiarata."],
    ["Il «dojo» è…", ["Il luogo dove si studia la Via", "L'allenatore"], "L'allenatore è il sensei."]
  ];
  const LIV_TRAB = {"Tori: chi": 1, "Il tuo compagno": 1, "Chi fa bene gli ukemi": 1, "«Matte»": 1, "«Hajime»": 1, "«Sono mama»": 2, "Dopo «Toketa»": 2, "Ippon in gara": 1, "Quanti secondi": 2, "Un osaekomi di 7": 3, "Quale di questi NON è un katame": 3, "Quale di questi NON è un tachi": 3, "Katame waza sono": 2, "Le percussioni": 3, "Tomoe nage è un": 3, "Uki goshi è": 2, "O soto gari è": 2, "Hadaka jime": 3, "Ude garami": 3, "Hon kesa gatame è": 2, "Chi ha fondato": 1, "In che anno": 2, "«Ju» in judo": 1, "Il «ju» di judo": 3, "Quale è il giusto": 2, "Kuzushi significa": 2, "L'uchikomi": 1, "Il randori": 1, "Il kata è": 2, "«Obi»": 1, "Il «Gokyo»": 2, "«Maitta»": 2, "Il «dojo»": 1};
  const livTrab = q => { const k = Object.keys(LIV_TRAB).find(k => q.startsWith(k)); return k ? LIV_TRAB[k] : 3; };
  const domandeTrabocchetti = () => TRABOCCHETTI.map(([q, o, spiega]) => ({ q, giusta: o[0], opz: shuffle(o), spiega, lv: livTrab(q) }));

  // prepara un giro di ROUND domande per il modo id e il livello liv (1-3)
  const costruisci = (id, liv) => {
    const f = a => a.filter(d => (d.lv || 3) <= liv);
    const termini = () => domandeSignificato(g => !TECH.test(g.cat) && !["Ju Jitsu", "Classificazione", "Arbitraggio"].includes(g.cat));
    const tecniche = () => domandeSignificato(g => TECH.test(g.cat) && !/vietate/.test(g.cat));
    if (id === "termini") return f(termini());
    if (id === "tecniche") return f(tecniche());
    if (id === "gruppi") return f(domandeGruppi());
    if (id === "trabocchetti") return f(domandeTrabocchetti());
    return [...pick(f(termini()), 6), ...pick(f(tecniche()), 6), ...pick(f(domandeGruppi()), 6), ...pick(f(domandeTrabocchetti()), 8)];
  };

  const LIVELLI = [["1", "Base", "Le cose fondamentali, per tutti"], ["2", "Medio", "Cintura gialla e arancio"], ["3", "Esperto", "Tutto, anche le cose difficili"]];
  const livDefault = () => { try { const c = (JSON.parse(store.get("profilo")) || {}).cintura; return ["", "bianca"].includes(c || "") ? 1 : ["gialla", "arancione"].includes(c) ? 2 : 3; } catch (e) { return 1; } };
  const getLiv = () => { const v = parseInt(store.get("quiz-livello"), 10); return v >= 1 && v <= 3 ? v : livDefault(); };
  const nome = () => { try { const n = (JSON.parse(store.get("profilo")) || {}).nome; return n ? n + ", " : ""; } catch (e) { return ""; } };
  const best = (id, liv) => parseInt(store.get(`quiz-${id}-${liv}`), 10) || 0;

  // disegna il quiz dentro el: menu dei modi, domande una alla volta, punteggio finale
  function start(el) {
    const menu = () => {
      const liv = getLiv();
      el.innerHTML = `<div class="quiz"><p class="lead">${esc(nome() ? nome() .replace(/, $/, "") + ", pronto/a" : "Pronto")}? 10 domande a risposta multipla. Tocca la risposta che pensi giusta: ti dico subito se hai indovinato e perché. Il punteggio resta solo sul tuo telefono.</p>
        <div class="seg quiz-liv" role="group" aria-label="Livello">${LIVELLI.map(l => `<button type="button" data-l="${l[0]}" class="${+l[0] === liv ? "on" : ""}" aria-pressed="${+l[0] === liv}">${l[1]}</button>`).join("")}</div>
        <p class="small">${esc(LIVELLI[liv - 1][2])}</p>
        <div class="menu">${MODI.map(m => `<button type="button" class="tile quiz-mode" data-m="${m.id}"><b>${m.ico} ${esc(m.nome)}</b><span>${esc(m.txt)}</span><span class="best">Miglior punteggio: ${best(m.id, liv)}/${ROUND}</span></button>`).join("")}</div></div>`;
      el.querySelectorAll("[data-l]").forEach(b => b.addEventListener("click", () => { store.set("quiz-livello", b.dataset.l); menu(); }));
      el.querySelectorAll("[data-m]").forEach(b => b.addEventListener("click", () => gioca(b.dataset.m)));
    };

    const gioca = id => {
      const liv = getLiv();
      const dom = pick(costruisci(id, liv), ROUND);
      if (dom.length < 3) { el.innerHTML = `<div class="quiz"><p>Per questo livello ci sono poche domande: prova un altro gioco o un altro livello.</p><button type="button" class="btn" data-menu>Indietro</button></div>`; el.querySelector("[data-menu]").addEventListener("click", menu); return; }
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
        const nuovo = punti > best(id, liv); if (nuovo) store.set(`quiz-${id}-${liv}`, String(punti));
        const frase = punti === dom.length ? "Perfetto! Sei una cintura nera del quiz." : punti >= dom.length * 0.7 ? "Bravissimo, ci sei quasi!" : punti >= dom.length * 0.4 ? "Buon inizio: rifallo e migliorerai." : "Si impara giocando: riprova, le parole diventano subito familiari.";
        el.innerHTML = `<div class="quiz quiz-end"><div class="quiz-score">${punti}<small>/${dom.length}</small></div><h2>${esc(nome() + frase)}</h2>${nuovo ? `<p class="ok"><b>Nuovo record! 🏆</b></p>` : `<p class="small">Il tuo record: ${best(id, liv)}/${ROUND}</p>`}
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
