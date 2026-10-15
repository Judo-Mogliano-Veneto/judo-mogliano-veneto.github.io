/* Disegni dei passi (vista dall'alto e vista laterale) per le tecniche di tecniche.js.
   Formati: vedi l'intestazione di pianta.js e laterale.js. Ogni voce: DISEGNI[id] = { pianta: [4 passi], lato: { cam, passi: [4 passi] } } */
(function () {
  const DISEGNI = {};

  // Gruppo 1: ashi waza + uchi mata (vista dall'alto e laterale)
  (() => {
    // ---------- vista dall'alto: posizione iniziale comune ----------
    const T0 = { c: [0, 0], sx: [-14, -4], dx: [14, -4], etichetta: [0, -24] };
    const U0 = { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [0, 90] };
    const PR = (t) => [{ da: [t[0] + 22, t[1]], a: [7, 56] }, { da: [t[0] - 22, t[1]], a: [-31, 54] }];
    const start = { tori: T0, uke: U0, prese: [{ da: [22, 0], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }] };
  
    // ---------- vista laterale: posizione iniziale comune ----------
    const st1 = { tori: { pelvis: [0, 92, 0], yaw: 0, lean: 5, piedi: { dx: [2, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [44, 128, 8], sx: [40, 104, -26] } },
      uke: { pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } } };
    const GR = "#6b7480", RED = "#c8372d";
    const tb = (o) => ({ ...st1.tori, ...o }), ub = (o) => ({ ...st1.uke, ...o });
  
    // =====================================================================
    DISEGNI["de-ashi-barai"] = {
      pianta: [
        { tori: T0, uke: { c: [0, 60], sx: [14, 68], dx: [-14, 50], alza: "dx", prima: { dx: [-14, 68] }, etichetta: [14, 90] },
          prese: PR([0, 0]),
          frecce: [{ da: [-26, 70], a: [-26, 50], tipo: "piede", testo: "uke avanza col destro", fine: true, tx: -30, ty: 62 }] },
        { tori: T0, uke: { c: [-6, 58], sx: [14, 68], dx: [-20, 46], alza: "dx", etichetta: [14, 90] },
          prese: [{ da: [22, 0], a: [1, 50] }, { da: [-22, 0], a: [-40, 48] }],
          frecce: [{ da: [-2, 64], a: [-44, 64], tipo: "squilibrio", testo: "di lato, verso la tua sinistra", fine: true }] },
        { tori: { c: [4, 0], sx: [-26, 2, -20], dx: [14, -4], alza: "sx", prima: { sx: [-14, -4] }, etichetta: [6, -24] }, uke: { c: [-6, 58], sx: [14, 68], dx: [-20, 44], alza: "dx", etichetta: [14, 90] },
          prese: [{ da: [26, 0], a: [1, 50] }, { da: [-18, 0], a: [-40, 48] }],
          frecce: [{ da: [-16, -14], a: [-28, -10], tipo: "piede", testo: "peso sul destro, sinistro sciolto", fine: true, tx: -20, ty: -18 }] },
        { tori: { c: [6, 2], rot: 10, sx: [-34, 40, -50], dx: [14, -4], alza: "sx", etichetta: [16, -24] }, uke: { c: [-12, 58], sx: [14, 68], dx: [-6, 34], alza: "dx", prima: { dx: [-20, 44] }, etichetta: [18, 90] },
          prese: [{ da: [27, 6], a: [-5, 50] }, { da: [-16, -2], a: [-46, 50] }],
          frecce: [{ da: [-42, 50], a: [-8, 26], tipo: "falciata", testo: "spazza la caviglia destra nel suo passo", curva: -.2 }, { da: [-18, 68], a: [-60, 74], tipo: "caduta", testo: "caduta sul fianco", fine: true, tx: -52, ty: 84 }] }
      ],
      lato: { cam: { yaw: 170, pitch: 30 }, passi: [
        { tori: tb({}),
          uke: ub({ pelvis: [58, 92, -2], lean: 6, piedi: { dx: [48, 4, -13], sx: [64, 0, 13] }, mani: { dx: [18, 128, -8], sx: [22, 104, 26] } }),
          frecce: [{ da: [64, 2, -26], a: [48, 2, -26], col: GR, dash: true }] },
        { tori: tb({ pelvis: [0, 92, -2], mani: { dx: [42, 132, 0], sx: [38, 110, -36] } }),
          uke: ub({ pelvis: [56, 92, -6], tilt: 8, piedi: { dx: [44, 6, -18], sx: [64, 0, 13] }, mani: { dx: [18, 126, -14], sx: [22, 108, 18] } }),
          frecce: [{ da: [58, 152, 0], a: [58, 152, -38] }] },
        { tori: tb({ pelvis: [2, 92, 4], piedi: { dx: [2, 0, 13], sx: [2, 8, -30] }, mani: { dx: [42, 132, 0], sx: [38, 110, -36] } }),
          uke: ub({ pelvis: [56, 92, -6], tilt: 8, piedi: { dx: [42, 6, -18], sx: [64, 0, 13] }, mani: { dx: [18, 126, -14], sx: [22, 108, 18] } }),
          frecce: [{ da: [-4, 4, -14], a: [0, 8, -32], col: GR, dash: true }] },
        { tori: tb({ pelvis: [10, 86, 0], yaw: 10, lean: 0, tilt: 6, piedi: { dx: [4, 0, 14], sx: [42, 8, -22] }, mani: { dx: [42, 138, 2], sx: [36, 98, -40] } }),
          uke: ub({ pelvis: [54, 86, -12], tilt: 24, lean: 4, piedi: { dx: [38, 16, -2], sx: [62, 0, 13] }, mani: { dx: [16, 118, -20], sx: [22, 112, 12] } }),
          frecce: [{ da: [46, 6, -36], a: [34, 14, 2], col: RED }, { da: [56, 150, -14], a: [56, 96, -60] }] }
      ] }
    };
  
    // =====================================================================
    DISEGNI["hiza-guruma"] = {
      pianta: [
        { tori: T0, uke: { c: [0, 60], sx: [14, 68], dx: [-14, 52], alza: "dx", prima: { dx: [-14, 68] }, etichetta: [14, 90] },
          prese: PR([0, 0]),
          frecce: [{ da: [-24, 70], a: [-24, 52], tipo: "piede", testo: "uke avanza col destro", fine: true, tx: -30, ty: 62 }] },
        { tori: T0, uke: { c: [-4, 58], sx: [14, 68], dx: [-14, 52], etichetta: [14, 90] },
          prese: [{ da: [22, 0], a: [3, 50] }, { da: [-22, 0], a: [-37, 46] }],
          frecce: [{ da: [-6, 56], a: [-36, 28], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -40, ty: 20 }] },
        { tori: { c: [10, 18], rot: 35, sx: [-14, -4], dx: [32, 48, 20], prima: { dx: [14, -4] }, etichetta: [30, 2] }, uke: { c: [-4, 58], sx: [14, 68], dx: [-14, 52], etichetta: [14, 90] },
          prese: [{ da: [28, 30], a: [3, 50] }, { da: [-8, 6], a: [-37, 46] }],
          frecce: [{ da: [22, -4], a: [32, 34], tipo: "piede", testo: "fuori dal suo sinistro", fine: false, curva: .15 }, { da: [-14, 16], a: [-2, 30], tipo: "squilibrio", curva: .4, testo: "ruota", fine: true, tx: -16, ty: 34 }] },
        { tori: { c: [10, 22], rot: 50, sx: [-30, 52, 70], dx: [32, 48, 20], alza: "sx", etichetta: [32, 6] }, uke: { c: [-8, 56], sx: [14, 68], dx: [-14, 52], alza: "sx", etichetta: [14, 90] },
          prese: [{ da: [24, 38], a: [-1, 48] }, { da: [-4, 6], a: [-41, 40] }],
          frecce: [{ da: [-6, 64], a: [-46, 12], tipo: "caduta", testo: "gira sul ginocchio bloccato e cade", fine: true, curva: .3 }] }
      ],
      lato: { cam: { yaw: 160, pitch: 10 }, passi: [
        { tori: tb({}),
          uke: ub({ pelvis: [58, 92, -2], piedi: { dx: [50, 4, -13], sx: [64, 0, 13] }, mani: { dx: [18, 128, -8], sx: [22, 104, 26] } }),
          frecce: [{ da: [66, 2, -22], a: [50, 2, -22], col: GR, dash: true }] },
        { tori: tb({ mani: { dx: [44, 134, 4], sx: [30, 116, -36] } }),
          uke: ub({ pelvis: [56, 94, -4], lean: 16, tilt: 6, piedi: { dx: [50, 3, -13], sx: [64, 0, 13] }, mani: { dx: [14, 120, -14], sx: [24, 108, 20] } }),
          frecce: [{ da: [56, 154, 0], a: [28, 150, -26] }] },
        { tori: tb({ pelvis: [18, 92, 10], yaw: 35, piedi: { dx: [48, 0, 32], sx: [-2, 0, -13] }, mani: { dx: [38, 134, 6], sx: [22, 116, -34] } }),
          uke: ub({ pelvis: [56, 94, -4], lean: 16, tilt: 6, piedi: { dx: [50, 3, -13], sx: [64, 0, 13] }, mani: { dx: [16, 120, -10], sx: [28, 108, 20] } }),
          frecce: [{ da: [2, 2, 16], a: [46, 2, 32], col: GR, dash: true }] },
        { tori: tb({ pelvis: [20, 90, 12], yaw: 50, lean: -6, piedi: { dx: [48, 0, 32], sx: [48, 44, -26] }, ginocchio: { sx: [0, 1, 0] }, mani: { dx: [32, 136, 6], sx: [16, 104, -36] } }),
          uke: ub({ pelvis: [50, 92, -10], lean: 26, tilt: 22, piedi: { dx: [50, 3, -13], sx: [66, 10, 14] }, mani: { dx: [10, 110, -18], sx: [24, 112, 12] } }),
          frecce: [{ da: [48, 156, -10], a: [12, 100, -54] }] }
      ] }
    };
  
    // =====================================================================
    DISEGNI["sasae-tsurikomi-ashi"] = {
      pianta: [
        { tori: { c: [2, -2], sx: [-14, -4], dx: [24, -20, 20], prima: { dx: [14, -4] }, etichetta: [0, -30] }, uke: U0,
          prese: PR([2, -2]),
          frecce: [{ da: [22, -2], a: [28, -16], tipo: "piede", testo: "destro indietro in diagonale", fine: false, tx: 30, ty: -24 }] },
        { tori: { c: [2, -2], sx: [-14, -4], dx: [24, -20, 20], etichetta: [0, -30] }, uke: { c: [-4, 62], sx: [14, 68], dx: [-14, 64], etichetta: [14, 90] },
          prese: [{ da: [24, -2], a: [3, 52] }, { da: [-20, -2], a: [-37, 46] }],
          frecce: [{ da: [-6, 58], a: [-36, 28], tipo: "squilibrio", testo: "avanti-destra, in alto", fine: true, tx: -40, ty: 20 }] },
        { tori: { c: [6, -6], rot: 35, sx: [-14, -4], dx: [24, -20, 20], etichetta: [0, -30] }, uke: { c: [-4, 62], sx: [14, 68], dx: [-14, 64], etichetta: [14, 90] },
          prese: [{ da: [24, 6], a: [3, 52] }, { da: [-12, -18], a: [-37, 46] }],
          frecce: [{ da: [-14, 12], a: [-4, 28], tipo: "squilibrio", curva: .4, testo: "ruota a sinistra", fine: true, tx: -18, ty: 32 }] },
        { tori: { c: [6, -6], rot: 45, sx: [-18, 50, 70], dx: [24, -20, 20], alza: "sx", etichetta: [0, -30] }, uke: { c: [-8, 58], sx: [14, 68], dx: [-14, 64], alza: "sx", etichetta: [14, 90] },
          prese: [{ da: [20, 10], a: [-1, 50] }, { da: [-8, -22], a: [-41, 40] }],
          frecce: [{ da: [-10, 64], a: [-52, 14], tipo: "caduta", testo: "cade avanti sopra il piede bloccato", fine: true, curva: .3 }] }
      ],
      lato: { cam: { yaw: 160, pitch: 10 }, passi: [
        { tori: tb({ pelvis: [-4, 92, 4], piedi: { dx: [-16, 0, 22], sx: [-2, 0, -13] } }), uke: ub({}),
          frecce: [{ da: [2, 2, 20], a: [-14, 2, 28], col: GR, dash: true }] },
        { tori: tb({ pelvis: [-4, 92, 4], piedi: { dx: [-16, 0, 22], sx: [-2, 0, -13] }, mani: { dx: [42, 136, 6], sx: [26, 116, -34] } }),
          uke: ub({ pelvis: [60, 96, -4], lean: 16, tilt: 6, piedi: { dx: [62, 3, -13], sx: [64, 0, 13] }, mani: { dx: [16, 120, -14], sx: [24, 110, 20] } }),
          frecce: [{ da: [60, 156, 0], a: [32, 160, -26] }] },
        { tori: tb({ pelvis: [-4, 92, 6], yaw: 35, lean: -8, piedi: { dx: [-16, 0, 22], sx: [-2, 0, -13] }, mani: { dx: [40, 136, 6], sx: [20, 116, -36] } }),
          uke: ub({ pelvis: [60, 96, -4], lean: 18, tilt: 8, piedi: { dx: [62, 3, -13], sx: [64, 0, 13] }, mani: { dx: [16, 120, -14], sx: [24, 110, 20] } }),
          frecce: [{ da: [-6, 150, -14], a: [-4, 150, 14] }] },
        { tori: tb({ pelvis: [8, 86, 8], yaw: 45, lean: -10, piedi: { dx: [-16, 0, 22], sx: [50, 8, -18] }, mani: { dx: [30, 132, 4], sx: [14, 108, -36] } }),
          uke: ub({ pelvis: [52, 96, -10], lean: 36, tilt: 14, piedi: { dx: [58, 2, -13], sx: [68, 16, 16] }, mani: { dx: [8, 110, -16], sx: [22, 114, 14] } }),
          frecce: [{ da: [46, 156, -12], a: [6, 100, -54] }] }
      ] }
    };
  
    // =====================================================================
    DISEGNI["okuri-ashi-barai"] = {
      pianta: [
        { tori: { ...T0, dx: [32, -4], prima: { dx: [14, -4] } }, uke: { ...U0, sx: [32, 68], prima: { sx: [14, 68] } },
          prese: PR([0, 0]),
          frecce: [{ da: [16, 8], a: [30, 8], tipo: "piede" }, { da: [16, 80], a: [30, 80], tipo: "piede", testo: "di lato insieme", tx: 20, ty: 86 }] },
        { tori: { c: [14, 0], sx: [-8, -4], dx: [32, -4], prima: { sx: [-14, -4] }, etichetta: [14, -24] }, uke: { c: [14, 64], sx: [32, 68], dx: [6, 68], alza: "dx", prima: { dx: [-14, 68] }, etichetta: [14, 90] },
          prese: [{ da: [36, 0], a: [21, 56] }, { da: [-8, 0], a: [-17, 54] }],
          frecce: [{ da: [-12, 78], a: [2, 78], tipo: "piede", testo: "il destro va verso il sinistro", fine: true, tx: -14, ty: 84 }, { da: [24, 60], a: [54, 60], tipo: "squilibrio", testo: "solleva e accelera di lato", fine: false }] },
        { tori: { c: [16, 0], sx: [-2, 4, 10], dx: [32, -4], alza: "sx", prima: { sx: [-8, -4] }, etichetta: [14, -24] }, uke: { c: [16, 64], sx: [32, 68], dx: [12, 68], alza: "dx", etichetta: [14, 90] },
          prese: [{ da: [38, 0], a: [23, 56] }, { da: [-6, 0], a: [-15, 54] }],
          frecce: [{ da: [-14, 4], a: [-4, 12], tipo: "piede", testo: "peso sul destro, sinistro pronto", fine: true }] },
        { tori: { c: [20, 4], sx: [12, 64, -70], dx: [32, -4], alza: "sx", etichetta: [16, -24] }, uke: { c: [22, 66], sx: [42, 70], dx: [26, 68], alza: "entrambi", prima: { dx: [12, 68], sx: [32, 68] }, etichetta: [30, 94] },
          prese: [{ da: [42, 4], a: [29, 58] }, { da: [-2, 4], a: [-9, 56] }],
          frecce: [{ da: [0, 62], a: [36, 64], tipo: "falciata", testo: "spazza il destro contro il sinistro", fine: false }, { da: [16, 72], a: [-20, 82], tipo: "caduta", testo: "caduta di fianco", fine: true, tx: -14, ty: 90 }] }
      ],
      lato: { cam: { yaw: 140, pitch: 12 }, passi: [
        { tori: tb({ piedi: { dx: [2, 2, 28], sx: [-2, 0, -13] } }), uke: ub({ piedi: { dx: [64, 0, -13], sx: [62, 2, 30] } }),
          frecce: [{ da: [2, 2, 14], a: [2, 2, 28], col: GR, dash: true }, { da: [62, 2, 14], a: [62, 2, 30], col: GR, dash: true }] },
        { tori: tb({ pelvis: [0, 92, 14], piedi: { dx: [2, 0, 30], sx: [-2, 0, -8] }, mani: { dx: [44, 136, 22], sx: [40, 112, -10] } }),
          uke: ub({ pelvis: [64, 96, 14], piedi: { dx: [64, 6, 4], sx: [62, 0, 30] }, mani: { dx: [20, 132, 6], sx: [24, 110, 40] } }),
          frecce: [{ da: [64, 156, 14], a: [64, 168, 44] }] },
        { tori: tb({ pelvis: [2, 92, 16], piedi: { dx: [2, 0, 30], sx: [6, 6, -2] }, mani: { dx: [44, 136, 24], sx: [40, 112, -8] } }),
          uke: ub({ pelvis: [64, 96, 16], piedi: { dx: [64, 6, 10], sx: [62, 0, 30] }, mani: { dx: [20, 132, 8], sx: [24, 110, 42] } }),
          frecce: [{ da: [-4, 6, -10], a: [4, 6, 0], col: GR, dash: true }] },
        { tori: tb({ pelvis: [18, 86, 18], lean: 0, piedi: { dx: [4, 0, 32], sx: [58, 8, 8] }, mani: { dx: [46, 140, 28], sx: [40, 100, -2] } }),
          uke: ub({ pelvis: [64, 92, 16], tilt: 24, piedi: { dx: [64, 16, 28], sx: [62, 24, 42] }, mani: { dx: [24, 126, 6], sx: [26, 118, 34] } }),
          frecce: [{ da: [58, 8, -8], a: [60, 12, 26], col: RED }, { da: [66, 150, 18], a: [66, 96, -26] }] }
      ] }
    };
  
    // =====================================================================
    const KS = { c: [-4, 20], sx: [-14, -4], dx: [-8, 34], prima: { dx: [14, -4] }, etichetta: [-34, 4] };
    DISEGNI["ko-soto-gari"] = {
      pianta: [
        { tori: KS, uke: U0, prese: PR([-4, 20]),
          frecce: [{ da: [16, 6], a: [-4, 32], tipo: "piede", testo: "davanti al suo piede destro", fine: false, tx: 6, ty: 18, curva: .2 }] },
        { tori: { ...KS, prima: undefined }, uke: U0, prese: PR([-4, 20]),
          frecce: [{ da: [-4, 72], a: [-26, 104], tipo: "squilibrio", testo: "dietro-destra di uke", fine: true, tx: -30, ty: 108 }] },
        { tori: { c: [-6, 26], sx: [-26, 18, -20], dx: [-8, 34], alza: "sx", prima: { sx: [-14, -4] }, etichetta: [-34, 4] }, uke: { ...U0, c: [0, 66] }, prese: PR([-6, 26]),
          frecce: [{ da: [-20, -2], a: [-26, 12], tipo: "piede", testo: "sinistro pronto, gamba sciolta", fine: true, tx: -32, ty: 0 }] },
        { tori: { c: [-8, 28], rot: -10, sx: [-22, 82, 0], dx: [-8, 34], alza: "sx", etichetta: [-34, 4] }, uke: { c: [0, 68], sx: [14, 70], dx: [-16, 54], alza: "dx", prima: { dx: [-14, 68] }, etichetta: [16, 94] },
          prese: PR([-8, 28]),
          frecce: [{ da: [-28, 86], a: [-26, 50], tipo: "falciata", testo: "da dietro, verso le sue dita", fine: true, tx: -32, ty: 70 }, { da: [-2, 76], a: [-22, 112], tipo: "caduta", testo: "caduta", tx: -18, ty: 118 }] }
      ],
      lato: { cam: { yaw: 160, pitch: 10 }, passi: [
        { tori: tb({ pelvis: [18, 92, -4], piedi: { dx: [34, 0, -8], sx: [-2, 0, -13] }, mani: { dx: [52, 126, 8], sx: [44, 106, -28] } }), uke: ub({}),
          frecce: [{ da: [4, 2, 13], a: [30, 2, -6], col: GR, dash: true }] },
        { tori: tb({ pelvis: [18, 92, -4], lean: 10, piedi: { dx: [34, 0, -8], sx: [-2, 0, -13] }, mani: { dx: [58, 122, 8], sx: [46, 100, -30] } }),
          uke: ub({ pelvis: [68, 92, -4], lean: -14, tilt: 6, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [28, 124, -8], sx: [32, 104, 24] } }),
          frecce: [{ da: [72, 150, 0], a: [100, 150, -22] }] },
        { tori: tb({ pelvis: [24, 92, -4], lean: 10, piedi: { dx: [34, 0, -8], sx: [18, 8, -26] }, mani: { dx: [60, 122, 8], sx: [48, 100, -30] } }),
          uke: ub({ pelvis: [68, 92, -4], lean: -14, tilt: 6, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [30, 124, -8], sx: [34, 104, 24] } }),
          frecce: [{ da: [-2, 4, -18], a: [16, 8, -28], col: GR, dash: true }] },
        { tori: tb({ pelvis: [32, 86, -8], lean: 12, piedi: { dx: [34, 0, -8], sx: [72, 6, -22] }, mani: { dx: [66, 118, 6], sx: [54, 96, -30] } }),
          uke: ub({ pelvis: [72, 84, -6], lean: -28, tilt: 10, piedi: { dx: [54, 12, -16], sx: [64, 0, 14] }, mani: { dx: [40, 118, -10], sx: [42, 100, 22] } }),
          frecce: [{ da: [78, 4, -28], a: [56, 14, -28], col: RED }, { da: [76, 140, -6], a: [106, 96, -26] }] }
      ] }
    };
  
    // =====================================================================
    const KG = { c: [-6, 24], sx: [-14, -4], dx: [-4, 38], prima: { dx: [14, -4] }, etichetta: [-36, 6] };
    DISEGNI["ko-soto-gake"] = {
      pianta: [
        { tori: KG, uke: U0, prese: PR([-6, 24]),
          frecce: [{ da: [16, 6], a: [-2, 36], tipo: "piede", testo: "verso il suo fianco destro", fine: false, tx: 6, ty: 20, curva: .2 }] },
        { tori: { ...KG, prima: undefined }, uke: U0, prese: PR([-6, 24]),
          frecce: [{ da: [-4, 72], a: [-26, 104], tipo: "squilibrio", testo: "indietro-destra: peso sul tallone destro", fine: true }] },
        { tori: { c: [-8, 30], rot: -10, sx: [-22, 80, 0], dx: [-4, 38], prima: { sx: [-14, -4] }, etichetta: [-36, 6] }, uke: { ...U0, c: [-2, 66] }, prese: PR([-8, 30]),
          frecce: [{ da: [-26, 2], a: [-30, 74], tipo: "piede", testo: "fuori dalla sua gamba, dietro il tallone", fine: true, curva: .15 }] },
        { tori: { c: [-8, 30], rot: -10, sx: [-20, 64, 0], dx: [-4, 38], alza: "sx", prima: { sx: [-22, 80] }, etichetta: [-36, 6] }, uke: { c: [-2, 70], sx: [14, 70], dx: [-16, 56], alza: "dx", prima: { dx: [-14, 68] }, etichetta: [16, 94] },
          prese: PR([-8, 30]),
          frecce: [{ da: [-30, 84], a: [-28, 60], tipo: "falciata", testo: "aggancia e tira avanti-su", fine: true, tx: -34, ty: 76 }, { da: [-2, 76], a: [-22, 112], tipo: "caduta", testo: "caduta", tx: -18, ty: 118 }] }
      ],
      lato: { cam: { yaw: 160, pitch: 10 }, passi: [
        { tori: tb({ pelvis: [22, 92, -6], piedi: { dx: [38, 0, -4], sx: [-2, 0, -13] }, mani: { dx: [54, 126, 8], sx: [46, 106, -28] } }), uke: ub({}),
          frecce: [{ da: [4, 2, 13], a: [34, 2, -2], col: GR, dash: true }] },
        { tori: tb({ pelvis: [22, 92, -6], lean: 10, piedi: { dx: [38, 0, -4], sx: [-2, 0, -13] }, mani: { dx: [60, 120, 8], sx: [48, 98, -30] } }),
          uke: ub({ pelvis: [68, 90, -4], lean: -14, tilt: 6, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [30, 124, -8], sx: [34, 104, 24] } }),
          frecce: [{ da: [72, 150, 0], a: [100, 150, -22] }] },
        { tori: tb({ pelvis: [32, 88, -8], lean: 6, piedi: { dx: [38, 0, -4], sx: [72, 2, -22] }, mani: { dx: [64, 120, 6], sx: [52, 98, -30] } }),
          uke: ub({ pelvis: [68, 90, -4], lean: -14, tilt: 6, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [34, 124, -8], sx: [38, 104, 24] } }),
          frecce: [{ da: [8, 4, -24], a: [66, 4, -30], col: GR, dash: true }] },
        { tori: tb({ pelvis: [30, 88, -8], lean: 8, piedi: { dx: [38, 0, -4], sx: [58, 16, -20] }, mani: { dx: [66, 116, 6], sx: [54, 94, -30] } }),
          uke: ub({ pelvis: [72, 82, -6], lean: -30, tilt: 10, piedi: { dx: [54, 18, -16], sx: [64, 0, 14] }, mani: { dx: [40, 116, -10], sx: [42, 100, 22] } }),
          frecce: [{ da: [76, 6, -30], a: [56, 24, -30], col: RED }, { da: [76, 140, -6], a: [106, 96, -26] }] }
      ] }
    };
  
    // =====================================================================
    DISEGNI["ko-uchi-gari"] = {
      pianta: [
        { tori: { c: [0, 8], sx: [-12, 14], dx: [14, -4], prima: { sx: [-14, -4] }, etichetta: [0, -20] }, uke: U0, prese: PR([0, 8]),
          frecce: [{ da: [-24, -2], a: [-24, 14], tipo: "piede", testo: "sinistro un poco avanti", fine: true }] },
        { tori: { c: [0, 8], sx: [-12, 14], dx: [14, -4], etichetta: [0, -20] }, uke: U0, prese: PR([0, 8]),
          frecce: [{ da: [-4, 72], a: [-26, 104], tipo: "squilibrio", testo: "dietro-destra di uke", fine: true, tx: -30, ty: 108 }] },
        { tori: { c: [0, 14], sx: [-12, 14], dx: [0, 42], alza: "dx", prima: { dx: [14, -4] }, etichetta: [26, 6] }, uke: U0, prese: PR([0, 14]),
          frecce: [{ da: [16, 6], a: [4, 36], tipo: "piede", testo: "destro tra i suoi piedi", fine: false, tx: 10, ty: 22, curva: -.15 }] },
        { tori: { c: [-2, 18], sx: [-12, 14], dx: [-6, 74, 30], alza: "dx", etichetta: [26, 6] }, uke: { c: [0, 68], sx: [14, 70], dx: [-18, 54], alza: "dx", prima: { dx: [-14, 68] }, etichetta: [16, 94] },
          prese: PR([-2, 18]),
          frecce: [{ da: [-2, 80], a: [-16, 48], tipo: "falciata", testo: "da dentro, verso le sue dita", fine: false, tx: 4, ty: 52, curva: -.2 }, { da: [-4, 76], a: [-24, 112], tipo: "caduta", testo: "caduta", tx: -20, ty: 118 }] }
      ],
      lato: { cam: { yaw: -140, pitch: 12 }, passi: [
        { tori: tb({ pelvis: [6, 92, 0], piedi: { dx: [2, 0, 13], sx: [14, 0, -12] } }), uke: ub({}),
          frecce: [{ da: [-2, 2, -20], a: [14, 2, -20], col: GR, dash: true }] },
        { tori: tb({ pelvis: [6, 90, 0], lean: 10, piedi: { dx: [2, 0, 13], sx: [14, 0, -12] }, mani: { dx: [52, 118, 8], sx: [44, 98, -28] } }),
          uke: ub({ pelvis: [68, 90, -4], lean: -14, tilt: 6, mani: { dx: [26, 120, -8], sx: [30, 100, 24] } }),
          frecce: [{ da: [72, 150, 0], a: [100, 150, -22] }] },
        { tori: tb({ pelvis: [16, 92, 0], lean: 4, piedi: { dx: [42, 6, 0], sx: [14, 0, -12] }, mani: { dx: [56, 118, 8], sx: [48, 98, -28] } }),
          uke: ub({ pelvis: [68, 90, -4], lean: -14, tilt: 6, mani: { dx: [30, 120, -8], sx: [34, 100, 24] } }),
          frecce: [{ da: [4, 4, 14], a: [40, 6, 2], col: GR, dash: true }] },
        { tori: tb({ pelvis: [22, 90, -2], lean: 8, piedi: { dx: [72, 4, -6], sx: [14, 0, -12] }, mani: { dx: [60, 112, 8], sx: [52, 94, -28] } }),
          uke: ub({ pelvis: [72, 84, -6], lean: -28, tilt: 10, piedi: { dx: [54, 12, -18], sx: [64, 0, 14] }, mani: { dx: [36, 114, -10], sx: [40, 98, 22] } }),
          frecce: [{ da: [74, 6, -4], a: [52, 16, -14], col: RED }, { da: [76, 140, -6], a: [108, 96, -26] }] }
      ] }
    };
  
    // =====================================================================
    DISEGNI["harai-tsurikomi-ashi"] = {
      pianta: [
        { tori: { c: [0, -6], sx: [-14, -4], dx: [14, -20], prima: { dx: [14, -4] }, etichetta: [0, -32] }, uke: { c: [0, 58], sx: [14, 50], dx: [-14, 68], alza: "sx", prima: { sx: [14, 68] }, etichetta: [-14, 90] },
          prese: PR([0, -6]),
          frecce: [{ da: [24, 70], a: [24, 50], tipo: "piede", testo: "uke avanza col sinistro", tx: 28, ty: 62 }, { da: [24, -4], a: [24, -20], tipo: "piede", testo: "arretri", tx: 28, ty: -14 }] },
        { tori: { c: [0, -6], sx: [-14, -4], dx: [14, -20], etichetta: [0, -32] }, uke: { c: [2, 54], sx: [16, 44], dx: [-14, 68], alza: "sx", etichetta: [-14, 90] },
          prese: [{ da: [22, -6], a: [9, 46] }, { da: [-22, -6], a: [-29, 44] }],
          frecce: [{ da: [4, 60], a: [10, 26], tipo: "squilibrio", testo: "solleva e tira avanti", fine: false, tx: 14, ty: 22 }] },
        { tori: { c: [-4, -4], sx: [-14, -4], dx: [20, -14], alza: "dx", prima: { dx: [14, -20] }, etichetta: [-6, -30] }, uke: { c: [2, 52], sx: [16, 42], dx: [-14, 66], alza: "sx", etichetta: [-14, 90] },
          prese: [{ da: [18, -4], a: [9, 44] }, { da: [-26, -4], a: [-29, 42] }],
          frecce: [{ da: [28, -24], a: [28, -10], tipo: "piede", testo: "destro libero, peso sul sinistro", fine: false }] },
        { tori: { c: [-6, -2], rot: 20, sx: [-14, -4], dx: [30, 38, 70], alza: "dx", etichetta: [-8, -28] }, uke: { c: [8, 50], sx: [12, 52], dx: [-14, 66], alza: "sx", prima: { sx: [16, 42] }, etichetta: [-20, 90] },
          prese: [{ da: [14, 6], a: [15, 42] }, { da: [-26, -10], a: [-23, 40] }],
          frecce: [{ da: [34, 34], a: [16, 58], tipo: "falciata", testo: "spazza la caviglia sinistra", fine: false, curva: .2, tx: 34, ty: 64 }, { da: [12, 50], a: [40, 6], tipo: "caduta", testo: "caduta in avanti", fine: false, curva: -.2, tx: 44, ty: 4 }] }
      ],
      lato: { cam: { yaw: -22, pitch: 12 }, passi: [
        { tori: tb({ pelvis: [-6, 92, 0], piedi: { dx: [-16, 0, 13], sx: [-2, 0, -13] } }),
          uke: ub({ pelvis: [58, 92, 2], piedi: { dx: [64, 0, -13], sx: [48, 4, 13] }, mani: { dx: [18, 128, -8], sx: [22, 104, 26] } }),
          frecce: [{ da: [64, 2, 24], a: [48, 2, 24], col: GR, dash: true }, { da: [2, 2, 24], a: [-14, 2, 24], col: GR, dash: true }] },
        { tori: tb({ pelvis: [-6, 92, 0], piedi: { dx: [-16, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [36, 138, 8], sx: [32, 116, -26] } }),
          uke: ub({ pelvis: [54, 96, 2], lean: 14, piedi: { dx: [64, 2, -13], sx: [44, 8, 15] }, mani: { dx: [14, 128, -8], sx: [18, 112, 24] } }),
          frecce: [{ da: [54, 160, 2], a: [26, 170, 8] }] },
        { tori: tb({ pelvis: [-4, 92, -2], piedi: { dx: [-6, 10, 22], sx: [-2, 0, -13] }, mani: { dx: [36, 138, 8], sx: [32, 116, -26] } }),
          uke: ub({ pelvis: [52, 96, 2], lean: 16, piedi: { dx: [64, 2, -13], sx: [42, 8, 15] }, mani: { dx: [14, 128, -8], sx: [18, 112, 24] } }),
          frecce: [{ da: [-16, 4, 22], a: [-8, 10, 24], col: GR, dash: true }] },
        { tori: tb({ pelvis: [-2, 88, -6], yaw: 20, lean: -4, tilt: -6, piedi: { dx: [36, 8, 26], sx: [-2, 0, -13] }, mani: { dx: [30, 140, 14], sx: [28, 108, -22] } }),
          uke: ub({ pelvis: [50, 94, 6], lean: 34, tilt: -10, piedi: { dx: [64, 4, -13], sx: [56, 16, 6] }, mani: { dx: [12, 116, -8], sx: [16, 116, 24] } }),
          frecce: [{ da: [32, 6, 32], a: [54, 14, 4], col: RED }, { da: [46, 160, 8], a: [4, 104, 40] }] }
      ] }
    };
  
    // =====================================================================
    DISEGNI["uchi-mata"] = {
      // pianta omessa: troppo affollata/incerta con tori di spalle
      lato: { cam: { yaw: 25, pitch: 10 }, passi: [
        { tori: tb({ yaw: -15, piedi: { dx: [-6, 0, 12], sx: [2, 0, -14] } }), uke: ub({ piedi: { dx: [64, 0, -22], sx: [62, 0, 22] } }),
          frecce: [{ da: [66, 2, -12], a: [66, 2, -24], col: GR, dash: true }, { da: [62, 2, 12], a: [62, 2, 24], col: GR, dash: true }] },
        { tori: tb({ lean: -2, mani: { dx: [42, 134, 8], sx: [16, 120, -30] } }),
          uke: ub({ pelvis: [58, 96, 0], lean: 18, piedi: { dx: [64, 3, -22], sx: [62, 3, 22] }, mani: { dx: [16, 126, -8], sx: [20, 108, 24] } }),
          frecce: [{ da: [52, 158, 0], a: [22, 170, 0] }] },
        { tori: { pelvis: [42, 84, -4], yaw: 175, lean: 28, piedi: { dx: [36, 0, -16], sx: [52, 0, 6] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [64, 128, 8], sx: [14, 112, -30] } },
          uke: ub({ pelvis: [70, 94, 0], lean: 22, piedi: { dx: [66, 2, -22], sx: [64, 2, 22] }, mani: { dx: [26, 118, -14], sx: [40, 106, 18] } }),
          frecce: [{ da: [4, 2, -16], a: [48, 2, 6], col: GR, dash: true }] },
        { tori: { pelvis: [48, 84, -4], yaw: 170, lean: 72, piedi: { dx: [118, 128, 8], sx: [52, 0, 6] }, ginocchio: { dx: [0, -1, 0], sx: [-1, 0, 0] }, mani: { dx: [38, 104, 6], sx: [0, 90, -26] } },
          uke: { pelvis: [76, 118, 4], yaw: 180, lean: 70, tilt: -10, piedi: { dx: [94, 70, -20], sx: [106, 118, 24] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [22, 96, -18], sx: [30, 112, 18] } },
          frecce: [{ da: [76, 70, 14], a: [100, 120, 14], col: RED }, { da: [96, 172, 0], a: [6, 90, -16] }] }
      ] }
    };
  })();

  // Disegni: tecniche di anca (koshi waza) — gruppo g2
  (function () {
    // =============== VISTA DALL'ALTO ===============
    const UKE0 = { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [0, 90] };
    const UKEA = { c: [0, 64], sx: [14, 68], dx: [-14, 68], alza: "entrambi", etichetta: [0, 90] };
    const TV = { c: [0, 8], sx: [-14, 4], dx: [14, 4], etichetta: [0, -16] };          // tori vicino (petto vicino)
    const T0 = { c: [0, 0], sx: [-14, -4], dx: [14, -4], etichetta: [0, -24] };
    const PRIMA = { dx: [14, 4], sx: [-14, 4] };
    const sq = (da, a, testo, tx, ty) => ({ da, a, tipo: "squilibrio", testo, fine: true, tx, ty });
    const AVDX = sq([-6, 56], [-36, 28], "avanti-destra, sulle punte");
    const AV = sq([0, 50], [0, 28], "avanti, sulle punte");
    // tori girato davanti a uke (schiena contro uke). x < 0 = anca più in profondità oltre il fianco destro di uke
    const gir = (x, extra) => Object.assign({ c: [x, 46], rot: 180, dx: [x - 10, 38, 180], sx: [x + 10, 38, 180], etichetta: [22, 22] }, extra || {});
    const entra = (x) => [{ da: [14, 10], a: [x - 10, 28], tipo: "piede", curva: -.12 }, { da: [-14, 10], a: [x + 8, 28], tipo: "piede", curva: .5 }];
    const CADE = { da: [-4, 74], a: [-34, 4], tipo: "caduta", testo: "sopra l'anca destra, cade davanti a tori", fine: true, curva: .3 };
    const MAN3 = (x) => ({ da: [x + 22, 46], a: [-36, 34], testo: "tira la manica", fine: true, dx: -6, dy: 10 });
    const MAN4 = (x) => ({ da: [x + 20, 52], a: [-38, 26] });
  
    // famiglia o goshi: braccio destro su un punto di uke, tori entra girato con profondità x
    function famiglia(o) {
      const x = o.x, br = o.br;
      return [
        { tori: TV, uke: UKE0, prese: [{ da: [22, 8], a: br, testo: o.brTesto, dx: 6 }, { da: [-22, 8], a: o.sx || [-31, 54], testo: o.sxTesto || "manica", fine: true, dx: -6 }] },
        { tori: TV, uke: UKE0, prese: [{ da: [22, 8], a: br }, { da: [-22, 8], a: o.sx || [-31, 54] }], frecce: [o.k || AV] },
        { tori: gir(x, { prima: PRIMA }), uke: UKE0, prese: [{ da: [x - 22, 46], a: br }, MAN3(x)], frecce: entra(x).concat(o.f3 || []) },
        { tori: gir(x, { rot: 200 }), uke: UKEA, prese: [{ da: [x - 20, 40], a: br }, MAN4(x)], frecce: [CADE] }
      ];
    }
  
    const P = {};
    P["o-goshi"] = famiglia({ x: -4, br: [-2, 77], brTesto: "braccio attorno alla vita" });
    P["koshi-guruma"] = famiglia({ x: -12, br: [6, 74], brTesto: "braccio attorno al collo" });
    P["tsuri-goshi"] = famiglia({ x: -4, br: [-4, 78], brTesto: "mano alla cintura, dietro la schiena", k: sq([-6, 56], [-36, 28], "avanti, verso il suo angolo anteriore destro") });
    P["tsurikomi-goshi"] = (() => {
      const f = famiglia({ x: -2, br: [7, 56], brTesto: "bavero" });
      f[0].tori = T0; f[0].prese = [{ da: [22, 0], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }];
      f[1].tori = T0; f[1].prese = [{ da: [22, 0], a: [7, 56] }, { da: [-22, 0], a: [-31, 54] }];
      f[1].frecce = [sq([-6, 50], [-6, 26], "avanti e in alto, sulle punte")];
      return f;
    })();
  
    // ---- UKI GOSHI: entrata a metà, tori di fianco ----
    {
      const vita = [-2, 77];
      const T3 = { c: [2, 40], rot: 128, dx: [-10, 46, 128], sx: [12, 28, 128], prima: PRIMA, etichetta: [24, 48] };
      const T4 = Object.assign({}, T3, { rot: 155, prima: undefined });
      P["uki-goshi"] = [
        { tori: TV, uke: UKE0, prese: [{ da: [22, 8], a: vita, testo: "braccio attorno alla vita", dx: 6 }, { da: [-22, 8], a: [-31, 54], testo: "manica", fine: true, dx: -6 }] },
        { tori: TV, uke: UKE0, prese: [{ da: [22, 8], a: vita }, { da: [-22, 8], a: [-31, 54] }], frecce: [AVDX] },
        { tori: T3, uke: UKE0, prese: [{ da: [-10, 56], a: vita }, { da: [16, 22], a: [-36, 36], testo: "tira la manica", fine: true, dx: -6, dy: 10 }],
          frecce: [{ da: [14, 10], a: [-6, 36], tipo: "piede", curva: -.15 }, { da: [-14, 10], a: [8, 20], tipo: "piede", curva: .4 }] },
        { tori: T4, uke: UKEA, prese: [{ da: [-10, 56], a: vita }, { da: [18, 28], a: [-38, 28] }],
          frecce: [{ da: [-4, 74], a: [-34, 4], tipo: "caduta", testo: "scivola sull'anca, cade davanti a tori", fine: true, curva: .3 }, { da: [22, 6], a: [28, 32], tipo: "squilibrio", testo: "busto ruota a sinistra", curva: .4 }] }
      ];
    }
  
    // ---- HARAI GOSHI: fianco a fianco, gamba destra tesa spazza all'indietro l'esterno della coscia ----
    {
      const T3 = { c: [0, 44], rot: 165, dx: [-12, 38, 165], sx: [8, 34, 165], prima: PRIMA, etichetta: [22, 20] };
      P["harai-goshi"] = [
        { tori: TV, uke: UKE0, prese: [{ da: [22, 8], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, 8], a: [-31, 54], testo: "manica", fine: true, dx: -6 }] },
        { tori: TV, uke: UKE0, prese: [{ da: [22, 8], a: [7, 56] }, { da: [-22, 8], a: [-31, 54] }], frecce: [AVDX] },
        { tori: T3, uke: UKE0, prese: [{ da: [-22, 48], a: [7, 58] }, MAN3(0)],
          frecce: [{ da: [14, 10], a: [-10, 26], tipo: "piede", curva: -.12 }, { da: [-14, 10], a: [6, 22], tipo: "piede", curva: .5 }] },
        { tori: Object.assign({}, T3, { rot: 200, prima: undefined, dx: [-30, 84, 200], alza: "dx" }), uke: Object.assign({}, UKEA, { etichetta: [26, 90] }), prese: [{ da: [-20, 40], a: [7, 58] }, MAN4(0)],
          frecce: [{ da: [-14, 36], a: [-30, 76], tipo: "falciata", testo: "gamba tesa spazza all'indietro l'esterno della coscia", curva: -.25 }, CADE] }
      ];
    }
  
    // ---- HANE GOSHI: gamba piegata contro l'interno della gamba destra di uke ----
    {
      const T = gir(-4);
      P["hane-goshi"] = [
        { tori: gir(-4, { prima: PRIMA }), uke: UKE0, prese: [{ da: [-26, 46], a: [7, 58] }, { da: [18, 46], a: [-31, 52] }], frecce: entra(-4) },
        { tori: T, uke: UKE0, prese: [{ da: [-26, 46], a: [7, 58] }, MAN4(-4)], frecce: [sq([-22, 64], [-50, 40], "avanti-destra e in alto")] },
        { tori: gir(-4, { dx: [-6, 60, 200], alza: "dx", prima: { dx: [-14, 38, 180] } }), uke: UKE0, prese: [{ da: [-26, 46], a: [7, 58] }, MAN4(-4)],
          frecce: [{ da: [-14, 42], a: [-7, 50], tipo: "piede" }, { da: [24, 34], a: [12, 34], tipo: "squilibrio", testo: "peso sul sinistro", tx: 26, ty: 31 }] },
        { tori: gir(-4, { rot: 200, dx: [-34, 62, 240], alza: "dx" }), uke: UKEA, prese: [{ da: [-24, 40], a: [7, 58] }, MAN4(-4)],
          frecce: [{ da: [-8, 58], a: [-32, 66], tipo: "falciata", testo: "scatta in alto e in fuori", curva: .2 }, CADE] }
      ];
    }
  
    // ---- USHIRO GOSHI / UTSURI GOSHI: uke entra con o goshi destro, tori lo blocca ----
    const UKEIN = { c: [2, 24], rot: 0, dx: [12, 30, 0], sx: [-8, 30, 0], prima: { sx: [14, 68], dx: [-14, 68] }, etichetta: [-30, 46] };
    const UKEINA = Object.assign({}, UKEIN, { prima: undefined, alza: "entrambi" });
    const TB = { c: [0, 0], sx: [-16, -6], dx: [16, -6], etichetta: [0, -26] };
    const VITA_SX = { da: [-22, 0], a: [12, 30], testo: "braccio sinistro attorno alla vita", fine: false };
    const SU = { da: [40, -4], a: [40, 22], tipo: "squilibrio", testo: "anche avanti e in alto", tx: 46, ty: 10 };
    P["ushiro-goshi"] = [
      { tori: TB, uke: UKEIN, frecce: [{ da: [-14, 58], a: [8, 40], tipo: "piede", curva: .15 }, { da: [14, 58], a: [-6, 40], tipo: "piede", curva: -.15, testo: "uke entra con o goshi destro", tx: 18, ty: 50 }] },
      { tori: TB, uke: UKEINA, prese: [VITA_SX], frecce: [SU] },
      { tori: TB, uke: Object.assign({}, UKEINA, { dx: [12, 46, 0], sx: [-8, 46, 0], prima: { dx: [12, 30], sx: [-8, 30] } }), prese: [{ da: [-22, 0], a: [12, 30] }],
        frecce: [{ da: [-36, 40], a: [-36, 10], tipo: "squilibrio", testo: "peso dietro di uke, verso tori", fine: true }, { da: [26, 34], a: [26, 56], tipo: "piede", testo: "piedi avanti e in alto" }] },
      { tori: TB, uke: { terra: true, testa: [0, 24], bacino: [0, 62], etichetta: [-34, 120] }, prese: [{ da: [-22, 0], a: [-12, 40] }],
        frecce: [{ da: [50, 14], a: [26, 30], tipo: "caduta", testo: "sulla schiena, davanti ai piedi di tori", fine: true }] }
    ];
    // utsuri: tori ruota a destra e mette l'anca sinistra sotto uke (o goshi sinistro)
    {
      const T3 = { c: [-6, 4], rot: -90, dx: [-6, -8, -90], sx: [-6, 16, -90], prima: { dx: [16, -6], sx: [-16, -6] }, etichetta: [-34, -10] };
      P["utsuri-goshi"] = [
        { tori: TB, uke: UKEIN, frecce: [{ da: [-14, 58], a: [8, 40], tipo: "piede", curva: .15 }, { da: [14, 58], a: [-6, 40], tipo: "piede", curva: -.15, testo: "uke entra con o goshi destro", tx: 18, ty: 50 }] },
        { tori: TB, uke: UKEINA, prese: [VITA_SX], frecce: [SU, { da: [-30, 28], a: [-30, 6], tipo: "squilibrio", testo: "uke in alto e dietro", fine: true, tx: -34, ty: 12 }] },
        { tori: T3, uke: UKEINA, prese: [{ da: [-6, 26], a: [12, 30] }],
          frecce: [{ da: [16, -2], a: [0, -10], tipo: "piede", curva: .3 }, { da: [-16, 0], a: [-10, 10], tipo: "piede", curva: -.2 }, { da: [-40, 30], a: [-24, 4], tipo: "squilibrio", testo: "ruota a destra: anca sinistra sotto uke", curva: -.3, fine: true }] },
        { tori: Object.assign({}, T3, { rot: -110, prima: undefined }), uke: UKEINA, prese: [{ da: [-6, 26], a: [12, 30] }],
          frecce: [{ da: [8, 30], a: [52, 0], tipo: "caduta", testo: "sopra l'anca sinistra, cade davanti a tori", curva: -.35 }] }
      ];
    }
  
    // =============== VISTA LATERALE ===============
    const L = {};
    const st1 = { tori: { pelvis: [0, 92, 0], yaw: 0, lean: 5, piedi: { dx: [2, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [44, 128, 8], sx: [40, 104, -26] } },
      uke: { pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } } };
    const ukeD = (o) => Object.assign({ pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } }, o);
    const GR = "#6b7480";
    // famiglia o goshi (tori entra girato, schiena contro uke): o = parametri
    function latoFam(o) {
      const hd = o.hand;            // mano destra di tori su uke
      const t1 = { pelvis: [-6, 92, 0], yaw: 0, lean: -2, piedi: { dx: [4, 0, 13], sx: [-10, 0, -13] }, mani: { dx: o.h1, sx: [10, 116, -30] } };
      const t2 = Object.assign({}, t1, { mani: { dx: o.h1, sx: [10, 116, -30] } });
      const u2 = ukeD({ pelvis: [58, 94, 0], lean: 16, piedi: { dx: [64, 0, -13], sx: [66, 0, 13] }, mani: { dx: [14, 126, -8], sx: [18, 104, 24] } });
      const t3 = { pelvis: o.p3, yaw: o.yaw3 === undefined ? 180 : o.yaw3, lean: 12, piedi: { dx: [o.p3[0] + 2, 0, -10], sx: [o.p3[0] + 2, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, gomito: { dx: [0, -1, -.3] }, mani: { dx: o.h3, sx: [22, 112, -26] } };
      const u3 = ukeD({ pelvis: [o.p3[0] + 22, 94, 0], lean: 22, piedi: { dx: [o.p3[0] + 20, 0, -13], sx: [o.p3[0] + 24, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } });
      const t4 = { pelvis: [o.p3[0] + 2, o.y4 || 90, 0], yaw: 180, lean: 50, piedi: { dx: [o.p3[0] + 4, 0, -10], sx: [o.p3[0] + 4, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: o.h4, sx: [0, 92, -26] } };
      const u4 = ukeD({ pelvis: o.u4 || [o.p3[0] + 26, 122, -4], lean: 78, tilt: -15, piedi: { dx: [o.p3[0] + 60, 140, -14], sx: [o.p3[0] + 64, 128, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [6, 104, -20], sx: [28, 118, 18] } });
      return { cam: { yaw: 25, pitch: 10 }, passi: [
        { tori: t1, uke: ukeD({}), frecce: [] },
        { tori: t2, uke: u2, frecce: [{ da: [46, 150, 0], a: [18, 150, -4] }] },
        { tori: t3, uke: u3, frecce: [{ da: [10, 2, 13], a: [o.p3[0], 2, -8], col: GR, dash: true }] },
        { tori: t4, uke: u4, frecce: [{ da: [o.p3[0] + 56, 168, -6], a: [o.p3[0] - 40, 90, -6] }] }
      ] };
    }
    L["o-goshi"] = latoFam({ h1: [72, 100, -8], hand: 0, p3: [44, 80, 0], h3: [66, 100, -14], h4: [62, 108, -14] });
    L["koshi-guruma"] = latoFam({ h1: [64, 136, -12], p3: [50, 80, -4], h3: [66, 138, -12], h4: [64, 136, -12], u4: [78, 124, -4] });
    L["tsuri-goshi"] = latoFam({ h1: [74, 100, -8], p3: [46, 78, 0], h3: [68, 102, -10], h4: [66, 112, -10] });
    L["tsurikomi-goshi"] = latoFam({ h1: [30, 124, -8], p3: [44, 72, 0], h3: [40, 128, -20], h4: [30, 124, -16], y4: 86 });
    // base comune: passi 1-2 della famiglia con presa su bavero/vita
    const base12 = (h1) => [
      { tori: { pelvis: [-6, 92, 0], yaw: 0, lean: -2, piedi: { dx: [4, 0, 13], sx: [-10, 0, -13] }, mani: { dx: h1, sx: [10, 116, -30] } }, uke: ukeD({}), frecce: [] },
      { tori: { pelvis: [-6, 92, 0], yaw: 0, lean: -2, piedi: { dx: [4, 0, 13], sx: [-10, 0, -13] }, mani: { dx: h1, sx: [10, 116, -30] } },
        uke: ukeD({ pelvis: [58, 94, 0], lean: 16, piedi: { dx: [64, 0, -13], sx: [66, 0, 13] }, mani: { dx: [14, 126, -8], sx: [18, 104, 24] } }), frecce: [{ da: [46, 150, 0], a: [18, 150, -4] }] }
    ];
    // uki goshi: tori di fianco (yaw ~150), anca destra contro il ventre di uke
    L["uki-goshi"] = { cam: { yaw: 25, pitch: 10 }, passi: base12([72, 100, -8]).concat([
      { tori: { pelvis: [42, 86, 0], yaw: 150, lean: 8, piedi: { dx: [50, 0, -12], sx: [40, 0, 14] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [64, 100, -12], sx: [24, 112, -26] } },
        uke: ukeD({ pelvis: [62, 94, 0], lean: 22, piedi: { dx: [64, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } }),
        frecce: [{ da: [10, 2, 13], a: [48, 2, -8], col: GR, dash: true }] },
      { tori: { pelvis: [42, 88, 0], yaw: 150, lean: 30, piedi: { dx: [50, 0, -12], sx: [40, 0, 14] }, mani: { dx: [64, 100, -12], sx: [8, 100, -26] } },
        uke: ukeD({ pelvis: [58, 112, -4], lean: 62, tilt: -12, piedi: { dx: [90, 94, -14], sx: [94, 84, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [10, 110, -20], sx: [28, 118, 18] } }),
        frecce: [{ da: [96, 150, -6], a: [20, 96, -6] }] }
    ]) };
    // harai goshi: tori fianco a fianco, gamba destra tesa spazza indietro l'esterno della coscia di uke
    {
      const ut = (o) => ukeD(o);
      L["harai-goshi"] = { cam: { yaw: 155, pitch: 10 }, passi: base12([44, 128, 8]).concat([
        { tori: { pelvis: [40, 90, 0], yaw: 160, lean: 10, piedi: { dx: [48, 0, -12], sx: [40, 0, 12] }, ginocchio: { dx: [-1, .2, 0], sx: [-1, .2, 0] }, mani: { dx: [60, 124, -4], sx: [26, 112, 26] } },
          uke: ut({ pelvis: [62, 94, 0], lean: 20, piedi: { dx: [64, 0, -13], sx: [68, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } }),
          frecce: [{ da: [10, 2, -13], a: [44, 2, -12], col: GR, dash: true }] },
        { tori: { pelvis: [40, 84, 0], yaw: 165, lean: 42, piedi: { dx: [86, 60, -14], sx: [40, 0, 12] }, ginocchio: { dx: [0, -1, 0] }, mani: { dx: [60, 112, -4], sx: [20, 96, 26] } },
          uke: ut({ pelvis: [64, 116, -4], lean: 60, tilt: -14, piedi: { dx: [90, 86, -14], sx: [100, 96, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [14, 104, -20], sx: [30, 116, 18] } }),
          frecce: [{ da: [52, 34, -16], a: [84, 62, -16], col: "#c8372d" }, { da: [90, 150, -6], a: [20, 92, -6] }] }
      ]) };
      // hane goshi: gamba destra piegata, coscia/stinco contro l'interno della gamba destra di uke
      L["hane-goshi"] = { cam: { yaw: 125, pitch: 12 }, passi: [
        { tori: { pelvis: [38, 88, 0], yaw: 180, lean: 8, piedi: { dx: [44, 0, -10], sx: [44, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [62, 112, -12], sx: [22, 112, -26] } },
          uke: ukeD({ pelvis: [60, 94, 0], lean: 12, piedi: { dx: [62, 0, -13], sx: [64, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } }),
          frecce: [{ da: [8, 2, 13], a: [42, 2, -8], col: GR, dash: true }] },
        { tori: { pelvis: [40, 88, 0], yaw: 180, lean: 6, piedi: { dx: [46, 0, -10], sx: [44, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [62, 126, -10], sx: [22, 112, -26] } },
          uke: ukeD({ pelvis: [58, 96, 0], lean: 22, piedi: { dx: [62, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } }),
          frecce: [{ da: [46, 150, 0], a: [20, 150, -4] }] },
        { tori: { pelvis: [42, 86, 0], yaw: 180, lean: 14, piedi: { dx: [66, 18, -8], sx: [44, 0, 10] }, ginocchio: { dx: [.3, -1, 0], sx: [-1, 0, 0] }, mani: { dx: [62, 120, -10], sx: [22, 110, -26] } },
          uke: ukeD({ pelvis: [62, 94, 0], lean: 24, piedi: { dx: [64, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } }) },
        { tori: { pelvis: [42, 84, 0], yaw: 180, lean: 40, piedi: { dx: [70, 66, -20], sx: [44, 0, 10] }, ginocchio: { dx: [0, -1, 0], sx: [-1, 0, 0] }, mani: { dx: [58, 112, -10], sx: [20, 98, -26] } },
          uke: ukeD({ pelvis: [64, 116, -4], lean: 60, tilt: -14, piedi: { dx: [92, 90, -14], sx: [100, 98, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [14, 104, -20], sx: [30, 116, 18] } }),
          frecce: [{ da: [60, 50, -20], a: [82, 82, -26], col: "#c8372d" }, { da: [90, 150, -6], a: [20, 92, -6] }] }
      ] };
    }
    // ushiro goshi / utsuri goshi: uke (bianco) ha girato e dà la schiena a tori, entrambi guardano +x
    const tB = (o) => Object.assign({ pelvis: [0, 92, 0], yaw: 0, lean: 0, piedi: { dx: [2, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [24, 98, 14], sx: [24, 100, -10] } }, o);
    const uB = (o) => Object.assign({ pelvis: [20, 82, 0], yaw: 0, lean: 6, piedi: { dx: [26, 0, 13], sx: [22, 0, -13] }, ginocchio: { dx: [1, .2, 0], sx: [1, .2, 0] }, mani: { dx: [30, 82, 14], sx: [30, 82, -14] } }, o);
    const CAM_U = { yaw: -30, pitch: 10 };
    const passiU = [
      { tori: tB({ pelvis: [0, 78, 0], lean: 6, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [24, 92, -16], sx: [24, 92, 16] } }),
        uke: uB({ pelvis: [20, 82, 0], lean: 10 }), frecce: [{ da: [14, 142, 0], a: [14, 112, 0], col: GR, dash: true }] },
      { tori: tB({ pelvis: [-2, 80, 0], lean: -6, mani: { dx: [24, 92, 16], sx: [26, 94, -16] } }),
        uke: uB({ pelvis: [18, 108, 0], lean: -20, piedi: { dx: [32, 14, 13], sx: [28, 10, -13] }, mani: { dx: [40, 120, 14], sx: [40, 120, -14] } }),
        frecce: [{ da: [-30, 70, 0], a: [-30, 112, 0] }] },
      { tori: tB({ pelvis: [-4, 90, 0], lean: -12, mani: { dx: [22, 104, 16], sx: [24, 106, -16] } }),
        uke: uB({ pelvis: [14, 112, 0], lean: -50, piedi: { dx: [46, 66, 13], sx: [42, 62, -13] }, ginocchio: { dx: [1, .5, 0], sx: [1, .5, 0] }, mani: { dx: [46, 120, 14], sx: [46, 120, -14] } }),
        frecce: [{ da: [30, 150, 0], a: [-10, 130, 0] }, { da: [50, 40, 0], a: [60, 76, 0], col: GR, dash: true }] },
      { tori: tB({ pelvis: [-6, 66, 0], lean: 18, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [14, 40, 14], sx: [14, 40, -14] } }),
        uke: { pelvis: [62, 12, 0], yaw: 0, lean: -88, piedi: { dx: [112, 6, 13], sx: [112, 6, -13] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [24, 14, 20], sx: [24, 14, -20] } },
        frecce: [{ da: [30, 90, 0], a: [60, 40, 0], col: "#e8742a" }] }
    ];
    L["ushiro-goshi"] = { cam: CAM_U, passi: passiU };
    L["utsuri-goshi"] = { cam: { yaw: -35, pitch: 12 }, passi: [
      passiU[0], passiU[1],
      { tori: tB({ pelvis: [-2, 88, 0], yaw: -90, lean: 8, piedi: { dx: [-2, 0, 14], sx: [-2, 0, -14] }, mani: { dx: [-14, 100, 30], sx: [10, 100, 14] } }),
        uke: uB({ pelvis: [10, 112, 0], lean: -50, piedi: { dx: [40, 66, 13], sx: [36, 62, -13] }, ginocchio: { dx: [1, .5, 0], sx: [1, .5, 0] }, mani: { dx: [40, 122, 14], sx: [40, 122, -14] } }),
        frecce: [{ da: [-30, 70, -20], a: [-30, 70, 20], col: GR, dash: true }] },
      { tori: tB({ pelvis: [0, 84, 0], yaw: 180, lean: 44, piedi: { dx: [2, 0, -10], sx: [2, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [-18, 90, -14], sx: [-14, 82, 14] } }),
        uke: uB({ pelvis: [6, 112, 0], lean: -74, piedi: { dx: [56, 128, 13], sx: [60, 118, -13] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [-20, 110, 14], sx: [-20, 110, -14] } }),
        frecce: [{ da: [30, 150, 0], a: [-50, 100, 0] }] }
    ] };
    const IDS = ["uki-goshi", "o-goshi", "koshi-guruma", "tsurikomi-goshi", "harai-goshi", "tsuri-goshi", "hane-goshi", "ushiro-goshi", "utsuri-goshi"];
    delete L["utsuri-goshi"];                      // vista laterale omessa: passi 3-4 non resi in modo affidabile
    P["utsuri-goshi"] = P["utsuri-goshi"].slice(0, 2);
    IDS.forEach(id => { DISEGNI[id] = { pianta: P[id] }; if (L[id]) DISEGNI[id].lato = L[id]; });
  })();

  // Gruppo 3: tai otoshi, ashi guruma, o guruma, osoto guruma, morote seoi nage, kata guruma, uki otoshi, sumi otoshi, sukui nage
  (function () {
    // vista dall'alto: posizione iniziale in presa
    const T0 = { c: [0, 0], sx: [-14, -4], dx: [14, -4], etichetta: [0, -24] };
    const U0 = { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [0, 90] };
    const PR0 = [{ da: [22, 0], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }];
    const PR = [{ da: [22, 0], a: [7, 56] }, { da: [-22, 0], a: [-31, 54] }];
    const S0 = { tori: T0, uke: U0, prese: PR0 };
    // vista laterale: posizione iniziale in presa
    const L0 = { tori: { pelvis: [0, 92, 0], yaw: 0, lean: 5, piedi: { dx: [2, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [44, 128, 8], sx: [40, 104, -26] } },
      uke: { pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } } };
    const GR = "#6b7480", RED = "#c8372d";
  
    /* ---------------- TAI OTOSHI ---------------- */
    {
      const uke1 = { c: [0, 60], sx: [14, 68], dx: [-14, 52], etichetta: [0, 88] };
      const toriG = { c: [4, 28], rot: 180, sx: [18, 14, 180], dx: [-38, 50, 250], etichetta: [36, 6] };
      DISEGNI["tai-otoshi"] = {
        pianta: [
          { tori: T0, uke: { ...uke1, prima: { dx: [-14, 68] } }, prese: PR0,
            frecce: [{ da: [-24, 68], a: [-24, 54], tipo: "piede", testo: "uke avanza con il destro", fine: true, tx: -30, ty: 58 }] },
          { tori: T0, uke: { ...uke1, c: [-4, 56] }, prese: [{ da: [22, 0], a: [5, 52] }, { da: [-22, 0], a: [-34, 44] }],
            frecce: [{ da: [-8, 54], a: [-42, 22], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -46, ty: 14 }] },
          { tori: { ...toriG, prima: { sx: [-14, -4], dx: [14, -4] } }, uke: { ...uke1, c: [-4, 56] },
            prese: [{ da: [-20, 28], a: [5, 52] }, { da: [26, 28], a: [-30, 40] }],
            frecce: [{ da: [14, 2], a: [-32, 44], tipo: "piede", curva: -.3, testo: "il destro davanti al suo stinco destro", fine: true },
              { da: [-14, 0], a: [14, 10], tipo: "piede", curva: .4 }] },
          { tori: { ...toriG, rot: 205 }, uke: { c: [-14, 48], sx: [14, 68], dx: [-14, 52], alza: "sx", etichetta: [10, 88] },
            prese: [{ da: [-14, 36], a: [-6, 46] }, { da: [28, 18], a: [-30, 30] }],
            frecce: [{ da: [-6, 66], a: [-58, 10], tipo: "caduta", curva: .2, testo: "inciampa sulla gamba e cade davanti a tori", fine: true }] }
        ],
        lato: { cam: { yaw: 145, pitch: 12 }, passi: [
          { tori: L0.tori, uke: { ...L0.uke, pelvis: [58, 92, 0], piedi: { dx: [48, 0, -13], sx: [64, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } },
            frecce: [{ da: [66, 2, -13], a: [50, 2, -13], col: GR, dash: true }] },
          { tori: { ...L0.tori, lean: 0, mani: { dx: [42, 136, 8], sx: [26, 100, -30] } },
            uke: { pelvis: [54, 94, -3], yaw: 180, lean: 18, tilt: 8, piedi: { dx: [48, 5, -13], sx: [64, 5, 13] }, mani: { dx: [22, 130, -8], sx: [24, 100, 20] } },
            frecce: [{ da: [54, 160, -4], a: [26, 150, -32] }] },
          { tori: { pelvis: [30, 80, 18], yaw: 180, lean: 10, piedi: { dx: [40, 4, -38], sx: [28, 0, 28] }, ginocchio: { dx: [-1, .3, 0] }, mani: { dx: [44, 124, 6], sx: [12, 104, -14] } },
            uke: { pelvis: [54, 94, -3], yaw: 180, lean: 20, tilt: 8, piedi: { dx: [48, 5, -13], sx: [64, 5, 13] }, mani: { dx: [16, 108, -14], sx: [38, 116, 18] } },
            frecce: [{ da: [4, 2, 13], a: [30, 2, 26], col: GR, dash: true }] },
          { tori: { pelvis: [28, 80, 18], yaw: 200, lean: 22, twist: 20, piedi: { dx: [40, 4, -38], sx: [28, 0, 28] }, ginocchio: { dx: [-1, .3, 0] }, mani: { dx: [24, 104, -4], sx: [4, 84, 6] } },
            uke: { pelvis: [36, 98, -26], yaw: 180, lean: 62, tilt: 18, piedi: { dx: [46, 5, -14], sx: [70, 30, 14] }, mani: { dx: [-4, 82, -26], sx: [22, 100, 10] } },
            frecce: [{ da: [40, 160, -20], a: [-6, 70, -52] }] }
        ] }
      };
    }
  
    /* ---------------- ASHI GURUMA ---------------- */
    {
      const tori1 = { c: [2, 16], rot: 50, sx: [12, 36, 30], dx: [14, -4], prima: { sx: [-14, -4] }, etichetta: [-30, 4] };
      const toriG = { c: [6, 36], rot: 165, sx: [12, 36, 160], dx: [-46, 60, 250], alza: "dx", etichetta: [36, 22] };
      DISEGNI["ashi-guruma"] = {
        pianta: [
          { tori: tori1, uke: U0, prese: [{ da: [16, 32], a: [7, 56], testo: "bavero", dx: 6, dy: 4 }, { da: [-12, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [-14, 2], a: [8, 30], tipo: "piede", curva: -.2, testo: "il sinistro davanti al suo sinistro", fine: true, tx: -20, ty: 22 }] },
          { tori: { ...tori1, rot: 70 }, uke: { ...U0, c: [-4, 60] }, prese: [{ da: [18, 30], a: [5, 52] }, { da: [-10, 4], a: [-36, 40] }],
            frecce: [{ da: [-8, 56], a: [-42, 26], tipo: "squilibrio", testo: "avanti-destra e in alto", fine: true, tx: -46, ty: 18 }] },
          { tori: { ...toriG, prima: { dx: [14, -4] } }, uke: { ...U0, c: [-4, 60] }, prese: [{ da: [-16, 40], a: [5, 52] }, { da: [28, 36], a: [-30, 40] }],
            frecce: [{ da: [14, 2], a: [-40, 56], tipo: "piede", curva: -.35, testo: "gamba destra tesa, contro il suo ginocchio destro", fine: true }] },
          { tori: { ...toriG, rot: 200 }, uke: { c: [-20, 52], sx: [14, 68], dx: [-14, 68], alza: "sx", etichetta: [16, 92] }, prese: [{ da: [-12, 46], a: [-10, 50] }, { da: [30, 28], a: [-28, 24] }],
            frecce: [{ da: [-6, 70], a: [-62, 16], tipo: "caduta", curva: .25, testo: "gira sopra la gamba ferma", fine: true }] }
        ],
        lato: { cam: { yaw: 140, pitch: 12 }, passi: [
          { tori: { pelvis: [8, 92, -4], yaw: 30, lean: 5, piedi: { dx: [2, 0, 13], sx: [32, 0, -10] }, mani: { dx: [44, 128, 8], sx: [36, 104, -26] } }, uke: L0.uke,
            frecce: [{ da: [-2, 2, -13], a: [28, 2, -12], col: GR, dash: true }] },
          { tori: { pelvis: [10, 94, -4], yaw: 50, lean: 0, piedi: { dx: [2, 4, 13], sx: [32, 0, -10] }, mani: { dx: [44, 140, 8], sx: [16, 112, -34] } },
            uke: { pelvis: [60, 96, -3], yaw: 180, lean: 16, tilt: 6, piedi: { dx: [64, 5, -13], sx: [62, 5, 13] }, mani: { dx: [18, 128, -14], sx: [22, 112, 20] } },
            frecce: [{ da: [60, 160, -4], a: [32, 168, -32] }] },
          { tori: { pelvis: [34, 90, 10], yaw: 170, lean: 22, piedi: { dx: [64, 30, -44], sx: [32, 0, 14] }, ginocchio: { dx: [0, 1, 0] }, mani: { dx: [48, 130, 8], sx: [14, 110, -24] } },
            uke: { pelvis: [62, 96, -3], yaw: 180, lean: 16, tilt: 6, piedi: { dx: [64, 5, -13], sx: [62, 5, 13] }, mani: { dx: [18, 112, -16], sx: [40, 122, 14] } },
            frecce: [{ da: [4, 2, 13], a: [52, 30, -40], col: GR, dash: true }] },
          { tori: { pelvis: [32, 90, 10], yaw: 190, lean: 30, twist: 20, piedi: { dx: [64, 30, -44], sx: [32, 0, 14] }, ginocchio: { dx: [0, 1, 0] }, mani: { dx: [30, 112, -4], sx: [8, 86, 4] } },
            uke: { pelvis: [50, 116, -26], yaw: 180, lean: 80, tilt: 20, piedi: { dx: [76, 40, -16], sx: [90, 70, 12] }, mani: { dx: [0, 82, -26], sx: [22, 100, 10] } },
            frecce: [{ da: [56, 170, -20], a: [0, 70, -60] }] }
        ] }
      };
    }
  
    /* ---------------- O GURUMA ---------------- */
    {
      const uke1 = { c: [0, 58], sx: [14, 62], dx: [-14, 62], prima: { sx: [14, 68], dx: [-14, 68] }, etichetta: [0, 86] };
      const toriG = { c: [6, 34], rot: 170, sx: [12, 36, 170], dx: [-50, 52, 260], alza: "dx", etichetta: [36, 20] };
      DISEGNI["o-guruma"] = {
        pianta: [
          { tori: { ...T0, c: [0, -6], sx: [-14, -10], dx: [14, -10], prima: { sx: [-14, -4], dx: [14, -4] }, etichetta: [0, -30] }, uke: uke1,
            prese: [{ da: [22, -6], a: [7, 50], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, -6], a: [-31, 48], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [-26, 72], a: [-26, 60], tipo: "piede", testo: "uke avanza", fine: true, tx: -32, ty: 64 }] },
          { tori: { ...T0, c: [0, -6], sx: [-14, -10], dx: [14, -10], etichetta: [0, -30] }, uke: { c: [-4, 54], sx: [14, 62], dx: [-14, 62], etichetta: [0, 86] },
            prese: [{ da: [22, -6], a: [5, 46] }, { da: [-22, -6], a: [-38, 40] }],
            frecce: [{ da: [-8, 50], a: [-44, 22], tipo: "squilibrio", testo: "avanti-destra di uke, in alto", fine: true }] },
          { tori: { ...toriG, prima: { sx: [-14, -10], dx: [14, -10] } }, uke: { c: [-4, 54], sx: [14, 62], dx: [-14, 62], etichetta: [0, 86] },
            prese: [{ da: [-16, 36], a: [5, 46] }, { da: [28, 34], a: [-32, 34] }],
            frecce: [{ da: [-14, -6], a: [10, 28], tipo: "piede", curva: -.3 }, { da: [14, -6], a: [-44, 48], tipo: "piede", curva: -.35, testo: "gamba destra tesa davanti alla sua anca destra", fine: true }] },
          { tori: { ...toriG, rot: 200 }, uke: { c: [-24, 46], sx: [14, 62], dx: [-14, 62], alza: "entrambi", etichetta: [16, 86] },
            prese: [{ da: [-12, 44], a: [-12, 46] }, { da: [30, 26], a: [-28, 20] }],
            frecce: [{ da: [-6, 66], a: [-66, 12], tipo: "caduta", curva: .25, testo: "ruota sopra la gamba e cade davanti", fine: true }] }
        ],
        lato: { cam: { yaw: 140, pitch: 12 }, passi: [
          { tori: { ...L0.tori, pelvis: [-6, 92, 0], piedi: { dx: [-4, 0, 13], sx: [-8, 0, -13] } },
            uke: { ...L0.uke, pelvis: [56, 92, 0], piedi: { dx: [54, 0, -13], sx: [56, 0, 13] }, mani: { dx: [14, 128, -8], sx: [18, 104, 26] } },
            frecce: [{ da: [70, 2, 0], a: [58, 2, 0], col: GR, dash: true }] },
          { tori: { pelvis: [-6, 94, 0], yaw: 0, lean: 0, piedi: { dx: [-4, 2, 13], sx: [-8, 0, -13] }, mani: { dx: [38, 140, 8], sx: [14, 120, -36] } },
            uke: { pelvis: [52, 96, -3], yaw: 180, lean: 16, tilt: 6, piedi: { dx: [54, 5, -13], sx: [56, 5, 13] }, mani: { dx: [12, 128, -14], sx: [16, 112, 20] } },
            frecce: [{ da: [52, 160, -4], a: [26, 168, -32] }] },
          { tori: { pelvis: [28, 92, 12], yaw: 170, lean: 22, piedi: { dx: [58, 56, -46], sx: [30, 0, 16] }, ginocchio: { dx: [0, 1, 0] }, mani: { dx: [44, 130, 8], sx: [10, 112, -24] } },
            uke: { pelvis: [54, 96, -3], yaw: 180, lean: 16, tilt: 6, piedi: { dx: [54, 5, -13], sx: [56, 5, 13] }, mani: { dx: [14, 114, -16], sx: [36, 122, 14] } },
            frecce: [{ da: [-4, 2, 13], a: [48, 56, -42], col: GR, dash: true }] },
          { tori: { pelvis: [26, 92, 12], yaw: 190, lean: 32, twist: 20, piedi: { dx: [58, 60, -46], sx: [30, 0, 16] }, ginocchio: { dx: [0, 1, 0] }, mani: { dx: [26, 112, -4], sx: [6, 86, 4] } },
            uke: { pelvis: [44, 124, -26], yaw: 180, lean: 84, tilt: 20, piedi: { dx: [76, 66, -16], sx: [88, 92, 12] }, mani: { dx: [-4, 86, -26], sx: [16, 104, 10] } },
            frecce: [{ da: [50, 176, -20], a: [-6, 70, -60] }] }
        ] }
      };
    }
  
    /* ---------------- OSOTO GURUMA ---------------- */
    {
      const uke1 = { c: [0, 64], sx: [12, 68], dx: [-12, 68], etichetta: [0, 90] };
      const toriG = { c: [-26, 46], rot: -10, sx: [-38, 62, -10], dx: [-14, 26], etichetta: [-52, 24] };
      DISEGNI["osoto-guruma"] = {
        pianta: [
          { tori: T0, uke: uke1, prese: PR0 },
          { tori: { ...T0, c: [0, 6], sx: [-14, 2], dx: [14, -4] }, uke: { ...uke1, c: [0, 68] }, prese: [{ da: [22, 6], a: [7, 60] }, { da: [-22, 6], a: [-31, 50] }],
            frecce: [{ da: [0, 74], a: [-6, 108], tipo: "squilibrio", testo: "dietro di uke", fine: true, tx: -12, ty: 108 }] },
          { tori: { ...toriG, prima: { sx: [-14, 2] }, alza: "dx" }, uke: { ...uke1, c: [0, 68] }, prese: [{ da: [-4, 48], a: [7, 60] }, { da: [-46, 46], a: [-31, 52] }],
            frecce: [{ da: [-14, 6], a: [-36, 50], tipo: "piede", curva: .15, testo: "il sinistro fuori dal suo destro", fine: true, tx: -46, ty: 30 },
              { da: [-14, 30], a: [28, 84], tipo: "piede", curva: -.25 }] },
          { tori: { ...toriG, dx: [28, 86, -60], alza: "dx" }, uke: { ...uke1, c: [-4, 74], alza: "entrambi" }, prese: [{ da: [-4, 48], a: [7, 60] }, { da: [-46, 46], a: [-31, 52] }],
            frecce: [{ da: [-26, 54], a: [30, 88], tipo: "falciata", testo: "gamba tesa dietro le due gambe", tx: 18, ty: 104, curva: -.1 },
              { da: [4, 70], a: [-14, 116], tipo: "caduta", testo: "caduta", fine: true, tx: -18, ty: 118 }] }
        ],
        lato: { cam: { yaw: 155, pitch: 14 }, passi: [
          { tori: L0.tori, uke: { ...L0.uke, piedi: { dx: [66, 0, -12], sx: [64, 0, 12] } } },
          { tori: { pelvis: [10, 92, -2], yaw: 0, lean: 10, piedi: { dx: [4, 0, 13], sx: [16, 0, -13] }, mani: { dx: [60, 124, 6], sx: [40, 110, -30] } },
            uke: { pelvis: [70, 92, 0], yaw: 180, lean: -14, piedi: { dx: [66, 0, -12], sx: [64, 0, 12] }, mani: { dx: [28, 124, -8], sx: [34, 104, 24] } },
            frecce: [{ da: [72, 150, 0], a: [102, 150, 0] }] },
          { tori: { pelvis: [44, 90, -22], yaw: -10, lean: 14, piedi: { dx: [36, 22, -6], sx: [52, 0, -36] }, ginocchio: { dx: [1, 0.3, 0] }, mani: { dx: [70, 122, 4], sx: [52, 116, -38] } },
            uke: { pelvis: [72, 92, 0], yaw: 180, lean: -14, piedi: { dx: [68, 0, -12], sx: [66, 0, 12] }, mani: { dx: [46, 124, -16], sx: [48, 104, 18] } },
            frecce: [{ da: [16, 2, -13], a: [48, 2, -34], col: GR, dash: true }] },
          { tori: { pelvis: [56, 86, -30], yaw: -40, lean: 34, piedi: { dx: [94, 44, 30], sx: [50, 0, -40] }, ginocchio: { dx: [0, -1, 0] }, mani: { dx: [82, 112, 6], sx: [70, 98, -30] } },
            uke: { pelvis: [86, 84, 0], yaw: 180, lean: -40, piedi: { dx: [72, 10, -12], sx: [70, 10, 12] }, mani: { dx: [60, 110, -18], sx: [62, 100, 14] } },
            frecce: [{ da: [96, 150, 0], a: [132, 94, 0] }] }
        ] }
      };
    }
  
    /* ---------------- MOROTE SEOI NAGE ---------------- */
    {
      const toriG = { c: [0, 46], rot: 180, dx: [-10, 42, 180], sx: [10, 42, 180], etichetta: [36, 30] };
      DISEGNI["morote-seoi-nage"] = {
        pianta: [
          { tori: { c: [-2, 22], rot: 90, dx: [-8, 44, 110], sx: [-14, -4], prima: { dx: [14, -4] }, etichetta: [28, 14] }, uke: U0,
            prese: [{ da: [-6, 40], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [2, 2], a: [-31, 54], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [14, 2], a: [-6, 36], tipo: "piede", curva: -.2, testo: "il destro davanti al suo destro, all'interno", fine: true }] },
          { tori: { c: [-2, 22], rot: 110, dx: [-8, 44, 110], sx: [-14, -4], etichetta: [28, 14] }, uke: { ...U0, c: [-4, 60] },
            prese: [{ da: [-8, 38], a: [5, 52] }, { da: [4, 4], a: [-36, 36] }],
            frecce: [{ da: [-8, 56], a: [-42, 24], tipo: "squilibrio", testo: "avanti-destra di uke, in alto", fine: true }] },
          { tori: { ...toriG, prima: { sx: [-14, -4] } }, uke: { ...U0, c: [-4, 60] },
            prese: [{ da: [-22, 46], a: [-22, 62], testo: "gomito destro sotto l'ascella", fine: true, dx: -8 }, { da: [22, 46], a: [-36, 36], testo: "tira la manica", fine: true }],
            frecce: [{ da: [-14, 0], a: [8, 36], tipo: "piede", curva: .5 }] },
          { tori: { ...toriG, c: [0, 44] }, uke: { c: [0, 62], sx: [14, 68], dx: [-14, 68], alza: "entrambi", etichetta: [26, 88] },
            prese: [{ da: [-22, 44], a: [-22, 60] }, { da: [22, 44], a: [-36, 26] }],
            frecce: [{ da: [4, 70], a: [-34, 4], tipo: "caduta", testo: "sopra la spalla destra di tori", fine: true, curva: .25 }] }
        ],
        lato: { cam: { yaw: 25, pitch: 10 }, passi: [
          { tori: { pelvis: [14, 92, 4], yaw: -40, lean: 5, piedi: { dx: [42, 0, -6], sx: [-2, 0, -13] }, mani: { dx: [48, 128, 8], sx: [40, 104, -26] } }, uke: L0.uke,
            frecce: [{ da: [4, 2, 13], a: [40, 2, -4], col: GR, dash: true }] },
          { tori: { pelvis: [14, 94, 4], yaw: -60, lean: 0, piedi: { dx: [42, 0, -6], sx: [-2, 0, -13] }, mani: { dx: [44, 136, 8], sx: [12, 118, -30] } },
            uke: { pelvis: [58, 94, 0], yaw: 180, lean: 16, piedi: { dx: [60, 4, -13], sx: [64, 4, 13] }, mani: { dx: [14, 124, -10], sx: [20, 106, 24] } },
            frecce: [{ da: [50, 160, 0], a: [22, 160, -26] }] },
          { tori: { pelvis: [44, 80, 0], yaw: 180, lean: 12, piedi: { dx: [46, 0, -10], sx: [46, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, gomito: { dx: [0, -1, 0] }, mani: { dx: [56, 120, 8], sx: [22, 112, -26] } },
            uke: { pelvis: [66, 94, 0], yaw: 180, lean: 22, piedi: { dx: [62, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } },
            frecce: [{ da: [0, 2, -13], a: [42, 2, 8], col: GR, dash: true }] },
          { tori: { pelvis: [46, 86, 0], yaw: 180, lean: 55, piedi: { dx: [48, 0, -10], sx: [48, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, gomito: { dx: [0, -1, 0] }, mani: { dx: [26, 110, -2], sx: [0, 92, -26] } },
            uke: { pelvis: [70, 122, -6], yaw: 180, lean: 78, tilt: -15, piedi: { dx: [104, 140, -14], sx: [108, 128, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [6, 104, -20], sx: [28, 118, 18] } },
            frecce: [{ da: [100, 170, -6], a: [0, 80, -6] }] }
        ] }
      };
    }
  
    /* ---------------- KATA GURUMA ---------------- */
    {
      const tori1 = { c: [-6, 40], dx: [-2, 58], sx: [-14, 10], etichetta: [30, 22] };
      DISEGNI["kata-guruma"] = {
        pianta: [
          { tori: { ...tori1, prima: { dx: [14, -4] } }, uke: U0, prese: [{ da: [16, 40], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-28, 40], a: [-31, 54], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [14, 2], a: [0, 48], tipo: "piede", curva: -.2, testo: "il destro tra i piedi di uke", fine: true, tx: -24, ty: 18 }] },
          { tori: tori1, uke: { ...U0, c: [-12, 52] }, prese: [{ da: [16, 40], a: [-2, 52] }, { da: [-28, 40], a: [-44, 54] }],
            frecce: [{ da: [-12, 58], a: [-48, 30], tipo: "squilibrio", testo: "avanti-destra di uke, in alto", fine: true }] },
          { tori: { c: [-6, 44], dx: [-2, 58], sx: [-16, 52], prima: { sx: [-14, 10] }, etichetta: [30, 22] },
            uke: { terra: true, testa: [-56, 30], bacino: [16, 64], etichetta: [44, 84] },
            prese: [{ da: [14, 44], a: [24, 70], testo: "braccio destro tra le gambe, sulla coscia destra", dx: 4 }, { da: [-28, 44], a: [-52, 46], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [-14, 12], a: [-16, 40], tipo: "piede" }] },
          { tori: { c: [-6, 44], dx: [-2, 58], sx: [-16, 52], etichetta: [30, 22] },
            uke: { terra: true, testa: [-60, 92], bacino: [-62, 14], etichetta: [-92, 50] },
            prese: [{ da: [-28, 44], a: [-52, 30], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [-6, 70], a: [-52, 64], tipo: "caduta", curva: .3, testo: "rotola giù alla sinistra di tori", fine: true }] }
        ],
        lato: { cam: { yaw: -50, pitch: 12 }, passi: [
          { tori: { pelvis: [30, 72, 4], yaw: 0, lean: 2, piedi: { dx: [56, 0, 8], sx: [0, 0, -14] }, ginocchio: { dx: [1, 0, .3], sx: [1, 0, -.3] }, mani: { dx: [56, 120, 8], sx: [40, 110, -26] } },
            uke: { ...L0.uke, pelvis: [66, 92, 0], lean: 10, mani: { dx: [36, 120, -14], sx: [42, 112, 24] } },
            frecce: [{ da: [4, 2, 13], a: [52, 2, 8], col: GR, dash: true }] },
          { tori: { pelvis: [30, 70, 4], yaw: 0, lean: 2, piedi: { dx: [56, 0, 8], sx: [0, 0, -14] }, ginocchio: { dx: [1, 0, .3], sx: [1, 0, -.3] }, mani: { dx: [56, 120, 8], sx: [24, 140, -26] } },
            uke: { pelvis: [66, 96, 0], yaw: 180, lean: 46, tilt: 16, piedi: { dx: [66, 4, -13], sx: [64, 4, 13] }, mani: { dx: [26, 140, -26], sx: [44, 106, 20] } },
            frecce: [{ da: [60, 150, 0], a: [34, 160, -30] }] },
          { tori: { pelvis: [30, 70, 4], yaw: 0, lean: 6, piedi: { dx: [56, 0, 8], sx: [24, 0, -10] }, ginocchio: { dx: [1, 0, .3], sx: [1, 0, -.3] }, mani: { dx: [50, 112, 24], sx: [52, 116, -30] } },
            uke: { pelvis: [36, 130, 22], yaw: 90, lean: 90, tilt: 0, piedi: { dx: [56, 70, 34], sx: [30, 72, 40] }, ginocchio: { dx: [1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [56, 90, -50], sx: [30, 90, -54] } },
            frecce: [{ da: [4, 2, -14], a: [20, 2, -10], col: GR, dash: true }] },
          { tori: { pelvis: [32, 90, 4], yaw: 0, lean: 18, piedi: { dx: [44, 0, 8], sx: [24, 0, -10] }, mani: { dx: [56, 140, 24], sx: [52, 100, -40] } },
            uke: { pelvis: [44, 150, 4], yaw: 90, lean: 120, tilt: 0, piedi: { dx: [56, 170, 50], sx: [40, 170, 40] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [60, 80, -60], sx: [48, 80, -62] } },
            frecce: [{ da: [36, 190, 20], a: [70, 50, -70] }] }
        ] }
      };
    }
  
    /* ---------------- UKI OTOSHI ---------------- */
    {
      const tori1 = { c: [0, -16], sx: [-14, -20], dx: [14, -20], etichetta: [0, -40] };
      const uke1 = { c: [0, 48], sx: [14, 52], dx: [-14, 52], etichetta: [0, 76] };
      const prT = [{ da: [22, -16], a: [7, 40] }, { da: [-22, -16], a: [-31, 38] }];
      const toriK = { c: [-8, -22], rot: 30, dx: [10, -10, 20], sx: [-36, -50, 40], alza: "sx", etichetta: [28, -40] };
      DISEGNI["uki-otoshi"] = {
        pianta: [
          { tori: { ...tori1, prima: { sx: [-14, -4], dx: [14, -4] } }, uke: { ...uke1, prima: { sx: [14, 68], dx: [-14, 68] } },
            prese: [{ da: [22, -16], a: [7, 40], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, -16], a: [-31, 38], testo: "manica", fine: true, dx: -6 }],
            frecce: [{ da: [30, 0], a: [30, -16], tipo: "piede", testo: "tsugi ashi indietro", tx: 36, ty: -10 }, { da: [30, 70], a: [30, 54], tipo: "piede", testo: "uke avanza", tx: 36, ty: 62 }] },
          { tori: tori1, uke: { ...uke1, c: [-4, 46] }, prese: [{ da: [22, -16], a: [5, 38] }, { da: [-22, -16], a: [-38, 22] }],
            frecce: [{ da: [-6, 42], a: [-44, -2], tipo: "squilibrio", curva: .25, testo: "avanti-destra di uke, ad arco verso il basso", fine: true }] },
          { tori: { ...toriK, prima: { sx: [-14, -20], dx: [14, -20] } }, uke: { ...uke1, c: [-4, 46] }, prese: [{ da: [8, -10], a: [5, 38] }, { da: [-28, -32], a: [-38, 18] }],
            frecce: [{ da: [-16, -24], a: [-32, -44], tipo: "piede", testo: "grande passo indietro, ginocchio sinistro a terra", fine: true }] },
          { tori: toriK, uke: { c: [-24, 30], sx: [14, 52], dx: [-14, 52], alza: "sx", etichetta: [16, 76] }, prese: [{ da: [8, -10], a: [-14, 26] }, { da: [-28, -32], a: [-44, -8] }],
            frecce: [{ da: [-14, 44], a: [-68, -26], tipo: "caduta", curva: .2, testo: "vola sopra il suo piede destro, davanti a tori", fine: true }] }
        ],
        lato: { cam: { yaw: 20, pitch: 12 }, passi: [
          { tori: { ...L0.tori, pelvis: [-16, 92, 0], piedi: { dx: [-14, 0, 13], sx: [-18, 0, -13] }, mani: { dx: [28, 128, 8], sx: [24, 104, -26] } },
            uke: { ...L0.uke, pelvis: [48, 92, 0], piedi: { dx: [48, 0, -13], sx: [46, 0, 13] }, mani: { dx: [4, 128, -8], sx: [8, 104, 26] } },
            frecce: [{ da: [0, 2, 24], a: [-16, 2, 24], col: GR, dash: true }, { da: [62, 2, 24], a: [48, 2, 24], col: GR, dash: true }] },
          { tori: { pelvis: [-16, 92, 0], yaw: 0, lean: 2, piedi: { dx: [-14, 0, 13], sx: [-18, 0, -13] }, mani: { dx: [26, 134, 8], sx: [10, 96, -34] } },
            uke: { pelvis: [44, 92, -3], yaw: 180, lean: 18, tilt: 6, piedi: { dx: [46, 2, -13], sx: [50, 2, 13] }, mani: { dx: [2, 128, -12], sx: [8, 104, 20] } },
            frecce: [{ da: [40, 150, -4], a: [10, 120, -36] }] },
          { tori: { pelvis: [-20, 52, -4], yaw: 25, lean: 8, piedi: { dx: [10, 0, 16], sx: [-60, 2, -40] }, ginocchio: { dx: [1, 1, 0], sx: [.3, -1, 0] }, mani: { dx: [24, 100, 8], sx: [-6, 72, -40] } },
            uke: { pelvis: [40, 92, -6], yaw: 180, lean: 30, tilt: 10, piedi: { dx: [46, 2, -13], sx: [52, 6, 13] }, mani: { dx: [-4, 76, -36], sx: [18, 102, 14] } },
            frecce: [{ da: [-18, 4, -13], a: [-54, 4, -38], col: GR, dash: true }] },
          { tori: { pelvis: [-20, 52, -4], yaw: 35, lean: 14, piedi: { dx: [10, 0, 16], sx: [-60, 2, -40] }, ginocchio: { dx: [1, 1, 0], sx: [.3, -1, 0] }, mani: { dx: [14, 76, 0], sx: [-20, 42, -36] } },
            uke: { pelvis: [26, 104, -30], yaw: 200, lean: 80, tilt: 20, piedi: { dx: [44, 6, -14], sx: [70, 70, 10] }, mani: { dx: [-10, 50, -60], sx: [2, 70, -10] } },
            frecce: [{ da: [36, 150, -20], a: [-14, 30, -80] }] }
        ] }
      };
    }
  
    /* ---------------- SUMI OTOSHI ---------------- */
    {
      const uke1 = { c: [0, 68], sx: [14, 68], dx: [-14, 80], etichetta: [12, 94] };
      const toriS = { c: [-18, 38], rot: -15, sx: [-36, 62, -15], dx: [2, 18], prima: { sx: [-14, -4] }, etichetta: [-50, 22] };
      DISEGNI["sumi-otoshi"] = {
        pianta: [
          { tori: T0, uke: { ...uke1, prima: { dx: [-14, 68] } }, prese: PR0,
            frecce: [{ da: [-26, 66], a: [-26, 80], tipo: "piede", testo: "uke arretra con il destro", fine: true, tx: -32, ty: 80 }] },
          { tori: T0, uke: { ...uke1, c: [-4, 72] }, prese: [{ da: [22, 0], a: [5, 62] }, { da: [-22, 0], a: [-34, 64] }],
            frecce: [{ da: [-6, 76], a: [-34, 110], tipo: "squilibrio", testo: "dietro-destra di uke", fine: true, tx: -38, ty: 114 }] },
          { tori: toriS, uke: { ...uke1, c: [-4, 72] }, prese: [{ da: [4, 40], a: [5, 62] }, { da: [-40, 34], a: [-34, 64] }],
            frecce: [{ da: [-14, 2], a: [-34, 54], tipo: "piede", curva: .15, testo: "il sinistro fuori dal suo destro", fine: true, tx: -46, ty: 34 }] },
          { tori: { ...toriS, prima: undefined, c: [-16, 44] }, uke: { ...uke1, c: [-12, 80], alza: "sx" }, prese: [{ da: [6, 46], a: [-2, 74] }, { da: [-38, 40], a: [-32, 70] }],
            frecce: [{ da: [-6, 78], a: [-40, 118], tipo: "caduta", testo: "verso il suo tallone destro", fine: true, curva: -.15 }] }
        ],
        lato: { cam: { yaw: 155, pitch: 12 }, passi: [
          { tori: L0.tori, uke: { ...L0.uke, pelvis: [68, 92, 0], piedi: { dx: [78, 0, -13], sx: [62, 0, 13] } },
            frecce: [{ da: [64, 2, -13], a: [78, 2, -13], col: GR, dash: true }] },
          { tori: { pelvis: [6, 92, 0], yaw: 0, lean: 8, piedi: { dx: [2, 0, 13], sx: [6, 0, -13] }, mani: { dx: [56, 134, 6], sx: [46, 92, -26] } },
            uke: { pelvis: [72, 90, -4], yaw: 180, lean: -14, tilt: -6, piedi: { dx: [78, 0, -13], sx: [62, 0, 13] }, mani: { dx: [28, 128, -8], sx: [34, 104, 24] } },
            frecce: [{ da: [72, 150, -4], a: [100, 150, -30] }] },
          { tori: { pelvis: [36, 90, -20], yaw: -12, lean: 16, piedi: { dx: [8, 4, 10], sx: [60, 0, -36] }, mani: { dx: [66, 132, 0], sx: [56, 90, -30] } },
            uke: { pelvis: [74, 90, -4], yaw: 180, lean: -16, tilt: -6, piedi: { dx: [78, 0, -13], sx: [62, 0, 13] }, mani: { dx: [44, 124, -8], sx: [48, 100, 20] } },
            frecce: [{ da: [8, 2, -13], a: [54, 2, -36], col: GR, dash: true }] },
          { tori: { pelvis: [46, 82, -22], yaw: -12, lean: 30, piedi: { dx: [20, 4, 6], sx: [60, 0, -36] }, mani: { dx: [72, 132, 0], sx: [72, 70, -28] } },
            uke: { pelvis: [90, 76, -18], yaw: 180, lean: -46, tilt: -16, piedi: { dx: [80, 0, -13], sx: [64, 24, 16] }, mani: { dx: [58, 120, -8], sx: [62, 96, 16] } },
            frecce: [{ da: [92, 140, -10], a: [124, 80, -44] }] }
        ] }
      };
    }
  
    /* ---------------- SUKUI NAGE ---------------- */
    {
      const uke1 = { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [26, 92] };
      const tori1 = { c: [-54, 80], rot: 180, sx: [-44, 90, 180], dx: [-70, 90, 180], etichetta: [-58, 106] };
      DISEGNI["sukui-nage"] = {
        pianta: [
          { tori: tori1, uke: uke1 },
          { tori: tori1, uke: { ...uke1, c: [0, 68] }, prese: [{ da: [-40, 80], a: [14, 54], testo: "braccio sinistro sul petto", dx: 4 }],
            frecce: [{ da: [4, 66], a: [8, 104], tipo: "squilibrio", testo: "dietro di uke", tx: 14, ty: 108 }] },
          { tori: { ...tori1, c: [-50, 78] }, uke: { ...uke1, c: [0, 68] },
            prese: [{ da: [-40, 80], a: [14, 54] }, { da: [-70, 78], a: [8, 76], testo: "braccio destro dietro le cosce", dx: 4 }] },
          { tori: tori1, uke: { ...uke1, c: [0, 70], alza: "entrambi" },
            prese: [{ da: [-40, 80], a: [14, 58] }, { da: [-70, 78], a: [8, 76] }],
            frecce: [{ da: [0, 52], a: [14, 106], tipo: "caduta", curva: -.2, testo: "le gambe salgono, cade sulla schiena", tx: 20, ty: 110 }] }
        ],
        lato: { cam: { yaw: -130, pitch: 12 }, passi: [
          { tori: { pelvis: [80, 84, -28], yaw: 180, lean: 10, piedi: { dx: [84, 0, -40], sx: [76, 0, -12] }, mani: { dx: [70, 90, -36], sx: [62, 110, -8] } },
            uke: { pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [40, 90, -20], sx: [44, 88, 22] } } },
          { tori: { pelvis: [80, 82, -28], yaw: 180, lean: 10, piedi: { dx: [84, 0, -40], sx: [76, 0, -12] }, mani: { dx: [70, 90, -36], sx: [52, 120, 12] }, gomito: { sx: [0, 0, -1] } },
            uke: { pelvis: [68, 92, 0], yaw: 180, lean: -14, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [44, 92, -20], sx: [48, 90, 22] } },
            frecce: [{ da: [56, 150, 4], a: [86, 150, 4] }] },
          { tori: { pelvis: [84, 66, -26], yaw: 180, lean: 18, piedi: { dx: [90, 0, -42], sx: [80, 0, -10] }, ginocchio: { dx: [-1, 0, -.3], sx: [-1, 0, .3] }, mani: { dx: [76, 54, 8], sx: [54, 118, 12] }, gomito: { sx: [0, 0, -1] } },
            uke: { pelvis: [68, 92, 0], yaw: 180, lean: -14, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [44, 92, -20], sx: [48, 90, 22] } } },
          { tori: { pelvis: [84, 76, -26], yaw: 180, lean: 18, piedi: { dx: [90, 0, -42], sx: [80, 0, -10] }, mani: { dx: [64, 80, 8], sx: [72, 98, 12] }, gomito: { sx: [0, 0, -1] } },
            uke: { pelvis: [70, 84, 0], yaw: 180, lean: -70, piedi: { dx: [36, 86, -13], sx: [36, 80, 13] }, mani: { dx: [70, 110, -24], sx: [74, 104, 24] } },
            frecce: [{ da: [96, 140, 4], a: [120, 60, 4] }, { da: [30, 60, 0], a: [36, 110, 0], col: RED }] }
        ] }
      };
    }
    // Viste omesse perche' il passo 4 (o altri) non risultava chiaro/corretto
    ["tai-otoshi", "ashi-guruma", "o-guruma", "osoto-guruma", "sukui-nage"].forEach(id => { delete DISEGNI[id].lato; });
    delete DISEGNI["kata-guruma"]; // nessuna delle due viste e' risultata chiara (uke sulle spalle di tori)
  })();

  // Sutemi waza (gruppo 4): tomoe nage, sumi gaeshi, ura nage, tani otoshi, hane makikomi, soto makikomi,
  // uki waza, yoko wakare, yoko guruma, yoko gake, yoko otoshi
  (function () {
    // posizione iniziale comune (vista dall'alto)
    const P0 = {
      tori: { c: [0, 0], sx: [-14, -4], dx: [14, -4], etichetta: [0, -24] },
      uke: { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [0, 90] },
      prese: [{ da: [22, 0], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }]
    };
    const G0 = [{ da: [22, 0], a: [7, 56] }, { da: [-22, 0], a: [-31, 54] }];
    // posizione iniziale comune (vista laterale)
    const L0 = { tori: { pelvis: [0, 92, 0], yaw: 0, lean: 5, piedi: { dx: [2, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [44, 128, 8], sx: [40, 104, -26] } },
      uke: { pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } } };
    const GRIGIO = "#6b7480", ROSSO = "#c8372d";
  
    // ---------------- TOMOE NAGE ----------------
    DISEGNI["tomoe-nage"] = {
      pianta: [
        { ...P0, frecce: [{ da: [0, 50], a: [0, 30], tipo: "piede", testo: "uke avanza", tx: -40, ty: 38, fine: true }] },
        { tori: P0.tori, uke: { ...P0.uke, busto: [0, 58] }, prese: G0,
          frecce: [{ da: [0, 66], a: [0, 30], tipo: "squilibrio", testo: "in avanti", tx: 8, ty: 36 }] },
        { tori: { terra: true, testa: [0, -88], bacino: [0, -12], etichetta: [-50, -60] },
          uke: { c: [0, 64], busto: [0, 44], sx: [14, 68], dx: [-14, 68], etichetta: [0, 92] },
          prese: [{ da: [16, -66], a: [7, 38] }, { da: [-16, -66], a: [-31, 36] }],
          frecce: [{ da: [30, 20], a: [12, 50], tipo: "piede", testo: "piede destro sulla pancia di uke", curva: .2 }] },
        { tori: { terra: true, testa: [0, -88], bacino: [0, -12], etichetta: [-50, -60] },
          uke: { terra: true, testa: [60, -190], bacino: [60, -120], etichetta: [100, -170] },
          frecce: [{ da: [0, 40], a: [50, -150], tipo: "caduta", testo: "dietro la testa", curva: .4, tx: 80, ty: -60 }] }
      ],
      lato: { cam: { yaw: 20, pitch: 10 }, passi: [
        { ...L0, frecce: [{ da: [74, 2, 13], a: [52, 2, 13], col: GRIGIO, dash: true }] },
        { tori: { ...L0.tori, pelvis: [-2, 92, 0], lean: -2, mani: { dx: [38, 128, 8], sx: [34, 112, -24] } },
          uke: { ...L0.uke, pelvis: [58, 90, 0], lean: 24, piedi: { dx: [66, 0, -13], sx: [64, 0, 13] }, mani: { dx: [14, 124, -8], sx: [18, 106, 24] } },
          frecce: [{ da: [60, 160, 0], a: [28, 160, 0] }] },
        { tori: { pelvis: [24, 16, 0], yaw: 0, lean: -75, piedi: { dx: [50, 84, 6], sx: [58, 0, -2] }, ginocchio: { dx: [0, 0.2, 1], sx: [0, 1, 0] }, mani: { dx: [34, 96, 10], sx: [34, 92, -12] } },
          uke: { pelvis: [56, 86, 0], yaw: 180, lean: 34, piedi: { dx: [70, 0, -14], sx: [70, 0, 14] }, mani: { dx: [32, 100, -8], sx: [34, 96, 12] } },
          frecce: [{ da: [44, 110, 0], a: [22, 96, 0] }] },
        { tori: { pelvis: [24, 14, 0], yaw: 0, lean: -86, piedi: { dx: [34, 100, 6], sx: [66, 0, -2] }, ginocchio: { dx: [0, 0, 1], sx: [0, 1, 0] }, mani: { dx: [-12, 70, 10], sx: [-12, 66, -12] } },
          uke: { pelvis: [14, 112, 0], yaw: 180, lean: 112, piedi: { dx: [56, 126, -14], sx: [56, 126, 14] }, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [-12, 76, -8], sx: [-12, 74, 12] } },
          frecce: [{ da: [50, 150, 0], a: [-40, 120, 0], col: "#e8742a" }, { da: [-20, 90, 0], a: [-60, 20, 0] }] }
      ] }
    };
  
    // ---------------- SUMI GAESHI ----------------
    DISEGNI["sumi-gaeshi"] = {
      pianta: [
        { ...P0, prese: [{ da: [22, 0], a: [4, 76], testo: "schiena", dx: 6, dy: 2 }, { da: [-22, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }] },
        { tori: P0.tori, uke: { ...P0.uke, busto: [0, 58] }, prese: G0,
          frecce: [{ da: [0, 70], a: [0, 34], tipo: "squilibrio", testo: "in avanti", tx: 8, ty: 36 }] },
        { tori: { seduta: true, c: [0, 26], busto: [0, 34], sx: [-8, 50], dx: [10, 60], etichetta: [-40, 24] }, uke: { c: [0, 64], busto: [0, 56], sx: [14, 68], dx: [-14, 68], etichetta: [0, 92] },
          prese: G0, frecce: [{ da: [-30, 10], a: [-10, 44], tipo: "piede", testo: "sinistro tra i piedi", fine: true, tx: -40, ty: 40, curva: -.2 }] },
        { tori: { terra: true, testa: [0, -20], bacino: [0, 34], etichetta: [-46, -4] }, uke: { terra: true, testa: [40, -110], bacino: [40, -45], etichetta: [80, -110] },
          frecce: [{ da: [0, 80], a: [40, -90], tipo: "caduta", testo: "uke passa sopra", curva: .5, tx: 60, ty: 10 }] }
      ],
      lato: { cam: { yaw: 20, pitch: 10 }, passi: [
        { ...L0, tori: { ...L0.tori, pelvis: [6, 80, 0], lean: 14 }, uke: { ...L0.uke, pelvis: [62, 82, 0], lean: 14 } },
        { tori: { ...L0.tori, pelvis: [4, 80, 0], lean: 6, mani: { dx: [44, 120, 8], sx: [38, 104, -26] } },
          uke: { ...L0.uke, pelvis: [56, 86, 0], lean: 28, piedi: { dx: [64, 4, -13], sx: [62, 4, 13] }, mani: { dx: [16, 120, -8], sx: [20, 104, 24] } },
          frecce: [{ da: [58, 160, 0], a: [28, 160, 0] }] },
        { tori: { pelvis: [34, 26, 0], yaw: 0, lean: 14, piedi: { dx: [66, 52, 10], sx: [52, 0, -6] }, ginocchio: { dx: [0, .2, 1], sx: [0, 1, 0] }, mani: { dx: [58, 86, 6], sx: [50, 76, -26] } },
          uke: { pelvis: [62, 84, 0], yaw: 180, lean: 30, piedi: { dx: [70, 0, -14], sx: [70, 0, 14] }, mani: { dx: [36, 100, -8], sx: [40, 92, 20] } },
          frecce: [{ da: [70, 60, 24], a: [60, 56, 14], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [28, 12, 0], yaw: 0, lean: -86, piedi: { dx: [62, 80, 10], sx: [60, 0, -6] }, ginocchio: { dx: [0, 0, 1], sx: [0, 1, 0] }, mani: { dx: [-6, 70, 10], sx: [-6, 62, -12] } },
          uke: { pelvis: [44, 104, 0], yaw: 180, lean: 104, piedi: { dx: [84, 120, -14], sx: [84, 120, 14] }, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [-8, 76, -8], sx: [-8, 74, 12] } },
          frecce: [{ da: [50, 150, 0], a: [-30, 110, 0] }] }
      ] }
    };
  
    // ---------------- URA NAGE ----------------
    const UR = { cam: { yaw: -68, pitch: 10 } };
    DISEGNI["ura-nage"] = {
      pianta: [
        { tori: { c: [-34, 8], sx: [-48, 2], dx: [-20, 2], etichetta: [-34, -20] }, uke: { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [0, 92] },
          frecce: [{ da: [-34, 24], a: [-34, 56], tipo: "piede", testo: "entra sul fianco destro", tx: 20, ty: 30 }, { da: [-14, 80], a: [-14, 98], tipo: "caduta", testo: "pugno", tx: 0, ty: 100 }] },
        { tori: { c: [-44, 62], rot: -90, dx: [-44, 44, -90], sx: [-8, 86, -90], prima: {}, etichetta: [-44, 24] }, uke: P0.uke,
          prese: [{ da: [-44, 62], a: [10, 66] }, { da: [-44, 62], a: [8, 74] }],
          frecce: [{ da: [-30, 100], a: [-6, 96], tipo: "piede", testo: "sinistro dietro i piedi di uke", tx: -80, ty: 108, curva: .2 }] },
        { tori: { c: [-44, 62], rot: -90, dx: [-44, 44, -90], sx: [-8, 86, -90], etichetta: [-44, 24] }, uke: { ...P0.uke, alza: "entrambi" },
          prese: [{ da: [-44, 62], a: [10, 66] }, { da: [-44, 62], a: [8, 74] }],
          frecce: [{ da: [-2, 66], a: [-2, 90], tipo: "squilibrio", testo: "uke si stacca", tx: 6, ty: 100 }] },
        { tori: { terra: true, testa: [-100, 64], bacino: [-36, 64], etichetta: [-70, 30] }, uke: { terra: true, testa: [-190, 110], bacino: [-120, 110], etichetta: [-160, 140] },
          frecce: [{ da: [-20, 80], a: [-150, 96], tipo: "caduta", testo: "sopra la spalla sinistra", curva: .3, tx: -70, ty: 100 }] }
      ],
      lato: { cam: UR.cam, passi: [
        { tori: { pelvis: [66, 86, -70], yaw: -90, lean: 6, piedi: { dx: [56, 0, -76], sx: [76, 0, -62] }, mani: { dx: [60, 112, -52], sx: [72, 106, -52] } },
          uke: { pelvis: [64, 92, 0], yaw: 180, lean: 6, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [52, 182, -19], sx: [44, 114, 20] } },
          frecce: [{ da: [52, 192, -19], a: [52, 168, -19], col: ROSSO }, { da: [66, 40, -70], a: [66, 40, -40], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [66, 70, -30], yaw: -90, lean: 22, piedi: { dx: [54, 0, -40], sx: [84, 0, -10] }, ginocchio: { dx: [0, .3, 1], sx: [0, .3, 1] }, mani: { dx: [60, 100, -14], sx: [74, 100, 16] } },
          uke: { pelvis: [64, 92, 0], yaw: 180, lean: 6, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [48, 150, -19], sx: [44, 114, 20] } },
          frecce: [{ da: [84, 4, -34], a: [84, 4, -10], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [66, 84, -32], yaw: -90, lean: -6, piedi: { dx: [54, 0, -40], sx: [80, 0, -14] }, mani: { dx: [60, 104, -14], sx: [74, 104, 16] } },
          uke: { pelvis: [64, 112, -12], yaw: 180, lean: 4, tilt: 18, piedi: { dx: [60, 22, -20], sx: [64, 24, 4] }, mani: { dx: [48, 150, -19], sx: [44, 134, 20] } },
          frecce: [{ da: [66, 60, -50], a: [66, 120, -50] }] },
        { tori: { pelvis: [66, 14, -56], yaw: -90, lean: -84, tilt: 0, piedi: { dx: [54, 0, -66], sx: [80, 0, -40] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [60, 60, -30], sx: [76, 60, -10] } },
          uke: { pelvis: [66, 110, -70], yaw: 180, lean: 20, tilt: 150, piedi: { dx: [66, 150, -90], sx: [66, 150, -50] }, mani: { dx: [60, 60, -90], sx: [66, 60, -50] } },
          frecce: [{ da: [66, 150, -30], a: [66, 90, -110] }] }
      ] }
    };
  
    // ---------------- TANI OTOSHI ----------------
    const FL = { tori: { pelvis: [64, 90, -34], yaw: -90, lean: 4, piedi: { dx: [54, 0, -34], sx: [76, 0, -34] }, mani: { dx: [60, 112, -10], sx: [74, 120, 16] } } };
    DISEGNI["tani-otoshi"] = {
      pianta: [
        { tori: { c: [-44, 62], rot: -90, dx: [-44, 52, -90], sx: [-44, 72, -90], etichetta: [-44, 28] }, uke: P0.uke },
        { tori: { c: [-44, 62], rot: -90, dx: [-44, 52, -90], sx: [-44, 72, -90], etichetta: [-44, 28] }, uke: { ...P0.uke, busto: [0, 72] },
          prese: [{ da: [-44, 62], a: [-31, 54] }, { da: [-44, 62], a: [4, 70] }],
          frecce: [{ da: [0, 64], a: [-22, 96], tipo: "squilibrio", testo: "dietro-destra di uke", fine: true, tx: -26, ty: 102 }] },
        { tori: { c: [-44, 62], rot: -90, dx: [-44, 52, -90], sx: [8, 84, -90], etichetta: [-44, 28] }, uke: P0.uke,
          prese: [{ da: [-44, 62], a: [-31, 54] }, { da: [-44, 62], a: [4, 70] }],
          frecce: [{ da: [-32, 76], a: [10, 86], tipo: "falciata", testo: "gamba sinistra dietro i talloni", tx: -80, ty: 98, curva: .2 }] },
        { tori: { seduta: true, c: [-36, 70], busto: [-40, 68], dx: [-34, 50], sx: [10, 84], etichetta: [-70, 46] }, uke: { terra: true, testa: [-4, 160], bacino: [-4, 90], etichetta: [30, 140] },
          frecce: [{ da: [0, 64], a: [-4, 120], tipo: "caduta", testo: "cade all'indietro", tx: 14, ty: 118 }] }
      ],
      lato: { cam: { yaw: -68, pitch: 10 }, passi: [
        { ...FL, uke: { ...L0.uke, pelvis: [64, 92, 0] } },
        { tori: { ...FL.tori, lean: 10, mani: { dx: [60, 110, -10], sx: [74, 106, 16] } },
          uke: { pelvis: [66, 90, 0], yaw: 180, lean: -14, tilt: 12, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [48, 124, -19], sx: [44, 110, 20] } },
          frecce: [{ da: [66, 160, 0], a: [90, 160, 0] }] },
        { tori: { pelvis: [64, 46, -30], yaw: -90, lean: 14, piedi: { dx: [54, 0, -36], sx: [90, 4, 8] }, ginocchio: { dx: [0, .3, 1], sx: [0, 1, 0] }, mani: { dx: [60, 90, -10], sx: [76, 100, 14] } },
          uke: { pelvis: [70, 90, 0], yaw: 180, lean: -20, tilt: 10, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [52, 122, -19], sx: [48, 108, 20] } },
          frecce: [{ da: [66, 4, -30], a: [92, 4, 8], col: ROSSO }] },
        { tori: { pelvis: [66, 14, -30], yaw: -90, lean: 20, tilt: -50, piedi: { dx: [56, 6, -30], sx: [96, 4, 14] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [60, 40, -10], sx: [76, 50, 14] } },
          uke: { pelvis: [82, 50, 4], yaw: 180, lean: -66, tilt: 6, piedi: { dx: [60, 24, -13], sx: [64, 28, 15] }, mani: { dx: [90, 20, -19], sx: [96, 30, 20] } },
          frecce: [{ da: [80, 110, 6], a: [110, 40, 6] }] }
      ] }
    };
  
    // ---------------- HANE MAKIKOMI ----------------
    const MK_L = [
      { ...L0, frecce: [{ da: [74, 2, 13], a: [52, 2, 13], col: GRIGIO, dash: true }] },
      { tori: { pelvis: [-6, 92, 0], yaw: 0, lean: -4, piedi: { dx: [4, 0, 13], sx: [-10, 0, -13] }, mani: { dx: [40, 126, 8], sx: [10, 116, -30] } },
        uke: { pelvis: [56, 94, 0], yaw: 180, lean: 16, piedi: { dx: [58, 0, -13], sx: [64, 0, 13] }, mani: { dx: [14, 126, -8], sx: [18, 104, 24] } },
        frecce: [{ da: [46, 150, 0], a: [18, 150, -24] }] }
    ];
    DISEGNI["hane-makikomi"] = {
      pianta: [
        P0,
        { tori: P0.tori, uke: P0.uke, prese: [{ da: [22, 0], a: [7, 60] }, { da: [-22, 0], a: [-36, 40] }],
          frecce: [{ da: [-8, 56], a: [-40, 26], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -44, ty: 20 }] },
        { tori: { c: [-8, 46], rot: 180, dx: [-14, 54, 180], sx: [10, 40, 180], prima: { dx: [14, 6], sx: [-14, 2] }, etichetta: [36, 30] }, uke: P0.uke,
          prese: [{ da: [-30, 46], a: [-22, 60], testo: "braccio sotto l'ascella", fine: true, dx: -8 }, { da: [14, 46], a: [-36, 36], testo: "tira la manica", fine: true, dx: -6, dy: 10 }],
          frecce: [{ da: [14, 6], a: [-14, 52], tipo: "piede", curva: -.1 }, { da: [-14, 2], a: [10, 40], tipo: "piede", curva: .5 }] },
        { tori: { c: [-8, 42], busto: [-8, 36], rot: 180, dx: [-14, 54, 180], sx: [10, 40, 180], alza: "dx", etichetta: [-50, 10] }, uke: { terra: true, testa: [60, -10], bacino: [60, 56], etichetta: [100, 80] },
          prese: [{ da: [-30, 42], a: [-22, 58] }, { da: [14, 42], a: [-36, 30] }],
          frecce: [{ da: [-14, 50], a: [-14, 80], tipo: "falciata", testo: "hane", tx: -40, ty: 80, fine: true, curva: .2 }, { da: [-6, 80], a: [56, 14], tipo: "caduta", testo: "sopra la schiena", curva: -.4, tx: 40, ty: 90 }] }
      ],
      lato: { cam: { yaw: 25, pitch: 10 }, passi: [
        MK_L[0], MK_L[1],
        { tori: { pelvis: [46, 82, -4], yaw: 180, lean: 14, piedi: { dx: [56, 0, -12], sx: [44, 0, 12] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, gomito: { dx: [0, -1, -.3] }, mani: { dx: [60, 124, -14], sx: [22, 112, -26] } },
          uke: { pelvis: [68, 94, 0], yaw: 180, lean: 20, piedi: { dx: [62, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } },
          frecce: [{ da: [10, 2, 13], a: [52, 2, -10], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [48, 84, -4], yaw: 180, lean: 56, piedi: { dx: [92, 96, -12], sx: [46, 0, 12] }, ginocchio: { dx: [0, -1, 0], sx: [-1, 0, 0] }, mani: { dx: [12, 116, -12], sx: [0, 92, -26] } },
          uke: { pelvis: [70, 124, -6], yaw: 180, lean: 78, tilt: -15, piedi: { dx: [106, 140, -14], sx: [110, 128, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [6, 104, -20], sx: [28, 118, 18] } },
          frecce: [{ da: [92, 120, -12], a: [100, 150, -12], col: ROSSO }, { da: [100, 170, -6], a: [0, 80, -6] }] }
      ] }
    };
  
    // ---------------- SOTO MAKIKOMI ----------------
    DISEGNI["soto-makikomi"] = {
      pianta: [
        P0,
        { tori: P0.tori, uke: P0.uke, prese: [{ da: [22, 0], a: [7, 60] }, { da: [-22, 0], a: [-36, 40] }],
          frecce: [{ da: [-8, 56], a: [-40, 26], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -44, ty: 20 }] },
        { tori: { c: [-26, 46], rot: 180, dx: [-34, 58, 180], sx: [-6, 40, 180], prima: { dx: [14, -4], sx: [-14, -4] }, etichetta: [10, 24] }, uke: P0.uke,
          prese: [{ da: [-48, 46], a: [-22, 60], testo: "braccio sotto l'ascella", fine: true, dx: -8 }, { da: [-4, 46], a: [-36, 36], testo: "tira la manica", dx: 10, dy: 10 }],
          frecce: [{ da: [14, 0], a: [-32, 56], tipo: "piede", curva: -.3, testo: "destro all'esterno", tx: -90, ty: 64, fine: true }] },
        { tori: { c: [-26, 40], busto: [-26, 34], rot: 180, dx: [-34, 52, 180], sx: [-6, 40, 180], etichetta: [10, 18] }, uke: { terra: true, testa: [-84, 4], bacino: [-84, 60], etichetta: [-120, 30] },
          prese: [{ da: [-48, 40], a: [-22, 58] }, { da: [-4, 40], a: [-36, 30] }],
          frecce: [{ da: [-20, 76], a: [-76, 20], tipo: "caduta", testo: "sopra la schiena", curva: .3, tx: -40, ty: 84, fine: true }] }
      ],
      lato: { cam: { yaw: 25, pitch: 10 }, passi: [
        MK_L[0], MK_L[1],
        { tori: { pelvis: [44, 82, -16], yaw: 180, lean: 14, piedi: { dx: [58, 0, -28], sx: [46, 0, 2] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, gomito: { dx: [0, -1, -.3] }, mani: { dx: [60, 124, -16], sx: [22, 112, -26] } },
          uke: { pelvis: [68, 94, 0], yaw: 180, lean: 20, piedi: { dx: [62, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } },
          frecce: [{ da: [10, 2, 13], a: [54, 2, -28], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [46, 66, -16], yaw: 180, lean: 66, piedi: { dx: [58, 0, -28], sx: [46, 0, 2] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [8, 90, -14], sx: [0, 80, -26] } },
          uke: { pelvis: [70, 122, -6], yaw: 180, lean: 78, tilt: -15, piedi: { dx: [104, 140, -14], sx: [108, 128, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [6, 104, -20], sx: [28, 118, 18] } },
          frecce: [{ da: [100, 170, -6], a: [0, 70, -6] }] }
      ] }
    };
  
    // ---------------- UKI WAZA ----------------
    DISEGNI["uki-waza"] = {
      pianta: [
        P0,
        { tori: P0.tori, uke: { ...P0.uke, busto: [0, 60] }, prese: [{ da: [22, 0], a: [7, 56] }, { da: [-22, 0], a: [-36, 40] }],
          frecce: [{ da: [-8, 56], a: [-40, 26], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -44, ty: 20 }] },
        { tori: { c: [-2, 28], sx: [-52, 62, 0], dx: [12, 24, 0], alza: "sx", prima: { sx: [-14, 20] }, etichetta: [30, 10] }, uke: P0.uke,
          prese: [{ da: [20, 28], a: [7, 56] }, { da: [-24, 28], a: [-36, 40] }],
          frecce: [{ da: [-8, 30], a: [-48, 58], tipo: "piede", testo: "gamba sinistra: ostacolo", tx: -100, ty: 40, fine: true, curva: .1 }] },
        { tori: { seduta: true, c: [-40, 40], busto: [-34, 44], sx: [-52, 62], dx: [-12, 26], etichetta: [-70, 20] }, uke: { c: [-14, 52], busto: [-14, 44], sx: [4, 62], dx: [-22, 66], etichetta: [20, 70] },
          frecce: [{ da: [-14, 60], a: [-50, 18], tipo: "caduta", testo: "cade in avanti", tx: -2, ty: 24, curva: .2 }] }
      ],
      lato: { cam: { yaw: 160, pitch: 12 }, passi: [
        L0,
        { tori: { ...L0.tori, pelvis: [-4, 92, 0], lean: -2, mani: { dx: [40, 126, 8], sx: [34, 106, -26] } },
          uke: { ...L0.uke, pelvis: [56, 94, 0], lean: 18, piedi: { dx: [64, 0, -13], sx: [64, 0, 13] }, mani: { dx: [14, 124, -8], sx: [20, 104, 24] } },
          frecce: [{ da: [50, 150, 0], a: [22, 150, -26] }] },
        { tori: { pelvis: [8, 84, 0], yaw: 0, lean: 4, tilt: -8, piedi: { dx: [8, 0, 14], sx: [58, 0, -44] }, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [44, 124, 8], sx: [34, 104, -26] } },
          uke: { pelvis: [60, 92, 0], yaw: 180, lean: 18, piedi: { dx: [64, 0, -13], sx: [66, 0, 13] }, mani: { dx: [18, 124, -8], sx: [24, 104, 24] } },
          frecce: [{ da: [10, 2, -14], a: [58, 2, -46], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [18, 16, -34], yaw: 0, lean: -20, tilt: -72, piedi: { dx: [14, 0, 14], sx: [60, 4, -46] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [44, 60, 8], sx: [34, 56, -26] } },
          uke: { pelvis: [52, 64, -22], yaw: 180, lean: 62, tilt: 18, piedi: { dx: [66, 8, -13], sx: [84, 40, 8] }, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [10, 60, -8], sx: [18, 56, 24] } },
          frecce: [{ da: [60, 110, -10], a: [20, 40, -40] }] }
      ] }
    };
  
    // ---------------- YOKO WAKARE ----------------
    DISEGNI["yoko-wakare"] = {
      pianta: [
        { ...P0, frecce: [{ da: [0, 50], a: [0, 34], tipo: "piede", testo: "uke avanza", tx: -40, ty: 40, fine: true }] },
        { tori: P0.tori, uke: { ...P0.uke, busto: [0, 58] }, prese: G0,
          frecce: [{ da: [-8, 60], a: [-34, 30], tipo: "squilibrio", testo: "avanti, in alto", fine: true, tx: -38, ty: 24 }] },
        { tori: { terra: true, testa: [60, 8], bacino: [-8, 8], etichetta: [30, -22] }, uke: P0.uke,
          prese: [{ da: [50, 14], a: [7, 56] }, { da: [46, 4], a: [-31, 54] }],
          frecce: [{ da: [-20, 8], a: [-74, 20], tipo: "falciata", testo: "gambe a sinistra", tx: -10, ty: -22, curva: .3 }] },
        { tori: { terra: true, testa: [60, 8], bacino: [-8, 8], etichetta: [30, -22] }, uke: { c: [-4, 50], busto: [-4, 40], sx: [14, 66], dx: [-14, 60], alza: "entrambi", etichetta: [30, 70] },
          prese: [{ da: [50, 14], a: [8, 52] }, { da: [46, 4], a: [-31, 46] }],
          frecce: [{ da: [-4, 56], a: [-4, 14], tipo: "caduta", testo: "cade in avanti", tx: 8, ty: 20 }] }
      ],
      lato: { cam: { yaw: 160, pitch: 12 }, passi: [
        { ...L0, tori: { ...L0.tori, pelvis: [2, 92, 0] }, uke: { ...L0.uke, pelvis: [66, 92, 0], lean: 12 } },
        { tori: { ...L0.tori, pelvis: [-2, 92, 0], lean: -4, mani: { dx: [38, 126, 8], sx: [34, 108, -24] } },
          uke: { ...L0.uke, pelvis: [58, 94, 0], lean: 26, piedi: { dx: [64, 4, -13], sx: [62, 4, 13] }, mani: { dx: [16, 122, -8], sx: [20, 104, 24] } },
          frecce: [{ da: [58, 160, 0], a: [28, 160, 0] }] },
        { tori: { pelvis: [34, 38, 6], yaw: 0, lean: 2, tilt: 84, piedi: { dx: [32, 34, -74], sx: [40, 30, -72] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [48, 100, 8], sx: [44, 90, -26] } },
          uke: { pelvis: [60, 90, 0], yaw: 180, lean: 30, piedi: { dx: [66, 0, -13], sx: [62, 0, 13] }, mani: { dx: [34, 108, -8], sx: [38, 94, 20] } },
          frecce: [{ da: [34, 40, 40], a: [36, 40, -50], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [32, 14, 6], yaw: 0, lean: 2, tilt: 86, piedi: { dx: [30, 5, -74], sx: [38, 5, -72] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [60, 40, 8], sx: [56, 36, -26] } },
          uke: { pelvis: [56, 72, -4], yaw: 180, lean: 72, piedi: { dx: [86, 44, -13], sx: [86, 38, 13] }, ginocchio: { dx: [1, 0, 0], sx: [1, 0, 0] }, mani: { dx: [14, 46, -8], sx: [18, 40, 20] } },
          frecce: [{ da: [56, 120, 0], a: [20, 40, 0] }] }
      ] }
    };
  
    // ---------------- YOKO GURUMA ----------------
    const FLP = { c: [-44, 62], rot: -90, dx: [-44, 52, -90], sx: [-44, 72, -90], etichetta: [-44, 28] };
    DISEGNI["yoko-guruma"] = {
      pianta: [
        { tori: FLP, uke: { ...P0.uke, busto: [0, 58] }, prese: [] },
        { tori: FLP, uke: { ...P0.uke, busto: [0, 52] },
          prese: [{ da: [-44, 66], a: [6, 76] }, { da: [-44, 58], a: [-4, 52] }],
          frecce: [{ da: [0, 60], a: [-26, 36], tipo: "squilibrio", testo: "in avanti, sopra di te", fine: true, tx: -30, ty: 30 }] },
        { tori: { c: [-44, 62], rot: -90, dx: [4, 66, -90], sx: [-44, 72, -90], etichetta: [-44, 28] }, uke: { ...P0.uke, busto: [0, 52] },
          prese: [{ da: [-44, 66], a: [6, 76] }, { da: [-44, 58], a: [-4, 52] }],
          frecce: [{ da: [-40, 50], a: [6, 62], tipo: "falciata", testo: "gamba destra tra le sue", tx: -90, ty: 36, curva: -.2 }] },
        { tori: { terra: true, testa: [-100, 62], bacino: [-36, 62], etichetta: [-70, 28] }, uke: { terra: true, testa: [-150, 120], bacino: [-80, 120], etichetta: [-120, 150] },
          frecce: [{ da: [0, 80], a: [-110, 110], tipo: "caduta", testo: "ruota sopra tori", curva: .3, tx: -60, ty: 100 }] }
      ],
      lato: { cam: { yaw: -68, pitch: 10 }, passi: [
        { tori: { pelvis: [64, 90, -46], yaw: -90, lean: 6, piedi: { dx: [54, 0, -46], sx: [76, 0, -46] }, mani: { dx: [60, 112, -20], sx: [72, 112, -20] } },
          uke: { pelvis: [60, 84, 0], yaw: 180, lean: 40, piedi: { dx: [66, 0, -13], sx: [66, 0, 13] }, mani: { dx: [30, 100, -19], sx: [30, 100, 19] } } },
        { tori: { pelvis: [64, 88, -42], yaw: -90, lean: 10, piedi: { dx: [54, 0, -46], sx: [76, 0, -46] }, mani: { dx: [56, 112, -12], sx: [72, 120, 16] } },
          uke: { pelvis: [58, 84, -4], yaw: 180, lean: 56, piedi: { dx: [66, 0, -13], sx: [66, 0, 13] }, mani: { dx: [24, 84, -19], sx: [24, 84, 19] } },
          frecce: [{ da: [40, 120, -8], a: [40, 90, -36] }] },
        { tori: { pelvis: [64, 50, -44], yaw: -90, lean: 14, piedi: { dx: [64, 4, 2], sx: [76, 0, -50] }, ginocchio: { dx: [0, .2, 1], sx: [0, 1, 0] }, mani: { dx: [56, 90, -14], sx: [72, 96, 14] } },
          uke: { pelvis: [58, 84, -4], yaw: 180, lean: 56, piedi: { dx: [66, 0, -13], sx: [66, 0, 13] }, mani: { dx: [24, 84, -19], sx: [24, 84, 19] } },
          frecce: [{ da: [54, 6, -50], a: [64, 6, 0], col: ROSSO }] },
        { tori: { pelvis: [66, 14, -50], yaw: -90, lean: -84, piedi: { dx: [64, 6, -10], sx: [80, 6, -50] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [56, 40, -20], sx: [80, 40, -20] } },
          uke: { pelvis: [78, 80, -50], yaw: 180, lean: 20, tilt: 100, piedi: { dx: [62, 40, -70], sx: [62, 34, -30] }, mani: { dx: [90, 20, -80], sx: [90, 30, -40] } },
          frecce: [{ da: [60, 110, 0], a: [100, 70, -80] }] }
      ] }
    };
  
    // ---------------- YOKO GAKE ----------------
    const YF = { c: [-44, 62], rot: -90, dx: [-44, 52, -90], sx: [-44, 72, -90], etichetta: [-44, 28] };
    const YFL = { pelvis: [66, 88, -44], yaw: -90, lean: 4, piedi: { dx: [56, 0, -46], sx: [76, 0, -46] }, mani: { dx: [60, 112, -12], sx: [74, 120, 16] } };
    DISEGNI["yoko-gake"] = {
      pianta: [
        { ...P0, frecce: [{ da: [-14, 90], a: [-14, 76], tipo: "piede", testo: "uke avanza", tx: 14, ty: 98 }] },
        { tori: P0.tori, uke: { ...P0.uke, busto: [-4, 58] }, prese: [{ da: [22, 0], a: [7, 56] }, { da: [-22, 0], a: [-36, 40] }],
          frecce: [{ da: [-8, 56], a: [-40, 26], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -44, ty: 20 }] },
        { tori: { ...YF, sx: [-30, 66, -90], alza: "sx" }, uke: { ...P0.uke, busto: [-4, 60] },
          prese: [{ da: [-44, 62], a: [-31, 54] }, { da: [-44, 62], a: [4, 70] }],
          frecce: [{ da: [-40, 72], a: [-20, 68], tipo: "piede", testo: "sinistro verso la caviglia", tx: -90, ty: 90, curva: .1 }] },
        { tori: { seduta: true, c: [-46, 56], busto: [-50, 54], dx: [-50, 40], sx: [-14, 68], etichetta: [-70, 30] }, uke: { ...P0.uke, c: [-12, 56], busto: [-14, 52], sx: [2, 62], dx: [-22, 60], etichetta: [20, 80] },
          frecce: [{ da: [-14, 66], a: [-30, 34], tipo: "caduta", testo: "cade accanto a te", tx: 4, ty: 30 }, { da: [-34, 66], a: [-16, 68], tipo: "falciata" }] }
      ],
      lato: { cam: { yaw: -68, pitch: 10 }, passi: [
        { tori: { ...YFL, pelvis: [70, 90, -60] }, uke: { ...L0.uke, pelvis: [64, 92, 0] } },
        { tori: { ...YFL, pelvis: [68, 90, -50], lean: 8 },
          uke: { pelvis: [66, 90, 0], yaw: 180, lean: 14, tilt: 10, piedi: { dx: [66, 0, -17], sx: [62, 0, 13] }, mani: { dx: [48, 124, -19], sx: [44, 110, 20] } },
          frecce: [{ da: [66, 150, -4], a: [66, 140, -36] }] },
        { tori: { pelvis: [76, 80, -46], yaw: -90, lean: 14, piedi: { dx: [56, 0, -50], sx: [78, 0, -14] }, ginocchio: { dx: [0, .3, 1], sx: [0, 0, 1] }, mani: { dx: [60, 112, -14], sx: [76, 112, 16] } },
          uke: { pelvis: [66, 90, 0], yaw: 180, lean: 14, tilt: 10, piedi: { dx: [66, 0, -17], sx: [62, 0, 13] }, mani: { dx: [48, 124, -19], sx: [44, 110, 20] } },
          frecce: [{ da: [80, 20, -40], a: [68, 8, -18], col: GRIGIO, dash: true }] },
        { tori: { pelvis: [76, 18, -50], yaw: -90, lean: 10, tilt: -70, piedi: { dx: [56, 4, -46], sx: [70, 6, -14] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [60, 60, -20], sx: [76, 60, 0] } },
          uke: { pelvis: [66, 66, -34], yaw: 180, lean: 10, tilt: 56, piedi: { dx: [66, 40, -17], sx: [66, 20, 12] }, mani: { dx: [48, 90, -60], sx: [44, 80, -10] } },
          frecce: [{ da: [74, 8, -20], a: [64, 24, -14], col: ROSSO }, { da: [66, 130, -10], a: [66, 80, -70] }] }
      ] }
    };
  
    // ---------------- YOKO OTOSHI ----------------
    DISEGNI["yoko-otoshi"] = {
      pianta: [
        { ...P0, frecce: [{ da: [-14, 90], a: [-34, 90], tipo: "piede", testo: "uke si sposta a destra", fine: true, tx: -40, ty: 100 }] },
        { tori: P0.tori, uke: { ...P0.uke, busto: [-10, 62], c: [-10, 64] }, prese: [{ da: [22, 0], a: [-3, 56] }, { da: [-22, 0], a: [-41, 54] }],
          frecce: [{ da: [-14, 70], a: [-50, 74], tipo: "squilibrio", testo: "alla sua destra", fine: true, tx: -54, ty: 84 }] },
        { tori: { c: [-40, 50], rot: -90, dx: [-44, 40, -90], sx: [-30, 70, -90], etichetta: [-60, 24] }, uke: { ...P0.uke, busto: [-10, 62] },
          prese: [{ da: [-40, 56], a: [-3, 56] }, { da: [-40, 56], a: [-41, 54] }],
          frecce: [{ da: [-40, 56], a: [-30, 80], tipo: "falciata", testo: "gamba sinistra a terra, all'esterno", tx: -90, ty: 100, curva: .2 }] },
        { tori: { seduta: true, c: [-50, 58], busto: [-54, 56], dx: [-54, 42], sx: [-30, 76], etichetta: [-80, 36] }, uke: { ...P0.uke, c: [-26, 60], busto: [-30, 58], sx: [-14, 66], dx: [-40, 64], etichetta: [10, 84] },
          frecce: [{ da: [-30, 66], a: [-90, 76], tipo: "caduta", testo: "vola di lato", fine: true, tx: -94, ty: 84 }] }
      ],
      lato: { cam: { yaw: -68, pitch: 10 }, passi: [
        { tori: { ...YFL, pelvis: [70, 90, -60] }, uke: { ...L0.uke, pelvis: [64, 92, 0] }, frecce: [{ da: [60, 4, -10], a: [60, 4, -34], col: GRIGIO, dash: true }] },
        { tori: { ...YFL, pelvis: [66, 90, -56], lean: 8 },
          uke: { pelvis: [64, 90, -14], yaw: 180, lean: 10, tilt: 12, piedi: { dx: [64, 0, -30], sx: [62, 0, 0] }, mani: { dx: [48, 124, -34], sx: [44, 110, 8] } },
          frecce: [{ da: [64, 150, -14], a: [64, 150, -46] }] },
        { tori: { pelvis: [74, 40, -62], yaw: -90, lean: 14, piedi: { dx: [54, 0, -60], sx: [66, 3, -30] }, ginocchio: { dx: [0, .3, 1], sx: [0, 1, 0] }, mani: { dx: [60, 100, -26], sx: [76, 100, -14] } },
          uke: { pelvis: [64, 90, -14], yaw: 180, lean: 10, tilt: 12, piedi: { dx: [64, 0, -30], sx: [62, 0, 0] }, mani: { dx: [48, 124, -34], sx: [44, 110, 8] } },
          frecce: [{ da: [74, 3, -62], a: [66, 3, -34], col: ROSSO }] },
        { tori: { pelvis: [74, 14, -62], yaw: -90, lean: 10, tilt: -70, piedi: { dx: [54, 4, -60], sx: [66, 4, -30] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [60, 50, -40], sx: [76, 50, -20] } },
          uke: { pelvis: [64, 60, -50], yaw: 180, lean: 6, tilt: 70, piedi: { dx: [64, 50, -70], sx: [64, 40, -20] }, mani: { dx: [50, 70, -90], sx: [50, 70, -40] } },
          frecce: [{ da: [64, 120, -20], a: [64, 70, -100] }] }
      ] }
    };
  })();

  // Gruppo 5: osaekomi waza (uke supino: testa in alto nella pianta, verso +x nella vista laterale)
  (function () {
    const UKE_P = { terra: true, testa: [0, 96], bacino: [0, 20], etichetta: [30, 6] };
    const ukeL = { pelvis: [40, 12, 0], yaw: 180, lean: -88, piedi: { dx: [-40, 6, -16], sx: [-40, 6, 16] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [56, 26, -40], sx: [60, 8, 34] } };
    const mix = (a, b) => Object.assign({}, a, b);
    const PESO = "#e8742a", GRIGIO = "#6b7480";
  
    // ---------- kuzure kesa gatame ----------
    {
      const T = { seduta: true, c: [-42, 50], busto: [-22, 72], rot: -25, dx: [-64, 100], sx: [-90, 16], etichetta: [-84, 72] };
      const prese = [{ da: [2, 62], a: [34, 80], testo: "sotto l'ascella sinistra", dx: 4 }, { da: [-44, 84], a: [-32, 60], testo: "braccio destro di uke", fine: true }];
      const tori = { pelvis: [66, 14, -38], yaw: 15, lean: 10, tilt: 45, piedi: { dx: [140, 4, -76], sx: [-4, 4, -90] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [88, 4, 30], sx: [54, 26, -46] } };
      DISEGNI["kuzure-kesa-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P, frecce: [{ da: [-100, 30], a: [-100, 80], tipo: "piede", testo: "gambe larghe", tx: -128, ty: 86 }] },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [-16, 74] }), uke: UKE_P, prese, frecce: [{ da: [-44, 100], a: [-16, 82], tipo: "squilibrio", testo: "petto sul petto", fine: true, tx: -40, ty: 106 }] },
          { tori: mix(T, { c: [-46, 46], dx: [-72, 96], sx: [-96, 8] }), uke: UKE_P, prese, frecce: [{ da: [-64, 12], a: [-98, 2], tipo: "piede", curva: .2, testo: "segui uke con le gambe", fine: true }] }
        ],
        lato: { cam: { yaw: -35, pitch: 32 }, passi: [
          { tori: mix(tori, { tilt: 20, mani: { dx: [90, 30, -20], sx: [60, 30, -50] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { tilt: 58 }), uke: ukeL, frecce: [{ da: [74, 80, -50], a: [84, 50, -10] }] },
          { tori: mix(tori, { tilt: 55, piedi: { dx: [146, 4, -86], sx: [-10, 4, -100] } }), uke: ukeL, frecce: [{ da: [0, 4, -80], a: [-12, 4, -104], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- yoko shiho gatame ----------
    {
      const T = { seduta: true, c: [-50, 56], busto: [-10, 62], rot: -90, dx: [-30, 30], sx: [-30, 84], etichetta: [-52, 104] };
      const prese = [{ da: [-10, 86], a: [12, 90], testo: "bavero", dx: 6 }, { da: [-10, 38], a: [2, 10], testo: "cintura tra le gambe", fine: true }];
      const tori = { pelvis: [52, 44, -44], yaw: -90, lean: 108, piedi: { dx: [40, 3, -88], sx: [64, 3, -88] }, ginocchio: { dx: [0, -1, 1], sx: [0, -1, 1] }, mani: { dx: [26, 6, 4], sx: [100, 6, 14] } };
      DISEGNI["yoko-shiho-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [-4, 58], rot: -100 }), uke: UKE_P, prese, frecce: [{ da: [-44, 108], a: [-10, 72], tipo: "squilibrio", testo: "petto sul petto", tx: -60, ty: 114 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-60, 14], a: [-34, 26], tipo: "piede" }, { da: [-60, 100], a: [-34, 86], tipo: "piede", testo: "ginocchia chiuse contro uke", fine: true }] }
        ],
        lato: { cam: { yaw: 30, pitch: 40 }, passi: [
          { tori: mix(tori, { lean: 80, mani: { dx: [40, 4, -24], sx: [70, 4, -24] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { pelvis: [52, 40, -44], lean: 114 }), uke: ukeL, frecce: [{ da: [52, 80, -20], a: [52, 46, -6] }] },
          { tori: mix(tori, { pelvis: [52, 40, -44], lean: 114 }), uke: ukeL, frecce: [{ da: [30, 4, -50], a: [36, 4, -32], col: GRIGIO, dash: true }, { da: [70, 4, -50], a: [64, 4, -32], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- tate shiho gatame ----------
    {
      const T = { seduta: true, c: [0, 52], busto: [10, 92], rot: 180, dx: [-40, 20], sx: [40, 20], etichetta: [-56, 92] };
      const prese = [{ da: [-14, 90], a: [-26, 104], testo: "testa e braccio di uke", fine: true }, { da: [18, 88], a: [14, 70], testo: "bavero", dx: 6 }];
      const tori = { pelvis: [44, 40, 0], yaw: 0, lean: 82, piedi: { dx: [-8, 4, -34], sx: [-8, 4, 34] }, ginocchio: { dx: [0, -1, -.3], sx: [0, -1, .3] }, mani: { dx: [96, 24, -14], sx: [70, 28, 18] } };
      DISEGNI["tate-shiho-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [8, 88] }), uke: UKE_P, prese, frecce: [{ da: [0, 130], a: [0, 90], tipo: "squilibrio", testo: "peso sul petto", tx: 8, ty: 134 }, { da: [-54, 8], a: [-40, 24], tipo: "piede", testo: "piedi sotto le sue gambe", fine: true, tx: -50, ty: 2 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-70, 40], a: [-52, 40], tipo: "piede", testo: "allarga le gambe", fine: true, tx: -74, ty: 46 }] }
        ],
        lato: { cam: { yaw: -35, pitch: 28 }, passi: [
          { tori: mix(tori, { pelvis: [44, 46, 0], lean: 60, mani: { dx: [96, 14, -14], sx: [70, 14, 18] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { pelvis: [42, 38, 0], lean: 88 }), uke: ukeL, frecce: [{ da: [70, 90, 0], a: [70, 50, 0] }] },
          { tori: mix(tori, { pelvis: [42, 38, 0], lean: 88, piedi: { dx: [-8, 4, -46], sx: [-8, 4, 46] } }), uke: ukeL, frecce: [{ da: [-8, 4, -34], a: [-8, 4, -50], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- ushiro kesa gatame ----------
    {
      const T = { seduta: true, c: [-38, 64], busto: [-26, 76], rot: 180, dx: [-70, 22], sx: [-48, 14], etichetta: [-70, 96] };
      const prese = [{ da: [-30, 70], a: [-24, 60], testo: "braccio destro di uke", fine: true, dx: -4 }, { da: [-22, 78], a: [20, 40], testo: "cintura sul suo fianco sinistro", dx: 6 }];
      const tori = { pelvis: [58, 14, -38], yaw: 180, lean: -35, tilt: -35, piedi: { dx: [22, 3, -66], sx: [22, 3, -34] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [30, 24, 14], sx: [64, 14, -30] } };
      DISEGNI["ushiro-kesa-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [-22, 76] }), uke: UKE_P, prese, frecce: [{ da: [-46, 90], a: [-24, 80], tipo: "squilibrio", testo: "schiena sul petto", tx: -64, ty: 96 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-80, 30], a: [-96, 12], tipo: "piede", curva: .2, testo: "ruota con lui", fine: true }] }
        ],
        lato: { cam: { yaw: -35, pitch: 30 }, passi: [
          { tori: mix(tori, { lean: -10, tilt: 0, mani: { dx: [50, 6, -34], sx: [70, 6, -50] } }), uke: ukeL },
          { tori: mix(tori, { lean: -20, tilt: -20 }), uke: ukeL },
          { tori, uke: ukeL, frecce: [{ da: [70, 60, -50], a: [64, 34, -12] }] },
          { tori, uke: ukeL, frecce: [{ da: [22, 3, -80], a: [10, 3, -96], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- makura kesa gatame ----------
    {
      const T = { seduta: true, c: [-42, 56], busto: [-24, 76], rot: -30, dx: [-26, 98], sx: [-90, 20], etichetta: [-84, 76] };
      const prese = [{ da: [-36, 76], a: [-28, 58], testo: "braccio destro di uke", fine: true }, { da: [-20, 84], a: [-26, 96], testo: "coscia destra", fine: true }];
      const tori = { pelvis: [66, 14, -38], yaw: 15, lean: 10, tilt: 45, piedi: { dx: [112, 4, -52], sx: [-4, 4, -90] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [104, 14, -30], sx: [54, 26, -46] } };
      DISEGNI["makura-kesa-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { dx: [-18, 90] }), uke: UKE_P, prese, frecce: [{ da: [-8, 70], a: [-8, 94], tipo: "squilibrio", testo: "ginocchio sotto la testa", tx: 8, ty: 120 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-100, 8], a: [-100, 34], tipo: "piede", testo: "segui con le gambe", fine: true, tx: -104, ty: 0 }] }
        ],
        lato: { cam: { yaw: -35, pitch: 32 }, passi: [
          { tori: mix(tori, { tilt: 20, piedi: { dx: [96, 4, -50], sx: [-4, 4, -90] }, mani: { dx: [90, 30, -20], sx: [60, 30, -50] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { tilt: 55, piedi: { dx: [112, 14, -44], sx: [-4, 4, -90] } }), uke: ukeL, frecce: [{ da: [112, 2, -30], a: [112, 20, -30] }] },
          { tori: mix(tori, { tilt: 55 }), uke: ukeL, frecce: [{ da: [0, 4, -80], a: [-12, 4, -104], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- kata gatame ----------
    {
      const T = { seduta: true, c: [-44, 64], busto: [-30, 90], rot: -60, dx: [-30, 54], sx: [-84, 20], etichetta: [-70, 100] };
      const prese = [{ da: [-26, 96], a: [8, 108], testo: "mani agganciate dietro il collo", dx: 6 }];
      const tori = { pelvis: [92, 56, -46], yaw: -90, lean: 60, piedi: { dx: [90, 3, -78], sx: [120, 3, -96] }, ginocchio: { dx: [0, -1, 1], sx: [0, -.3, 1] }, mani: { dx: [100, 22, 8], sx: [104, 26, 6] } };
      DISEGNI["kata-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-36, 58], a: [-10, 108], tipo: "squilibrio", testo: "braccio oltre la faccia", curva: -.2, tx: 26, ty: 116 }] },
          { tori: mix(T, { busto: [-22, 94] }), uke: UKE_P, prese, frecce: [{ da: [-50, 106], a: [-24, 100], tipo: "squilibrio", testo: "testa sul suo braccio", fine: true, tx: -42, ty: 114 }] },
          { tori: mix(T, { busto: [-20, 98] }), uke: UKE_P, prese, frecce: [{ da: [-50, 84], a: [-30, 98], tipo: "squilibrio", testo: "peso verso la testa", fine: true, tx: -42, ty: 80 }] }
        ],
        lato: { cam: { yaw: -35, pitch: 34 }, passi: [
          { tori: mix(tori, { lean: 20, mani: { dx: [96, 14, -30], sx: [90, 14, -34] } }), uke: ukeL },
          { tori: mix(tori, { lean: 50 }), uke: ukeL },
          { tori: mix(tori, { lean: 70, pelvis: [92, 48, -46] }), uke: ukeL, frecce: [{ da: [96, 70, -30], a: [96, 44, -10] }] },
          { tori: mix(tori, { lean: 74, pelvis: [92, 46, -46] }), uke: ukeL, frecce: [{ da: [80, 60, -46], a: [98, 60, -26] }] }
        ] }
      };
    }
  
    // ---------- kuzure yoko shiho gatame ----------
    {
      const T = { seduta: true, c: [-50, 54], busto: [-12, 66], rot: -100, dx: [-30, 22], sx: [-34, 86], etichetta: [-54, 104] };
      const prese = [{ da: [-14, 52], a: [2, 10], testo: "cintura tra le gambe", fine: true }, { da: [-12, 78], a: [20, 56], testo: "cintura dietro, sopra la spalla", dx: 6 }];
      const tori = { pelvis: [52, 44, -44], yaw: -90, lean: 108, piedi: { dx: [40, 3, -88], sx: [64, 3, -88] }, ginocchio: { dx: [0, -1, 1], sx: [0, -1, 1] }, mani: { dx: [26, 6, 4], sx: [74, 26, 14] } };
      DISEGNI["kuzure-yoko-shiho-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [-6, 62] }), uke: UKE_P, prese, frecce: [{ da: [-44, 108], a: [-10, 72], tipo: "squilibrio", testo: "petto sul petto", tx: -60, ty: 114 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-60, 14], a: [-34, 26], tipo: "piede" }, { da: [-60, 100], a: [-34, 86], tipo: "piede", testo: "cambia angolo, resta attaccato", fine: true }] }
        ],
        lato: { cam: { yaw: 30, pitch: 40 }, passi: [
          { tori: mix(tori, { lean: 80, mani: { dx: [40, 4, -24], sx: [70, 4, -24] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { pelvis: [52, 40, -44], lean: 114 }), uke: ukeL, frecce: [{ da: [52, 80, -20], a: [52, 46, -6] }] },
          { tori: mix(tori, { pelvis: [52, 40, -44], lean: 114 }), uke: ukeL, frecce: [{ da: [30, 4, -50], a: [36, 4, -32], col: GRIGIO, dash: true }, { da: [70, 4, -50], a: [64, 4, -32], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- kami shiho gatame ----------
    {
      const T = { seduta: true, c: [0, 146], busto: [0, 120], rot: 180, dx: [-34, 176], sx: [34, 176], etichetta: [-50, 130] };
      const prese = [{ da: [-18, 116], a: [24, 48], testo: "fianco sinistro di uke", dx: 6 }, { da: [18, 116], a: [-24, 48], testo: "fianco destro di uke", fine: true }];
      const tori = { pelvis: [134, 46, 0], yaw: 180, lean: 78, piedi: { dx: [164, 3, -26], sx: [164, 3, 26] }, ginocchio: { dx: [0, -1, 0], sx: [0, -1, 0] }, mani: { dx: [44, 18, 22], sx: [44, 18, -22] } };
      DISEGNI["kami-shiho-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [0, 112] }), uke: UKE_P, prese, frecce: [{ da: [30, 140], a: [14, 112], tipo: "squilibrio", testo: "peso sul petto", tx: 36, ty: 144 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [50, 176], a: [68, 160], tipo: "piede", testo: "gira con lui", tx: 54, ty: 184 }] }
        ],
        lato: { cam: { yaw: 150, pitch: 30 }, passi: [
          { tori: mix(tori, { lean: 50, pelvis: [140, 52, 0], mani: { dx: [90, 10, 24], sx: [90, 10, -24] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { lean: 84, pelvis: [132, 40, 0] }), uke: ukeL, frecce: [{ da: [90, 90, 0], a: [90, 50, 0] }] },
          { tori: mix(tori, { lean: 84, pelvis: [132, 40, 0], piedi: { dx: [164, 3, -40], sx: [164, 3, 40] } }), uke: ukeL, frecce: [{ da: [164, 3, -26], a: [164, 3, -42], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  
    // ---------- kuzure kami shiho gatame ----------
    {
      const T = { seduta: true, c: [-52, 120], busto: [-26, 102], rot: -135, dx: [-96, 150], sx: [-60, 176], etichetta: [-80, 100] };
      const prese = [{ da: [-30, 108], a: [-4, 112], testo: "bavero dietro la nuca", dx: 6 }, { da: [-24, 100], a: [24, 54], testo: "cintura", dx: 6 }];
      const tori = { pelvis: [120, 50, -42], yaw: -135, lean: 76, piedi: { dx: [150, 3, -66], sx: [166, 3, -34] }, ginocchio: { dx: [0, -1, 0], sx: [0, -1, 0] }, mani: { dx: [104, 20, 0], sx: [60, 12, 14] } };
      DISEGNI["kuzure-kami-shiho-gatame"] = {
        pianta: [
          { tori: T, uke: UKE_P },
          { tori: T, uke: UKE_P, prese },
          { tori: mix(T, { busto: [-20, 100] }), uke: UKE_P, prese, frecce: [{ da: [-60, 90], a: [-26, 86], tipo: "squilibrio", testo: "petto sul petto", tx: -80, ty: 84 }] },
          { tori: T, uke: UKE_P, prese, frecce: [{ da: [-30, 140], a: [10, 140], tipo: "piede", curva: -.25, testo: "gira attorno alla testa", tx: -34, ty: 150 }] }
        ],
        lato: { cam: { yaw: 150, pitch: 30 }, passi: [
          { tori: mix(tori, { lean: 50, mani: { dx: [100, 10, -20], sx: [96, 10, 0] } }), uke: ukeL },
          { tori, uke: ukeL },
          { tori: mix(tori, { lean: 84, pelvis: [114, 42, -42] }), uke: ukeL, frecce: [{ da: [90, 90, -20], a: [90, 50, -10] }] },
          { tori: mix(tori, { lean: 84, pelvis: [114, 42, -42] }), uke: ukeL, frecce: [{ da: [150, 3, -66], a: [140, 3, -20], col: GRIGIO, dash: true }] }
        ] }
      };
    }
  })();

  // g6: shime waza (strangolamenti)
  {
    // =============== VISTA LATERALE ===============
    const ukeSed = { pelvis: [66, 14, 0], yaw: 0, lean: 8, piedi: { dx: [140, 5, 16], sx: [140, 5, -16] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [104, 26, 18], sx: [104, 26, -18] } };
    const ukeSedDif = { ...ukeSed, mani: { dx: [80, 56, 10], sx: [80, 56, -10] } };
    const toriDietro = { pelvis: [40, 14, 0], yaw: 0, lean: 14, piedi: { dx: [104, 12, 26], sx: [104, 12, -26] }, ginocchio: { dx: [0, 1, .7], sx: [0, 1, -.7] }, mani: { dx: [60, 40, 26], sx: [60, 40, -26] } };
  
    const ukeSup = { pelvis: [40, 12, 0], yaw: 180, lean: -88, piedi: { dx: [-44, 6, -18], sx: [-44, 6, 18] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [66, 4, -50], sx: [66, 4, 50] } };
    const toriSopra = { pelvis: [48, 30, 0], yaw: 0, lean: 25, piedi: { dx: [6, 4, 24], sx: [6, 4, -24] }, ginocchio: { dx: [1, -.6, .4], sx: [1, -.6, -.4] }, mani: { dx: [66, 40, 18], sx: [66, 40, -18] } };
    const camSopra = { yaw: -55, pitch: 40 };
    const giu = (lean, mani, gomito) => ({ ...toriSopra, lean, mani, gomito });
  
    // =============== VISTA DALL'ALTO ===============
    const pUkeSup = { terra: true, testa: [0, 96], bacino: [0, 20], etichetta: [44, 6] };
    const pToriSopra = { seduta: true, c: [0, 30], busto: [0, 54], rot: 0, dx: [36, 36], sx: [-36, 36], etichetta: [-48, 8] };
    const SpD = [18, 54], SpS = [-18, 54];
    const BavD = [-8, 82], BavS = [8, 82];
    const monta = (prese, frecce) => ({ tori: pToriSopra, uke: pUkeSup, prese, frecce });
  
    const pUkeSed = { seduta: true, c: [0, 40], busto: [0, 50], rot: 0, dx: [14, 104], sx: [-14, 104], etichetta: [36, 96] };
    const pToriDietro = { seduta: true, c: [0, 12], busto: [0, 30], rot: 0, dx: [30, 78], sx: [-30, 78], etichetta: [-44, 6] };
    const dietro = (prese, frecce) => ({ tori: pToriDietro, uke: pUkeSed, prese, frecce });
    const TsD = [20, 30], TsS = [-20, 30];
  
    // ---------------- HADAKA JIME ----------------
    DISEGNI["hadaka-jime"] = {
      lato: { cam: { yaw: -18, pitch: 12 }, passi: [
        { tori: toriDietro, uke: ukeSed },
        { tori: { ...toriDietro, mani: { dx: [66, 64, -14], sx: [60, 40, -26] }, gomito: { dx: [1, -.2, 0] } }, uke: ukeSed },
        { tori: { ...toriDietro, mani: { dx: [48, 72, -19], sx: [60, 80, -4] }, gomito: { dx: [1, -.2, 0], sx: [0, 1, -.6] } }, uke: ukeSedDif },
        { tori: { ...toriDietro, lean: 2, mani: { dx: [46, 72, -19], sx: [62, 82, -4] }, gomito: { dx: [1, -.2, 0], sx: [0, 1, -.6] } }, uke: { ...ukeSedDif, lean: 16 },
          frecce: [{ da: [30, 74, 0], a: [12, 76, 0] }] }
      ] }
    };
  
    // ---------------- JUJI JIME ----------------
    const crocePrese = (t) => [
      { da: SpD, a: BavD, testo: t ? "bavero D" : undefined, fine: true, dx: -8, dy: -6 },
      { da: SpS, a: BavS, testo: t ? "bavero S" : undefined, dx: 8, dy: -6 }
    ];
    const gomitiFuori = [{ da: [10, 70], a: [34, 74], tipo: "squilibrio" }, { da: [-10, 70], a: [-34, 74], tipo: "squilibrio", testo: "gomiti in fuori", fine: true, tx: -40, ty: 84 }];
    const croceLato = (lean, gomito) => giu(lean, { dx: [88, 22, -8], sx: [88, 26, 8] }, gomito);
    const jujiLato = (gomito3) => ({ cam: camSopra, passi: [
      { tori: toriSopra, uke: ukeSup },
      { tori: croceLato(28, { dx: [0, -.6, 1], sx: [0, -.3, -1] }), uke: ukeSup },
      { tori: croceLato(50, gomito3), uke: ukeSup },
      { tori: croceLato(50, gomito3), uke: ukeSup }
    ] });
    DISEGNI["nami-juji-jime"] = {
      pianta: [monta(), monta(crocePrese(true)), monta(crocePrese(), gomitiFuori), monta(crocePrese())],
      lato: jujiLato({ dx: [0, .2, 1], sx: [0, .2, -1] })
    };
    DISEGNI["gyaku-juji-jime"] = {
      pianta: [monta(), monta(crocePrese(true)), monta(crocePrese(), [{ da: [12, 66], a: [30, 54], tipo: "squilibrio" }, { da: [-12, 66], a: [-30, 54], tipo: "squilibrio", testo: "gomiti giù e in fuori", fine: true, tx: -40, ty: 84 }]), monta(crocePrese())],
      lato: jujiLato({ dx: [-.4, -.6, 1], sx: [-.4, -.6, -1] })
    };
    DISEGNI["kata-juji-jime"] = {
      pianta: [monta(), monta(crocePrese(true)), monta(crocePrese(), gomitiFuori), monta(crocePrese())],
      lato: jujiLato({ dx: [0, .2, 1], sx: [0, .2, -1] })
    };
  
    // ---------------- OKURI ERI JIME ----------------
    const okuriPrese = (t) => [
      { da: TsS, a: [7, 58], testo: t ? "sotto l'ascella sinistra, bavero D" : undefined },
      { da: TsD, a: [-7, 60], testo: t ? "sopra la spalla, bavero S" : undefined, fine: true }
    ];
    const okuriTori = { ...toriDietro, mani: { dx: [80, 58, -7], sx: [80, 46, 7] }, gomito: { dx: [1, .3, .6], sx: [0, -1, -1] } };
    DISEGNI["okuri-eri-jime"] = {
      pianta: [dietro(), dietro(okuriPrese(true)), dietro(okuriPrese(), [{ da: [-4, 64], a: [-30, 70], tipo: "squilibrio", testo: "destra indietro e in fuori", fine: true, tx: -36, ty: 74 }]), dietro(okuriPrese())],
      lato: { cam: { yaw: -30, pitch: 12 }, passi: [
        { tori: toriDietro, uke: ukeSed },
        { tori: okuriTori, uke: ukeSedDif },
        { tori: okuriTori, uke: ukeSedDif, frecce: [{ da: [74, 72, -10], a: [56, 76, -26] }, { da: [86, 48, 12], a: [86, 30, 12] }] },
        { tori: { ...okuriTori, lean: 0 }, uke: { ...ukeSedDif, lean: 2 }, frecce: [{ da: [26, 70, 0], a: [10, 70, 0] }] }
      ] }
    };
  
    // ---------------- KATA HA JIME ----------------
    const kataHaPrese = (t) => [
      { da: TsD, a: [-7, 60], testo: t ? "bavero S" : undefined, fine: true, dx: -8, dy: -4 },
      { da: TsS, a: [-26, 44], testo: t ? "alza il braccio sinistro" : undefined, fine: true }
    ];
    const kataHaPrese3 = [{ da: TsD, a: [-7, 60] }, { da: TsS, a: [-2, 42], testo: "mano dietro la nuca", fine: true }];
    const ukeBraccioSu = { ...ukeSed, mani: { dx: [80, 56, 10], sx: [62, 108, -30] } };
    DISEGNI["kata-ha-jime"] = {
      pianta: [dietro(), dietro(kataHaPrese(true)), dietro(kataHaPrese3), dietro(kataHaPrese3)],
      lato: { cam: { yaw: -30, pitch: 12 }, passi: [
        { tori: toriDietro, uke: ukeSed },
        { tori: { ...toriDietro, mani: { dx: [80, 58, -7], sx: [58, 92, -26] }, gomito: { dx: [1, .3, .6], sx: [0, -1, -1] } }, uke: ukeBraccioSu },
        { tori: { ...toriDietro, mani: { dx: [80, 58, -7], sx: [60, 80, -4] }, gomito: { dx: [1, .3, .6], sx: [0, 1, -1] } }, uke: ukeBraccioSu, frecce: [{ da: [52, 92, 0], a: [72, 92, 0] }] },
        { tori: { ...toriDietro, lean: 6, mani: { dx: [78, 58, -7], sx: [62, 80, -4] }, gomito: { dx: [1, .3, .6], sx: [0, 1, -1] } }, uke: ukeBraccioSu }
      ] }
    };
  
    // SANKAKU JIME: omesso (triangolo di gambe da sotto non rendibile in modo chiaro)
  
    // ---------------- SODE GURUMA JIME ----------------
    DISEGNI["sode-guruma-jime"] = {
      pianta: [monta(),
        monta([{ da: SpD, a: [-14, 92], testo: "dietro il collo, prende la manica sinistra", fine: true }]),
        monta([{ da: SpD, a: [-14, 92] }, { da: SpS, a: [-6, 86], testo: "bordo della mano sul collo", fine: true }]),
        monta([{ da: SpD, a: [-14, 92] }, { da: SpS, a: [-6, 86] }])],
      lato: { cam: camSopra, passi: [
        { tori: toriSopra, uke: ukeSup },
        { tori: giu(40, { dx: [92, 10, -12], sx: [66, 40, -18] }, { dx: [.4, -1, .4] }), uke: ukeSup },
        { tori: giu(45, { dx: [90, 12, -12], sx: [92, 24, -2] }, { dx: [.4, -1, .4], sx: [0, 0, -1] }), uke: ukeSup },
        { tori: giu(50, { dx: [90, 12, -12], sx: [92, 22, -2] }, { dx: [.4, -1, .4], sx: [0, 0, -1] }), uke: ukeSup }
      ] }
    };
  
    // ---------------- TSUKKOMI JIME ----------------
    const tsuPrese = (t) => [
      { da: SpS, a: BavD, testo: t ? "tira il bavero D" : undefined, fine: true },
      { da: SpD, a: [8, 86], testo: t ? "bavero S in alto" : undefined }
    ];
    const duePugni = (lean, gomito) => giu(lean, { dx: [90, 22, 6], sx: [82, 22, -8] }, gomito);
    DISEGNI["tsukkomi-jime"] = {
      pianta: [monta(), monta(tsuPrese(true)), monta(tsuPrese(), [{ da: [16, 72], a: [6, 92], tipo: "squilibrio", testo: "pugno verso il collo", tx: 20, ty: 98 }]), monta(tsuPrese())],
      lato: { cam: camSopra, passi: [
        { tori: toriSopra, uke: ukeSup },
        { tori: giu(30, { dx: [86, 20, 8], sx: [84, 20, -8] }, { dx: [0, -1, 1], sx: [0, -1, -1] }), uke: ukeSup },
        { tori: duePugni(40, { dx: [0, -1, 1], sx: [0, -1, -1] }), uke: ukeSup },
        { tori: duePugni(45, { dx: [0, -1, 1], sx: [0, -1, -1] }), uke: ukeSup }
      ] }
    };
  
    // ---------------- KATATE JIME ----------------
    const katPrese = (t) => [
      { da: SpD, a: BavS, testo: t ? "bavero S" : undefined, dx: 8, dy: -6 },
      { da: SpS, a: [-24, 76], testo: t ? "spalla" : undefined, fine: true, dx: -8 }
    ];
    DISEGNI["katate-jime"] = {
      pianta: [monta(), monta([katPrese(true)[0]]), monta(katPrese(), [{ da: [24, 74], a: [6, 92], tipo: "squilibrio", testo: "avambraccio sul collo", tx: 26, ty: 100 }]), monta(katPrese())],
      lato: { cam: camSopra, passi: [
        { tori: toriSopra, uke: ukeSup },
        { tori: giu(30, { dx: [88, 20, 8], sx: [66, 40, -18] }, { dx: [0, -1, 1] }), uke: ukeSup },
        { tori: giu(45, { dx: [90, 22, 6], sx: [80, 16, -22] }, { dx: [0, -.2, -1], sx: [0, -1, -1] }), uke: ukeSup },
        { tori: giu(52, { dx: [90, 22, 6], sx: [80, 16, -22] }, { dx: [0, -.2, -1], sx: [0, -1, -1] }), uke: ukeSup }
      ] }
    };
  
    // ---------------- RYOTE JIME ----------------
    const ryoPrese = (t, s) => [
      { da: SpD, a: [s, 84], testo: t ? "bavero S" : undefined, dx: 8, dy: -6 },
      { da: SpS, a: [-s, 84], testo: t ? "bavero D" : undefined, fine: true, dx: -8, dy: -6 }
    ];
    DISEGNI["ryote-jime"] = {
      pianta: [monta(), monta(ryoPrese(true, 9)), monta(ryoPrese(false, 6), [{ da: [26, 84], a: [12, 84], tipo: "squilibrio" }, { da: [-26, 84], a: [-12, 84], tipo: "squilibrio", testo: "pugni vicini", fine: true, tx: -30, ty: 92 }]), monta(ryoPrese(false, 6))],
      lato: { cam: camSopra, passi: [
        { tori: toriSopra, uke: ukeSup },
        { tori: giu(30, { dx: [88, 22, 9], sx: [88, 22, -9] }, { dx: [0, -1, 1], sx: [0, -1, -1] }), uke: ukeSup },
        { tori: giu(36, { dx: [88, 22, 6], sx: [88, 22, -6] }, { dx: [0, -1, 1], sx: [0, -1, -1] }), uke: ukeSup },
        { tori: giu(36, { dx: [88, 22, 6], sx: [88, 22, -6] }, { dx: [0, -1, 1], sx: [0, -1, -1] }), uke: ukeSup }
      ] }
    };
  }

  // Kansetsu waza (gruppo 7): ude garami, juji gatame, ude gatame, hiza gatame, waki gatame, hara gatame, sankaku gatame
  (function () {
    // uke supino, testa verso +x, il suo lato destro è -z
    const UKE_SUP = { pelvis: [40, 12, 0], yaw: 180, lean: -88, piedi: { dx: [-44, 5, -14], sx: [-44, 5, 14] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] } };
  
    // ---------- Juji gatame ----------
    // uke supino (testa a +x), tori seduto e poi disteso perpendicolare dal suo lato destro (-z)
    {
      const uke = (dx, gdx) => ({ ...UKE_SUP, mani: { dx, sx: [70, 5, 46] }, gomito: { dx: gdx || [0, -1, 0], sx: [0, -1, .3] } });
      const sit = { pelvis: [84, 14, -40], yaw: -90, lean: -15, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] } };
      const lie = { pelvis: [84, 12, -42], yaw: -90, lean: -84, ginocchio: { dx: [0, 1, .3], sx: [0, 1, .3] }, piedi: { dx: [60, 5, 26], sx: [112, 5, 24] } };
      DISEGNI["ude-hishigi-juji-gatame"] = {
        lato: { cam: { yaw: 28, pitch: 50 }, passi: [
          { uke: uke([74, 34, -24], [0, 1, 1]),
            tori: { ...sit, piedi: { dx: [62, 4, -12], sx: [110, 4, -12] }, mani: { dx: [65, 46, -17], sx: [105, 46, -19] } } },
          { uke: uke([84, 50, -44], [0, 0, 1]),
            tori: { ...sit, piedi: { dx: [60, 5, 24], sx: [110, 5, 22] }, mani: { dx: [80, 52, -42], sx: [90, 50, -42] } } },
          { uke: uke([86, 26, -75]),
            tori: { ...lie, mani: { dx: [80, 30, -76], sx: [92, 30, -76] } },
            frecce: [{ da: [112, 60, -40], a: [112, 30, -90] }] },
          { uke: uke([86, 32, -74]),
            tori: { ...lie, pelvis: [84, 22, -42], mani: { dx: [80, 34, -76], sx: [92, 34, -76] } },
            frecce: [{ da: [62, 14, -42], a: [62, 58, -42] }, { da: [112, 30, -56], a: [112, 30, -96] }] }
        ] }
      };
    }
    // ---------- Ude garami ----------
    {
      const ukeB = (extra) => ({ ...UKE_SUP, mani: { dx: [70, 5, -44], sx: [112, 4, 44] }, gomito: { dx: [0, -1, -.3], sx: [0, 0, 1] }, ...extra });
      const tori = { pelvis: [62, 24, -40], yaw: -85, lean: 45, piedi: { dx: [40, 4, -84], sx: [66, 4, -84] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] } };
      DISEGNI["ude-garami"] = {
        lato: { cam: { yaw: -20, pitch: 55 }, passi: [
          { tori: { ...tori, mani: { dx: [60, 34, -4], sx: [76, 34, -4] } }, uke: ukeB() },
          { tori: { ...tori, mani: { dx: [90, 6, 34], sx: [112, 6, 44] }, gomito: { sx: [0, 1, 0], dx: [0, -1, 0] } }, uke: ukeB() },
          { tori: { ...tori, mani: { dx: [90, 6, 30], sx: [92, 6, 38] } }, uke: ukeB({ mani: { dx: [70, 5, -44], sx: [92, 4, 38] }, gomito: { dx: [0, -1, -.3], sx: [0, 0, 1] } }),
            frecce: [{ da: [112, 8, 44], a: [94, 8, 40] }] },
          { tori: { ...tori, mani: { dx: [84, 6, 30], sx: [76, 6, 44] } }, uke: ukeB({ mani: { dx: [70, 5, -44], sx: [92, 4, 34] } }),
            frecce: [{ da: [112, 8, 44], a: [92, 8, 36] }] }
        ] }
      };
    }
  
    // ---------- Ude gatame ----------
    // uke supino con il braccio sinistro teso e alzato verso tori (a -z); tori in ginocchio al suo fianco, guarda +z
    {
      const uke = (h) => ({ ...UKE_SUP, mani: { dx: [70, 5, -44], sx: h }, gomito: { dx: [0, -1, -.3], sx: [0, 1, 0] } });
      const tk = { pelvis: [96, 40, -72], yaw: -90, lean: 70, piedi: { dx: [86, 3, -112], sx: [106, 3, -112] }, ginocchio: { dx: [0, -1, 1], sx: [0, -1, 1] } };
      const m = (y) => ({ dx: [90, y, -4], sx: [94, y, -6] });
      DISEGNI["ude-hishigi-ude-gatame"] = {
        lato: { cam: { yaw: -80, pitch: 22 }, passi: [
          { uke: uke([70, 5, 46]), tori: { ...tk, lean: 25, pelvis: [96, 44, -76], mani: { dx: [80, 30, -50], sx: [100, 30, -50] } } },
          { uke: uke([94, 50, -30]), tori: { ...tk, mani: m(32) } },
          { uke: uke([94, 50, -30]), tori: { ...tk, mani: m(30) },
            frecce: [{ da: [92, 40, -2], a: [92, 22, -50] }] },
          { uke: uke([94, 48, -30]), tori: { ...tk, lean: 78, mani: m(26) },
            frecce: [{ da: [92, 38, -2], a: [92, 18, -50] }] }
        ] }
      };
    }
  })();

  (window.TECNICHE || []).forEach(t => {
    const d = DISEGNI[t.id]; if (!d) return;
    t.passi.forEach((p, i) => {
      if (d.pianta && d.pianta[i]) p.pianta = d.pianta[i];
      if (d.lato && d.lato.passi[i]) { p.lato = d.lato.passi[i]; t.cam = d.lato.cam; }
    });
  });
})();
