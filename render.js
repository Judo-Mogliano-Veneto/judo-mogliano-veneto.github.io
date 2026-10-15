/* Funzioni comuni: testo sicuro, memoria sul telefono, blocchi di contenuto, scheda dei termini.
   Non serve toccarlo per aggiungere contenuti: si lavora nei file dati (teoria.js, cinture.js, ...). */
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // testo con **grassetto** (dopo l'escape, quindi sicuro)
  const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const store = {
    get(k) { try { return localStorage.getItem("guida:" + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("guida:" + k, v); } catch (e) { /* memoria non disponibile */ } }
  };
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z]/g, "");

  // indice dei termini del glossario, per rendere toccabili i nomi delle tecniche
  const GLOSS = window.GLOSSARIO || [];
  const index = {};
  GLOSS.forEach(g => { index[norm(g.t)] = g; (g.alias || []).forEach(a => { index[norm(a)] = g; }); });
  const lookup = name => index[norm(name)] || index[norm(String(name).replace(/\(.*\)/, ""))];

  const chip = name => {
    const g = lookup(name);
    return g ? `<button type="button" class="chip has" data-term="${esc(norm(g.t))}">${esc(name)}</button>` : `<span class="chip">${esc(name)}</span>`;
  };

  const table = (head, rows) => `<div class="tbl"><table><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td${i === 0 && /^\d+$/.test(c) ? ' class="n"' : ""}>${rich(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  const card = (ex, i) => {
    let fig = "";
    try { fig = window.Fig.figure(ex); } catch (e) { console.warn(ex.name, e); }
    return `<article class="card"><div class="fig">${fig}</div>
      <div class="top"><h3>${ex.pair ? `<span class="pair">${esc(ex.pair)}</span>` : `<span class="num">${i + 1}</span>`}${esc(ex.name)}</h3><span class="dose">${esc(ex.dose)}</span></div>
      ${ex.load ? `<div class="load">${esc(ex.load)}</div>` : ""}
      <ul>${ex.cues.map(c => `<li>${esc(c)}</li>`).join("")}</ul></article>`;
  };

  const tree = items => `<ul class="tree">${items.map(i => `<li>${i.href ? `<a href="${esc(i.href)}">${esc(i.label)}</a>` : `<b>${esc(i.label)}</b>`}${i.text ? ` <span>${rich(i.text)}</span>` : ""}${i.children ? tree(i.children) : ""}</li>`).join("")}</ul>`;

  let uid = 0;
  const block = b => {
    switch (b.type) {
      case "text": return `<p>${rich(b.text)}</p>`;
      case "h": return `<h3 class="sub">${esc(b.text)}</h3>`;
      case "table": return table(b.head, b.rows);
      case "timeline": return `<div class="timeline">${b.items.map(t => `<div class="${esc(t.style || "")}"><span>${esc(t.time)}</span><b>${esc(t.title)}</b>${esc(t.text)}</div>`).join("")}</div>`;
      case "exercises": return `<div class="grid">${(window.EXERCISES[b.group] || []).map(card).join("")}</div>`;
      case "list": return `<div class="card"><ul>${b.items.map(i => `<li>${rich(i)}</li>`).join("")}</ul></div>`;
      case "note": return `<div class="note"><b>${esc(b.title)}</b>${b.text ? `<p>${rich(b.text)}</p>` : ""}<ul class="checks">${(b.checks || []).map((c, i) => `<li><label><input type="checkbox" data-key="note:${esc(b.title)}:${i}"> ${esc(c)}</label></li>`).join("")}</ul></div>`;
      case "callout": return `<div class="callout ${esc(b.tone || "")}">${b.title ? `<b>${esc(b.title)}</b>` : ""}${b.text ? `<p>${rich(b.text)}</p>` : ""}${b.items ? `<ul>${b.items.map(i => `<li>${rich(i)}</li>`).join("")}</ul>` : ""}</div>`;
      case "progress": return `<div class="tbl"><table><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r => `<tr><td class="n">${esc(r.week)}</td><td class="days">${r.dates.map((d, i) => `<button type="button" class="day" aria-pressed="false" data-key="done:${esc(r.week)}:${i}">${esc(d)}</button>`).join("")}</td><td>${esc(r.load)}</td><td>${esc(r.rhythm)}</td></tr>`).join("")}</tbody></table></div>`;
      case "tests": return `<div class="note"><b>${esc(b.title)}</b><p>${esc(b.text)}</p><div class="tests"><span></span><span class="h">Sett. 1</span><span class="h">Sett. 6</span>${b.items.map((t, i) => `<label for="t${i}a">${esc(t)}</label><input id="t${i}a" inputmode="decimal" data-key="test:${i}:1" aria-label="${esc(t)}, settimana 1"><input id="t${i}b" inputmode="decimal" data-key="test:${i}:6" aria-label="${esc(t)}, settimana 6">`).join("")}</div></div>`;
      // gruppo di nomi toccabili: {title?, items:[nome,...]}
      case "chips": return `<div class="chipbox">${b.title ? `<h4>${esc(b.title)}</h4>` : ""}<div class="chips">${b.items.map(chip).join("")}</div>${b.text ? `<p class="small">${rich(b.text)}</p>` : ""}</div>`;
      // schede con titolo e testo: {items:[{title, sub?, text, chips?}]}
      case "cards": return `<div class="grid">${b.items.map(i => `<article class="card"><h3>${esc(i.title)}</h3>${i.sub ? `<div class="load">${esc(i.sub)}</div>` : ""}${i.text ? `<p>${rich(i.text)}</p>` : ""}${i.list ? `<ul>${i.list.map(l => `<li>${rich(l)}</li>`).join("")}</ul>` : ""}${i.chips ? `<div class="chips">${i.chips.map(chip).join("")}</div>` : ""}</article>`).join("")}</div>`;
      // sezioni che si aprono: {items:[{title, blocks}]}
      case "accordion": return `<div class="acc">${b.items.map(i => `<details${i.open ? " open" : ""}><summary>${esc(i.title)}</summary><div class="acc-body">${(i.blocks || []).map(block).join("")}</div></details>`).join("")}</div>`;
      case "tree": return `<div class="card">${tree(b.items)}</div>`;
      case "steps": return `<ol class="steps">${b.items.map(i => `<li><b>${esc(i.title)}</b><span>${rich(i.text)}</span></li>`).join("")}</ol>`;
      // lista da spuntare, salvata sul telefono: {id, items:[...]}
      case "checklist": return `<div class="card"><ul class="checks">${b.items.map((c, i) => `<li><label><input type="checkbox" data-key="chk:${esc(b.id)}:${i}"> ${rich(c)}</label></li>`).join("")}</ul></div>`;
      case "links": return `<div class="menu">${b.items.map(i => `<a class="tile" href="${esc(i.href)}"><b>${esc(i.label)}</b>${i.text ? `<span>${esc(i.text)}</span>` : ""}</a>`).join("")}</div>`;
      default: return "";
    }
  };

  // collega pulsanti, spunte e campi alla memoria del telefono
  const wire = root => {
    root.querySelectorAll("[data-key]").forEach(el => {
      const k = el.dataset.key, v = store.get(k);
      if (el.tagName === "BUTTON") {
        if (v === "1") { el.classList.add("on"); el.setAttribute("aria-pressed", "true"); }
        el.addEventListener("click", () => { const on = el.classList.toggle("on"); el.setAttribute("aria-pressed", on); store.set(k, on ? "1" : "0"); });
      } else if (el.type === "checkbox") {
        el.checked = v === "1";
        el.addEventListener("change", () => store.set(k, el.checked ? "1" : "0"));
      } else {
        if (v !== null) el.value = v;
        el.addEventListener("input", () => store.set(k, el.value));
      }
    });
  };

  // scheda a comparsa con il significato di un termine
  const sheet = {
    el: null,
    open(g) {
      if (!this.el) {
        this.el = document.createElement("div");
        this.el.className = "sheet";
        this.el.innerHTML = `<div class="sheet-bg"></div><div class="sheet-box" role="dialog" aria-modal="true"></div>`;
        document.body.appendChild(this.el);
        this.el.querySelector(".sheet-bg").addEventListener("click", () => this.close());
        document.addEventListener("keydown", e => { if (e.key === "Escape") this.close(); });
      }
      this.el.querySelector(".sheet-box").innerHTML = `<button type="button" class="x" aria-label="Chiudi">×</button>
        <div class="eyebrow">${esc(g.cat || "")}</div><h3>${esc(g.t)}</h3>${g.jp ? `<div class="jp">${esc(g.jp)}</div>` : ""}
        <p>${rich(g.d)}</p>${g.n ? `<p class="small">${rich(g.n)}</p>` : ""}`;
      this.el.querySelector(".x").addEventListener("click", () => this.close());
      this.el.classList.add("on");
    },
    close() { if (this.el) this.el.classList.remove("on"); }
  };
  document.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest(".chip.has");
    if (!b) return;
    const g = GLOSS.find(x => norm(x.t) === b.dataset.term);
    if (g) sheet.open(g);
  });

  window.R = { esc, rich, store, norm, block, wire, chip, lookup, sheet, uid: () => ++uid };
})();
