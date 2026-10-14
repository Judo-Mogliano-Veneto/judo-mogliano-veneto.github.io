/* Costruisce la pagina da content.js ed exercises.js. Non serve modificarlo per cambiare i contenuti. */
(function () {
  const C = window.CONTENT, EX = window.EXERCISES, root = document.getElementById("app");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem("guida:" + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("guida:" + k, v); } catch (e) { /* storage non disponibile */ } }
  };

  const table = (head, rows) => `<div class="tbl"><table><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td${i === 0 && /^\d+$/.test(c) ? ' class="n"' : ""}>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  const card = (ex, i) => {
    let fig = "";
    try { fig = window.Fig.figure(ex); } catch (e) { console.warn(ex.name, e); }
    return `<article class="card"><div class="fig">${fig}</div>
      <div class="top"><h3>${ex.pair ? `<span class="pair">${esc(ex.pair)}</span>` : `<span class="num">${i + 1}</span>`}${esc(ex.name)}</h3><span class="dose">${esc(ex.dose)}</span></div>
      ${ex.load ? `<div class="load">${esc(ex.load)}</div>` : ""}
      <ul>${ex.cues.map(c => `<li>${esc(c)}</li>`).join("")}</ul></article>`;
  };

  const block = b => {
    switch (b.type) {
      case "text": return `<p>${esc(b.text)}</p>`;
      case "table": return table(b.head, b.rows);
      case "timeline": return `<div class="timeline">${b.items.map(t => `<div class="${esc(t.style || "")}"><span>${esc(t.time)}</span><b>${esc(t.title)}</b>${esc(t.text)}</div>`).join("")}</div>`;
      case "exercises": return `<div class="grid">${(EX[b.group] || []).map(card).join("")}</div>`;
      case "list": return `<div class="card"><ul>${b.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`;
      case "note": return `<div class="note"><b>${esc(b.title)}</b>${b.text ? `<p>${esc(b.text)}</p>` : ""}<ul class="checks">${(b.checks || []).map((c, i) => `<li><label><input type="checkbox" data-key="note:${esc(b.title)}:${i}"> ${esc(c)}</label></li>`).join("")}</ul></div>`;
      case "progress": return `<div class="tbl"><table><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r => `<tr><td class="n">${esc(r.week)}</td><td class="days">${r.dates.map((d, i) => `<button type="button" class="day" aria-pressed="false" data-key="done:${esc(r.week)}:${i}">${esc(d)}</button>`).join("")}</td><td>${esc(r.load)}</td><td>${esc(r.rhythm)}</td></tr>`).join("")}</tbody></table></div>`;
      case "tests": return `<div class="note"><b>${esc(b.title)}</b><p>${esc(b.text)}</p><div class="tests"><span></span><span class="h">Sett. 1</span><span class="h">Sett. 6</span>${b.items.map((t, i) => `<label for="t${i}a">${esc(t)}</label><input id="t${i}a" inputmode="decimal" data-key="test:${i}:1" aria-label="${esc(t)}, settimana 1"><input id="t${i}b" inputmode="decimal" data-key="test:${i}:6" aria-label="${esc(t)}, settimana 6">`).join("")}</div></div>`;
      default: return "";
    }
  };

  document.title = C.title;
  root.innerHTML = `
    <header><div class="eyebrow">${esc(C.eyebrow)}</div><h1>${esc(C.title)}</h1><p class="lead">${esc(C.lead)}</p>
      <div class="legend">${C.legend.map(l => `<span>${l.color ? `<i style="background:${l.color}"></i>` : ""}${esc(l.text)}</span>`).join("")}</div></header>
    <nav aria-label="Sezioni"><ul>${C.sections.map(s => `<li><a href="#${esc(s.id)}">${esc(s.nav)}</a></li>`).join("")}</ul></nav>
    ${C.sections.map(s => `<section id="${esc(s.id)}"><div class="sec-head"><h2>${s.tag ? `<span class="tag">${esc(s.tag)}</span>` : ""}${esc(s.title)}</h2>${s.intro ? `<p>${esc(s.intro)}</p>` : ""}</div>${s.blocks.map(block).join("")}</section>`).join("")}`;

  // stato salvato sul telefono: sedute fatte, test, promemoria
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

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => { /* offline non disponibile */ });
})();
