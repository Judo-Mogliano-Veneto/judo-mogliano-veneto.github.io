/* Disegni dei passi (vista dall'alto e vista laterale) per le tecniche di tecniche.js.
   Formati: vedi l'intestazione di pianta.js e laterale.js. Ogni voce: DISEGNI[id] = { pianta: [4 passi], lato: { cam, passi: [4 passi] } } */
(function () {
  const DISEGNI = {};


  (window.TECNICHE || []).forEach(t => {
    const d = DISEGNI[t.id]; if (!d) return;
    t.passi.forEach((p, i) => {
      if (d.pianta && d.pianta[i]) p.pianta = d.pianta[i];
      if (d.lato && d.lato.passi[i]) { p.lato = d.lato.passi[i]; t.cam = d.lato.cam; }
    });
  });
})();
