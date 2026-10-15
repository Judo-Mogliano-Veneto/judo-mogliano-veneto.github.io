/* Navigazione e schermate. I contenuti stanno nei file dati: content.js, teoria.js, cinture.js, glossario.js, lezione.js, dojo.js. */
(function () {
  const { esc, rich, store, norm, block, wire, chip } = window.R;
  const C = window.CONTENT, T = window.TEORIA, B = window.CINTURE, G = window.GLOSSARIO, D = window.DOJO, L = window.LEZIONE;
  const app = document.getElementById("app");

  const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  const GIORNI = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  const pad = n => String(n).padStart(2, "0");
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const fmt = s => { const [y, m, d] = s.split("-").map(Number); return `${d} ${MESI[m - 1]} ${y}`; };

  // codice del video da un link YouTube (watch?v=, youtu.be/, shorts/, embed/) o dal codice stesso
  const ytId = s => { const m = String(s).trim().match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})|^([\w-]{11})$/); return m ? (m[1] || m[2]) : ""; };
  const json = (k, fallback) => { try { return JSON.parse(store.get(k)) || fallback; } catch (e) { return fallback; } };

  const head = (eyebrow, title, lead, back) => `<header>${back ? `<a class="back" href="${esc(back[0])}">‹ ${esc(back[1])}</a>` : ""}${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ""}<h1>${esc(title)}</h1>${lead ? `<p class="lead">${rich(lead)}</p>` : ""}</header>`;
  const tiles = items => `<div class="menu">${items.map(i => `<a class="tile${i.cls ? " " + i.cls : ""}" href="${esc(i.href)}">${i.badge ? `<em>${esc(i.badge)}</em>` : ""}<b>${esc(i.label)}</b>${i.text ? `<span>${esc(i.text)}</span>` : ""}</a>`).join("")}</div>`;
  const beltDot = b => `<i class="dot${b.bordo ? " edge" : ""}" style="background:${b.colore}"></i>`;

  /* ---------- Profilo (resta sul telefono, nessun account) ---------- */
  const profilo = () => ({ cintura: "", corso: "judo", lasik: false, ...json("profilo", {}) });
  const saveProfilo = p => store.set("profilo", JSON.stringify(p));
  const nextBelt = id => { const i = B.lista.findIndex(b => b.id === id); return i >= 0 ? B.lista[i + 1] : null; };

  /* ---------- Home ---------- */
  const START = new Date(2026, 9, 12), END = new Date(2026, 10, 18);
  function nextLesson(corso) {
    const c = D.orari.find(o => o.id === corso) || D.orari[0];
    const now = new Date(); now.setHours(0, 0, 0, 0);
    for (let i = 0; i < 8; i++) {
      const d = new Date(now); d.setDate(now.getDate() + i);
      if (c.giorni.includes(d.getDay())) return { d, i, c };
    }
    return null;
  }
  const whenLabel = ns => ns.i === 0 ? "Oggi" : ns.i === 1 ? "Domani" : GIORNI[ns.d.getDay()][0].toUpperCase() + GIORNI[ns.d.getDay()].slice(1);
  function programmaDel(d) {
    if (d < START || d > END) return null;
    const week = Math.floor((d - START) / 864e5 / 7) + 1;
    const prog = C.sections.find(s => s.id === "progressione").blocks.find(b => b.type === "progress");
    return { week, load: prog.rows[week - 1].load, seduta: d.getDay() === 1 ? "A" : "B" };
  }
  function home() {
    const pr = profilo();
    const me = B.lista.find(b => b.id === pr.cintura), nx = me && nextBelt(me.id);
    const ns = nextLesson(pr.corso);
    let cards = "";
    if (ns) cards += `<a class="next" href="#/dojo"><span class="eyebrow">Prossima lezione · ${esc(ns.c.corso)}</span><b>${whenLabel(ns)} ${ns.d.getDate()} ${MESI[ns.d.getMonth()]} · ${esc(ns.c.orario)}</b><span>${esc(D.palestra)}</span></a>`;
    if (pr.lasik) {
      const own = [1, 3].map(g => { const d = new Date(); d.setHours(0, 0, 0, 0); while (d.getDay() !== g || d < START) d.setDate(d.getDate() + 1); return d; }).sort((a, b) => a - b)[0];
      const p = programmaDel(own);
      if (p) cards += `<a class="next alt" href="#/allenamenti/lasik"><span class="eyebrow">Il tuo programma post-LASIK</span><b>${whenLabel({ i: Math.round((own - new Date().setHours(0, 0, 0, 0)) / 864e5), d: own })} ${own.getDate()} ${MESI[own.getMonth()]} · Seduta ${p.seduta}</b><span>Settimana ${p.week} · carico ${p.load.toLowerCase()}</span></a>`;
    }
    const beltCard = me
      ? `<div class="belt-me"><span>La tua cintura</span><b>${beltDot(me)} ${esc(me.nome)}</b>${nx ? `<a href="#/cinture/${esc(nx.id)}">Prossima: ${esc(nx.nome)} →</a>` : ""}<a href="#/profilo">Cambia profilo</a></div>`
      : `<a class="belt-me setup" href="#/profilo"><span>Profilo</span><b>Scegli la tua cintura</b><small>Così la home e i menu si adattano a te. Resta solo su questo telefono.</small></a>`;
    app.innerHTML = head("Judo · Mogliano Veneto", "Judo Mogliano", "Teoria, allenamenti e programmi delle cinture in un posto solo.") + `
      <div class="search"><input id="q" type="search" placeholder="Cerca una tecnica o un termine" autocomplete="off" aria-label="Cerca"><div id="res"></div></div>
      ${cards}${beltCard}
      ${tiles([
        { href: "#/allenamenti", label: "Allenamenti", text: pr.lasik ? "Programma post-LASIK, movimenti in classe, diario" : "Movimenti fatti in classe e diario" },
        { href: "#/teoria", label: "Teoria", text: "Storia, principi, Gokyo, kata, regole di gara" },
        { href: me ? `#/cinture/${me.id}` : "#/cinture", label: me ? `Cintura ${me.nome.toLowerCase()}` : "Cinture", text: `Programmi per cintura (${B.anno}): in cantiere` },
        { href: "#/tecniche", label: "Tecniche", text: "Schede passo per passo con disegni e video" },
        { href: "#/glossario", label: "Glossario", text: "Il significato dei termini giapponesi" },
        { href: "#/dojo", label: "Dojo", text: "Orari, palestra e appuntamenti" }
      ])}`;
    const q = app.querySelector("#q"), res = app.querySelector("#res");
    q.addEventListener("input", () => {
      const s = norm(q.value);
      if (s.length < 2) { res.innerHTML = ""; return; }
      const pages = T.filter(p => norm(p.title + p.text).includes(s)).map(p => `<a class="hit" href="#/teoria/${esc(p.id)}"><b>${esc(p.title)}</b><span>Teoria</span></a>`);
      const terms = G.filter(g => norm(g.t + (g.alias || []).join("")).includes(s)).slice(0, 12).map(g => `<button type="button" class="hit has chip-open" data-term="${esc(norm(g.t))}"><b>${esc(g.t)}</b><span>${esc(g.d.replace(/\*\*/g, "").slice(0, 70))}</span></button>`);
      const classe = allClasse().filter(v => norm(v.nome + (v.note || "")).includes(s)).slice(0, 6).map(v => `<a class="hit" href="#/allenamenti/classe"><b>${esc(v.nome)}</b><span>In classe · ${esc(v.cat)}</span></a>`);
      const all = [...pages, ...terms, ...classe];
      res.innerHTML = all.length ? all.join("") : `<p class="small">Nessun risultato.</p>`;
      res.querySelectorAll(".chip-open").forEach(b => b.addEventListener("click", () => window.R.sheet.open(G.find(g => norm(g.t) === b.dataset.term))));
    });
  }

  function profiloPage() {
    const pr = profilo();
    app.innerHTML = head("Profilo", "Il tuo profilo", "Scegli cintura e corso: la home e i menu si adattano. Non serve un account: le scelte restano su questo telefono.", ["#/", "Home"]) + `
      <form class="form" id="f">
        <label>Cintura attuale<select name="cintura"><option value="">Non scelta</option>${B.lista.map(b => `<option value="${esc(b.id)}"${b.id === pr.cintura ? " selected" : ""}>${esc(b.nome)}</option>`).join("")}</select></label>
        <label>Corso<select name="corso">${D.orari.filter(o => o.id).map(o => `<option value="${esc(o.id)}"${o.id === pr.corso ? " selected" : ""}>${esc(o.corso)}</option>`).join("")}</select></label>
        <label class="check"><input type="checkbox" name="lasik"${pr.lasik ? " checked" : ""}> Mostra il programma post-LASIK (scheda personale di Marco)</label>
        <button type="submit" class="btn">Salva</button><span class="small" id="ok"></span>
      </form>`;
    app.querySelector("#f").addEventListener("submit", e => {
      e.preventDefault();
      const f = e.target; saveProfilo({ cintura: f.cintura.value, corso: f.corso.value, lasik: f.lasik.checked });
      app.querySelector("#ok").textContent = "Salvato."; setTimeout(() => { location.hash = "#/"; }, 500);
    });
  }

  function infoPage() {
    const I = window.INFO;
    app.innerHTML = head("Informazioni", "Crediti e note legali", "", ["#/", "Home"]) + `<div class="stack">
      ${block({ type: "callout", tone: "info", title: "Ideata e realizzata da " + I.autore, text: `Progetto, contenuti e coordinamento: **${I.autore}** (${I.account}). L'app è stata sviluppata con l'assistenza di Claude (Anthropic). Versione ${I.versione}. Codice: ${I.repo}` })}
      <h3 class="sub">Privacy</h3>${block({ type: "text", text: "L'app **non raccoglie dati**, non usa cookie né statistiche e non ha account. Profilo, spunte, diario e movimenti aggiunti restano nella memoria del tuo telefono e si cancellano se cancelli i dati del sito. I video si caricano da YouTube (modalità senza cookie di tracciamento, youtube-nocookie.com) solo quando tocchi «Guarda il video»." })}
      <h3 class="sub">Fonti</h3>${block({ type: "list", items: [
        "Programmi di cintura del dojo di Mogliano Veneto (Judo e Ju Jitsu), secondo i programmi FIJLKAM",
        "«Aggiornamento del Regolamento delle competizioni di Judo 2025–2028» (IJF Technical Seminar, Istanbul 2024)",
        "Dispensa «I Kata di Judo» a cura del M° Daniele Mainenti, 6° dan (edizione 2023)",
        "«Programma fondamentali Ju Jitsu» FIJLKAM",
        "Nozioni generali sul judo di tradizione Kodokan",
        "Video delle tecniche: canale YouTube ufficiale del Kodokan (elenco «Names of Judo Techniques» su kdkjd.org), incorporati senza modifiche"] })}
      <p class="small">I marchi, i nomi e i documenti citati appartengono ai rispettivi titolari (FIJLKAM, IJF, Kodokan). Qui compaiono solo riassunti a scopo di studio personale e non c'è alcuna affiliazione ufficiale.</p>
      <h3 class="sub">Avvertenze</h3>${block({ type: "callout", tone: "warn", items: [
        "Le informazioni di judo sono un ripasso: per esami e gare vale quello che insegna il maestro e il regolamento ufficiale in vigore.",
        "Il programma post-LASIK è una scheda personale, non un parere medico: ogni ripresa dell'attività va concordata con l'oculista."] })}
      <h3 class="sub">Diritti</h3>${block({ type: "text", text: `© ${I.anno} ${I.autore} (${I.account}). Il codice è rilasciato con licenza ${I.licenza}: si può riutilizzare mantenendo il nome dell'autore e l'avviso di copyright. I testi di judo sono riassunti di fonti di terzi (vedi sopra) e restano dei rispettivi titolari.` })}</div>`;
  }

  /* ---------- Allenamenti ---------- */
  function allenamenti() {
    const las = profilo().lasik;
    app.innerHTML = head("Allenamenti", "Allenamenti", las ? "Il programma di forza e stretching, i movimenti visti a lezione e il diario delle sedute." : "I movimenti visti a lezione e il diario delle sedute.") + tiles([
      ...(las ? [{ href: "#/allenamenti/lasik", label: "Programma post-LASIK", text: "6 settimane, lunedì e mercoledì, con disegni degli esercizi" }] : []),
      { href: "#/allenamenti/classe", label: "In classe", text: "I movimenti fatti a lezione, da aggiungere pian piano" },
      { href: "#/allenamenti/diario", label: "Diario", text: "Come è andata ogni seduta, con note sul carico" }
    ]);
  }

  function lasik() {
    app.innerHTML = head(C.eyebrow, C.title, C.lead, ["#/allenamenti", "Allenamenti"]) + `<div class="legend">${C.legend.map(l => `<span>${l.color ? `<i style="background:${l.color}"></i>` : ""}${esc(l.text)}</span>`).join("")}</div>
      <nav class="subnav" aria-label="Sezioni"><ul>${C.sections.map(s => `<li><button type="button" data-go="${esc(s.id)}">${esc(s.nav)}</button></li>`).join("")}</ul></nav>
      ${C.sections.map(s => `<section id="s-${esc(s.id)}"><div class="sec-head"><h2>${s.tag ? `<span class="tag">${esc(s.tag)}</span>` : ""}${esc(s.title)}</h2>${s.intro ? `<p>${esc(s.intro)}</p>` : ""}</div>${s.blocks.map(block).join("")}</section>`).join("")}`;
    app.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => document.getElementById("s-" + b.dataset.go).scrollIntoView({ behavior: "smooth", block: "start" })));
  }

  // movimenti in classe: quelli nel file + quelli aggiunti dal telefono
  const allClasse = () => [...L.voci.map(v => ({ ...v, fissa: true })), ...json("classe", [])].sort((a, b) => (b.data || "").localeCompare(a.data || ""));

  function classe() {
    const draw = () => {
      const cat = app.querySelector("#fcat").value, s = norm(app.querySelector("#fq").value);
      const list = allClasse().filter(v => (!cat || v.cat === cat) && (!s || norm(v.nome + (v.note || "") + (v.tag || []).join("")).includes(s)));
      app.querySelector("#list").innerHTML = list.length ? list.map(v => `<article class="card"><div class="top"><h3>${esc(v.nome)}</h3><span class="dose">${esc(v.cat)}</span></div>${v.data ? `<div class="load">${esc(fmt(v.data))}</div>` : ""}${v.note ? `<p>${rich(v.note)}</p>` : ""}${v.video ? videoBox(v.video, v.nome).replace("Guarda il video del Kodokan", "Guarda il video") : ""}${v.tag && v.tag.length ? `<div class="chips">${v.tag.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}${v.fissa ? "" : `<button type="button" class="link" data-del="${esc(v.id)}">Elimina</button>`}</article>`).join("") : `<div class="callout"><b>Ancora niente qui</b><p>Dopo la lezione aggiungi quello che hai fatto: il nome del movimento e due righe di appunti.</p></div>`;
      app.querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", () => {
        store.set("classe", JSON.stringify(json("classe", []).filter(v => v.id !== b.dataset.del))); draw();
      }));
    };
    app.innerHTML = head("Allenamenti", "In classe", "I movimenti visti a lezione, da riempire man mano. Quelli che aggiungi qui restano sul telefono; per tenerli per sempre, usa «Esporta» e incollali in lezione.js.", ["#/allenamenti", "Allenamenti"]) + `
      <form class="form" id="f"><h3>Aggiungi un movimento</h3>
        <label>Data<input type="date" name="data" required value="${iso(new Date())}"></label>
        <label>Categoria<select name="cat">${L.categorie.map(c => `<option>${esc(c)}</option>`).join("")}</select></label>
        <label>Movimento<input name="nome" required maxlength="120" placeholder="es. Uchi mata dopo ko uchi gari"></label>
        <label>Appunti<textarea name="note" rows="3" maxlength="800" placeholder="Cosa curare, errori, come ha spiegato il maestro"></textarea></label>
        <label>Video YouTube (facoltativo)<input name="video" inputmode="url" placeholder="Link del video, anche girato in dojo e caricato come «non in elenco»"></label>
        <button type="submit" class="btn">Aggiungi</button></form>
      <div class="filters"><input id="fq" type="search" placeholder="Cerca nei movimenti" aria-label="Cerca nei movimenti"><select id="fcat" aria-label="Filtra per categoria"><option value="">Tutte le categorie</option>${L.categorie.map(c => `<option>${esc(c)}</option>`).join("")}</select></div>
      <div id="list" class="stack"></div>
      <p><button type="button" class="btn ghost" id="exp">Esporta per lezione.js</button> <span class="small" id="expmsg"></span></p>`;
    app.querySelector("#f").addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(e.target), v = { id: String(Date.now()), data: f.get("data"), cat: f.get("cat"), nome: f.get("nome").trim(), note: f.get("note").trim(), video: ytId(f.get("video") || "") };
      if (!v.nome) return;
      store.set("classe", JSON.stringify([...json("classe", []), v]));
      e.target.nome.value = ""; e.target.note.value = ""; e.target.video.value = ""; draw();
    });
    app.querySelector("#fq").addEventListener("input", draw);
    app.querySelector("#fcat").addEventListener("change", draw);
    app.querySelector("#exp").addEventListener("click", () => {
      const txt = json("classe", []).map(v => `    { data: ${JSON.stringify(v.data)}, cat: ${JSON.stringify(v.cat)}, nome: ${JSON.stringify(v.nome)}, note: ${JSON.stringify(v.note || "")}${v.video ? `, video: ${JSON.stringify(v.video)}` : ""} },`).join("\n");
      const msg = app.querySelector("#expmsg");
      if (!txt) { msg.textContent = "Niente da esportare."; return; }
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => { msg.textContent = "Copiato negli appunti."; }, () => { msg.textContent = "Copia non riuscita."; });
    });
    draw();
  }

  function diario() {
    const draw = () => {
      const list = json("diario", []).sort((a, b) => b.data.localeCompare(a.data));
      app.querySelector("#list").innerHTML = list.length ? list.map(v => `<article class="card"><div class="top"><h3>${esc(fmt(v.data))}</h3><span class="dose">${esc(v.tipo)}</span></div>${v.carico ? `<div class="load">Carico: ${esc(v.carico)}</div>` : ""}${v.note ? `<p>${rich(v.note)}</p>` : ""}<button type="button" class="link" data-del="${esc(v.id)}">Elimina</button></article>`).join("") : `<div class="callout"><b>Ancora niente qui</b><p>Dopo ogni seduta segna come è andata: serve a capire quando aumentare il carico.</p></div>`;
      app.querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", () => { store.set("diario", JSON.stringify(json("diario", []).filter(v => v.id !== b.dataset.del))); draw(); }));
    };
    app.innerHTML = head("Allenamenti", "Diario", "Una riga per ogni seduta. Resta su questo telefono.", ["#/allenamenti", "Allenamenti"]) + `
      <form class="form" id="f"><h3>Nuova seduta</h3>
        <label>Data<input type="date" name="data" required value="${iso(new Date())}"></label>
        <label>Seduta<select name="tipo"><option>Seduta A (lunedì)</option><option>Seduta B (mercoledì)</option><option>Judo in classe</option><option>Altro</option></select></label>
        <label>Carico<select name="carico"><option value="">Non segnato</option><option>Troppo leggero</option><option>Giusto</option><option>Pesante</option></select></label>
        <label>Note<textarea name="note" rows="3" maxlength="800" placeholder="Come sei stato, dolori, occhio, ripetizioni fatte"></textarea></label>
        <button type="submit" class="btn">Salva</button></form>
      <div id="list" class="stack"></div>`;
    app.querySelector("#f").addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(e.target);
      store.set("diario", JSON.stringify([...json("diario", []), { id: String(Date.now()), data: f.get("data"), tipo: f.get("tipo"), carico: f.get("carico"), note: f.get("note").trim() }]));
      e.target.note.value = ""; draw();
    });
    draw();
  }

  /* ---------- Teoria ---------- */
  function teoria() {
    app.innerHTML = head("Teoria", "Teoria", "Da leggere e da ripassare. Tocca i nomi delle tecniche per vederne il significato.") + tiles(T.map(p => ({ href: `#/teoria/${p.id}`, label: p.title, text: p.text })));
  }
  function teoriaPage(id) {
    const p = T.find(x => x.id === id);
    if (!p) return notFound();
    const i = T.indexOf(p), prev = T[i - 1], next = T[i + 1];
    app.innerHTML = head("Teoria", p.title, "", ["#/teoria", "Teoria"]) + `<div class="stack">${p.blocks.map(block).join("")}</div>
      <div class="pager">${prev ? `<a href="#/teoria/${prev.id}">‹ ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#/teoria/${next.id}">${esc(next.title)} ›</a>` : "<span></span>"}</div>`;
  }

  /* ---------- Cinture ---------- */
  function cinture() {
    const me = profilo().cintura, nxId = (nextBelt(me) || {}).id;
    app.innerHTML = head("Cinture", "Cinture", `I programmi per il ${B.anno} non sono ancora definiti: ogni cintura è **in cantiere** e si aggiorna quando il maestro li comunica. Intanto restano i programmi degli anni passati, come riferimento.`) + `
      <div class="belts">${B.lista.map(b => `<a class="belt" href="#/cinture/${esc(b.id)}">${beltDot(b)}<b>${esc(b.nome)}</b><span>${b.id === me ? "la tua cintura" : b.id === nxId ? "la prossima" : ""}</span><em class="state ${b.stato === "in cantiere" ? "wip" : "ok"}">${esc(b.stato)}</em></a>`).join("")}</div>`;
  }
  function programma(p) {
    return `<h3 class="sub">Teoria</h3><div class="card"><ul>${p.teoria.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>
      <h3 class="sub">Pratica</h3><div class="acc">${p.pratica.map(s => `<details><summary>${esc(s.titolo)}</summary><div class="acc-body"><div class="chips">${s.voci.map(chip).join("")}</div></div></details>`).join("")}</div>`;
  }
  function cintura(id) {
    const b = B.lista.find(x => x.id === id);
    if (!b) return notFound();
    const stdTodo = ["Chiedere al maestro il programma ufficiale di questa cintura", "Segnare qui la data dell'esame", "Aggiornare cinture.js con le tecniche richieste"];
    const modo = store.get("modo:" + id) || "judo";
    const prog = modo === "jujitsu" ? b.jujitsu : b.judo;
    app.innerHTML = head("Cinture", `Cintura ${b.nome.toLowerCase()}`, "", ["#/cinture", "Cinture"]) + `
      <div class="belt-hero" style="--belt:${b.colore}"><i></i><div><b>${esc(b.stato === "in cantiere" ? "In cantiere" : "Programma " + b.stato)}</b><span>${b.stato === "in cantiere" ? `Programma ${B.anno} non ancora definito.` : esc(b.aggiornato ? "Aggiornato " + b.aggiornato : "")}</span></div></div>
      ${b.note ? `<p>${rich(b.note)}</p>` : ""}
      <div class="stack">
        <h3 class="sub">Da fare</h3>${block({ type: "checklist", id: "cintura-" + id, items: stdTodo })}
        <div class="tabs2" role="tablist">${["judo", "jujitsu"].map(m => `<button type="button" data-modo="${m}" class="${m === modo ? "on" : ""}" role="tab" aria-selected="${m === modo}">${m === "judo" ? "Judo" : "Ju Jitsu"}</button>`).join("")}</div>
        ${prog ? `<div class="callout info"><b>Programma di riferimento</b><p>È l'ultimo programma ricevuto per questa cintura, solo come promemoria: il programma ${B.anno} potrebbe cambiare. Tocca una tecnica per vedere il significato.</p></div>${programma(prog)}` : `<div class="callout"><b>Niente da mostrare</b><p>${modo === "judo" ? "Per questa cintura non ho un programma di riferimento di Judo." : "Per questa cintura non ho un programma di riferimento di Ju Jitsu."} Si compila in <code>cinture.js</code> quando arriva.</p></div>`}
        <h3 class="sub">Intanto ripassa</h3>${block({ type: "links", items: [
          { href: "#/teoria/storia", label: "Storia e fondatore" }, { href: "#/teoria/fasi", label: "Le tre fasi di una tecnica" },
          { href: "#/teoria/gokyo", label: "Gokyo · le 40 proiezioni" }, { href: "#/teoria/neWaza", label: "Ne waza" }] })}
      </div>`;
    app.querySelectorAll("[data-modo]").forEach(t => t.addEventListener("click", () => { store.set("modo:" + id, t.dataset.modo); cintura(id); wire(app); }));
  }


  /* ---------- Tecniche: una pagina per ogni tecnica, con video Kodokan e scheda passo per passo dove c'è ---------- */
  const TE = window.TECNICHE, V = window.VIDEO || {}, VA = window.VIDEO_ALIAS || {};
  const CATALOGO = [["Proiezioni · 1° kyo", "Gokyo · 1° kyo"], ["Proiezioni · 2° kyo", "Gokyo · 2° kyo"], ["Proiezioni · 3° kyo", "Gokyo · 3° kyo"], ["Proiezioni · 4° kyo", "Gokyo · 4° kyo"], ["Proiezioni · 5° kyo", "Gokyo · 5° kyo"], ["Immobilizzazioni", "Immobilizzazioni"], ["Strangolamenti", "Strangolamenti"], ["Leve", "Leve articolari"]];
  const VN = {}; Object.keys(V).forEach(k => { VN[norm(k)] = V[k]; });
  const VX = {}; Object.entries(window.VIDEO_EXTRA || {}).forEach(([k, v]) => { VX[norm(k)] = v; });
  const extraDi = name => VX[norm(name)] || VX[norm(String(name).replace(/shio/i, "shiho"))] || null;
  const videoBase = name => VN[norm(VA[name] || name)] || VN[norm(String(name).replace(/shio/i, "shiho"))] || null;
  const guidaDi = g => TE.find(t => norm(t.nome) === norm(g.t));
  const voci = () => G.filter(g => CATALOGO.some(c => c[0] === g.cat) && !/^(Seoi nage|Morote)/.test(g.t));
  const videoDi = name => { const x = extraDi(name); return videoBase(name) || (x && (x.id || videoBase(x.rif))) || null; };
  const videoBox = (id, name) => id ? `<div class="yt" data-yt="${esc(id)}"><button type="button" class="yt-play" aria-label="Guarda il video di ${esc(name)}"><span class="yt-ico">▶</span><b>Guarda il video del Kodokan</b><small>Si carica qui solo quando tocchi. Serve la rete.</small></button></div><p class="small"><a href="https://www.youtube.com/watch?v=${esc(id)}" target="_blank" rel="noopener noreferrer">Apri su YouTube ↗</a></p>` : `<div class="callout"><b>Video non disponibile</b><p>Il Kodokan non ha un video di questa tecnica nel suo elenco. Si può aggiungere in <code>video.js</code>.</p></div>`;
  // il video vero si carica solo al tocco (niente traffico e niente YouTube finché non serve)
  app.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest(".yt-play");
    if (!b) return;
    const box = b.parentElement, id = box.dataset.yt;
    if (!navigator.onLine) { b.querySelector("small").textContent = "Sei offline: il video si vede solo con la rete."; return; }
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&playsinline=1" title="Video del Kodokan" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  });
  function tecniche() {
    const all = voci(), pronte = all.filter(guidaDi).length, conVideo = all.filter(g => videoDi(g.t)).length;
    app.innerHTML = head("Tecniche", "Tecniche", `Ogni tecnica ha la sua pagina con significato e **video ufficiale del Kodokan** (${conVideo} su ${all.length}). Le schede passo per passo sono pronte per **${pronte}** tecniche e arrivano a gruppi.`) + `
      <div class="search"><input id="tq" type="search" placeholder="Cerca una tecnica" autocomplete="off" aria-label="Cerca una tecnica"></div>
      <div id="cat" class="stack"></div>`;
    const draw = () => {
      const q = norm(app.querySelector("#tq").value);
      app.querySelector("#cat").innerHTML = CATALOGO.map(([cat, titolo], ci) => {
        const list = all.filter(g => g.cat === cat && (!q || norm(g.t).includes(q)));
        if (!list.length) return "";
        return `<details class="catsec" ${q || ci === 0 ? "open" : ""}><summary>${esc(titolo)} <em>${list.length}</em></summary><div class="catlist">${list.map(g => {
          const full = guidaDi(g), v = videoDi(g.t);
          return `<a class="tcard${full ? "" : " soon"}" href="#/tecniche/${esc(norm(g.t))}"><b>${esc(g.t)}</b><span>${esc(g.jp || "")}</span><em>${full ? "scheda + video" : v ? "video" : "significato"}</em></a>`;
        }).join("")}</div></details>`;
      }).join("");
    };
    app.querySelector("#tq").addEventListener("input", draw);
    draw();
  }
  // passi con lo schema visto dall'alto (pianta.js), tutti alla stessa scala
  const passi = t => {
    const P = window.Plan, con = t.passi.filter(p => p.pianta);
    const cr = P && con.length ? P.cornice(con.map(p => p.pianta)) : null;
    const leg = P && con.length ? `<p class="small plan-key"><b style="color:#2f66c4">Blu = tori</b> · bianco = uke · visto dall'alto. S e D sono i piedi sinistro e destro; contorno tratteggiato = piede sollevato, piede sbiadito = dov'era prima. Punto giallo = presa.</p>` : "";
    return leg + `<ol class="steps">${t.passi.map(p => `<li><b>${esc(p.titolo)}</b>${P && p.pianta ? `<div class="plan">${P.plan(p.pianta, { cornice: cr })}</div>` : ""}<span>${rich(p.testo)}</span></li>`).join("")}</ol>`;
  };
  const ul = items => `<div class="card"><ul>${items.map(i => `<li>${rich(i)}</li>`).join("")}</ul></div>`;
  function tecnica(slug) {
    const g = G.find(x => norm(x.t) === slug) || G.find(x => norm(x.t) === norm(slug));
    const t = TE.find(x => norm(x.nome) === slug || x.id === slug);
    if (!g && !t) return notFound();
    const nome = t ? t.nome : g.t, vid = videoDi(nome);
    const sign = t ? t.sign : g.d;
    const gruppo = t ? `${t.gruppo}${t.kyo ? " · " + t.kyo : ""}` : g.cat;
    let body = `<label class="know"><input type="checkbox" data-key="sa:${esc(norm(nome))}"> La so fare</label>
      <h3 class="sub">Video</h3>${videoBox(vid, nome).replace(/Guarda il video del Kodokan(?=<\/b>)/, extraDi(nome) && extraDi(nome).id ? "Guarda il video" : "Guarda il video del Kodokan")}${extraDi(nome) ? `<p class="small">${esc(extraDi(nome).nota)}</p>` : ""}`;
    if (t) {
      body += `<div class="card"><b>Quando si usa</b><p>${rich(t.quando)}</p><b>Presa</b><p>${rich(t.presa)}</p></div>
        <h3 class="sub">I passi</h3>${passi(t)}
        <h3 class="sub">Errori comuni</h3>${ul(t.errori)}
        <h3 class="sub">Come allenarla</h3>${ul(t.uchikomi)}
        <h3 class="sub">Collegamenti</h3>${ul(t.collegamenti)}
        ${block({ type: "callout", tone: "warn", title: "Sicurezza", text: t.sicurezza })}
        <p class="small">Scheda versione 1, scritta per chi usa la presa destra: da confrontare con ciò che spiega il maestro.</p>`;
    } else {
      body += `${g.n ? `<p class="small">${rich(g.n)}</p>` : ""}<div class="callout"><b>Scheda passo per passo in arrivo</b><p>Per ora c'è il significato e il video. Presa, passi, errori ed esercizi arrivano a gruppi.</p></div>`;
    }
    app.innerHTML = head(gruppo, nome, `${g && g.jp ? g.jp + " · " : ""}${sign}`, ["#/tecniche", "Tecniche"]) + `<div class="stack">${body}</div>`;
  }

  /* ---------- Glossario ---------- */
  function glossario() {
    const cats = [...new Set(G.map(g => g.cat))];
    app.innerHTML = head("Glossario", "Glossario", `${G.length} termini. Cerca per nome o filtra per argomento.`) + `
      <div class="filters"><input id="gq" type="search" placeholder="Cerca" autocomplete="off" aria-label="Cerca nel glossario"><select id="gcat" aria-label="Filtra per argomento"><option value="">Tutti gli argomenti</option>${cats.map(c => `<option>${esc(c)}</option>`).join("")}</select></div>
      <div id="list" class="stack"></div>`;
    const draw = () => {
      const s = norm(app.querySelector("#gq").value), c = app.querySelector("#gcat").value;
      const list = G.filter(g => (!c || g.cat === c) && (!s || norm(g.t + (g.alias || []).join("") + g.d).includes(s)));
      app.querySelector("#list").innerHTML = list.length ? `<div class="gloss">${list.map(g => `<article><div class="gt"><b>${esc(g.t)}</b>${g.jp ? `<span class="jp">${esc(g.jp)}</span>` : ""}<em>${esc(g.cat)}</em></div><p>${rich(g.d)}</p>${g.n ? `<p class="small">${rich(g.n)}</p>` : ""}</article>`).join("")}</div>` : `<p class="small">Nessun termine trovato.</p>`;
    };
    app.querySelector("#gq").addEventListener("input", draw);
    app.querySelector("#gcat").addEventListener("change", draw);
    draw();
  }

  /* ---------- Dojo ---------- */
  function dojo() {
    app.innerHTML = head("Dojo", D.nome, `Stagione ${D.stagione}`) + `<div class="stack">
      <h3 class="sub">Orari delle lezioni</h3>${block({ type: "table", head: ["Corso", "Giorni", "Orario"], rows: D.orari.map(o => [o.corso, o.giorni.map(g => GIORNI[g]).join(" e "), o.orario]) })}
      <h3 class="sub">Dove e quando</h3>${block({ type: "list", items: [`**Palestra:** ${D.palestra}`, `**Inizio attività:** ${D.inizio}`, `**Fine attività:** ${D.fine}`] })}
      <h3 class="sub">Eventi passati</h3>${block({ type: "cards", items: D.eventi.map(e => ({ title: e.titolo, sub: e.quando, text: e.text })) })}</div>`;
  }

  function notFound() { app.innerHTML = head("", "Pagina non trovata", "") + `<p><a href="#/">Torna alla home</a></p>`; }

  /* ---------- Router ---------- */
  const TABS = [["#/", "Home", "home"], ["#/allenamenti", "Allenamenti", "allenamenti"], ["#/teoria", "Teoria", "teoria"], ["#/tecniche", "Tecniche", "tecniche"], ["#/cinture", "Cinture", "cinture"]];
  const bar = document.createElement("nav");
  bar.className = "tabbar"; bar.setAttribute("aria-label", "Menu principale");
  bar.innerHTML = TABS.map(t => `<a href="${t[0]}" data-tab="${t[2]}">${t[1]}</a>`).join("");
  document.body.appendChild(bar);

  function route() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    const [a, b] = parts;
    window.R.sheet.close();
    if (!a) home();
    else if (a === "allenamenti") (b === "lasik" ? lasik : b === "classe" ? classe : b === "diario" ? diario : allenamenti)();
    else if (a === "teoria") b ? teoriaPage(b) : teoria();
    else if (a === "cinture") b ? cintura(b) : cinture();
    else if (a === "glossario") glossario();
    else if (a === "tecniche") b ? tecnica(b) : tecniche();
    else if (a === "dojo") dojo();
    else if (a === "profilo") profiloPage();
    else if (a === "info") infoPage();
    else notFound();
    app.insertAdjacentHTML("beforeend", `<footer class="foot">Ideata e realizzata da ${esc(window.INFO.autore)} · <a href="#/info">Crediti e note legali</a></footer>`);
    wire(app);
    bar.querySelectorAll("a").forEach(l => l.classList.toggle("on", (a || "home") === l.dataset.tab));
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => { /* offline non disponibile */ });
})();
