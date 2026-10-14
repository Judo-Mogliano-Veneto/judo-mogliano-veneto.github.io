/* Testi e tabelle della guida. Modifica qui frasi, date, tecniche e progressione.
   Gli esercizi con i disegni stanno in exercises.js.
   Tipi di blocco: text, table, timeline, exercises, note, list, progress, tests */
window.CONTENT = {
  title: "Guida allenamento post-LASIK",
  eyebrow: "Judo · cintura verde · 6 settimane senza contatto",
  lead: "Lunedì e mercoledì, 12 ottobre – 18 novembre 2026. Attrezzatura: 4 dischi da 5 kg e le panche per sedersi. Ogni esercizio ha il disegno della posizione di partenza e di arrivo.",
  legend: [
    { color: "var(--hot)", text: "muscoli che lavorano" },
    { color: "var(--plate)", text: "disco da 5 kg" },
    { color: "var(--bench)", text: "panca" },
    { text: "figura più chiara = lato vicino, più scura = lato lontano" }
  ],
  sections: [
    {
      id: "occhio", nav: "Occhio", title: "Paletti per l'occhio",
      intro: "Con carichi leggeri e senza contatto il rischio è basso: il vero pericolo per il lembo corneale è un colpo diretto. Sono indicazioni generali, falle confermare all'oculista.",
      blocks: [
        { type: "table", head: ["Situazione", "Cosa fare"], rows: [
          ["Colpi, randori, uchi-komi con compagno", "Evitare fino al via libera dell'oculista"],
          ["Ukemi e capovolte", "Solo dopo il via libera, partendo da basso e lente"],
          ["Sforzo e respiro", "Ferma ogni serie quando ti restano 2 ripetizioni pulite, mai a cedimento. Espira nella fase di spinta, non trattenere il fiato"],
          ["Sudore e polvere", "Fascia sulla fronte, asciugarsi tamponando, mai strofinare gli occhi con le mani che hanno toccato i dischi"],
          ["Bruciore o occhio secco", "Lacrime artificiali come prescritto; con dolore o vista annebbiata, stop e oculista"],
          ["Testa in giù", "Nessuna verticale o ponte sul collo; posizioni brevi a testa bassa vanno bene"],
          ["Dischi sopra la testa", "Sguardo avanti, spinta in espirazione, carico leggero (10 kg totali)"]
        ] }
      ]
    },
    {
      id: "seduta", nav: "Seduta", title: "La seduta da 90 minuti",
      intro: "Uguale il lunedì e il mercoledì; cambia solo il blocco forza. Nei 25 minuti di forza lavori a coppie alternate: fai un esercizio, 20 s di pausa, il secondo, poi 40 s di pausa con 10 uchi-komi a vuoto, e ripeti per 3 giri. Tre coppie, circa 7 minuti l'una.",
      blocks: [
        { type: "timeline", items: [
          { time: "0–40 min", title: "Col team", text: "riscaldamento e parte senza contatto", style: "t1" },
          { time: "40–50", title: "Dinamico", text: "da solo", style: "t2" },
          { time: "50–75", title: "Forza A / B", text: "3 coppie × 3 giri", style: "t3" },
          { time: "75–90", title: "Statico", text: "sul tatami", style: "t4" }
        ] },
        { type: "text", text: "Se il team fa già un buon riscaldamento articolare, accorcia il dinamico a 5 minuti e dai i 5 recuperati allo statico." }
      ]
    },
    {
      id: "dinamico", nav: "Dinamico", title: "Stretching dinamico · 10 min",
      intro: "Movimenti controllati, senza molleggiare, aumentando l'ampiezza a ogni ripetizione.",
      blocks: [{ type: "exercises", group: "dinamico" }]
    },
    {
      id: "a", nav: "Seduta A", tag: "A", title: "Lunedì · gambe e spinta",
      intro: "Tre coppie: 1A con 1B, 2A con 2B, 3A con 3B. Zaino o borsa: ci metti dentro i dischi e lo tieni al petto o sulla schiena.",
      blocks: [{ type: "exercises", group: "a" }]
    },
    {
      id: "b", nav: "Seduta B", tag: "B", title: "Mercoledì · tirata, anche e presa",
      intro: "Stesse coppie e stesso ritmo. I rematori sono la tirata della seduta: lenti, con pausa di 1 s in alto. Senza sbarra per le trazioni, il rematore prono sulla panca copre la parte alta della schiena.",
      blocks: [{ type: "exercises", group: "b" }]
    },
    {
      id: "statico", nav: "Statico", title: "Stretching statico · 15 min",
      intro: "45 s per posizione, respiro lento, scendi un po' di più a ogni espirazione. Dalla settimana 3, su adduttori e femorali usa il contrai-rilascia: 5 s di spinta contro il pavimento, rilassa e vai più a fondo, per 3 volte. Farfalla, rana, couch stretch, piccione e dorsali sono anche la routine facoltativa da 10 minuti per martedì, giovedì e sabato, 60 s ciascuna.",
      blocks: [{ type: "exercises", group: "statico" }]
    },
    {
      id: "progressione", nav: "Progressione", title: "Progressione su 6 settimane",
      intro: "Con soli 20 kg si progredisce con carichi unilaterali, ritmo lento e pause, non aggiungendo peso. Ogni scheda ha il carico base (sett. 1–2) e il carico alto (sett. 3–5). Tocca una data quando hai fatto la seduta.",
      blocks: [
        { type: "progress", head: ["Sett.", "Sedute", "Carico", "Ritmo"], rows: [
          { week: 1, dates: ["Lun 12 ott", "Mer 14 ott"], load: "Base", rhythm: "2 s in discesa, 1 s in salita" },
          { week: 2, dates: ["Lun 19 ott", "Mer 21 ott"], load: "Base", rhythm: "Come sett. 1, sali fino al massimo di ripetizioni della forbice" },
          { week: 3, dates: ["Lun 26 ott", "Mer 28 ott"], load: "Alto", rhythm: "3 s in discesa" },
          { week: 4, dates: ["Lun 2 nov", "Mer 4 nov"], load: "Alto", rhythm: "3 s in discesa e 1 s fermo in basso; pause tra gli esercizi della coppia dimezzate" },
          { week: 5, dates: ["Lun 9 nov", "Mer 11 nov"], load: "Alto", rhythm: "Circuito: passi da un esercizio all'altro senza pause, 90 s tra i giri" },
          { week: 6, dates: ["Lun 16 nov", "Mer 18 nov"], load: "Base", rhythm: "Scarico: 2 giri invece di 3, resto della seduta per tecnica" }
        ] },
        { type: "tests", title: "Test alla settimana 1 e alla 6", text: "Annota quattro misure per vedere i progressi. Restano salvate su questo telefono.", items: [
          "Piegamento in avanti da seduto: distanza dita-piedi in cm (negativa se non ci arrivi)",
          "Divaricata laterale: altezza del bacino da terra in cm",
          "Pinch hold: secondi con 2 dischi per mano",
          "Dip a corpo libero: ripetizioni pulite al massimo"
        ] }
      ]
    },
    {
      id: "tecnica", nav: "Tecnica", title: "Tecnica senza contatto",
      intro: "Nelle pause tra le serie: 10 uchi-komi a vuoto della tecnica della settimana, curando squilibrio (kuzushi), entrata (tsukuri) e proiezione (kake).",
      blocks: [
        { type: "table", head: ["Sett.", "Tecniche a vuoto", "Collegamento (renraku)"], rows: [
          ["1", "O soto gari, Ko soto gari", "Ko soto gari → O soto gari"],
          ["2", "O uchi gari, Ko uchi gari", "Ko uchi gari → O uchi gari"],
          ["3", "Ippon seoi nage, Tai otoshi", "O uchi gari → Ippon seoi nage"],
          ["4", "Harai goshi, Hane goshi, Uchi mata", "O uchi gari → Uchi mata"],
          ["5", "O goshi, Uki goshi, Koshi guruma", "Ko uchi gari → Koshi guruma"],
          ["6", "De ashi barai, Okuri ashi barai, Sasae tsurikomi ashi, Hiza guruma", "Hiza guruma → Sasae tsurikomi ashi"]
        ] },
        { type: "text", text: "Se avanzano 2–3 minuti: spostamenti a vuoto (tsugi ashi, ayumi ashi, tai sabaki) in shizen tai e jigo tai. Per il ne waza vanno bene i movimenti da soli a terra (ebi, uscite d'anca, cambi di guardia), senza ponte sul collo." }
      ]
    },
    {
      id: "blu", nav: "Cintura blu", title: "Verso la cintura blu",
      intro: "Non ho il programma ufficiale: questa è un'ipotesi sul passo successivo del Gokyo rispetto alla verde. Verificala col maestro.",
      blocks: [
        { type: "list", items: [
          "Tecniche che probabilmente si aggiungono: tsurikomi goshi, ko soto gake, tsuri goshi, ashi guruma, harai tsurikomi ashi, kata guruma, yoko otoshi, tomoe nage",
          "Spesso richiesti anche: prima serie del Nage no kata, più renraku e gaeshi",
          "Dalla settimana 3 metti le loro entrate negli uchi-komi a vuoto, al posto di una tecnica già consolidata",
          "Yoko otoshi e tomoe nage richiedono ukemi: solo a vuoto fino al via libera"
        ] },
        { type: "note", title: "Da fare", checks: [
          "Chiedere al maestro il programma della cintura blu",
          "Chiedere all'oculista quando riprendere ukemi e contatto"
        ] }
      ]
    }
  ]
};
