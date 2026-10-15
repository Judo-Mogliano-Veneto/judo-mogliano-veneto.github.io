/* Schede tecnica passo per passo (testo). Il video ufficiale del Kodokan si aggiunge da solo da video.js.
   Le tecniche senza scheda qui hanno comunque la pagina con significato e video. */
window.TECNICHE = [];
(function () {
  const T = window.TECNICHE;

  T.push({
    id: "osoto-gari", nome: "O soto gari", gruppo: "Ashi waza", kyo: "1° kyo",
    passi: [{ titolo: "Presa e posizione" }, { titolo: "Kuzushi" }, { titolo: "Tsukuri" }, { titolo: "Kake" }]
  });

  T.push({
    id: "o-uchi-gari", nome: "O uchi gari", gruppo: "Ashi waza", kyo: "1° kyo",
    passi: [{ titolo: "Presa e posizione" }, { titolo: "Kuzushi" }, { titolo: "Tsukuri" }, { titolo: "Kake" }]
  });

  T.push({
    id: "ippon-seoi-nage", nome: "Ippon seoi nage", gruppo: "Te waza", kyo: "1° kyo",
    passi: [{ titolo: "Presa e posizione" }, { titolo: "Kuzushi" }, { titolo: "Tsukuri" }, { titolo: "Kake" }]
  });

  // testi per tecnica (id -> campi); i passi prendono il testo nell'ordine
  const TXT = {
    "osoto-gari": {
      sign: "Grande falciata esterna. Si falcia la gamba d'appoggio di uke da fuori, portandolo all'indietro.",
      quando: "Quando uke è fermo o spinge con il peso sul tallone, o quando indietreggia in linea retta.",
      presa: "Presa fondamentale: mano destra al bavero di uke, mano sinistra alla manica all'altezza del gomito. Per chi è mancino tutto è specchiato.",
      testi: [
        "Shizen tai di fronte a uke, a circa un braccio di distanza. Ginocchia morbide, schiena dritta, sguardo avanti.",
        "Con la mano al bavero spingi uke all'indietro, in diagonale verso il suo tallone destro, mentre la manica lo tiene vicino. Il suo peso deve finire sul tallone.",
        "Passo con il piede sinistro accanto al piede destro di uke, sul suo fianco. Il peso passa sul piede d'appoggio, ginocchio morbido, busto inclinato in avanti, sguardo avanti. Il tuo corpo resta attaccato a quello di uke.",
        "La gamba destra, tesa, falcia la gamba destra di uke da dietro e sale dietro di te mentre il busto va in avanti e in basso. La mano al bavero spinge uke all'indietro fino alla caduta. Non lasciare la manica: la tieni per accompagnarlo a terra."
      ],
      errori: ["Il piede d'appoggio è troppo lontano da uke: perdi forza ed equilibrio", "Busto dritto o inclinato indietro: la falciata diventa un calcio", "Si falcia solo con il piede e non con tutta la gamba", "La mano al bavero non spinge: uke non perde l'equilibrio", "Sguardo in basso o indietro"],
      uchikomi: ["Entrata a vuoto con il passo laterale e il busto in avanti, senza falciare (10 volte)", "Falciata lenta tenendo l'equilibrio sul piede d'appoggio", "Prima da fermo, poi con uke che indietreggia di un passo"],
      collegamenti: ["Ko soto gari → O soto gari", "O uchi gari → O soto gari", "Contro-tecnica: O soto gaeshi"],
      sicurezza: "Uke tiene il mento al petto e batte con il braccio. Tori trattiene la manica per accompagnare la caduta."
    },
    "o-uchi-gari": {
      sign: "Grande falciata interna. Si falcia da dentro la gamba di uke con la propria gamba.",
      quando: "Quando uke ha il peso sulla gamba arretrata e le gambe divaricate, o quando indietreggia.",
      presa: "Presa fondamentale: mano destra al bavero, mano sinistra alla manica all'altezza del gomito.",
      testi: [
        "Shizen tai di fronte a uke, a un braccio di distanza. Ginocchia morbide, schiena dritta, sguardo avanti.",
        "Avvicinati con un passo e con la mano al bavero spingi uke all'indietro in diagonale, verso il suo tallone, mentre con la manica lo tieni vicino.",
        "Porta il piede sinistro vicino al piede di uke e appoggia bene il peso. L'altra gamba cerca da dentro la gamba di uke che ha il peso indietro. Busto dritto e vicino a uke.",
        "Falcia da dentro con tutta la gamba, trascinando quella di uke verso di te e in alto. Il busto e la mano al bavero spingono uke all'indietro: è la spinta insieme alla falciata che lo fa cadere."
      ],
      errori: ["Falciare senza aver tolto il peso dalla gamba", "Non avvicinarsi: la gamba arriva corta", "Busto lontano da uke", "Sguardo in basso", "Falciare solo con il piede invece di trascinare tutta la gamba"],
      uchikomi: ["Entrata a vuoto con il passo e la gamba che aggancia, senza falciare (10 volte)", "Falciata lenta con uke fermo, tenendo la manica", "Dopo un passo indietro di uke"],
      collegamenti: ["Ko uchi gari → O uchi gari", "O uchi gari → O soto gari", "O uchi gari → Ippon seoi nage"],
      sicurezza: "Uke batte con il braccio e tiene il mento al petto. Tori trattiene la manica fino all'atterraggio."
    },
    "ippon-seoi-nage": {
      sign: "Proiezione sulla spalla con un braccio solo («portare sulle spalle»).",
      quando: "Quando uke avanza o spinge, con il peso sulle punte e le braccia tese.",
      presa: "Presa fondamentale. Durante l'entrata il braccio destro passa sotto l'ascella di uke e la mano sinistra continua a tenere la manica.",
      testi: [
        "Shizen tai di fronte a uke, a un braccio di distanza. Ginocchia morbide, schiena dritta, sguardo avanti.",
        "Con un passo avanti tira uke in avanti e in alto, sulle punte dei piedi: la manica va avanti e su.",
        "Ruota su te stesso (tai sabaki): schiena verso uke, piedi tra i suoi piedi, ginocchia piegate. Il braccio passa sotto l'ascella di uke e la manica resta tirata. Il petto di uke è contro la tua schiena.",
        "Estendi le ginocchia e piega il busto in avanti: uke è caricato sulla schiena e proiettato davanti, sopra la spalla, tirando la manica. Finisci con la manica in mano per accompagnarlo."
      ],
      errori: ["Ginocchia dritte: non carichi uke e lavori con la schiena (rischio per la schiena)", "Girare senza aver prima tirato uke in avanti", "Piedi troppo lontani da uke", "Testa alta e sguardo in alto", "Mollare la manica"],
      uchikomi: ["Entrata con rotazione e ginocchia piegate, senza caricare (10 volte)", "Uchi komi lento con un compagno che si lascia caricare sulla schiena", "Prima da fermo, poi con un passo"],
      collegamenti: ["O uchi gari → Ippon seoi nage"],
      sicurezza: "Uke batte con il braccio e tiene il mento al petto. Tori tiene la manica per controllare la caduta."
    }
  };
  T.forEach(tc => {
    const x = TXT[tc.id];
    Object.assign(tc, { sign: x.sign, quando: x.quando, presa: x.presa, errori: x.errori, uchikomi: x.uchikomi, collegamenti: x.collegamenti, sicurezza: x.sicurezza });
    tc.passi.forEach((p, i) => { p.testo = x.testi[i]; });
  });

  // tecniche a terra
  T.push({
    id: "hon-kesa-gatame", nome: "Hon kesa gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo a sciarpa (kesa = la stola del monaco): il controllo di base per l'immobilizzazione.",
    quando: "Quando uke è sulla schiena e tu sei seduto accanto al suo torace.",
    presa: "Un braccio blocca il braccio di uke contro il tuo fianco, l'altro passa sotto la nuca e afferra il bavero.",
    passi: [
      { titolo: "Posizione", testo: "Siediti di fianco al torace di uke, con una gamba piegata vicino alla sua spalla e l'altra tesa all'indietro per fare base." },
      { titolo: "Presa", testo: "Chiudi il braccio di uke sotto la tua ascella contro il fianco. L'altro braccio passa sotto la nuca e afferra il bavero dietro il collo." },
      { titolo: "Peso e controllo", testo: "Premi il petto sulla spalla e sul petto di uke e tieni il corpo basso e aderente. Stringi il fianco: uke non deve estrarre il braccio." },
      { titolo: "Mantenimento", testo: "Segui i movimenti di uke senza perdere il contatto. Per l'ippon in gara servono 20 secondi di controllo." }
    ],
    errori: ["Busto alto, senza peso su uke", "Braccio di uke libero", "Gambe troppo vicine: uke ti ribalta", "Perdere il contatto con il petto"],
    uchikomi: ["Entrata e posizione in sequenza, con un compagno fermo", "Tenere il controllo per 20 secondi e poi cambiare ruolo"],
    collegamenti: ["Hon kesa gatame → Kuzure kesa gatame (se uke libera il braccio)", "Hon kesa gatame → Ushiro kesa gatame"],
    sicurezza: "Uke batte con la mano quando non riesce a uscire e ha la testa o il braccio in difficoltà: tori allenta subito."
  });
  T.push({
    id: "hadaka-jime", nome: "Hadaka jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento «a nudo»: dal dietro con l'avambraccio sul collo, senza usare il judogi.",
    quando: "Quando sei dietro uke, in piedi o a terra, e il suo collo è libero.",
    presa: "Un avambraccio sul collo (non sulla gola), l'altra mano chiude il braccio.",
    passi: [
      { titolo: "Posizione", testo: "Mettiti dietro uke, stretto alla sua schiena, con i piedi che lo bloccano o la gamba che controlla." },
      { titolo: "Braccio al collo", testo: "Passa un braccio sotto il mento di uke: l'avambraccio appoggia di lato sul collo con il gomito sotto il mento. Evita la gola." },
      { titolo: "Chiusura del braccio", testo: "La mano del braccio al collo prende il bicipite dell'altro braccio. L'altra mano va dietro la nuca di uke." },
      { titolo: "Strangolamento", testo: "Avvicina i gomiti, spingi la testa di uke in avanti con la mano dietro la nuca ed espandi il petto indietro. Si stringe in modo progressivo." }
    ],
    errori: ["Braccio sulla gola invece che ai lati del collo", "Distanza dal corpo di uke", "Stringere di colpo", "Non lasciare subito dopo il segnale di resa"],
    uchikomi: ["Entrata e chiusura del braccio, senza stringere, con un compagno fermo", "Posizione dietro uke da diverse posizioni (in piedi, seduto, quadrupedico)"],
    collegamenti: ["Hadaka jime → Okuri eri jime (se uke abbassa il mento)"],
    sicurezza: "Si lavora sempre in modo lento e progressivo. Appena uke batte la mano (resa), tori lascia subito. Impara gli strangolamenti solo con il maestro."
  });
})();
