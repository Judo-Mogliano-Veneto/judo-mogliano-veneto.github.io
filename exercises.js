/* Esercizi: nome, dose, carico, note e posizioni di partenza/arrivo.
   Per cambiare dosi, carichi o consigli basta modificare i testi tra virgolette. */
(function () {
  const { P, fr, mirror, hang, quad, wgs, cossackL } = window.Fig;
  window.EXERCISES = {
    dinamico: [
      { name: "Polsi e dita", dose: "30 s", labels: ["dita in su", "dita in giù"], f: [
          P({ a1: [4, 4], a2: [0, 0], hd1: 82, hd2: 82, hot: ["a1", "a2"] }), P({ a1: [4, 4], a2: [0, 0], hd1: -72, hd2: -72, hot: ["a1", "a2"] })],
        cues: ["Braccia tese avanti, piega i polsi su e giù, poi ruotali nei due sensi", "Apri e chiudi i pugni con forza: è la presa del kumi kata"] },
      { name: "Circonduzioni delle braccia", dose: "10 + 10", labels: ["avanti", "su", "dietro"], f: [
          P({ a1: [6, 6], hot: ["u1"] }), P({ a1: [92, 92], hot: ["u1"], spin: [{ at: "sh", r: 66 }] }), P({ a1: [184, 184], hot: ["u1"] })],
        cues: ["Cerchi ampi con il braccio teso: dieci avanti, dieci indietro", "Busto fermo, addome contratto, non inarcare la schiena"] },
      { name: "Rotazioni toraciche a quattro zampe", dose: "8 per lato", labels: ["mano dietro la testa", "gomito verso il soffitto"], f: [
          Object.assign({}, quad, { a1: [78, 55], w1: undefined, hd1: 90, hh: 20, hot: ["core", "backU"] }),
          Object.assign({}, quad, { a1: [90, 90], w1: undefined, hd1: 90, hh: 62, hot: ["core", "backU"] })],
        cues: ["Mano dietro la testa, apri il gomito verso il soffitto seguendolo con lo sguardo", "Il bacino non si muove: ruota solo il torace"] },
      { name: "Circonduzioni d'anca in piedi", dose: "8 per lato, 2 sensi", labels: ["ginocchio su", "ginocchio aperto"], f: [
          fr({ f1: { fk: [78, -92], sc: [.42, 1] }, f2: { p: [-10, 9] }, hot: ["t1", "glute"] }),
          fr({ f1: { fk: [4, -100] }, f2: { p: [-10, 9] }, hot: ["t1", "glute"] })],
        cues: ["Visto da davanti: porta il ginocchio su, aprilo di lato e riportalo giù", "Appoggiati al muro se perdi l'equilibrio, busto dritto"] },
      { name: "Slanci della gamba", dose: "10 + 10 per gamba", labels: ["avanti", "dietro"], f: [
          P({ f1: { p: [80, 64], d: 70, h: [0, 1] }, f2: { p: [-3, 9] }, a1: [20, 10], a2: [22, 12], hot: ["t1", "glute"] }),
          P({ ta: 80, f1: { p: [-53, 28], d: -70, h: [0, 1] }, f2: { p: [3, 9] }, a1: [40, 28], a2: [42, 30], hot: ["t1", "glute"] })],
        cues: ["Gamba tesa avanti e indietro, poi lateralmente davanti al corpo", "Gamba d'appoggio ferma, ampiezza crescente a ogni ripetizione"] },
      { name: "Cossack squat", dose: "6 per lato", labels: ["a sinistra", "a destra"], f: [
          cossackL, mirror(cossackL)],
        cues: ["Visto da davanti: scendi su una gamba, l'altra tesa con la punta in su", "Tallone a terra, petto alto, mani giunte davanti al petto"] },
      { name: "World's greatest stretch", dose: "5 per lato", labels: ["mani a terra", "apertura"], f: [
          Object.assign({}, wgs, { hot: ["t1", "t2"] }),
          Object.assign({}, wgs, { w1: undefined, a1: [88, 92], hd1: 90, hh: 62, hot: ["t1", "t2"] })],
        cues: ["Affondo lungo, mani a terra accanto al piede avanti", "Poi ruota il busto e porta il braccio verso il soffitto"] },
      { name: "Collo", dose: "5 per lato, lento", labels: ["sinistra", "destra"], f: [
          fr({ hh: 122 }), fr({ hh: 58 })],
        cues: ["Solo inclinazioni laterali, ampiezza comoda", "Niente rotazioni forzate né ponte sul collo"] }
    ],
    a: [
      { name: "Bulgarian split squat", pair: "1A", dose: "3 × 8 per gamba", load: "Base: 1 disco per mano (10 kg). Alto: 2 dischi per mano (20 kg)", f: [
          { hip: [-8, 89], ta: 84, f1: { p: [28, 9], h: [1, .3] }, f2: { p: [-64, 53], d: 185, h: [0, -1] }, a1: [-90, -90], a2: [-92, -90], plates: hang, bench: [{ x1: -122, x2: -58, top: 45 }], hh: 84, hot: ["t1", "glute"] },
          { hip: [-14, 55], ta: 80, f1: { p: [28, 9], h: [1, .3] }, f2: { p: [-64, 53], d: 185, h: [0, -1] }, a1: [-88, -90], a2: [-90, -90], plates: hang, bench: [{ x1: -122, x2: -58, top: 45 }], hh: 80, hot: ["t1", "glute"] }],
        cues: ["Piede dietro sul bordo della panca, scendi in verticale", "Ginocchio davanti in linea col piede, tallone a terra"] },
      { name: "Dip tra due panche", pair: "1B", dose: "3 × 8–12", load: "Base: corpo libero. Alto: un disco sul grembo (5 kg)", f: [
          { sh: [-12, 105], ta: 104, f1: { p: [86, 56], d: 70, h: [0, 1] }, f2: { p: [82, 56], d: 70, h: [0, 1] }, w1: { p: [-14, 49], h: [-1, -.2] }, w2: { p: [-18, 49], h: [-1, -.2] }, hd1: 0, hd2: 0, hh: 80,
            bench: [{ x1: -54, x2: -12, top: 45 }, { x1: 70, x2: 110, top: 45 }], hot: ["u1", "u2"] },
          { sh: [-8, 88], ta: 102, f1: { p: [86, 56], d: 70, h: [0, 1] }, f2: { p: [82, 56], d: 70, h: [0, 1] }, w1: { p: [-14, 49], h: [-1, -.1] }, w2: { p: [-18, 49], h: [-1, -.1] }, hd1: 0, hd2: 0, hh: 78,
            bench: [{ x1: -54, x2: -12, top: 45 }, { x1: 70, x2: 110, top: 45 }], hot: ["u1", "u2"] }],
        cues: ["Mani sul bordo di una panca, talloni sull'altra", "Scendi finché il braccio è parallelo, gomiti indietro, spalle basse"] },
      { name: "Stacco a una gamba", pair: "2A", dose: "3 × 8 per gamba", load: "Base: 1 disco per mano (10 kg). Alto: 2 dischi per mano (20 kg)", f: [
          P({ f1: { p: [4, 9] }, f2: { p: [-32, 48], d: -70, h: [1, -.3] }, a1: [-90, -90], a2: [-92, -90], plates: hang, hot: ["t1", "glute"] }),
          { hip: [-2, 92], ta: 12, f1: { p: [4, 9] }, f2: { p: [-86, 74], d: -75, h: [0, 1] }, a1: [-90, -90], a2: [-92, -90], plates: hang, hh: 20, hot: ["t1", "glute", "backU"] }],
        cues: ["Busto e gamba libera si abbassano e salgono insieme, come un'altalena", "Schiena piatta, ginocchio d'appoggio morbido"] },
      { name: "Flessioni con i piedi sulla panca", pair: "2B", dose: "3 × 10–15", load: "Base: corpo libero. Alto: zaino con 2 dischi (10 kg)", f: [
          { sh: [30, 59], auto: ["f1", 87], f1: { p: [-99, 63], d: -75, h: [0, 1] }, f2: { p: [-97, 63], d: -75, h: [0, 1] }, w1: { p: [30, 3], h: [-1, .3] }, w2: { p: [26, 3], h: [-1, .3] }, hd1: 0, hd2: 0, hd: 12, bench: [{ x1: -128, x2: -88, top: 45 }], hot: ["u1", "u2", "chest"] },
          { sh: [30, 45], auto: ["f1", 87], f1: { p: [-99, 63], d: -75, h: [0, 1] }, f2: { p: [-97, 63], d: -75, h: [0, 1] }, w1: { p: [30, 3], h: [-1, .3] }, w2: { p: [26, 3], h: [-1, .3] }, hd1: 0, hd2: 0, hd: 12, bench: [{ x1: -128, x2: -88, top: 45 }], hot: ["u1", "u2", "chest"] }],
        cues: ["Mani a terra sotto le spalle, piedi sulla panca, corpo in linea", "Gomiti a 45° dal busto, scendi finché il petto sfiora il pavimento"] },
      { name: "Pinch hold", pair: "3A", dose: "3 × max s", load: "2 dischi lisci affiancati per mano (10 kg per mano)", f: [
          P({ a1: [-90, -90], a2: [-92, -90], plates: [{ at: "w1", off: [0, -8], r: 11, n: 2 }, { at: "w2", off: [0, -8], r: 11, n: 2 }], hot: ["a1", "a2"] })],
        cues: ["Stringi i dischi con le dita, pollice contro le altre dita", "Obiettivo: 40 s. È la presa del judogi"] },
      { name: "Russian twist", pair: "3B", dose: "3 × 20 tocchi", load: "1 disco (5 kg)", f: [
          { hip: [0, 15], ta: 122, f1: { p: [62, 34], d: 20, h: [0, 1] }, f2: { p: [66, 30], d: 20, h: [0, 1] }, w1: { p: [24, 62], h: [0, -1] }, w2: { p: [27, 60], h: [0, -1] }, plates: [{ at: "w1", off: [8, 1], r: 11 }], hh: 112, hot: ["core"] },
          { hip: [0, 15], ta: 122, f1: { p: [62, 34], d: 20, h: [0, 1] }, f2: { p: [66, 30], d: 20, h: [0, 1] }, w1: { p: [18, 24], h: [0, -1] }, w2: { p: [17, 25], h: [0, -1] }, plates: [{ at: "w1", off: [8, 1], r: 11 }], hh: 112, hot: ["core"] }],
        labels: ["al centro", "a lato"],
        cues: ["Seduto con il busto inclinato indietro, piedi sollevati se riesci", "Ruota il busto da un lato all'altro e tocca terra col disco"] }
    ],
    b: [
      { name: "Rematore a un braccio", pair: "1A", dose: "3 × 10–12 per braccio", load: "Base: 2 dischi impilati (10 kg). Alto: borsa con 4 dischi (20 kg)", f: [
          { sh: [52, 102], ta: 12, f1: { p: [-28, 10] }, f2: { p: [-36, 62], d: 190, h: [1, -.2] }, w1: { p: [56, 48], h: [-1, 0] }, w2: { p: [62, 50], h: [-1, 0] }, hd2: 0, hh: 28,
            plates: [{ at: "w1", off: [0, -9], r: 11, n: 2 }], bench: [{ x1: -18, x2: 90, top: 45 }], hot: ["backU", "u1"] },
          { sh: [52, 102], ta: 12, f1: { p: [-28, 10] }, f2: { p: [-36, 62], d: 190, h: [1, -.2] }, w1: { p: [34, 86], h: [-1, -.1] }, w2: { p: [62, 50], h: [-1, 0] }, hd2: 0, hh: 28,
            plates: [{ at: "w1", off: [0, -9], r: 11, n: 2 }], bench: [{ x1: -18, x2: 90, top: 45 }], hot: ["backU", "u1"] }],
        cues: ["Mano e ginocchio sulla panca, schiena piatta", "Tira il gomito verso l'anca, pausa 1 s in alto, scendi in 2 s"] },
      { name: "Hip thrust", pair: "1B", dose: "3 × 12", load: "Base: 4 dischi sul bacino (20 kg). Alto: su una gamba sola con 2 dischi (10 kg)", f: [
          { sh: [-26, 56], ta: 124, f1: { p: [66, 9], h: [0, 1] }, f2: { p: [62, 9], h: [0, 1] }, w1: { p: [10, 29], h: [0, -1] }, w2: { p: [8, 27], h: [0, -1] }, hd: -8,
            plates: [{ at: "hip", off: [4, 14], r: 12, n: 4 }], bench: [{ x1: -62, x2: -18, top: 45 }], hot: ["glute", "t1"] },
          { sh: [-26, 56], ta: 181, f1: { p: [66, 9], h: [0, 1] }, f2: { p: [62, 9], h: [0, 1] }, w1: { p: [28, 68], h: [0, -1] }, w2: { p: [26, 66], h: [0, -1] }, hd: -8,
            plates: [{ at: "hip", off: [4, 14], r: 12, n: 4 }], bench: [{ x1: -62, x2: -18, top: 45 }], hot: ["glute", "t1"] }],
        cues: ["Scapole sul bordo della panca, disco sul bacino", "Spingi coi talloni fino a busto e cosce in linea: è la spinta d'anca delle proiezioni"] },
      { name: "Alzata da seduto su una gamba", pair: "2A", dose: "3 × 6–8 per gamba", load: "Base: corpo libero. Alto: 1 disco al petto (5 kg)", f: [
          { hip: [-18, 53], ta: 72, f1: { p: [27, 9], h: [1, .3] }, f2: { p: [60, 38], d: 60, h: [0, 1] }, a1: [20, 10], a2: [22, 12], bench: [{ x1: -38, x2: -2, top: 45 }], hh: 72, hot: ["t1", "glute"] },
          { hip: [24, 95], ta: 86, f1: { p: [26, 9], h: [1, .2] }, f2: { p: [100, 64], d: 70, h: [0, 1] }, a1: [12, 6], a2: [14, 8], bench: [{ x1: -38, x2: -2, top: 45 }], hot: ["t1", "glute"] }],
        cues: ["Seduto sul bordo della panca, un piede a terra e l'altro teso avanti", "Alzati spingendo col tallone, senza darti slancio. Scendi piano in 3 s"] },
      { name: "Distensione sopra la testa", pair: "2B", dose: "3 × 10", load: "1 disco per mano (10 kg)", f: [
          P({ w1: { p: [8, 163], h: [0, -1] }, w2: { p: [4, 162], h: [0, -1] }, a1: undefined, a2: undefined, hd1: 90, hd2: 90, plates: [{ at: "w1", off: [10, 2], r: 11 }, { at: "w2", off: [10, 2], r: 11 }], hot: ["u1", "u2"] }),
          P({ w1: { p: [2, 201], h: [-1, 0] }, w2: { p: [-2, 200], h: [-1, 0] }, a1: undefined, a2: undefined, hd1: 90, hd2: 90, plates: [{ at: "w1", off: [10, 2], r: 11 }, { at: "w2", off: [10, 2], r: 11 }], hot: ["u1", "u2"] })],
        cues: ["Addome contratto, glutei stretti, niente arco lombare", "Spingi in espirazione, braccia tese sopra la testa senza bloccare i gomiti"] },
      { name: "Farmer walk a pinza", pair: "3A", dose: "3 × 20 m", load: "2 dischi per mano (20 kg)", labels: ["passo", "passo"], f: [
          P({ sh: [0, 144], f1: { p: [22, 9] }, f2: { p: [-22, 9] }, a1: [-90, -90], a2: [-92, -90], plates: [{ at: "w1", off: [0, -8], r: 11, n: 2 }, { at: "w2", off: [0, -8], r: 11, n: 2 }], hot: ["a1", "a2", "core"] }),
          P({ sh: [0, 144], f1: { p: [-22, 9], h: [1, 0] }, f2: { p: [22, 9] }, a1: [-90, -90], a2: [-92, -90], plates: [{ at: "w1", off: [0, -8], r: 11, n: 2 }, { at: "w2", off: [0, -8], r: 11, n: 2 }], hot: ["a1", "a2", "core"] })],
        cues: ["Spalle basse, passi corti e veloci, sguardo avanti", "Se la presa cede, la serie è finita"] },
      { name: "Plank laterale", pair: "3B", dose: "3 × 30 s per lato", load: "Corpo libero", view: "front", f: [
          { sh: [108, 52], ta: 2, f1: { p: [-22, 10] }, f2: { p: [-22, 24] }, a1: [-90, -90], fl1: .12, a2: [90, 90], hh: 2, hot: ["core"] }],
        cues: ["Gomito sotto la spalla, corpo in linea dalla testa ai piedi", "Bacino alto: dalla settimana 4, 40 s; dalla 5, 45 s"] },
      { name: "Rematore prono sulla panca", pair: "3C", dose: "3 × 12", load: "1 disco per mano (10 kg), poi 2 dischi per mano (20 kg)", f: [
          { hip: [-2, 56], ta: 0, f1: { p: [-90, 57], d: 180, h: [0, 1] }, f2: { p: [-90, 56], d: 180, h: [0, 1] }, w1: { p: [52, 20], h: [-1, 0] }, w2: { p: [48, 20], h: [-1, 0] }, hh: 22,
            plates: [{ at: "w1", off: [0, -2], r: 11 }, { at: "w2", off: [0, -2], r: 11 }], bench: [{ x1: -110, x2: 62, top: 45 }], hot: ["backU", "u1", "u2"] },
          { hip: [-2, 56], ta: 0, f1: { p: [-90, 57], d: 180, h: [0, 1] }, f2: { p: [-90, 56], d: 180, h: [0, 1] }, w1: { p: [30, 66], h: [-1, .4] }, w2: { p: [27, 66], h: [-1, .4] }, hh: 22,
            plates: [{ at: "w1", off: [0, -2], r: 11 }, { at: "w2", off: [0, -2], r: 11 }], bench: [{ x1: -110, x2: 62, top: 45 }], hot: ["backU", "u1", "u2"] }],
        cues: ["Sdraiato a pancia in giù, petto appoggiato alla panca, braccia che pendono", "Tira i gomiti verso il soffitto stringendo le scapole, pausa 1 s in alto, scendi in 3 s"] }
    ],
    statico: [
      { name: "Farfalla", dose: "45 s", view: "front", f: [
          { hip: [0, 11], ta: 90, f1: { p: [8, 9], h: [1, .1] }, f2: { p: [-8, 9], h: [-1, .1] }, w1: { p: [8, 14], h: [1, -.2] }, w2: { p: [-8, 14], h: [-1, -.2] }, hh: 90, hot: ["t1", "t2"] }],
        cues: ["Piante dei piedi unite, talloni vicini al bacino", "Gomiti spingono piano sulle ginocchia, schiena lunga"] },
      { name: "Rana", dose: "45 s", f: [
          { sh: [12, 38], ta: -10, f1: { p: [-55, 8], d: 180, h: [1, -.5] }, f2: { p: [-58, 8], d: 180, h: [1, -.5] }, w1: { p: [42, 5], h: [0, -1] }, w2: { p: [38, 5], h: [0, -1] }, hd1: 0, hd2: 0, hh: -10, hot: ["t1", "glute"] }],
        cues: ["Sugli avambracci, ginocchia larghe (viste di lato si sovrappongono)", "Spingi il bacino indietro verso i talloni"] },
      { name: "Gambe divaricate", dose: "45 s", view: "front", f: [
          { hip: [0, 11], ta: 90, f1: { p: [94, 12], h: [0, 1] }, f2: { p: [-94, 12], h: [0, 1] }, w1: { p: [24, 4], h: [1, -.5] }, w2: { p: [-24, 4], h: [-1, -.5] }, hh: 90, hot: ["t1", "t2"] }],
        cues: ["Seduto, gambe larghe e punte in su", "Poi porta il petto in avanti, schiena lunga, mani avanti"] },
      { name: "Piegamento a gambe tese", dose: "45 s × 3", f: [
          { hip: [0, 11], ta: 25, f1: { p: [88, 14], d: 80, h: [0, 1] }, f2: { p: [84, 14], d: 80, h: [0, 1] }, w1: { p: [90, 26], h: [0, 1] }, w2: { p: [86, 26], h: [0, 1] }, hh: 12, hot: ["t1", "t2", "backU"] }],
        cues: ["Prima una gamba alla volta (l'altra piegata), poi entrambe", "Porta l'ombelico verso le cosce, non la testa alle ginocchia"] },
      { name: "Piccione", dose: "45 s per lato", f: [
          { hip: [-6, 22], ta: 44, f1: { p: [-10, 9], h: [1, -.2], d: 0 }, f2: { p: [-92, 10], d: 180, h: [0, 1] }, w1: { p: [44, 3], h: [-1, .3] }, w2: { p: [40, 3], h: [-1, .3] }, hd1: 0, hd2: 0, hh: 30, hot: ["glute"] }],
        cues: ["Gamba davanti piegata di traverso, quella dietro tesa", "Poi scendi in avanti sugli avambracci"] },
      { name: "Couch stretch", dose: "45 s per lato", f: [
          { hip: [-8, 48], ta: 90, f1: { p: [34, 9], h: [1, .2] }, f2: { p: [-46, 52], d: 185, h: [0, -1] }, w1: { p: [32, 62], h: [-1, 0] }, w2: { p: [30, 60], h: [-1, 0] }, bench: [{ x1: -100, x2: -44, top: 45 }], hot: ["t2"] }],
        cues: ["Ginocchio dietro a terra, collo del piede sulla panca", "Stringi il gluteo e porta il bacino avanti"] },
      { name: "Pettorali al muro", dose: "45 s per lato", view: "front", f: [
          { sh: [0, 146], ta: 88, f1: { p: [14, 9], h: [1, 0] }, f2: { p: [-14, 9], h: [-1, 0] }, a1: [-100, -100], w2: { p: [-49, 172], h: [-.4, -1] }, hd2: 90, wall: { x: -56, side: -1 }, hot: ["chest"] }],
        cues: ["Avambraccio contro il muro o lo stipite, gomito a 90°", "Ruota il busto dalla parte opposta fino a sentire il petto"] },
      { name: "Dorsali sulla panca", dose: "45 s", f: [
          { hip: [0, 50], ta: 5, f1: { p: [-44, 8], d: 180, h: [1, -.5] }, f2: { p: [-47, 8], d: 180, h: [1, -.5] }, w1: { p: [80, 76], h: [0, -1] }, w2: { p: [78, 76], h: [0, -1] }, hd1: 90, hd2: 90, hh: -5, bench: [{ x1: 62, x2: 108, top: 45 }], hot: ["backU"] }],
        cues: ["In ginocchio, gomiti sulla panca, mani giunte dietro la testa", "Lascia scendere il petto verso terra"] },
      { name: "Polsi e avambracci", dose: "45 s per lato", labels: ["dita in su", "dita in giù"], f: [
          P({ a1: [4, 4], a2: [0, 4], hd1: 85, hd2: 85, hot: ["a1"] }), P({ a1: [4, 4], a2: [0, 4], hd1: -75, hd2: -75, hot: ["a1"] })],
        cues: ["Braccio teso avanti, l'altra mano tira le dita verso di te", "Prima dita verso l'alto, poi verso il basso"] },
      { name: "Torsione da sdraiato", dose: "45 s per lato", view: "front", top: true, f: [
          { hip: [0, 0], ta: 180, f1: { fk: [-96, -10] }, f2: { fk: [-102, -14] }, a1: [90, 90], a2: [-90, -90], hh: 188, hot: ["core"] }],
        cues: ["Vista dall'alto: spalle e braccia restano a terra", "Lascia cadere le ginocchia da un lato, respira e rilassa la schiena"] },
      { name: "Collo", dose: "20 s per posizione", labels: ["sinistra", "destra"], view: "front", f: [
          fr({ hh: 122, a1: undefined, w1: { p: [-6, 176], h: [1, .6] }, hd1: 200 }),
          mirror(fr({ hh: 122, a1: undefined, w1: { p: [-6, 176], h: [1, .6] }, hd1: 200 }))],
        cues: ["Inclinazione laterale con la mano sul lato opposto, tirando dolcemente", "Mai forzare"] }
    ]
  };

})();
