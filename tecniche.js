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
    id: "ippon-seoi-nage", nome: "Ippon seoi nage", alias: ["Seoi nage"], gruppo: "Te waza", kyo: "1° kyo",
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
    id: "hon-kesa-gatame", nome: "Hon kesa gatame", alias: ["Kesa gatame"], gruppo: "Osaekomi waza", kyo: "",
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

  // schede scritte il 15/10/2026: resto del 1° kyo e immobilizzazioni del programma di riferimento (presa destra)
  T.push({
    id: "de-ashi-barai", nome: "De ashi barai", gruppo: "Ashi waza", kyo: "1° kyo",
    sign: "Spazzata del piede che avanza: si spazza il piede di uke un attimo prima che ci appoggi il peso.",
    quando: "Quando uke porta avanti il piede destro (o lo ritira) e sta per caricarci il peso. È tutta questione di tempo.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito.",
    passi: [
      { titolo: "Posizione e movimento", testo: "Shizen tai, in movimento: uke avanza verso di te oppure tu indietreggi e lo fai avanzare. Guarda il suo piede destro senza abbassare la testa." },
      { titolo: "Kuzushi", testo: "Mentre il piede destro di uke va avanti, le mani lo spostano di lato verso la tua sinistra: la manica tira in fuori e in alto, il bavero accompagna. Il suo peso va verso il piede che sta per appoggiare." },
      { titolo: "Tsukuri", testo: "Peso sul tuo piede destro, busto dritto, gamba sinistra rilassata e leggermente in fuori, pronta a spazzare." },
      { titolo: "Kake", testo: "Con la pianta del piede sinistro, curva come un cucchiaio, spazzi la caviglia destra di uke **nella direzione in cui si muove**, appena prima che la appoggi. Le mani girano come un volante (manica giù, bavero su): uke cade sul fianco." }
    ],
    errori: ["Spazzare tardi, quando il peso è già sul piede: diventa un calcio", "Usare il tallone o le dita invece della pianta", "Spazzare verso uke invece che di lato, nella direzione del suo passo", "Mani ferme: senza il volante uke non cade", "Abbassare la testa per guardare il piede"],
    uchikomi: ["Camminare in coppia con tsugi ashi e toccare il piede a tempo, senza proiettare", "Spazzata leggera a ogni passo di uke, cambiando lato", "Da fermo: uke fa un passo, tori spazza al momento giusto"],
    collegamenti: ["De ashi barai → Hiza guruma (stesso tempo, più in alto)", "De ashi barai → Harai goshi", "Contro-tecnica: Tsubame gaeshi"],
    sicurezza: "Si spazza con la pianta, mai con il tallone o la punta sulla caviglia. Uke cade di fianco (yoko ukemi); tori tiene la manica."
  });
  T.push({
    id: "hiza-guruma", nome: "Hiza guruma", gruppo: "Ashi waza", kyo: "1° kyo",
    sign: "Ruota sul ginocchio: il piede blocca il ginocchio di uke e lui gira sopra il blocco come una ruota.",
    quando: "Quando uke avanza il piede destro o tiene il peso sulla gamba destra.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai di fronte a uke. Meglio in movimento: uke viene avanti con il destro." },
      { titolo: "Kuzushi", testo: "Tira la manica verso l'esterno e in alto, il bavero spinge verso la tua sinistra: uke va in avanti-destra, sulla punta del piede destro." },
      { titolo: "Tsukuri", testo: "Passo con il piede destro avanti, all'esterno del piede sinistro di uke, e ruota il busto verso sinistra. Il peso è sul destro." },
      { titolo: "Kake", testo: "Appoggia la **pianta** del piede sinistro sull'esterno del ginocchio destro di uke, gamba quasi tesa, e continua a ruotare il busto e le braccia verso sinistra come un volante. Uke gira sopra il ginocchio bloccato e cade davanti a te." }
    ],
    errori: ["Calciare il ginocchio invece di appoggiare la pianta", "Spingere il ginocchio all'indietro: è pericoloso e non proietta", "Ruotare solo le braccia senza il busto", "Passo d'appoggio troppo corto: non c'è spazio per la rotazione"],
    uchikomi: ["Entrata lenta: passo, piede sul ginocchio, rotazione, senza proiettare", "In movimento con uke che avanza, a tempo", "Alternare con de ashi barai sullo stesso passo"],
    collegamenti: ["De ashi barai → Hiza guruma", "Hiza guruma → Sasae tsurikomi ashi (se uke piega il ginocchio)", "Hiza guruma → O soto gari"],
    sicurezza: "Il ginocchio è fragile: si appoggia la pianta di lato, mai sulla rotula e mai spingendo indietro."
  });
  T.push({
    id: "sasae-tsurikomi-ashi", nome: "Sasae tsurikomi ashi", gruppo: "Ashi waza", kyo: "1° kyo",
    sign: "Blocco del piede con trazione e sollevamento: il piede di tori ferma la caviglia di uke mentre le braccia lo tirano in avanti e lo ruotano.",
    quando: "Quando uke avanza il piede destro, o quando lo tiri in avanti e lui resiste.",
    presa: "Presa fondamentale: destra al bavero (che solleva: tsuri), sinistra alla manica (che tira: komi).",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai. Fai indietreggiare il tuo piede destro di mezzo passo in diagonale per aprire lo spazio davanti a uke." },
      { titolo: "Kuzushi", testo: "Tira uke in avanti-destra e in alto: la manica tira, il bavero solleva. Uke va sulla punta del piede destro." },
      { titolo: "Tsukuri", testo: "Ruota il busto a sinistra appoggiandoti sul piede destro, che è già indietro. Il corpo si inclina leggermente indietro per fare leva." },
      { titolo: "Kake", testo: "La **pianta** del piede sinistro blocca davanti la caviglia destra di uke (gamba tesa). Il blocco è fermo: non si spazza. Le braccia continuano a tirare e ruotare verso sinistra e uke cade in avanti sopra il piede bloccato." }
    ],
    errori: ["Spazzare invece di bloccare (diventa de ashi barai fatto male)", "Bloccare con il tallone o sul polpaccio", "Braccia che tirano in basso invece che in alto e in giro", "Busto in avanti verso uke: si perde la leva"],
    uchikomi: ["Blocco da fermo con uke che si lascia tirare, senza proiettare", "Passo indietro + blocco + rotazione, in sequenza", "Confronto con hiza guruma: stessa rotazione, blocco più basso"],
    collegamenti: ["Hiza guruma → Sasae tsurikomi ashi", "Sasae tsurikomi ashi → O uchi gari (se uke arretra)", "Sasae tsurikomi ashi → Harai tsurikomi ashi"],
    sicurezza: "Il blocco è con la pianta sotto la caviglia, mai un calcio. Tori trattiene la manica per accompagnare."
  });
  T.push({
    id: "uki-goshi", nome: "Uki goshi", gruppo: "Koshi waza", kyo: "1° kyo",
    sign: "Anca fluttuante: uke «galleggia» sull'anca di tori e cade per la sola rotazione, senza sollevamento.",
    quando: "Quando uke avanza o è rigido e piegato in avanti.",
    presa: "Mano sinistra alla manica; il braccio destro passa dietro la schiena di uke e lo stringe alla vita (o alla cintura).",
    passi: [
      { titolo: "Presa e posizione", testo: "Dalla presa fondamentale lascia il bavero e porta il braccio destro attorno alla vita di uke, mano sulla schiena o sulla cintura." },
      { titolo: "Kuzushi", testo: "Tira la manica in avanti e in alto e stringi uke a te con il braccio destro: va in avanti-destra, sulle punte." },
      { titolo: "Tsukuri", testo: "Passo con il destro davanti al piede destro di uke, poi ruota e porta il sinistro accanto. Ti ritrovi di fianco a lui, con l'**anca destra** contro il suo ventre. Ginocchia appena piegate: l'anca entra solo a metà." },
      { titolo: "Kake", testo: "Ruota il busto verso sinistra tirando la manica: uke scivola sopra la tua anca e cade davanti a te. Non spingi con le gambe e non sollevi: è la rotazione che proietta." }
    ],
    errori: ["Entrare con tutta l'anca e sollevare: diventa o goshi", "Restare lontani: il braccio dietro la schiena non controlla", "Ruotare solo la testa e non il busto", "Lasciare la manica alla fine"],
    uchikomi: ["Entrata e rotazione a vuoto, 10 volte per lato", "Entrata con uke che si lascia caricare, senza proiettare", "Confronto con o goshi per sentire la differenza"],
    collegamenti: ["Uki goshi → O goshi", "Uki goshi → Harai goshi (se uke si sposta davanti)", "Contro-tecnica: Ushiro goshi"],
    sicurezza: "Tori tiene la manica fino a terra; uke batte con il braccio libero."
  });
  T.push({
    id: "o-goshi", nome: "O goshi", gruppo: "Koshi waza", kyo: "1° kyo",
    sign: "Grande anca: l'anca di tori entra completamente sotto quella di uke e lo solleva.",
    quando: "Quando uke è in avanti o ti si avvicina con il busto.",
    presa: "Mano sinistra alla manica; il braccio destro passa sotto l'ascella sinistra di uke e lo abbraccia alla vita, mano sulla schiena.",
    passi: [
      { titolo: "Presa e posizione", testo: "Dalla presa fondamentale porta il braccio destro attorno alla vita di uke, petto vicino a lui." },
      { titolo: "Kuzushi", testo: "Tira la manica in avanti e in alto, il braccio destro tira uke contro di te: va in avanti, sulle punte." },
      { titolo: "Tsukuri", testo: "Passo col destro davanti al suo destro, ruota e porta il sinistro tra i suoi piedi. Piedi dentro i suoi, **ginocchia piegate**: la tua cintura è più bassa della sua e l'anca sporge oltre il suo fianco destro. Schiena contro il suo petto." },
      { titolo: "Kake", testo: "Distendi le gambe sollevando uke sull'anca, poi ruota il busto a sinistra tirando la manica. Uke passa sopra l'anca e cade davanti a te." }
    ],
    errori: ["Ginocchia dritte nell'entrata: non riesci a sollevare", "Anca che non sporge oltre il fianco di uke", "Sollevare con la schiena invece che con le gambe", "Piedi fuori dai suoi: perdi l'equilibrio"],
    uchikomi: ["Entrata a vuoto con piegamento delle ginocchia", "Entrata e sollevamento senza proiettare (uke in punta di piedi)", "Tre entrate e alla terza la proiezione, su materasso"],
    collegamenti: ["Uki goshi → O goshi", "Ko uchi gari → O goshi", "Contro-tecnica: Ushiro goshi, Utsuri goshi"],
    sicurezza: "Si solleva con le gambe, schiena dritta. Tori accompagna con la manica; uke fa la caduta laterale o avanti."
  });
  T.push({
    id: "kuzure-kesa-gatame", nome: "Kuzure kesa gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Kesa gatame «modificato»: invece di passare attorno al collo, il braccio passa sotto l'ascella di uke.",
    quando: "Quando uke è sulla schiena e protegge il collo, o quando da hon kesa gatame libera la testa.",
    presa: "Un braccio blocca il braccio di uke contro il tuo fianco; l'altro passa sotto la sua ascella opposta e la mano va a terra o sul bavero dietro la spalla.",
    passi: [
      { titolo: "Posizione", testo: "Siediti di fianco al torace di uke come in hon kesa gatame: gamba destra piegata avanti, sinistra indietro, gambe larghe." },
      { titolo: "Presa", testo: "Il braccio sinistro stringe il braccio destro di uke sotto la tua ascella. Il braccio destro passa **sotto l'ascella sinistra** di uke, mano a terra con il palmo giù o al bavero dietro la sua spalla." },
      { titolo: "Peso e controllo", testo: "Il petto preme sul petto di uke, il busto è basso. La testa resta bassa vicino alla sua per non essere ribaltati." },
      { titolo: "Mantenimento", testo: "Se uke fa il ponte o gira, sposta le gambe e il peso per seguirlo, senza lasciare il braccio. In gara servono 20 secondi per l'ippon." }
    ],
    errori: ["Mano destra lontana dal corpo di uke: lui libera la spalla", "Busto alto", "Gambe vicine: basta una spinta per ribaltarti", "Lasciare il braccio di uke"],
    uchikomi: ["Passaggio da hon kesa a kuzure kesa quando uke libera la testa", "Tenere 20 secondi con uke che prova a uscire, poi cambiare"],
    collegamenti: ["Hon kesa gatame → Kuzure kesa gatame", "Kuzure kesa gatame → Kata gatame (se uke spinge con il braccio)", "Kuzure kesa gatame → Ushiro kesa gatame"],
    sicurezza: "Niente peso sulla gola o sul viso. Uke batte quando non riesce a uscire o sente dolore: tori allenta subito."
  });
  T.push({
    id: "yoko-shiho-gatame", nome: "Yoko shiho gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo laterale sui quattro lati: tori è di traverso sul petto di uke.",
    quando: "Quando sei di lato a uke che è sulla schiena, per esempio dopo un ribaltamento o un passaggio di guardia.",
    presa: "Il braccio verso la testa passa sotto il collo di uke e afferra il bavero; l'altro passa tra le sue gambe e afferra la cintura o i pantaloni.",
    passi: [
      { titolo: "Posizione", testo: "In ginocchio di fianco a uke, perpendicolare a lui. Un ginocchio contro il suo fianco, l'altro vicino alla spalla: niente spazio tra te e lui." },
      { titolo: "Presa", testo: "Il braccio sinistro passa sotto il collo di uke e afferra il suo bavero; il braccio destro passa tra le sue gambe e afferra la cintura (o i pantaloni)." },
      { titolo: "Peso e controllo", testo: "Il petto preme sul petto di uke, la testa è bassa e leggermente verso le sue gambe. Le anche restano basse; puoi anche distendere le gambe all'indietro per pesare di più." },
      { titolo: "Mantenimento", testo: "Quando uke fa il ponte verso di te, abbassa le anche e chiudi le ginocchia contro di lui. Se gira, segui il movimento cambiando appoggio." }
    ],
    errori: ["Anche alte: uke infila il ginocchio e ti spinge via", "Ginocchia lontane dal suo corpo", "Braccio sotto il collo che non afferra niente", "Testa alta: perdi peso e controllo"],
    uchikomi: ["Entrata in yoko shiho da fianco, con uke fermo", "Tenere 20 secondi con uke che fa il ponte e gira, poi cambiare", "Passaggio da kesa gatame a yoko shiho gatame"],
    collegamenti: ["Kesa gatame → Yoko shiho gatame", "Yoko shiho gatame → Kami shiho gatame", "Yoko shiho gatame → Tate shiho gatame"],
    sicurezza: "Niente avambraccio sulla gola. Uke batte quando non riesce a uscire: tori allenta subito."
  });
  T.push({
    id: "tate-shiho-gatame", nome: "Tate shiho gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo longitudinale: tori è a cavallo di uke, nella stessa direzione.",
    quando: "Quando sei sopra uke, seduto sul suo ventre o sul petto (montata).",
    presa: "Un braccio di uke e la sua testa sono chiusi insieme dal tuo braccio; le gambe controllano le sue.",
    passi: [
      { titolo: "Posizione", testo: "A cavallo di uke, ginocchia a terra e strette contro i suoi fianchi. Bacino basso sul suo petto o sul ventre." },
      { titolo: "Presa", testo: "Il tuo braccio destro passa sotto la nuca di uke e chiude insieme la sua testa e il suo braccio destro, che resta disteso accanto al viso. La mano sinistra afferra il bavero o va a terra per l'equilibrio." },
      { titolo: "Peso e controllo", testo: "Il petto preme sul petto di uke, la testa è bassa accanto alla sua. Agganci i piedi sotto le sue gambe per non farti ribaltare." },
      { titolo: "Mantenimento", testo: "Quando uke fa il ponte e spinge di lato, allarga le gambe o il braccio libero da quella parte e abbassa il peso. Non sederti dritto." }
    ],
    errori: ["Busto alto, seduti: uke fa il ponte e ti ribalta", "Ginocchia lontane dai fianchi", "Braccio di uke libero", "Piedi non agganciati quando uke fa il ponte"],
    uchikomi: ["Montata e controllo con uke fermo", "Tenere 20 secondi con uke che fa il ponte, poi cambiare", "Passaggio da yoko shiho gatame a tate shiho gatame"],
    collegamenti: ["Yoko shiho gatame → Tate shiho gatame", "Tate shiho gatame → Ude hishigi juji gatame (se uke spinge con le braccia)"],
    sicurezza: "Niente peso sul collo. Uke batte quando non riesce a uscire: tori allenta subito."
  });

  // 2° kyo (presa destra)
  const FOND = "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito.";
  T.push({
    id: "ko-soto-gari", nome: "Ko soto gari", gruppo: "Ashi waza", kyo: "2° kyo",
    sign: "Piccola falciata esterna: si falcia da dietro il tallone di uke, da fuori.",
    quando: "Quando uke porta il peso sul tallone destro, per esempio mentre indietreggia o ruota verso destra.",
    presa: FOND,
    passi: [
      { titolo: "Posizione", testo: "Shizen tai. Avvicinati con il piede destro un poco a destra, davanti al piede destro di uke." },
      { titolo: "Kuzushi", testo: "Spingi uke all'indietro e verso la sua destra: il bavero spinge, la manica scende. Il peso va sul suo tallone destro." },
      { titolo: "Tsukuri", testo: "Peso sul tuo piede destro, busto vicino a uke e appena inclinato in avanti. Il piede sinistro è pronto, la gamba sciolta." },
      { titolo: "Kake", testo: "Con la **pianta** del piede sinistro aggancia da dietro il tallone destro di uke e spazzalo nella direzione delle sue dita, mentre le mani continuano a spingere in diagonale indietro. Uke cade all'indietro." }
    ],
    errori: ["Agganciare il polpaccio invece del tallone", "Falciare quando il peso di uke non è sul tallone", "Mani ferme: è la spinta che fa cadere", "Busto lontano da uke"],
    uchikomi: ["Aggancio del tallone a vuoto, 10 volte", "Con uke che indietreggia: aggancio al terzo passo", "Alternare con o soto gari sullo stesso squilibrio"],
    collegamenti: ["Ko soto gari → O soto gari", "Ko uchi gari → Ko soto gari", "Ko soto gari → Tai otoshi (se uke avanza)"],
    sicurezza: "Si aggancia il tallone con la pianta, non si calcia la caviglia. Uke fa ushiro ukemi con il mento al petto."
  });
  T.push({
    id: "ko-uchi-gari", nome: "Ko uchi gari", gruppo: "Ashi waza", kyo: "2° kyo",
    sign: "Piccola falciata interna: si falcia da dentro il tallone di uke.",
    quando: "Quando uke porta avanti il piede destro e ci mette il peso, o quando sta largo a gambe aperte.",
    presa: FOND,
    passi: [
      { titolo: "Posizione", testo: "Shizen tai, vicino a uke. Il tuo piede sinistro va un poco avanti per avvicinarti." },
      { titolo: "Kuzushi", testo: "Spingi uke all'indietro e verso la sua destra, abbassando un poco le mani: il peso va sul suo tallone destro." },
      { titolo: "Tsukuri", testo: "Peso sul piede sinistro, busto dritto vicino al suo petto. Il piede destro si prepara **tra** i piedi di uke." },
      { titolo: "Kake", testo: "Con la pianta del piede destro aggancia da dentro il tallone destro di uke e spazzalo verso le sue dita, cioè in avanti per lui. Le mani spingono in giù e indietro: uke cade all'indietro." }
    ],
    errori: ["Falciare con il collo del piede o con le dita", "Spazzare verso l'esterno invece che in avanti", "Busto inclinato in avanti: uke ti trascina", "Non seguire uke nella caduta"],
    uchikomi: ["Aggancio a vuoto a ritmo, alternando i lati", "Con uke che avanza il destro, aggancio a tempo", "Catena ko uchi gari → seoi nage"],
    collegamenti: ["Ko uchi gari → Ippon seoi nage (se uke ritira la gamba)", "Ko uchi gari → O uchi gari", "Ko uchi gari → Ko soto gari"],
    sicurezza: "Si spazza il tallone, mai la caviglia di lato. Tori accompagna con la manica; uke batte all'indietro."
  });
  T.push({
    id: "koshi-guruma", nome: "Koshi guruma", gruppo: "Koshi waza", kyo: "2° kyo",
    sign: "Ruota sull'anca: uke gira sopra l'anca di tori, che lo tiene attorno al collo.",
    quando: "Quando uke è dritto o ti spinge con il busto avanti.",
    presa: "Mano sinistra alla manica; il braccio destro passa attorno al collo di uke (o dietro la spalla).",
    passi: [
      { titolo: "Presa e posizione", testo: "Dalla presa fondamentale porta il braccio destro attorno al collo di uke, il gomito vicino alla sua spalla sinistra." },
      { titolo: "Kuzushi", testo: "Tira la manica in avanti e in alto e attira la testa di uke con il braccio: va in avanti, sulle punte." },
      { titolo: "Tsukuri", testo: "Passo col destro davanti al suo destro, ruota e porta il sinistro tra i suoi piedi. L'anca destra va **oltre** il suo fianco destro, più in profondità che in o goshi. Ginocchia piegate." },
      { titolo: "Kake", testo: "Distendi le gambe, gira il busto a sinistra e tira la manica: uke ruota sopra l'anca come una ruota e cade davanti a te." }
    ],
    errori: ["Anca non abbastanza avanti: uke scivola dietro", "Stringere il collo invece di guidare la testa", "Piedi fuori dai piedi di uke", "Busto dritto alla fine: niente rotazione"],
    uchikomi: ["Entrata a vuoto con anca oltre il fianco di uke", "Entrata e sollevamento senza proiettare", "Confronto con o goshi: stessa entrata, presa e anca diverse"],
    collegamenti: ["Koshi guruma → Harai goshi", "O goshi → Koshi guruma", "Contro-tecnica: Ushiro goshi"],
    sicurezza: "Il braccio guida la testa, non strangola. Tori tiene la manica; uke fa la caduta laterale."
  });
  T.push({
    id: "tsurikomi-goshi", nome: "Tsurikomi goshi", gruppo: "Koshi waza", kyo: "2° kyo",
    sign: "Anca con trazione e sollevamento: la mano al bavero solleva (tsuri), la manica tira (komi), l'anca entra bassa.",
    quando: "Quando uke è dritto o alto, o tiene il busto lontano da te.",
    presa: "Presa fondamentale; la mano destra resta al bavero e, entrando, il gomito sale sotto l'ascella di uke.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai, presa fondamentale salda al bavero." },
      { titolo: "Kuzushi", testo: "Solleva con il bavero e tira la manica in avanti: uke va in avanti, sulle punte. Il tuo gomito destro spinge in alto sotto la sua ascella." },
      { titolo: "Tsukuri", testo: "Ruota entrando con le anche **sotto** la cintura di uke: piedi tra i suoi, ginocchia molto piegate, schiena contro il suo ventre." },
      { titolo: "Kake", testo: "Distendi le gambe, continua a sollevare con il bavero e a tirare la manica, gira il busto a sinistra: uke passa sopra le anche e cade davanti." }
    ],
    errori: ["Entrare alti: le anche non vanno sotto quelle di uke", "Gomito destro basso: manca il sollevamento", "Spingere con la schiena invece di distendere le gambe", "Lasciare il bavero entrando"],
    uchikomi: ["Entrata bassa a vuoto con il gomito che sale", "Entrata con uke che si lascia caricare", "Variante con la presa alla manica: sode tsurikomi goshi"],
    collegamenti: ["Tsurikomi goshi → Ko uchi gari (se uke si abbassa)", "Ko uchi gari → Tsurikomi goshi", "Tsurikomi goshi → Harai goshi"],
    sicurezza: "Si solleva con le gambe, schiena dritta. Tori tiene la manica fino a terra."
  });
  T.push({
    id: "okuri-ashi-barai", nome: "Okuri ashi barai", gruppo: "Ashi waza", kyo: "2° kyo",
    sign: "Spazzata dei due piedi in movimento laterale: si spinge un piede di uke contro l'altro e li si spazza insieme.",
    quando: "Quando uke si sposta di lato con passi accostati (tsugi ashi), un attimo prima che i suoi piedi si avvicinino.",
    presa: FOND,
    passi: [
      { titolo: "Movimento", testo: "Tori e uke si spostano di lato insieme, uke verso la sua sinistra, con passi accostati. Le mani accompagnano il ritmo." },
      { titolo: "Kuzushi", testo: "Mentre uke porta il piede destro verso il sinistro, sollevalo un poco con le mani e accelera il suo movimento di lato." },
      { titolo: "Tsukuri", testo: "Peso sul tuo piede destro, busto dritto, gamba sinistra tesa e rilassata, pronta a spazzare." },
      { titolo: "Kake", testo: "Con la pianta del piede sinistro spazza la caviglia destra di uke **nella stessa direzione** in cui si muove, spingendola contro il suo piede sinistro: i due piedi partono insieme. Le mani sollevano e girano: uke cade di fianco." }
    ],
    errori: ["Spazzare verso uke invece che nella direzione del movimento", "Gamba piegata o spazzata con il tallone", "Arrivare tardi: i piedi di uke sono già accostati e fermi", "Mani che tirano in basso"],
    uchikomi: ["Spostamenti laterali in coppia, tocco a tempo senza proiettare", "Spazzata a vuoto con la gamba tesa", "Alternare de ashi barai (avanti) e okuri ashi barai (di lato)"],
    collegamenti: ["De ashi barai → Okuri ashi barai", "Okuri ashi barai → Harai tsurikomi ashi"],
    sicurezza: "Si spazza con la pianta. Uke fa yoko ukemi; tori trattiene la manica."
  });
  T.push({
    id: "tai-otoshi", nome: "Tai otoshi", gruppo: "Te waza", kyo: "2° kyo",
    sign: "Caduta del corpo: la gamba di tori blocca lo stinco di uke e le braccia lo fanno cadere in avanti.",
    quando: "Quando uke avanza o resiste spingendo in avanti con il peso sul piede destro.",
    presa: FOND,
    passi: [
      { titolo: "Posizione", testo: "Shizen tai. Meglio se uke viene avanti con il destro." },
      { titolo: "Kuzushi", testo: "Tira la manica in avanti e verso il basso, il bavero spinge in avanti e in alto: uke va in avanti-destra, sulle punte." },
      { titolo: "Tsukuri", testo: "Porta il destro davanti al suo destro e ruota, con il sinistro indietro: sei girato quasi di spalle. Poi stendi la gamba destra davanti allo **stinco destro** di uke, ginocchio leggermente piegato." },
      { titolo: "Kake", testo: "Ruota il busto a sinistra e tira le braccia verso il basso come girando un volante. Uke inciampa sulla tua gamba e cade davanti a te. Le anche non toccano uke: è una te waza." }
    ],
    errori: ["Caricare uke sull'anca: diventa una koshi waza fatta male", "Gamba bloccante troppo alta, sul ginocchio", "Braccia che non ruotano", "Piede d'appoggio troppo vicino: non c'è spazio per cadere"],
    uchikomi: ["Entrata con il blocco della gamba, senza proiettare", "Rotazione delle braccia a vuoto con l'elastico", "Con uke che avanza, a tempo"],
    collegamenti: ["O uchi gari → Tai otoshi (se uke avanza)", "Ko soto gari → Tai otoshi", "Tai otoshi → Ko soto gari (se uke indietreggia)"],
    sicurezza: "La gamba blocca lo stinco, non colpisce il ginocchio. Tori tiene la manica; uke fa la caduta in avanti arrotolata."
  });
  T.push({
    id: "harai-goshi", nome: "Harai goshi", gruppo: "Koshi waza", kyo: "2° kyo",
    sign: "Anca spazzata: tori carica uke sull'anca e con la gamba spazza la sua coscia.",
    quando: "Quando uke è dritto o avanza, e ha il peso in avanti.",
    presa: "Mano sinistra alla manica; la destra al bavero o dietro la schiena di uke.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai, presa salda. Petto vicino a uke." },
      { titolo: "Kuzushi", testo: "Tira la manica in avanti e in alto, il braccio destro attira uke a te: va in avanti-destra, sulle punte." },
      { titolo: "Tsukuri", testo: "Ruota portando i piedi davanti ai suoi, peso sul **piede sinistro**. Anca destra contro di lui, fianco a fianco." },
      { titolo: "Kake", testo: "La gamba destra, tesa, spazza all'indietro l'esterno della coscia destra di uke, mentre il busto ruota a sinistra e scende e la manica tira. Uke viene spazzato via dall'anca e cade davanti." }
    ],
    errori: ["Spazzare con la gamba piegata", "Spazzare prima di aver caricato uke", "Piede d'appoggio lontano: perdi l'equilibrio", "Testa che guarda indietro"],
    uchikomi: ["Entrata e gamba in posizione, senza spazzare", "Equilibrio su una gamba con la spazzata lenta", "Entrata con uke che cammina in avanti"],
    collegamenti: ["Uki goshi → Harai goshi", "Ko uchi gari → Harai goshi", "Contro-tecniche: Harai goshi gaeshi, Ushiro goshi"],
    sicurezza: "Tori resta in piedi sulla gamba d'appoggio e tiene la manica. Uke fa la caduta laterale."
  });
  T.push({
    id: "uchi-mata", nome: "Uchi mata", gruppo: "Ashi waza", kyo: "2° kyo",
    sign: "Falciata all'interno della coscia: la gamba di tori sale tra le gambe di uke e lo solleva.",
    quando: "Quando uke ha il peso in avanti, sta a gambe aperte o si piega in avanti.",
    presa: FOND,
    passi: [
      { titolo: "Posizione", testo: "Shizen tai, presa salda; muoviti in cerchio per far aprire le gambe a uke." },
      { titolo: "Kuzushi", testo: "Tira la manica in avanti e in alto, il bavero solleva: uke va in avanti, sulle punte." },
      { titolo: "Tsukuri", testo: "Ruota portando il piede sinistro tra i piedi di uke, peso sul sinistro e busto che si inclina in avanti. Sei di spalle, vicino a lui." },
      { titolo: "Kake", testo: "La gamba destra sale tra le gambe di uke e falcia l'**interno della sua coscia sinistra**, verso l'alto e indietro. Il busto scende e gira a sinistra, la manica tira: uke viene sollevato e cade davanti a te." }
    ],
    errori: ["Falciare con il ginocchio piegato", "Calciare il basso ventre invece della coscia", "Busto dritto: la gamba non sale", "Saltare sul piede d'appoggio perdendo l'equilibrio"],
    uchikomi: ["Entrata a vuoto con il busto in avanti e la gamba che sale", "Equilibrio sul sinistro con la gamba alta", "Entrata in movimento circolare con uke"],
    collegamenti: ["O uchi gari → Uchi mata", "Uchi mata → Ko uchi gari (se uke chiude le gambe)", "Contro-tecnica: Uchi mata sukashi"],
    sicurezza: "La gamba sale sulla coscia, non colpisce l'inguine. Tori tiene la manica; uke fa la caduta laterale."
  });

  // tecniche vietate: scheda informativa, senza esecuzione passo per passo
  const VIET = (id, nome, gruppo, sign, cosa, perche) => T.push({
    id, nome, gruppo, kyo: "vietata in gara", vietata: true, sign,
    quando: "Non si usa in randori né in gara. Si conosce per cultura tecnica e per riconoscerla.",
    presa: "—",
    passi: [
      { titolo: "Cos'è", testo: cosa },
      { titolo: "Perché è vietata", testo: perche },
      { titolo: "Dove si studia", testo: "Fa parte dell'elenco delle tecniche del Kodokan, ma si vede solo come dimostrazione, lentamente e con un maestro." },
      { titolo: "In allenamento", testo: "Non provarla con i compagni. Se ti capita una situazione simile in randori, fermati e chiedi al maestro." }
    ],
    errori: ["Provarla in randori o per gioco", "Confonderla con una tecnica ammessa simile"],
    uchikomi: ["Nessun esercizio: si studia solo guardando il video e la spiegazione del maestro"],
    collegamenti: [],
    sicurezza: "Tecnica vietata in gara dal regolamento IJF e pericolosa per le articolazioni o la colonna di uke."
  });
  VIET("kani-basami", "Kani basami", "Yoko sutemi waza", "Proiezione a forbice (kani = granchio): le gambe di tori chiudono uke come le chele di un granchio.",
    "Tori si lancia di fianco e chiude con le gambe il busto o le gambe di uke, una davanti e una dietro, facendolo cadere all'indietro.",
    "Uke cade all'indietro con le gambe bloccate e non può fare una caduta corretta: il rischio per il ginocchio e la gamba è alto. È vietata in gara e anche nei randori.");
  VIET("kawazu-gake", "Kawazu gake", "Yoko sutemi waza", "Aggancio a rana (kawazu = rana): la gamba di tori si avvolge attorno a quella di uke.",
    "Tori avvolge la propria gamba attorno alla gamba di uke, da dentro verso fuori, e si lascia cadere all'indietro trascinandolo.",
    "Le due gambe restano intrecciate durante la caduta e il ginocchio di uke può subire una torsione grave. È vietata in gara.");
  VIET("do-jime", "Do jime", "Shime waza", "Strangolamento del tronco (do = tronco): si stringe il busto di uke tra le gambe.",
    "Tori chiude le gambe incrociate attorno al tronco (o ai reni) di uke e stringe.",
    "Comprime il torace e gli organi interni invece del collo: può fare male alle costole e ai reni. È vietata in gara.");
  VIET("ashi-garami", "Ashi garami", "Kansetsu waza", "Leva con intreccio delle gambe (ashi = gamba, garami = intreccio).",
    "Tori intreccia le gambe con quelle di uke e mette in leva il suo ginocchio.",
    "In gara sono permesse solo le leve al gomito: le leve a ginocchio, caviglia e altre articolazioni sono vietate perché le lesioni sono gravi. Compare nel Katame no kata solo come dimostrazione.");

  // 3°, 4°, 5° kyo e ne waza (schede scritte il 15/10/2026)
  T.push({
    id: "ko-soto-gake", nome: "Ko soto gake", gruppo: "Ashi waza", kyo: "3° kyo",
    sign: "Piccolo aggancio esterno (ko = piccolo, soto = esterno, gake = agganciare): si aggancia da fuori il tallone di uke che regge il peso.",
    quando: "Quando uke ha il peso sul tallone destro, per esempio quando si irrigidisce all'indietro o arretra con il piede destro.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai, di fronte a uke. Con un passo del piede destro ti avvicini al suo fianco destro, così il tuo corpo è vicino al suo e il tuo piede sinistro è libero di muoversi." },
      { titolo: "Kuzushi", testo: "Spingi uke **indietro-destra**: la mano destra al bavero spinge verso il suo tallone destro, la sinistra tira la manica in basso. Tutto il suo peso deve finire sul tallone destro." },
      { titolo: "Tsukuri", testo: "Porta la gamba sinistra all'**esterno** della gamba destra di uke e appoggia la pianta del tuo piede sinistro dietro al suo tallone destro, come un gancio. Il busto resta vicino e dritto." },
      { titolo: "Kake", testo: "Aggancia e tira il tallone di uke in avanti e in alto (verso la punta del suo piede) mentre le mani continuano a spingerlo indietro-giù. **Differenza con Ko soto gari**: nel gari si falcia il piede che si sta muovendo; nel gake si aggancia il tallone che è fermo e carico di peso." }
    ],
    errori: ["Agganciare la gamba sinistra di uke invece della destra, quella con il peso", "Fare l'aggancio senza aver portato il peso di uke sul tallone", "Restare lontano: il gancio non ha forza e uke ti tira giù", "Agganciare troppo in alto, al polpaccio, invece che al tallone"],
    uchikomi: ["Da fermo: kuzushi indietro-destra e appoggio del piede sinistro dietro il tallone, senza proiettare", "Uke arretra con il piede destro, tori entra e aggancia a tempo", "Serie di 10 entrate con kuzushi completo, alternando con Ko soto gari per sentire la differenza"],
    collegamenti: ["O uchi gari → Ko soto gake (uke ritira la gamba sinistra e resta sul tallone destro)", "Seoi nage → Ko soto gake (uke si irrigidisce all'indietro per bloccare la spalla)"],
    sicurezza: "Uke cade all'indietro e fa ushiro ukemi (o yoko ukemi) con il mento chiuso. Tori tiene la manica e non si lascia cadere sopra uke."
  });
  T.push({
    id: "tsuri-goshi", nome: "Tsuri goshi", gruppo: "Koshi waza", kyo: "3° kyo",
    sign: "Proiezione d'anca sollevando (tsuri = sollevare, goshi = anca): si solleva uke tirando la cintura e lo si carica sull'anca.",
    quando: "Quando uke è dritto o si sbilancia in avanti e la tua mano destra riesce ad arrivare alla sua cintura.",
    presa: "Sinistra alla manica destra di uke; la destra afferra la cintura di uke sulla schiena, passando sopra il suo braccio sinistro (O tsuri goshi) oppure sotto la sua ascella (Ko tsuri goshi).",
    passi: [
      { titolo: "Presa e posizione", testo: "Da presa fondamentale lascia il bavero e porta la mano destra alla cintura di uke dietro la schiena. La sinistra resta sulla manica destra." },
      { titolo: "Kuzushi", testo: "Tira uke **in avanti** (verso il suo angolo anteriore destro): la sinistra tira la manica in fuori, la destra solleva tirando la cintura verso l'alto. Uke va sulle punte." },
      { titolo: "Tsukuri", testo: "Fai un passo con il piede destro davanti al piede destro di uke e gira, portando il sinistro vicino: i tuoi piedi sono **dentro** i piedi di uke, ginocchia piegate, anche più basse delle sue e a contatto con il suo bacino." },
      { titolo: "Kake", testo: "Distendi le gambe e solleva con la cintura, ruota il busto verso sinistra e tira la manica: uke passa sopra la tua anca e cade davanti a te. A differenza di O goshi, la forza sta nel **tirare la cintura** e non nel braccio intorno alla vita." }
    ],
    errori: ["Anche più alte di quelle di uke: non lo puoi caricare", "Sollevare solo di braccio invece di distendere le gambe", "Lasciare la manica: uke non ruota e la caduta è pericolosa", "Fermarsi a metà rotazione con le spalle girate ma le anche no"],
    uchikomi: ["Entrata con presa alla cintura e rotazione, senza sollevare", "Entrata e sollevamento di uke di pochi centimetri, poi rimetterlo giù", "Entrate a tempo mentre uke avanza, alternando O tsuri e Ko tsuri"],
    collegamenti: ["Ko uchi gari → Tsuri goshi (uke ritira la gamba e torna avanti)", "Tsuri goshi bloccato → O uchi gari (uke si piega indietro)", "Tsuri goshi ↔ O goshi (stessa entrata, presa diversa)"],
    sicurezza: "Tori tiene sempre la manica fino all'arrivo, così uke cade di fianco (yoko ukemi) e non sulla testa. Con la presa alla cintura non si strattona la schiena di uke."
  });
  T.push({
    id: "yoko-otoshi", nome: "Yoko otoshi", gruppo: "Yoko sutemi waza", kyo: "3° kyo",
    sign: "Caduta laterale (yoko = di fianco, otoshi = far cadere): tori si lascia cadere sul fianco e trascina uke con sé.",
    quando: "Quando uke ha il peso sul piede destro e si sbilancia verso il suo lato destro, per esempio quando si sposta di lato o spinge con il fianco.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica destra all'altezza del gomito.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai, vicino a uke. Fai in modo che uke si sposti di lato verso la sua destra (per esempio con tsugi ashi laterali)." },
      { titolo: "Kuzushi", testo: "Sbilancia uke **verso la sua destra**, sul lato esterno del piede destro: la sinistra tira la manica in fuori e in basso, la destra spinge dal bavero nella stessa direzione." },
      { titolo: "Tsukuri", testo: "Fai scivolare la gamba sinistra tesa a terra, in profondità, all'**esterno** del piede destro di uke. Il tuo corpo scende e si appoggia sul fianco sinistro, vicino ai piedi di uke." },
      { titolo: "Kake", testo: "Mentre cadi sul fianco sinistro, tira forte con entrambe le mani verso il basso e verso la tua sinistra: uke inciampa sulla tua gamba sinistra e vola di lato oltre di te. Tu non spazzi: è il **peso del tuo corpo** che cade a far cadere uke." }
    ],
    errori: ["Cadere lontano da uke: lui non perde l'equilibrio", "Cadere sulla schiena invece che sul fianco (diventa un'altra tecnica)", "Mani passive: senza trazione uke resta in piedi e ti cade addosso", "Gamba sinistra piegata o troppo corta, che non blocca il piede destro di uke"],
    uchikomi: ["Da soli: scivolare sul fianco sinistro con la gamba tesa, come yoko ukemi", "Da fermo con uke: entrata lenta fino a terra, senza proiettare", "In movimento laterale: uke si sposta a destra, tori entra a tempo su materassina morbida"],
    collegamenti: ["De ashi barai → Yoko otoshi (uke sposta il peso sul piede destro per evitare la spazzata)", "Sasae tsurikomi ashi → Yoko otoshi (stesso kuzushi, uke resiste sul piede destro)"],
    sicurezza: "Tecnica di sacrificio: si prova prima su materassina morbida. Tori cade sul proprio fianco e mai sopra le gambe di uke; tiene la manica fino in fondo perché uke possa fare yoko ukemi o mae mawari ukemi in sicurezza."
  });
  T.push({
    id: "ashi-guruma", nome: "Ashi guruma", gruppo: "Ashi waza", kyo: "3° kyo",
    sign: "Ruota sulla gamba (ashi = gamba, guruma = ruota): la tua gamba tesa diventa l'asse su cui uke gira e cade.",
    quando: "Quando uke avanza o è sbilanciato in avanti sul piede destro, con il busto dritto e le gambe abbastanza rigide.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai. Fai un passo con il piede sinistro davanti al piede sinistro di uke (un po' verso l'interno) e inizia a girare il busto verso sinistra." },
      { titolo: "Kuzushi", testo: "Tira uke **in avanti-destra e verso l'alto**: la sinistra tira la manica, la destra solleva dal bavero. Il peso di uke va sulle punte, soprattutto sul piede destro." },
      { titolo: "Tsukuri", testo: "Porta la gamba destra **tesa** all'**esterno** della gamba destra di uke e appoggia il retro della coscia/polpaccio all'altezza del suo ginocchio destro (appena sotto o sopra). Il tuo appoggio è sul piede sinistro." },
      { titolo: "Kake", testo: "Ruota busto e mani come un volante verso sinistra (manica giù e verso di te, bavero in alto): uke gira sopra la tua gamba ferma come su una ruota. **Differenze**: in Harai goshi spazzi con la gamba e usi l'anca; in Ashi guruma la gamba resta ferma e l'anca **non** tocca uke. In O guruma la gamba blocca più in alto, all'anca di uke." }
    ],
    errori: ["Spazzare con la gamba invece di tenerla ferma come asse", "Mettere l'anca contro uke: diventa un Harai goshi fatto male", "Gamba piegata: uke scavalca facilmente", "Kuzushi solo in avanti, senza sollevare: uke non ruota"],
    uchikomi: ["Entrata con il passo del piede sinistro e gamba destra tesa al ginocchio di uke, senza proiettare", "Solo kuzushi a volante con uke che sale sulle punte", "Entrate in movimento con uke che avanza, alternando con Hiza guruma"],
    collegamenti: ["Hiza guruma → Ashi guruma (uke scavalca il blocco al ginocchio)", "Sasae tsurikomi ashi → Ashi guruma (uke solleva il piede per evitare il blocco)", "Ashi guruma → Harai goshi (uke si avvicina e si piega)"],
    sicurezza: "La gamba appoggia sul ginocchio di uke, non lo colpisce e non spinge contro l'articolazione. Tori tiene la manica: uke cade in avanti di fianco (yoko ukemi o mae mawari ukemi)."
  });
  T.push({
    id: "hane-goshi", nome: "Hane goshi", gruppo: "Koshi waza", kyo: "3° kyo",
    sign: "Anca che fa la molla (hane = scattare come una molla, goshi = anca): anca e gamba piegata sollevano uke con uno scatto.",
    quando: "Quando uke è in avanti o si muove verso di te, abbastanza vicino da poter mettere l'anca contro il suo corpo.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai. Fai un passo con il piede destro davanti al piede destro di uke e gira, portando il sinistro tra i suoi piedi: le tue spalle sono rivolte verso di lui." },
      { titolo: "Kuzushi", testo: "Tira uke **avanti-destra** e verso l'alto: la sinistra tira la manica, la destra solleva dal bavero e tiene il petto di uke attaccato alla tua schiena." },
      { titolo: "Tsukuri", testo: "Peso sul piede sinistro, ginocchio sinistro un po' piegato. L'anca destra e il fianco destro stanno a contatto con uke; la gamba destra **piegata** si appoggia con la coscia e lo stinco contro l'**interno** della gamba destra di uke." },
      { titolo: "Kake", testo: "Fai scattare la gamba destra verso l'alto e verso l'esterno (come una molla) mentre giri il busto a sinistra e tiri la manica: uke si stacca da terra e cade davanti a te. **Differenza con Harai goshi**: lì la gamba è tesa e spazza l'esterno della coscia di uke all'indietro; nell'Hane goshi la gamba è piegata e solleva dall'interno, insieme all'anca." }
    ],
    errori: ["Tenere la gamba tesa e spazzare: diventa un Harai goshi", "Perdere il contatto anca-fianco con uke", "Saltare sul piede sinistro senza equilibrio", "Tirare solo con le braccia, senza ruotare il busto"],
    uchikomi: ["Entrata con gamba destra piegata contro l'interno della gamba di uke, senza sollevare", "Entrata e piccolo sollevamento di uke, poi tornare in posizione", "Entrate in movimento con uke che avanza, 10 per lato"],
    collegamenti: ["Ko uchi gari → Hane goshi (uke ritira la gamba destra e torna avanti)", "Hane goshi → Uchi mata (uke allarga le gambe)", "Contro-tecnica: Hane goshi gaeshi"],
    sicurezza: "Tori tiene la manica fino all'arrivo e non cade sopra uke: resta in piedi o scende in avanti controllando. Uke fa mae mawari ukemi o yoko ukemi."
  });
  T.push({
    id: "harai-tsurikomi-ashi", nome: "Harai tsurikomi ashi", gruppo: "Ashi waza", kyo: "3° kyo",
    sign: "Spazzata del piede sollevando e tirando (harai = spazzare, tsurikomi = sollevare e tirare, ashi = piede): tiri uke in avanti e gli spazzi il piede che sta per appoggiare.",
    quando: "Quando uke avanza con il piede sinistro e sta per caricarci il peso: è una tecnica di tempo, come De ashi barai.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai, in movimento. Arretra o gira in modo che uke ti segua e porti avanti il piede sinistro." },
      { titolo: "Kuzushi", testo: "Mentre il piede sinistro di uke va avanti, **solleva e tira** uke in avanti con entrambe le mani (tsurikomi): il suo peso si sposta in avanti sopra il piede sinistro che sta per appoggiare." },
      { titolo: "Tsukuri", testo: "Peso sul tuo piede sinistro, busto dritto e vicino. La gamba destra è libera e rilassata, pronta a spazzare." },
      { titolo: "Kake", testo: "Con la pianta del piede destro spazzi la parte davanti della caviglia sinistra di uke, appena prima che ci appoggi il peso, e intanto continui a tirarlo in avanti girando le mani: uke cade in avanti. **Differenze**: in Sasae tsurikomi ashi blocchi la caviglia ferma; qui la spazzi via. In De ashi barai spazzi di lato nella direzione del passo." }
    ],
    errori: ["Spazzare quando uke ha già il peso sul piede: diventa un calcio", "Bloccare il piede invece di spazzarlo", "Mani ferme: senza sollevare e tirare uke non perde l'equilibrio", "Usare il tallone o le dita invece della pianta"],
    uchikomi: ["Camminare in coppia e toccare con la pianta la caviglia sinistra di uke a ogni suo passo, senza proiettare", "Solo tsurikomi: sollevare e tirare uke in avanti mentre avanza", "Spazzata leggera a tempo, poi proiezione su materassina"],
    collegamenti: ["De ashi barai → Harai tsurikomi ashi (stesso lavoro di tempo sui passi di uke)", "Harai tsurikomi ashi ↔ Sasae tsurikomi ashi (spazzare o bloccare secondo il tempo)", "Contro-tecnica: Tsubame gaeshi"],
    sicurezza: "Si spazza con la pianta, mai con tallone o punta sulla caviglia. Tori tiene la manica e uke cade in avanti di fianco (yoko ukemi o mae mawari ukemi)."
  });
  T.push({
    id: "tomoe-nage", nome: "Tomoe nage", gruppo: "Ma sutemi waza", kyo: "3° kyo",
    sign: "Proiezione in cerchio (tomoe = cerchio/vortice, nage = proiezione): tori si lascia cadere sulla schiena e fa girare uke sopra di sé con il piede.",
    quando: "Quando uke spinge in avanti o avanza con il busto piegato, oppure quando lo hai tirato in avanti e lui viene verso di te.",
    presa: "Presa fondamentale (destra al bavero, sinistra alla manica) oppure entrambe le mani ai baveri.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai o jigo tai, vicino a uke. Fallo avanzare verso di te tirandolo con le mani." },
      { titolo: "Kuzushi", testo: "Tira uke **dritto in avanti** e un po' in alto con entrambe le mani, così si piega verso di te con il peso sulle punte." },
      { titolo: "Tsukuri", testo: "Fai un passo profondo con il piede sinistro tra i piedi di uke e scendi sulla schiena il più vicino possibile al tuo tallone sinistro. Mentre scendi appoggi la pianta del piede destro sulla pancia di uke, **appena sotto la cintura**." },
      { titolo: "Kake", testo: "Continui a tirare con le mani verso di te e sopra la tua testa e distendi la gamba destra: uke ruota in cerchio sopra di te e cade dietro la tua testa. Il movimento è un rotolamento continuo, non un calcio." }
    ],
    errori: ["Cadere lontano da uke: lui non ruota e ti cade addosso", "Mettere il piede sul petto o troppo in basso", "Spingere con la gamba prima di aver tirato uke in avanti", "Lasciare le mani troppo presto"],
    uchikomi: ["Da soli: scendere sulla schiena vicino al tallone sinistro, gamba destra piegata pronta", "Con uke: scendere e appoggiare il piede, senza proiettare", "Proiezione completa con uke esperto su materassina morbida"],
    collegamenti: ["O uchi gari → Tomoe nage (uke spinge in avanti per resistere)", "Tomoe nage → Ne waza (se uke non gira, si continua a terra, ad esempio verso Juji gatame)", "Tomoe nage ↔ Yoko tomoe nage (stesso principio, uscita di lato)"],
    sicurezza: "Il piede va sulla pancia sotto la cintura, mai su genitali, petto o viso. Uke deve saper fare zenpo kaiten ukemi (capovolta in avanti); tori tiene le mani per guidarlo e i principianti iniziano su materassina morbida e a velocità lenta."
  });
  T.push({
    id: "kata-guruma", nome: "Kata guruma", gruppo: "Te waza", kyo: "3° kyo",
    sign: "Ruota sulle spalle (kata = spalla, guruma = ruota): tori carica uke sulle spalle e lo fa girare giù dall'altro lato.",
    quando: "Quando uke è dritto con le gambe un po' larghe e il peso in avanti, o quando avanza verso di te.",
    presa: "Sinistra alla manica destra di uke; la destra parte dal bavero e poi passa tra le gambe di uke ad afferrare la parte interna-posteriore della sua coscia destra.",
    passi: [
      { titolo: "Presa e posizione", testo: "Da presa fondamentale tira uke verso di te. Fai un passo con il piede destro tra i piedi di uke e abbassa le anche piegando le ginocchia, busto dritto." },
      { titolo: "Kuzushi", testo: "Tira la manica **in avanti-destra** di uke e verso l'alto, così il suo busto si piega sopra la tua spalla destra." },
      { titolo: "Tsukuri", testo: "Lascia il bavero e infila il braccio destro tra le gambe di uke ad afferrare la sua coscia destra. La pancia di uke si appoggia sulle tue spalle, dietro al collo; il tuo piede sinistro si avvicina al destro, ginocchia piegate." },
      { titolo: "Kake", testo: "Alzati distendendo le gambe con la schiena dritta, poi tira la manica verso il basso a sinistra e solleva con il braccio destro: uke rotola giù dalle tue spalle verso la tua sinistra, davanti a te. Nota: nelle gare IJF afferrare le gambe è vietato; in palestra e nel kata si studia questa forma classica." }
    ],
    errori: ["Sollevare con la schiena curva invece che con le gambe", "Restare lontano: uke non si appoggia sulle spalle", "Lasciare la manica e far cadere uke di testa", "Scaricare uke dall'alto senza accompagnarlo"],
    uchikomi: ["Entrata e appoggio di uke sulle spalle, senza sollevare", "Sollevare uke e rimetterlo giù in piedi dallo stesso lato", "Proiezione completa a velocità lenta, partendo anche in ginocchio"],
    collegamenti: ["Seoi nage → Kata guruma (stesso abbassamento sotto uke)", "Ko uchi gari → Kata guruma (uke allarga le gambe per evitare il ko uchi)"],
    sicurezza: "Uke cade da in alto: tori tiene sempre la manica, si inginocchia o si abbassa per accompagnarlo e lo fa scendere sul fianco (yoko ukemi), mai di testa. Si inizia con compagni di peso simile, sollevando con le gambe e la schiena dritta."
  });
  T.push({
    id: "morote-seoi-nage", nome: "Morote seoi nage", gruppo: "Te waza", kyo: "1° kyo",
    sign: "Proiezione sulla spalla con due mani (morote = due mani, seoi = caricare sulla schiena, nage = proiezione): carichi uke sulla schiena tenendo bavero e manica.",
    quando: "Quando uke avanza verso di te o spinge in avanti, con il busto un po' piegato.",
    presa: "Presa fondamentale: destra al bavero, sinistra alla manica all'altezza del gomito. Le due mani restano sempre sul judogi.",
    passi: [
      { titolo: "Presa e posizione", testo: "Shizen tai. Fai un passo con il piede destro davanti al piede destro di uke, all'**interno** dei suoi piedi, e inizia a girare." },
      { titolo: "Kuzushi", testo: "Tira uke **avanti** (verso il suo angolo anteriore destro) e verso l'alto: la sinistra tira la manica verso la tua tempia sinistra, la destra solleva dal bavero." },
      { titolo: "Tsukuri", testo: "Gira portando il piede sinistro vicino al destro, tra i piedi di uke, ginocchia piegate e anche più basse delle sue. Il gomito destro scende sotto l'ascella destra di uke, con l'avambraccio contro il suo petto: la tua schiena è attaccata al suo petto." },
      { titolo: "Kake", testo: "Distendi le gambe, piega il busto in avanti e tira la manica verso il basso: uke passa sopra la tua spalla destra e cade davanti a te. **Differenza con Ippon seoi nage**: lì lasci il bavero e stringi il braccio di uke sotto la tua ascella; qui tieni bavero e manica con tutte e due le mani." }
    ],
    errori: ["Piedi fuori dai piedi di uke: non lo carichi sulla schiena", "Gomito destro largo, che non entra sotto l'ascella di uke", "Ginocchia dritte: uke resta in piedi", "Piegarsi in avanti con la testa giù senza distendere le gambe"],
    uchikomi: ["Entrata in tre tempi (passo destro, giro, piegamento) e uscita, senza proiettare", "Serie veloce di 10 entrate con kuzushi completo", "Entrate in movimento con uke che avanza, poi proiezione"],
    collegamenti: ["Ko uchi gari → Morote seoi nage (uke ritira la gamba e torna avanti)", "Morote seoi nage → Ko uchi gari / O uchi gari (uke blocca all'indietro)", "Contro-tecniche di uke: Ura nage, Tani otoshi"],
    sicurezza: "Tori tiene la manica fino all'arrivo, così uke cade di fianco (yoko ukemi) e non sulla testa. Non ci si butta in ginocchio sopra le gambe di uke: per i principianti si proietta in piedi."
  });
  T.push({
    id: "sumi-gaeshi", nome: "Sumi gaeshi", gruppo: "Ma sutemi waza", kyo: "4° kyo",
    sign: "Rovesciamento d'angolo: ti lasci cadere sulla schiena e, con il piede sotto la coscia di uke, lo fai rotolare sopra di te.",
    quando: "Quando uke è chiuso in difesa (jigotai), piegato in avanti con le gambe larghe, e spinge o si appoggia su di te.",
    presa: "Destra: la mano destra passa sotto l'ascella sinistra di uke e afferra la giacca sulla schiena (o la cintura); la sinistra tiene la manica destra.",
    passi: [
      { titolo: "Posizione", testo: "Siete entrambi in jigotai, abbastanza vicini, con le anche basse. La tua mano destra è sulla schiena di uke, la sinistra sulla sua manica destra." },
      { titolo: "Kuzushi", testo: "Tira uke **in avanti** verso di te e un po' in alto: la destra tira la schiena, la sinistra tira la manica. Uke deve caricare il peso sulle punte dei piedi." },
      { titolo: "Tsukuri", testo: "Avanza con il piede sinistro tra i piedi di uke e scendi seduto vicino ai tuoi talloni, tenendo uke attaccato al petto. Appoggia il collo del piede destro all'interno della coscia sinistra di uke, appena sopra il ginocchio." },
      { titolo: "Kake", testo: "Rotola sulla schiena e **alza la gamba destra**, mentre le mani continuano a tirare: uke viene sollevato e passa sopra la tua testa, rotolando in avanti fino alla schiena." }
    ],
    errori: ["Sedersi lontano da uke: il piede non arriva sotto la coscia", "Spingere con il piede sul ginocchio o sulla pancia invece che dentro la coscia", "Mani molli: uke non viene tirato sopra di te", "Cadere prima di aver rotto l'equilibrio di uke"],
    uchikomi: ["Dal jigotai: entrare, sedersi e appoggiare il piede senza proiettare", "Con uke in ginocchio davanti: solo rotolamento all'indietro e sollevamento leggero", "Proiezione completa su materasso spesso, alternando i ruoli"],
    collegamenti: ["Tomoe nage ↔ Sumi gaeshi (stessa famiglia di sacrificio in avanti)", "Sumi gaeshi → rotolare sopra uke e passare a un'immobilizzazione (ne waza)"],
    sicurezza: "Uke deve saper fare la caduta rotolata in avanti (zenpo kaiten ukemi). Tori tira uke sopra di sé senza lasciarlo cadere di testa e il piede spinge dentro la coscia, mai sui genitali."
  });
  T.push({
    id: "tani-otoshi", nome: "Tani otoshi", gruppo: "Yoko sutemi waza", kyo: "4° kyo",
    sign: "Caduta nella valle: ti lasci cadere di fianco dietro uke e lo fai cadere all'indietro, come in un avvallamento.",
    quando: "Quando uke ha il peso indietro, si irrigidisce sui talloni o resiste a una tua tecnica in avanti. Ottima come contrattacco quando uke entra con una tecnica d'anca o di spalla.",
    presa: "Destra: sinistra sulla manica destra di uke; la destra al bavero oppure sopra la spalla sulla schiena o sulla cintura di uke.",
    passi: [
      { titolo: "Posizione", testo: "Mettiti accanto al fianco destro di uke, il tuo petto vicino al suo lato destro." },
      { titolo: "Kuzushi", testo: "Spingi e tira uke verso **dietro-destra di uke**: la sinistra tira la manica destra in basso, la destra spinge sulla schiena o sul bavero. Il peso di uke va sul tallone destro." },
      { titolo: "Tsukuri", testo: "Fai scivolare la gamba sinistra tesa, all'esterno del piede destro di uke, **profonda dietro entrambi i suoi talloni**. Il tuo corpo scende vicino a terra, attaccato a uke." },
      { titolo: "Kake", testo: "Lasciati cadere sul fianco sinistro, tenendo uke vicino: la gamba sinistra blocca i talloni e le mani lo portano giù all'indietro. Uke cade sulla schiena, oltre la tua gamba." }
    ],
    errori: ["Gamba sinistra corta, solo dietro un piede: uke fa un passo e si salva", "Cadere lontano da uke: manca il contatto del corpo", "Tirare uke in avanti invece che portarlo dietro", "Cadere sulla schiena di peso invece che sul fianco"],
    uchikomi: ["Entrata della gamba sinistra dietro i talloni senza cadere", "Uke abbassato o in ginocchio: tori scivola giù sul fianco e tocca il tatami", "Contro un attacco d'anca lento di uke: bloccare e scivolare dietro"],
    collegamenti: ["Contrattacco su Harai goshi, Uchi mata o Seoi nage di uke", "Ko soto gari → Tani otoshi (stessa direzione, più profonda)"],
    sicurezza: "Tori cade sul proprio fianco sinistro, mai sulle gambe o sulle ginocchia di uke. Uke fa la caduta all'indietro (ushiro ukemi) e non mette le mani a terra."
  });
  T.push({
    id: "hane-makikomi", nome: "Hane makikomi", gruppo: "Yoko sutemi waza", kyo: "4° kyo",
    sign: "Avvolgimento con gamba a molla: entri come Hane goshi, avvolgi il braccio di uke e rotoli a terra trascinandolo con te.",
    quando: "Quando uke resiste a un Hane goshi o a una tecnica d'anca e serve più forza: il peso del tuo corpo che cade fa girare uke.",
    presa: "Si parte in presa destra; durante l'entrata la mano destra lascia il bavero e il braccio destro avvolge il braccio destro di uke. La sinistra tiene sempre la manica destra.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai destro, in movimento. Uke è vicino, con il peso in avanti." },
      { titolo: "Kuzushi", testo: "Tira uke **avanti-destra di uke**: la sinistra tira la manica destra in alto e verso di te, la destra solleva il bavero. Uke va sulle punte." },
      { titolo: "Tsukuri", testo: "Gira come per Hane goshi: piede destro davanti al piede destro di uke, poi piede sinistro dietro, ginocchia piegate. Lascia il bavero e passa il braccio destro **sopra** il braccio destro di uke, stringendolo sotto la tua ascella. La gamba destra piegata tocca l'interno della coscia destra di uke." },
      { titolo: "Kake", testo: "Fai scattare la gamba destra all'indietro-in alto (hane) e ruota il busto verso sinistra e in basso, tirando con la sinistra. Cadi in avanti avvolgendo uke: lui gira sopra la tua schiena e finisce a terra." }
    ],
    errori: ["Lasciare il bavero troppo presto, prima di aver rotto l'equilibrio", "Braccio destro largo: uke sfila il braccio e ti cade addosso", "Gamba destra rigida o bassa, senza molla", "Cadere dritti in avanti senza ruotare il busto"],
    uchikomi: ["Entrata Hane goshi e avvolgimento del braccio, senza cadere", "Entrata e rotazione fino a mettere uke sulla schiena, a velocità bassa", "Proiezione completa su materasso spesso"],
    collegamenti: ["Hane goshi → Hane makikomi (se uke abbassa le anche e resiste)", "Contro-tecniche di uke da conoscere: Tani otoshi, Ushiro goshi"],
    sicurezza: "Tori ruota e cade sul proprio fianco, senza schiacciare il petto di uke con tutto il peso. Uke non mette il braccio libero a terra per fermarsi (rischio di frattura): fa yoko ukemi. Solo su materasso spesso."
  });
  T.push({
    id: "sukui-nage", nome: "Sukui nage", gruppo: "Te waza", kyo: "4° kyo",
    sign: "Proiezione a cucchiaio: raccogli uke dal basso dietro le gambe e lo fai cadere all'indietro.",
    quando: "Nella forma Kodokan, quando sei di fianco e un po' dietro a uke, per esempio dopo che un suo attacco è andato a vuoto. **Attenzione: in gara IJF è vietato afferrare direttamente le gambe**, quindi questa forma si studia per esami e kata.",
    presa: "Senza la presa classica: il braccio sinistro passa davanti al busto di uke, la mano destra va dietro le sue gambe.",
    passi: [
      { titolo: "Posizione", testo: "Ti trovi sul lato destro di uke, un po' dietro di lui, con le anche vicine alle sue e le ginocchia piegate." },
      { titolo: "Kuzushi", testo: "Con il braccio sinistro davanti al petto di uke spingi il suo busto **dietro di uke**, così il peso va sui talloni." },
      { titolo: "Tsukuri", testo: "Piega le ginocchia e porta il braccio destro dietro le gambe di uke, all'altezza delle cosce o delle ginocchia. Il tuo fianco resta attaccato a uke e fa da appoggio." },
      { titolo: "Kake", testo: "Insieme: il braccio sinistro spinge il busto indietro e in basso, il braccio destro **raccoglie le gambe** in alto, come un cucchiaio. Uke si solleva e cade sulla schiena davanti a te." }
    ],
    errori: ["Restare lontani da uke: si solleva solo con le braccia", "Schiena curva invece di piegare le gambe", "Sollevare le gambe senza spingere il busto indietro", "Lasciare cadere uke di testa"],
    uchikomi: ["Entrata sul fianco destro di uke e posizione delle braccia, senza sollevare", "Sollevamento leggero e appoggio di uke a terra", "Proiezione completa con uke esperto"],
    collegamenti: ["Sukui nage → passaggio diretto a Kesa gatame", "Forma di contrattacco quando un attacco d'anca di uke resta a metà e tu sei al suo fianco"],
    sicurezza: "Tori accompagna uke a terra senza farlo cadere di testa o di collo. Uke fa ushiro ukemi con il mento al petto. In gara IJF la presa diretta alle gambe è vietata."
  });
  T.push({
    id: "utsuri-goshi", nome: "Utsuri goshi", gruppo: "Koshi waza", kyo: "4° kyo",
    sign: "Anca che si sposta: sollevi uke e, mentre è in aria, sposti la tua anca sotto di lui per proiettarlo.",
    quando: "È un contrattacco: uke attacca per primo con una tecnica d'anca destra (O goshi, Harai goshi, Hane goshi) e tu lo blocchi.",
    presa: "Presa destra di partenza; quando uke entra, il braccio sinistro lascia la manica e avvolge la vita di uke da dietro (mano sulla cintura o sulla schiena).",
    passi: [
      { titolo: "Attacco di uke", testo: "Uke gira ed entra con O goshi destro: la sua schiena è davanti a te, le sue anche contro la tua pancia. Abbassa subito le anche e piega le ginocchia per bloccarlo." },
      { titolo: "Kuzushi", testo: "Avvolgi la vita di uke con il braccio sinistro e spingi le anche avanti e **in alto**: uke si stacca da terra, il suo equilibrio va verso l'alto e dietro di lui." },
      { titolo: "Tsukuri", testo: "Mentre uke è in aria, **sposta le anche**: ruota verso destra e porta la tua anca sinistra davanti, sotto le anche di uke. Ora sei tu in posizione di O goshi sinistro." },
      { titolo: "Kake", testo: "Lascia ricadere uke sulla tua anca sinistra e proietta in avanti come in O goshi: il braccio sinistro guida la vita, la destra tira il bavero. Uke cade davanti a te." }
    ],
    errori: ["Bloccare tardi, quando uke ha già caricato", "Sollevare con la schiena invece che con le gambe e le anche", "Spostare le anche prima di aver sollevato uke", "Lasciare il contatto: uke scivola via"],
    uchikomi: ["Uke entra lento con O goshi: tori blocca e solleva soltanto", "Blocco, sollevamento e cambio d'anca senza proiettare", "Contrattacco completo su ingresso controllato di uke"],
    collegamenti: ["Contrattacco su O goshi, Hane goshi e Harai goshi di uke", "Ushiro goshi ↔ Utsuri goshi (stesso sollevamento, finale diverso)"],
    sicurezza: "Solleva con le gambe e la schiena dritta, mai con la schiena curva. Uke non si irrigidisce in aria e fa la caduta in avanti o laterale."
  });
  T.push({
    id: "o-guruma", nome: "O guruma", gruppo: "Ashi waza", kyo: "4° kyo",
    sign: "Grande ruota: la tua gamba tesa diventa l'asse sopra cui uke gira come una ruota.",
    quando: "Quando uke avanza o è in piedi con il peso in avanti e un po' alto, soprattutto se allontana le anche e blocca le tecniche d'anca.",
    presa: "Fondamentale: destra al bavero, sinistra alla manica destra all'altezza del gomito.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai destro. Uke viene avanti o tu lo fai avanzare." },
      { titolo: "Kuzushi", testo: "Rompi l'equilibrio **avanti-destra di uke** e verso l'alto: la sinistra tira la manica in fuori e in alto, la destra solleva il bavero. Uke va sulle punte." },
      { titolo: "Tsukuri", testo: "Gira il corpo verso sinistra: il piede sinistro va davanti al piede sinistro di uke, o tra i suoi piedi. Porta la **gamba destra tesa** davanti alla coscia destra di uke, alta, all'altezza dell'anca o della pancia." },
      { titolo: "Kake", testo: "Le mani girano come un volante (manica giù verso sinistra, bavero su) e la gamba destra resta tesa e spinge leggermente indietro-in alto. Uke ruota sopra la gamba e cade davanti a te." }
    ],
    errori: ["Gamba al ginocchio di uke: quella è Ashi guruma", "Gamba piegata: non fa da asse", "Anche troppo vicine: diventa una tecnica d'anca", "Kuzushi solo in avanti, senza sollevare"],
    uchikomi: ["Entrata con gamba tesa sulla coscia di uke, senza proiettare", "Entrate in movimento con uke che avanza", "Proiezione completa da uke in avanzamento"],
    collegamenti: ["O guruma ↔ Ashi guruma: stessa ruota, ma Ashi guruma blocca il ginocchio", "Harai goshi → O guruma (se uke allontana le anche)"],
    sicurezza: "Tori tiene la manica fino alla fine, così uke cade sul fianco senza battere la testa. Uke fa yoko ukemi."
  });
  T.push({
    id: "soto-makikomi", nome: "Soto makikomi", gruppo: "Yoko sutemi waza", kyo: "4° kyo",
    sign: "Avvolgimento esterno: avvolgi il braccio di uke dall'esterno e lo trascini a terra rotolando con lui.",
    quando: "Quando uke è rigido o resiste alle tecniche d'anca e tu riesci a girargli davanti in modo stretto, o come seguito di un attacco bloccato.",
    presa: "Si parte in presa destra; la mano destra lascia il bavero e il braccio destro avvolge dall'alto il braccio destro di uke. La sinistra tiene la manica destra.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai destro. Uke è vicino o avanza." },
      { titolo: "Kuzushi", testo: "Tira uke **avanti-destra di uke** con la manica: il suo braccio destro viene teso e il peso va sul suo piede destro." },
      { titolo: "Tsukuri", testo: "Lascia il bavero, alza il braccio destro e passalo **sopra** il braccio destro di uke, stringendolo sotto la tua ascella. Ruota sul piede sinistro dando la schiena a uke; il tuo piede destro va davanti, all'esterno del piede destro di uke." },
      { titolo: "Kake", testo: "Continua a ruotare verso sinistra e in basso, tirando con la sinistra: ti lasci cadere in avanti avvolgendo uke attorno a te. Uke gira sopra la tua schiena e cade sulla schiena." }
    ],
    errori: ["Braccio destro largo: uke sfila il braccio", "Cadere all'indietro invece di ruotare in avanti", "Gambe tese e lontane da uke", "Lasciare la manica"],
    uchikomi: ["Avvolgimento del braccio e rotazione, senza cadere", "Rotazione fino in ginocchio, con uke che accompagna", "Proiezione completa su materasso spesso"],
    collegamenti: ["Harai goshi → Soto makikomi", "Uchi mata → Soto makikomi (se uke resiste)", "Tai otoshi → Soto makikomi"],
    sicurezza: "Tori non cade di peso sul petto di uke e non gli piega il braccio contro l'articolazione. Uke non mette la mano libera a terra: fa yoko ukemi. Solo su materasso spesso."
  });
  T.push({
    id: "uki-otoshi", nome: "Uki otoshi", gruppo: "Te waza", kyo: "4° kyo",
    sign: "Caduta fluttuante: con le sole braccia e un passo indietro, fai «volare» uke in avanti fino a terra.",
    quando: "Quando uke avanza deciso verso di te o ti spinge: usi il suo slancio in avanti.",
    presa: "Fondamentale: destra al bavero, sinistra alla manica destra all'altezza del gomito.",
    passi: [
      { titolo: "Posizione e movimento", testo: "Shizen tai destro. Uke avanza e tu indietreggi con tsugi ashi, tenendolo a distanza giusta." },
      { titolo: "Kuzushi", testo: "Accelera il movimento di uke in avanti e tira **avanti-destra di uke**: la sinistra tira la manica in un grande arco verso il basso, la destra solleva e accompagna il bavero." },
      { titolo: "Tsukuri", testo: "Fai un grande passo indietro con il piede sinistro e scendi sul ginocchio sinistro, con il piede destro appoggiato in avanti. Le tue gambe non toccano uke." },
      { titolo: "Kake", testo: "Continua il cerchio con le mani verso il basso e la tua sinistra: uke vola sopra il suo piede destro e cade davanti a te, sul fianco o rotolando." }
    ],
    errori: ["Tirare solo in basso, senza l'arco e la rotazione delle mani", "Scendere in ginocchio prima che uke si sbilanci", "Toccare le gambe di uke: non serve", "Busto piegato in avanti invece che dritto"],
    uchikomi: ["Camminare in coppia: tre passi e kuzushi senza cadere", "Kuzushi completo e discesa sul ginocchio, uke fa solo un passo", "Proiezione completa come nel Nage no kata"],
    collegamenti: ["Uki otoshi ↔ Sumi otoshi (avanti ↔ indietro, sempre senza gambe)", "Uki otoshi → Tai otoshi (stessa direzione, con il blocco della gamba)"],
    sicurezza: "Tori tiene la manica fino alla fine. Uke, che cade da lontano, usa la caduta in avanti rotolata (zenpo kaiten ukemi)."
  });
  T.push({
    id: "osoto-guruma", nome: "Osoto guruma", gruppo: "Ashi waza", kyo: "5° kyo",
    sign: "Grande ruota esterna: la tua gamba passa dietro tutte e due le gambe di uke e lui gira all'indietro sopra di essa.",
    quando: "Quando uke ha il peso indietro e i piedi vicini, oppure quando arretra la gamba destra per difendersi da O soto gari.",
    presa: "Fondamentale: destra al bavero, sinistra alla manica destra.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai destro, uke davanti a te con i piedi abbastanza vicini." },
      { titolo: "Kuzushi", testo: "Spingi uke **dietro di uke** (o dietro-destra di uke): la destra spinge il bavero verso la sua spalla, la sinistra tira la manica in basso. Il peso di uke va sui talloni." },
      { titolo: "Tsukuri", testo: "Fai un passo con il piede sinistro accanto all'esterno del piede destro di uke. Il petto attaccato a uke. Porta la gamba destra tesa **dietro entrambe le gambe** di uke, all'altezza delle ginocchia o poco sopra." },
      { titolo: "Kake", testo: "La gamba destra resta tesa come un asse e spinge indietro, il busto va in avanti e le mani spingono uke giù all'indietro. Uke ruota sopra la tua gamba e cade sulla schiena." }
    ],
    errori: ["Bloccare solo la gamba destra di uke: è O soto gari", "Gamba piegata: non fa da asse", "Busto indietro, lontano da uke", "Piede sinistro troppo lontano da uke"],
    uchikomi: ["Entrata con gamba dietro le due gambe, senza proiettare", "O soto gari → O soto guruma in sequenza leggera", "Proiezione completa su uke fermo"],
    collegamenti: ["O soto gari → Osoto guruma (se uke arretra la gamba destra)", "O uchi gari → Osoto guruma"],
    sicurezza: "Tori tiene la manica e accompagna la caduta, senza cadere sopra uke. Uke fa ushiro ukemi con il mento al petto."
  });
  T.push({
    id: "uki-waza", nome: "Uki waza", gruppo: "Yoko sutemi waza", kyo: "5° kyo",
    sign: "Tecnica fluttuante: ti lasci cadere di fianco con una gamba tesa che blocca, e uke «galleggia» sopra di te.",
    quando: "Quando uke spinge in avanti o è chiuso in difesa (jigotai) e carica il peso sulla gamba destra.",
    presa: "Destra: la sinistra alla manica destra; la destra al bavero oppure sopra la spalla sulla schiena di uke.",
    passi: [
      { titolo: "Posizione", testo: "Siete in jigotai o uke spinge verso di te con il piede destro avanti." },
      { titolo: "Kuzushi", testo: "Tira uke **avanti-destra di uke**: la sinistra tira la manica in basso e verso di te, la destra porta uke in avanti sopra il suo piede destro." },
      { titolo: "Tsukuri", testo: "Allunga la **gamba sinistra tesa** verso sinistra e mettila **all'esterno del piede destro di uke**, come un ostacolo. La gamba non spazza: blocca." },
      { titolo: "Kake", testo: "Lasciati cadere sul fianco sinistro continuando a tirare con le mani verso la tua spalla sinistra. Uke inciampa sulla tua gamba e passa sopra di te, cadendo in avanti." }
    ],
    errori: ["Spazzare con il piede: è Yoko gake", "Cadere senza tirare: uke resta in piedi", "Gamba sinistra troppo vicina o piegata", "Mettere entrambe le gambe davanti a uke: è Yoko wakare"],
    uchikomi: ["Allungare la gamba e simulare la caduta senza uke", "Con uke: kuzushi e posizione della gamba senza cadere", "Proiezione completa come nel Nage no kata"],
    collegamenti: ["Uki waza ↔ Yoko gake (gamba che blocca ↔ gamba che spazza)", "Uki waza → passaggio a ne waza"],
    sicurezza: "Tori cade sul proprio fianco, lontano dal corpo di uke, e lo tira sopra di sé senza lasciarlo cadere di testa. Uke fa la caduta rotolata in avanti (zenpo kaiten ukemi)."
  });
  T.push({
    id: "yoko-wakare", nome: "Yoko wakare", gruppo: "Yoko sutemi waza", kyo: "5° kyo",
    sign: "Separazione laterale: ti butti di fianco davanti a uke con tutto il corpo e lui cade in avanti oltre di te.",
    quando: "Quando uke è sbilanciato in avanti, per esempio mentre avanza o dopo aver spinto troppo.",
    presa: "Destra: la sinistra alla manica destra; la destra al bavero o sulla schiena sopra la spalla di uke.",
    passi: [
      { titolo: "Posizione", testo: "Uke avanza verso di te o si piega in avanti." },
      { titolo: "Kuzushi", testo: "Tira uke **in avanti** (avanti-destra di uke) e in alto, così che si alzi sulle punte." },
      { titolo: "Tsukuri", testo: "Lancia **entrambe le gambe** verso sinistra, davanti ai piedi di uke: il tuo corpo si mette di traverso davanti a lui, quasi parallelo a terra." },
      { titolo: "Kake", testo: "Cadi sul fianco sinistro (o sulla schiena) e tira forte con le mani verso il basso, oltre la tua testa. Uke inciampa sul tuo corpo e cade in avanti." }
    ],
    errori: ["Cadere lontano da uke: lui fa un passo e ti scavalca", "Mani che lasciano la presa durante la caduta", "Usare una sola gamba: è Uki waza", "Cadere prima di aver tirato uke in avanti"],
    uchikomi: ["Lancio delle gambe e caduta di fianco da soli", "Con uke: kuzushi e caduta lenta, uke resta in piedi", "Proiezione completa come nel Nage no kata"],
    collegamenti: ["Uki waza ↔ Yoko wakare (gamba che blocca ↔ corpo intero)", "Yoko wakare → passaggio a ne waza"],
    sicurezza: "Tori si mette davanti ai piedi di uke, non sotto il punto dove uke atterra. Uke fa la caduta rotolata in avanti (zenpo kaiten ukemi)."
  });
  T.push({
    id: "yoko-guruma", nome: "Yoko guruma", gruppo: "Yoko sutemi waza", kyo: "5° kyo",
    sign: "Ruota laterale: scivoli con il corpo tra le gambe di uke e lo fai girare come una ruota sopra di te.",
    quando: "Quando uke si piega in avanti per difendersi, per esempio per bloccare un tuo Ura nage.",
    presa: "Braccio sinistro attorno alla vita o sulla schiena di uke, mano destra sulla pancia o sul davanti di uke.",
    passi: [
      { titolo: "Posizione", testo: "Sei vicino al fianco destro di uke, come per Ura nage. Uke si piega in avanti e abbassa le anche per non farsi sollevare." },
      { titolo: "Kuzushi", testo: "Approfitta del suo busto piegato: tira uke **in avanti**, sopra di te, con il braccio sinistro sulla schiena e la destra sul davanti." },
      { titolo: "Tsukuri", testo: "Fai scivolare la **gamba destra in profondità tra le gambe di uke** e lascia scendere il corpo a terra, sotto il suo baricentro." },
      { titolo: "Kake", testo: "Cadi sulla schiena e ruota verso sinistra, tirando con le braccia: uke gira come una ruota sopra il tuo corpo e cade oltre la tua spalla sinistra." }
    ],
    errori: ["Gamba destra corta: il corpo non va sotto uke", "Cadere lontano da uke", "Tirare uke indietro invece che in avanti", "Fermarsi a metà della rotazione"],
    uchikomi: ["Scivolata della gamba tra le gambe di uke, senza cadere", "Ura nage → uke si piega → posizione di Yoko guruma, lenta", "Proiezione completa come nel Nage no kata"],
    collegamenti: ["Ura nage → Yoko guruma (se uke si piega in avanti)", "Contrattacco su un attacco d'anca di uke che si piega in avanti"],
    sicurezza: "Tori scivola sotto uke senza colpirlo con il ginocchio e lo fa ruotare oltre di sé. Uke fa la caduta rotolata in avanti (zenpo kaiten ukemi). Solo su materasso spesso."
  });
  T.push({
    id: "ushiro-goshi", nome: "Ushiro goshi", gruppo: "Koshi waza", kyo: "5° kyo",
    sign: "Anca da dietro: sollevi uke da dietro con le anche e lo fai cadere davanti a te sulla schiena.",
    quando: "È un contrattacco: uke attacca per primo con una tecnica d'anca destra (O goshi, Harai goshi, Uchi mata) e tu lo blocchi.",
    presa: "Presa destra di partenza; quando uke entra, il braccio sinistro avvolge la vita di uke da dietro, la destra tiene il bavero o la manica.",
    passi: [
      { titolo: "Attacco di uke", testo: "Uke gira ed entra con O goshi destro, dandoti la schiena. Abbassa subito le anche e piega le ginocchia per bloccarlo." },
      { titolo: "Kuzushi", testo: "Avvolgi la vita di uke con il braccio sinistro e stringilo al tuo corpo. Spingi le anche avanti e **in alto**: uke si stacca da terra." },
      { titolo: "Tsukuri", testo: "Con uke sollevato sulle tue anche, porta il suo peso **dietro di uke**, cioè verso di te: i suoi piedi vanno avanti e in alto." },
      { titolo: "Kake", testo: "Piega le ginocchia e lascia scendere uke, tirandolo indietro: cade sulla schiena davanti ai tuoi piedi. Non cadi con lui." }
    ],
    errori: ["Bloccare tardi, quando uke ha già caricato", "Sollevare con la schiena curva", "Buttare uke di testa invece di farlo atterrare sulla schiena", "Cambiare anca: quella è Utsuri goshi"],
    uchikomi: ["Uke entra lento con O goshi: tori blocca e solleva soltanto", "Sollevamento e discesa controllata di uke in piedi", "Contrattacco completo su ingresso controllato"],
    collegamenti: ["Contrattacco su O goshi, Harai goshi e Uchi mata di uke", "Ushiro goshi ↔ Utsuri goshi (stesso sollevamento, finale diverso)"],
    sicurezza: "Solleva con le gambe, schiena dritta. Uke non viene lasciato cadere dall'alto: tori lo accompagna e uke fa ushiro ukemi con il mento al petto."
  });
  T.push({
    id: "ura-nage", nome: "Ura nage", gruppo: "Ma sutemi waza", kyo: "5° kyo",
    sign: "Proiezione all'indietro: sollevi uke e ti butti sulla schiena, lanciandolo sopra la tua spalla.",
    quando: "Contrattacco quando uke attacca per primo venendo verso di te: nel Nage no kata un colpo di pugno destro alla testa, in randori un attacco d'anca come O goshi.",
    presa: "Braccio sinistro attorno alla vita di uke da dietro (mano sulla cintura o sulla schiena), mano destra a palmo aperto sulla pancia di uke.",
    passi: [
      { titolo: "Attacco di uke", testo: "Uke attacca: nel kata alza il pugno destro e colpisce dall'alto. Tu abbassi il corpo ed entri sul suo fianco destro." },
      { titolo: "Kuzushi e tsukuri", testo: "Porta il piede sinistro dietro i piedi di uke e piega bene le ginocchia. Il braccio sinistro avvolge la sua vita, la destra spinge sulla pancia. Il tuo petto è attaccato al suo fianco." },
      { titolo: "Sollevamento", testo: "Spingi con le gambe e porta le anche in avanti-in alto: **uke si stacca da terra** appoggiato al tuo petto." },
      { titolo: "Kake", testo: "Lasciati cadere all'indietro inarcando la schiena e girando la testa a sinistra: uke passa sopra la tua spalla sinistra e cade dietro di te." }
    ],
    errori: ["Entrare lontano: si solleva solo con le braccia", "Gambe tese invece che piegate prima del sollevamento", "Cadere senza aver sollevato uke", "Girare la testa dalla parte sbagliata, sotto uke"],
    uchikomi: ["Entrata e posizione delle braccia, senza sollevare", "Sollevamento leggero e appoggio di uke a terra", "Proiezione completa solo con uke esperto"],
    collegamenti: ["Contrattacco su O goshi o Koshi guruma di uke", "Ura nage → Yoko guruma (se uke si piega in avanti)"],
    sicurezza: "**Solo con uke esperto e su materasso spesso.** Tori gira la testa per non finire sotto uke e lo lancia sopra la spalla, non sul collo. Uke deve saper cadere di lato o rotolare (zenpo kaiten ukemi)."
  });
  T.push({
    id: "sumi-otoshi", nome: "Sumi otoshi", gruppo: "Te waza", kyo: "5° kyo",
    sign: "Caduta d'angolo: con le sole mani spingi uke verso l'angolo dietro di lui e lo fai cadere senza toccarlo con le gambe. È chiamata anche «kuki nage», proiezione nel vuoto.",
    quando: "Quando uke arretra la gamba destra o ha il peso sul tallone destro, per esempio dopo aver evitato un tuo attacco.",
    presa: "Fondamentale: destra al bavero, sinistra alla manica destra.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai destro. Uke fa un passo indietro con il destro o tu lo spingi indietro." },
      { titolo: "Kuzushi", testo: "Rompi l'equilibrio **dietro-destra di uke**: la sinistra tira la manica in basso e verso il suo tallone destro, la destra spinge il bavero in alto e indietro." },
      { titolo: "Tsukuri", testo: "Fai un passo con il piede sinistro vicino all'esterno del piede destro di uke. Il tuo corpo si avvicina e il peso va in avanti, senza toccarlo con le gambe." },
      { titolo: "Kake", testo: "Le mani girano come un volante (sinistra giù, destra su e indietro) e il corpo spinge verso il tallone destro di uke. Uke cade all'indietro, nell'angolo dietro di lui." }
    ],
    errori: ["Usare la gamba per bloccare: non serve", "Spingere dritto indietro invece che verso l'angolo dietro-destra", "Restare lontani da uke", "Mani che non lavorano insieme"],
    uchikomi: ["Camminare in coppia: uke arretra, tori fa solo il kuzushi", "Kuzushi con passo del sinistro, uke fa un passo per salvarsi", "Proiezione completa da uke che arretra"],
    collegamenti: ["Uki otoshi ↔ Sumi otoshi (avanti ↔ indietro)", "Ko soto gari → Sumi otoshi (stessa direzione, senza gamba)"],
    sicurezza: "Tori tiene la manica e non cade sopra uke. Uke fa ushiro ukemi o yoko ukemi con il mento al petto. Da non confondere con Uki otoshi, dove uke cade in avanti."
  });
  T.push({
    id: "yoko-gake", nome: "Yoko gake", gruppo: "Yoko sutemi waza", kyo: "5° kyo",
    sign: "Aggancio laterale: ti lasci cadere di fianco spazzando il piede di uke, e lui cade di lato.",
    quando: "Quando uke avanza con il piede destro e ha il peso sul bordo esterno di quel piede.",
    presa: "Fondamentale: destra al bavero, sinistra alla manica destra.",
    passi: [
      { titolo: "Posizione", testo: "Shizen tai destro, uke avanza con il piede destro." },
      { titolo: "Kuzushi", testo: "Tira uke **avanti-destra di uke** e un po' di lato: il suo peso va sul **bordo esterno del piede destro**, il corpo si inclina verso destra." },
      { titolo: "Tsukuri", testo: "Avvicinati al fianco destro di uke e prepara la gamba sinistra, tesa, con la pianta rivolta verso la sua caviglia destra." },
      { titolo: "Kake", testo: "Spazza la caviglia destra di uke **dall'esterno** con la pianta del piede sinistro, mentre ti lasci cadere sul fianco sinistro. Le mani tirano uke verso il basso: lui cade sul fianco accanto a te." }
    ],
    errori: ["Bloccare la gamba invece di spazzare: è Uki waza", "Spazzare prima di aver messo il peso sul bordo del piede", "Cadere lontano da uke", "Usare il tallone invece della pianta"],
    uchikomi: ["Spazzata come De ashi barai senza cadere", "Con uke: kuzushi e caduta lenta di tori, spazzata leggera", "Proiezione completa come nel Nage no kata"],
    collegamenti: ["De ashi barai → Yoko gake (stessa spazzata, ma cadendo)", "Yoko gake ↔ Uki waza (gamba che spazza ↔ gamba che blocca)"],
    sicurezza: "Tori spazza con la pianta, mai con il tallone, e cade sul proprio fianco senza finire sotto uke. Uke fa yoko ukemi."
  });
  T.push({
    id: "ushiro-kesa-gatame", nome: "Ushiro kesa gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo a sciarpa rovesciato (ushiro = dietro): stai seduto accanto a uke ma guardi verso i suoi piedi.",
    quando: "Quando uke è sulla schiena e tu arrivi al suo fianco destro girato verso le sue gambe, per esempio da hon kesa gatame quando uke spinge contro la tua testa.",
    presa: "Il braccio sinistro blocca il braccio destro di uke sotto la tua ascella; il braccio destro passa sopra il petto di uke e sotto il suo braccio sinistro, e la mano destra afferra la cintura o il judogi sul suo fianco sinistro.",
    passi: [
      { titolo: "Posizione", testo: "Siediti al **fianco destro** di uke, girato verso i suoi piedi: il tuo fianco sinistro tocca la sua ascella destra. Gambe larghe e piegate, ben piantate a terra per fare base." },
      { titolo: "Presa", testo: "Chiudi il **braccio destro** di uke sotto la tua ascella sinistra e tienilo stretto contro il fianco. Allunga il **braccio destro** sopra il suo petto, passa sotto il suo braccio sinistro e afferra la cintura (o il judogi) sul suo fianco sinistro." },
      { titolo: "Controllo", testo: "Appoggia la schiena e il fianco sinistro sul petto di uke e scarica lì il peso. Il tuo braccio destro tiene il suo braccio sinistro lontano dal tuo corpo, così uke non può spingerti." },
      { titolo: "Mantenimento", testo: "Se uke fa il ponte o si gira, sposta le gambe e ruota con lui restando attaccato al petto. In gara servono 20 secondi di controllo per l'ippon." }
    ],
    errori: ["Sedersi troppo lontano dal petto di uke", "Lasciare libero il braccio destro di uke", "Gambe strette o tese: uke ti ribalta all'indietro", "Peso sulle gambe invece che sul petto di uke"],
    uchikomi: ["Da hon kesa gatame, girarsi in ushiro kesa gatame e tornare, alternando", "Tenere 20 secondi mentre uke prova a uscire con media resistenza"],
    collegamenti: ["Hon kesa gatame → Ushiro kesa gatame (quando uke spinge sulla testa)", "Ushiro kesa gatame → Kuzure kami shiho gatame", "Ushiro kesa gatame → Ude garami sul braccio sinistro di uke"],
    sicurezza: "Non schiacciare il viso o il collo di uke con il peso del corpo. Se uke batte due volte, allenti subito."
  });
  T.push({
    id: "makura-kesa-gatame", nome: "Makura kesa gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo a sciarpa con il cuscino (makura = cuscino): la tua gamba fa da cuscino sotto la testa di uke.",
    quando: "Quando sei in kesa gatame ma non riesci a prendere il bavero dietro il collo di uke, oppure vuoi un controllo più solido della testa.",
    presa: "Come hon kesa gatame, ma la mano destra che passa sotto la nuca afferra la tua coscia destra (o i tuoi pantaloni) invece del bavero.",
    passi: [
      { titolo: "Posizione", testo: "Siediti al **fianco destro** di uke, vicino al suo torace, come in hon kesa gatame. La gamba destra è piegata in avanti vicino alla sua testa, la sinistra tesa all'indietro per fare base." },
      { titolo: "Presa", testo: "Il **braccio sinistro** chiude il braccio destro di uke sotto la tua ascella. Il **braccio destro** passa sotto la nuca di uke e la mano destra afferra la tua coscia destra o i pantaloni vicino al ginocchio." },
      { titolo: "Controllo", testo: "Alza leggermente il ginocchio destro sotto la testa di uke, come un cuscino: la sua testa resta sollevata e bloccata tra il tuo braccio e la gamba. Petto premuto sul suo petto." },
      { titolo: "Mantenimento", testo: "Resta basso e segui uke con le gambe se prova a ponte o a girarsi. 20 secondi di controllo per l'ippon in gara." }
    ],
    errori: ["Mano destra che afferra troppo in basso: il braccio non chiude la testa", "Ginocchio lontano dalla testa di uke", "Busto alto, senza peso sul petto", "Braccio destro di uke libero"],
    uchikomi: ["Passare da hon kesa gatame a makura kesa gatame cambiando solo la presa della mano destra", "Mantenimento di 20 secondi con uke che prova a uscire"],
    collegamenti: ["Hon kesa gatame → Makura kesa gatame (se perdi il bavero)", "Makura kesa gatame → Kata gatame (se uke libera il braccio e lo spinge sul tuo viso)", "Makura kesa gatame → Ushiro kesa gatame"],
    sicurezza: "Non tirare la testa di uke in avanti con forza: il ginocchio sostiene, non piega il collo. Se uke batte, allenti subito."
  });
  T.push({
    id: "kata-gatame", nome: "Kata gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo della spalla (kata = spalla): blocchi insieme la testa e un braccio di uke.",
    quando: "Quando uke, in kesa gatame, libera il braccio destro e lo spinge verso il tuo viso: usi proprio quel braccio per bloccarlo.",
    presa: "Il braccio destro passa sotto il collo di uke, il suo braccio destro resta schiacciato contro la sua testa dalla tua testa, e le tue mani si agganciano tra loro.",
    passi: [
      { titolo: "Posizione", testo: "Sei al **fianco destro** di uke. Inginocchiati con il ginocchio destro contro il suo fianco destro e la gamba sinistra tesa all'indietro e di lato per fare base." },
      { titolo: "Presa", testo: "Spingi il **braccio destro** di uke verso l'alto e oltre la sua faccia. Passa il tuo **braccio destro** sotto il suo collo e aggancia le mani: mano destra palmo in alto, mano sinistra palmo in basso." },
      { titolo: "Controllo", testo: "Premi la tua testa (lato destro) contro il braccio destro di uke, così il suo braccio resta schiacciato contro il suo collo e la sua testa. Petto in basso sul suo petto." },
      { titolo: "Mantenimento", testo: "Stringi le braccia e porta il peso in avanti verso la testa di uke. Se si muove, ruota sul ginocchio destro restando attaccato. 20 secondi per l'ippon in gara." }
    ],
    errori: ["Testa lontana dal braccio di uke: il braccio scappa", "Mani non agganciate", "Ginocchio destro staccato dal fianco di uke", "Peso indietro invece che verso la testa di uke"],
    uchikomi: ["Da kesa gatame, uke spinge con il braccio e tori passa in kata gatame", "Mantenimento di 20 secondi con media resistenza"],
    collegamenti: ["Hon kesa gatame → Kata gatame (uke libera il braccio)", "Kata gatame → Kuzure kami shiho gatame", "Kata gatame → Ude hishigi juji gatame se uke estrae il braccio"],
    sicurezza: "Kata gatame comprime anche il collo: se stringi troppo diventa uno strangolamento. Uke batte due volte e tu allenti subito."
  });
  T.push({
    id: "kuzure-yoko-shiho-gatame", nome: "Kuzure yoko shiho gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo laterale dei quattro angoli, variato (kuzure = modificato, yoko = di lato, shiho = quattro direzioni).",
    quando: "Quando sei di traverso su uke al suo fianco destro ma non riesci a passare il braccio sotto il collo come nella forma base.",
    presa: "Rispetto a yoko shiho gatame cambia il controllo della parte alta: il braccio sinistro non passa sotto il collo ma controlla la spalla o il braccio destro di uke; la mano destra resta tra le gambe o alla cintura.",
    passi: [
      { titolo: "Posizione", testo: "Mettiti di traverso sul **fianco destro** di uke, inginocchiato, con il petto sul suo petto. Ginocchia vicine al suo corpo o una gamba tesa per fare base." },
      { titolo: "Presa", testo: "La **mano destra** passa tra le gambe di uke e afferra la cintura o i pantaloni. Il **braccio sinistro**, invece di andare sotto il collo, blocca la spalla o il braccio destro di uke (per esempio passando sopra la spalla e afferrando la cintura dietro)." },
      { titolo: "Controllo", testo: "Schiaccia il petto sul suo petto e tieni i fianchi bassi. Il braccio sinistro impedisce a uke di girarsi verso di te; il destro gli blocca le anche." },
      { titolo: "Mantenimento", testo: "Se uke prova a infilare il ginocchio o a girarsi, sposta le gambe e cambia l'angolo del corpo senza staccare il petto. 20 secondi per l'ippon." }
    ],
    errori: ["Petto sollevato da uke", "Mano destra lasca sulla cintura", "Lasciare a uke lo spazio per infilare il ginocchio", "Ginocchia lontane dal corpo di uke"],
    uchikomi: ["Passare da yoko shiho gatame alla forma kuzure cambiando solo il braccio sinistro", "Mantenimento di 20 secondi con uke che prova a girarsi"],
    collegamenti: ["Yoko shiho gatame → Kuzure yoko shiho gatame", "Kuzure yoko shiho gatame → Kami shiho gatame (girando verso la testa)", "Kuzure yoko shiho gatame → Ude garami"],
    sicurezza: "Il peso va sul petto, non sul viso o sul collo di uke. Se uke batte due volte, allenti subito."
  });
  T.push({
    id: "kami-shiho-gatame", nome: "Kami shiho gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo dei quattro angoli dall'alto (kami = sopra, verso la testa): stai dalla parte della testa di uke.",
    quando: "Quando uke è sulla schiena e tu arrivi dalla parte della sua testa, o quando da un controllo laterale uke si gira e tu passi sopra la testa.",
    presa: "Entrambe le braccia passano sotto le braccia di uke (dall'esterno verso le ascelle) e le mani afferrano la cintura ai lati, pollici dentro.",
    passi: [
      { titolo: "Posizione", testo: "Inginocchiati dietro la testa di uke, allineato con il suo corpo. Ginocchia larghe vicino alle sue spalle, oppure gambe tese indietro per fare più peso." },
      { titolo: "Presa", testo: "Passa le braccia sotto le braccia di uke e afferra la cintura ai lati: **mano destra** sul suo fianco sinistro, **mano sinistra** sul suo fianco destro. I gomiti stringono le sue braccia contro il corpo." },
      { titolo: "Controllo", testo: "Appoggia il petto sul petto di uke e gira la testa di lato. Le anche restano basse: tutto il peso va sul suo petto." },
      { titolo: "Mantenimento", testo: "Se uke si sposta, gira con lui camminando sulle ginocchia o allargando le gambe. 20 secondi per l'ippon." }
    ],
    errori: ["Anche alte: uke ti ribalta in avanti", "Gomiti larghi, braccia di uke libere", "Testa dritta sul viso di uke", "Prese lontane dalla cintura"],
    uchikomi: ["Entrare in kami shiho gatame da yoko shiho gatame girando attorno alla testa", "Mantenimento di 20 secondi con uke che prova a ponte"],
    collegamenti: ["Yoko shiho gatame → Kami shiho gatame", "Kami shiho gatame → Kuzure kami shiho gatame", "Kami shiho gatame → Tate shiho gatame"],
    sicurezza: "Non premere il petto sul viso di uke: gira la testa e appoggiati sul suo petto. Se uke batte due volte, allenti subito."
  });
  T.push({
    id: "kuzure-kami-shiho-gatame", nome: "Kuzure kami shiho gatame", gruppo: "Osaekomi waza", kyo: "",
    sign: "Controllo dei quattro angoli dall'alto, variato (kuzure = modificato): sei in diagonale vicino alla spalla destra di uke.",
    quando: "Quando uke è sulla schiena e tu arrivi vicino alla sua spalla destra, un po' di lato rispetto alla testa.",
    presa: "Rispetto a kami shiho gatame il corpo è in diagonale e una presa cambia: il braccio destro passa sotto il braccio destro di uke e afferra il bavero dietro il collo; la mano sinistra afferra la cintura passando sotto la spalla sinistra di uke.",
    passi: [
      { titolo: "Posizione", testo: "Mettiti in diagonale vicino alla **spalla destra** di uke, inginocchiato o con le gambe larghe per fare base." },
      { titolo: "Presa", testo: "Il **braccio destro** passa sotto il braccio destro di uke e la mano afferra il bavero dietro la sua nuca: il suo braccio destro resta chiuso sotto la tua ascella. La **mano sinistra** passa sotto la sua spalla sinistra e afferra la cintura." },
      { titolo: "Controllo", testo: "Petto sul petto di uke, anche basse. Il braccio destro di uke è bloccato e non può spingerti." },
      { titolo: "Mantenimento", testo: "Segui i movimenti di uke girando attorno alla sua testa senza staccare il petto. 20 secondi per l'ippon." }
    ],
    errori: ["Braccio destro di uke non chiuso sotto l'ascella", "Anche alte", "Stare dritto sopra la testa invece che in diagonale", "Presa al bavero troppo lontana dalla nuca"],
    uchikomi: ["Entrata da hon kesa gatame a kuzure kami shiho gatame", "Mantenimento di 20 secondi con media resistenza"],
    collegamenti: ["Hon kesa gatame → Kuzure kami shiho gatame", "Kuzure kami shiho gatame → Kami shiho gatame", "Kuzure kami shiho gatame → Ude hishigi juji gatame"],
    sicurezza: "Non schiacciare il viso di uke con il petto. Se uke batte due volte, allenti subito."
  });
  T.push({
    id: "nami-juji-jime", nome: "Nami juji jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a croce normale (nami = normale, juji = croce): le braccia si incrociano e i **pollici stanno dentro il bavero**.",
    quando: "Quando sei sopra uke (a cavalcioni sul suo addome) oppure lo hai tra le gambe e hai accesso al suo bavero.",
    presa: "Entrambe le mani con il pollice dentro il bavero e le dita fuori: palmi verso il basso, verso uke.",
    passi: [
      { titolo: "Posizione", testo: "Sei a cavalcioni sull'addome di uke, ginocchia strette ai suoi fianchi, oppure sotto con uke tra le gambe." },
      { titolo: "Presa", testo: "La **mano destra** entra in profondità nel **bavero destro** di uke, vicino alla nuca, pollice dentro. La **mano sinistra** passa sopra il braccio destro e afferra il **bavero sinistro** di uke, sempre pollice dentro. Le braccia formano una croce." },
      { titolo: "Esecuzione", testo: "Allarga i gomiti verso l'esterno e piegali, come una forbice: il bordo dei polsi preme sui **lati del collo** di uke. Abbassa il petto verso di lui." },
      { titolo: "Finalizzazione", testo: "Stringi in modo lento e costante. Appena uke batte due volte, apri le mani e lascia." }
    ],
    errori: ["Prima presa poco profonda: la croce non chiude", "Spingere sulla gola invece di stringere ai lati", "Tirare solo con le braccia senza aprire i gomiti", "Busto alto: uke ti allontana spingendo"],
    uchikomi: ["Solo la presa: prima mano profonda, seconda mano, e lasciare, a ripetizione", "Presa e chiusura lenta da cavalcioni, uke batte al primo fastidio"],
    collegamenti: ["Tate shiho gatame → Nami juji jime", "Nami juji jime → Gyaku juji jime (cambiando una presa)", "Nami juji jime → Ude hishigi juji gatame se uke spinge con le braccia"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "gyaku-juji-jime", nome: "Gyaku juji jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a croce rovesciata (gyaku = rovescio): le braccia si incrociano e le **dita stanno dentro il bavero**, palmi in alto.",
    quando: "Quando sei sopra uke o lo hai tra le gambe: è la forma più comune quando sei sotto, con uke tra le gambe.",
    presa: "Entrambe le mani con le dita dentro il bavero e il pollice fuori: palmi verso l'alto, verso di te.",
    passi: [
      { titolo: "Posizione", testo: "Sei a cavalcioni sull'addome di uke, oppure sulla schiena con uke tra le gambe, gambe chiuse attorno al suo corpo." },
      { titolo: "Presa", testo: "La **mano destra** entra in profondità nel **bavero destro** di uke, vicino alla nuca, dita dentro e palmo in alto. La **mano sinistra** incrocia e afferra il **bavero sinistro** di uke, anche lei dita dentro e palmo in alto." },
      { titolo: "Esecuzione", testo: "Tira i gomiti verso il basso e verso il tuo corpo, allargandoli: il dorso dei polsi preme sui **lati del collo** di uke. Se sei sotto, tira uke verso di te con le gambe." },
      { titolo: "Finalizzazione", testo: "Stringi in modo lento e costante. Appena uke batte due volte, apri le mani e lascia." }
    ],
    errori: ["Prima presa poco profonda", "Gomiti stretti: i polsi non arrivano ai lati del collo", "Premere sulla gola", "Da sotto, gambe aperte: uke si allontana"],
    uchikomi: ["Solo la presa, da sotto con uke tra le gambe, alternando i lati", "Presa e chiusura lenta, uke batte al primo fastidio"],
    collegamenti: ["Nami juji jime → Gyaku juji jime", "Gyaku juji jime → Kata juji jime", "Gyaku juji jime → Sankaku jime se uke difende con un braccio"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "kata-juji-jime", nome: "Kata juji jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a croce mista (kata = a metà): una mano ha il pollice dentro (palmo in basso), l'altra le dita dentro (palmo in alto).",
    quando: "Quando sei sopra uke o lo hai tra le gambe e la prima presa profonda è già entrata in un modo, e la seconda è più facile nell'altro.",
    presa: "Una mano pollice dentro il bavero e palmo in basso, l'altra dita dentro e palmo in alto.",
    passi: [
      { titolo: "Posizione", testo: "Sei a cavalcioni sull'addome di uke oppure sotto con uke tra le gambe." },
      { titolo: "Presa", testo: "La **mano destra** entra in profondità nel **bavero destro** di uke, pollice dentro e palmo in basso. La **mano sinistra** incrocia e afferra il **bavero sinistro** di uke con le dita dentro e il palmo in alto." },
      { titolo: "Esecuzione", testo: "Apri e piega i gomiti come una forbice: il polso destro e il polso sinistro premono sui **lati del collo** di uke. Abbassa il petto verso di lui." },
      { titolo: "Finalizzazione", testo: "Stringi lentamente. Appena uke batte due volte, apri le mani e lascia." }
    ],
    errori: ["Confondere le prese e fare due prese uguali", "Prima presa poco profonda", "Premere sulla gola", "Busto alto, braccia tese"],
    uchikomi: ["Alternare in sequenza nami, gyaku e kata juji jime solo come presa", "Presa e chiusura lenta, uke batte al primo fastidio"],
    collegamenti: ["Nami juji jime → Kata juji jime", "Kata juji jime → Gyaku juji jime", "Tate shiho gatame → Kata juji jime"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "okuri-eri-jime", nome: "Okuri eri jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento con i due baveri (okuri = far scorrere, eri = bavero): da dietro, usi il judogi di uke.",
    quando: "Quando sei dietro uke, per esempio quando è a quattro zampe o seduto, o quando lo hai girato e sei alle sue spalle.",
    presa: "La mano destra passa attorno al collo e afferra in profondità il bavero sinistro di uke (pollice dentro); la mano sinistra passa sotto l'ascella sinistra di uke e afferra il suo bavero destro.",
    passi: [
      { titolo: "Posizione", testo: "Sei dietro uke, il petto contro la sua schiena. Se uke è seduto, le tue gambe possono agganciarlo ai fianchi." },
      { titolo: "Presa", testo: "La **mano sinistra** passa sotto l'**ascella sinistra** di uke e tira giù il suo **bavero destro**, per tenderlo. La **mano destra** passa sopra la spalla destra, attorno al collo, e afferra in profondità il **bavero sinistro** di uke, pollice dentro." },
      { titolo: "Esecuzione", testo: "Tira la mano destra indietro e in fuori e la sinistra verso il basso: i baveri si stringono sui **lati del collo** di uke. Tieni la tua testa accanto alla sua." },
      { titolo: "Finalizzazione", testo: "Stringi lentamente inclinandoti un po' indietro. Appena uke batte due volte, lascia la presa." }
    ],
    errori: ["Presa destra poco profonda", "Dimenticare di tirare giù il bavero con la mano sinistra", "Spingere l'avambraccio sulla gola", "Restare staccato dalla schiena di uke"],
    uchikomi: ["Da seduto dietro uke: presa sinistra, presa destra, e lasciare", "Ripetere da uke a quattro zampe, chiudendo lentamente"],
    collegamenti: ["Okuri eri jime → Kata ha jime (se uke alza il braccio sinistro)", "Uke a quattro zampe: girata e Okuri eri jime", "Okuri eri jime → Ude hishigi juji gatame se uke si gira"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "kata-ha-jime", nome: "Kata ha jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a un'ala (kata = una, ha = ala): il braccio di uke viene sollevato come un'ala.",
    quando: "Quando sei dietro uke e cominci okuri eri jime, ma la tua mano sinistra non riesce a prendere il bavero o uke alza il braccio per difendersi.",
    presa: "La mano destra afferra in profondità il bavero sinistro di uke attorno al collo (pollice dentro); il braccio sinistro passa sotto il braccio sinistro di uke e lo solleva.",
    passi: [
      { titolo: "Posizione", testo: "Sei dietro uke, il petto contro la sua schiena, come in okuri eri jime." },
      { titolo: "Presa", testo: "La **mano destra** passa attorno al collo di uke e afferra in profondità il suo **bavero sinistro**, pollice dentro. Il **braccio sinistro** passa sotto il **braccio sinistro** di uke e lo alza." },
      { titolo: "Esecuzione", testo: "Porta la **mano sinistra**, palmo in avanti, dietro la nuca di uke: il suo braccio sinistro resta in alto, bloccato. Tira la mano destra indietro e spingi con la sinistra in avanti." },
      { titolo: "Finalizzazione", testo: "Il bavero stringe i **lati del collo** di uke. Chiudi lentamente; appena uke batte due volte, lascia." }
    ],
    errori: ["Braccio di uke non abbastanza alto: lo riabbassa", "Presa destra poco profonda", "Spingere la testa di uke con violenza", "Staccarsi dalla schiena di uke"],
    uchikomi: ["Da seduto dietro uke: presa destra, alzare il braccio, mano dietro la nuca, e lasciare", "Passaggio da okuri eri jime a kata ha jime"],
    collegamenti: ["Okuri eri jime → Kata ha jime", "Kata ha jime → Okuri eri jime se uke abbassa il braccio", "Uke a quattro zampe → Kata ha jime girandolo"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Non forzare la spalla di uke. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "sankaku-jime", nome: "Sankaku jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a triangolo (sankaku = triangolo): le tue gambe chiudono il collo e un braccio di uke.",
    quando: "Quando uke è tra le tue gambe e ha un braccio dentro e uno fuori, oppure quando è a quattro zampe e riesci a infilare le gambe attorno al suo collo e braccio.",
    presa: "Le gambe formano un triangolo attorno al collo e al braccio destro di uke; le mani tirano la testa o tengono il braccio intrappolato.",
    passi: [
      { titolo: "Posizione", testo: "Sei sulla schiena con uke tra le gambe. Il **braccio destro** di uke resta dentro le tue gambe, il **sinistro** fuori." },
      { titolo: "Presa", testo: "Passa la **gamba destra** sopra la spalla sinistra di uke, con lo stinco dietro il suo collo. Blocca la caviglia destra nell'incavo del **ginocchio sinistro**, che si chiude sopra: ecco il triangolo." },
      { titolo: "Esecuzione", testo: "Tieni il braccio destro di uke contro il suo collo e tira la sua testa verso il basso con le mani. Stringi le ginocchia e alza un po' le anche." },
      { titolo: "Finalizzazione", testo: "Il lato del collo di uke è chiuso tra la tua coscia e la sua spalla destra. Stringi lentamente; appena uke batte due volte, apri le gambe." }
    ],
    errori: ["Mettere dentro tutte e due o nessuna delle braccia di uke", "Triangolo largo: lo stinco non è dietro il collo", "Non tirare giù la testa di uke", "Stringere di colpo"],
    uchikomi: ["Da sotto, uke in ginocchio: chiudere il triangolo e riaprire, alternando i lati", "Chiusura lenta e uke batte al primo fastidio"],
    collegamenti: ["Sankaku jime → Sankaku gatame (leva sul braccio intrappolato)", "Sankaku jime → Ude hishigi juji gatame", "Uke a quattro zampe → Sankaku jime → osaekomi"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea. Le gambe sono molto forti: stringi piano. Uke batte due volte e tu apri subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "sode-guruma-jime", nome: "Sode guruma jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a ruota con la manica (sode = manica, guruma = ruota): una mano afferra la tua stessa manica.",
    quando: "Quando sei sopra uke o lo hai tra le gambe e riesci a passare un braccio dietro il suo collo.",
    presa: "Il braccio destro passa dietro il collo di uke e la mano destra afferra l'interno della tua manica sinistra; la mano sinistra va al lato del collo di uke.",
    passi: [
      { titolo: "Posizione", testo: "Sei sopra uke (a cavalcioni o di lato) oppure sotto con uke tra le gambe." },
      { titolo: "Presa", testo: "Passa il **braccio destro** dietro il collo di uke. La **mano destra** afferra l'interno della tua **manica sinistra**, vicino al polso." },
      { titolo: "Esecuzione", testo: "Porta il **bordo della mano sinistra** (lato mignolo) o l'avambraccio sinistro contro il **lato del collo** di uke. Chiudi come una ruota: il braccio destro tira e il sinistro preme sul lato." },
      { titolo: "Finalizzazione", testo: "Stringi in modo lento e graduale. Appena uke batte due volte, apri le braccia." }
    ],
    errori: ["Mettere l'avambraccio sulla gola invece che sul lato del collo", "Presa sulla manica troppo lenta", "Chiudere di scatto", "Busto alto, braccia lontane dal collo"],
    uchikomi: ["Presa sulla manica e posizione della mano sinistra, poi lasciare", "Chiusura lenta da cavalcioni, uke batte al primo fastidio"],
    collegamenti: ["Tate shiho gatame → Sode guruma jime", "Sode guruma jime da sotto, con uke tra le gambe", "Sode guruma jime → Ude hishigi juji gatame se uke spinge con le braccia"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "tsukkomi-jime", nome: "Tsukkomi jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento a spinta (tsukkomi = spingere dentro): un pugno con il bavero spinge sul lato del collo.",
    quando: "Quando sei sopra o accanto a uke e lui difende le prese incrociate, ma puoi afferrare i suoi due baveri davanti.",
    presa: "La mano sinistra afferra il bavero destro di uke e tira; la mano destra afferra il bavero sinistro di uke e lo spinge verso il lato del collo.",
    passi: [
      { titolo: "Posizione", testo: "Sei a cavalcioni su uke o al suo fianco, con il petto vicino al suo." },
      { titolo: "Presa", testo: "La **mano sinistra** afferra il **bavero destro** di uke e lo tira per stringere il judogi attorno al collo. La **mano destra** afferra il **bavero sinistro** di uke in alto, vicino al collo." },
      { titolo: "Esecuzione", testo: "Spingi il pugno destro con il bavero verso l'alto contro il **lato sinistro del collo** di uke, mentre la sinistra continua a tirare." },
      { titolo: "Finalizzazione", testo: "Aumenta la spinta piano piano. Appena uke batte due volte, lascia." }
    ],
    errori: ["Spingere sulla gola davanti invece che sul lato", "Non tirare con l'altra mano: il bavero resta largo", "Spinta di scatto", "Prese troppo basse sul petto"],
    uchikomi: ["Solo le prese e la direzione della spinta, senza stringere", "Chiusura lenta e controllata, uke batte al primo fastidio"],
    collegamenti: ["Tate shiho gatame → Tsukkomi jime", "Tsukkomi jime → Nami juji jime", "Tsukkomi jime → Ryote jime"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "katate-jime", nome: "Katate jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento con una mano sola (katate = una mano).",
    quando: "Quando hai una presa profonda sul bavero di uke ma l'altra mano è occupata a controllarlo o non arriva.",
    presa: "La mano destra afferra in profondità il bavero sinistro di uke, vicino al collo, pollice dentro.",
    passi: [
      { titolo: "Posizione", testo: "Sei sopra uke, al suo fianco o tra le sue gambe, vicino al suo petto." },
      { titolo: "Presa", testo: "La **mano destra** entra in profondità nel **bavero sinistro** di uke, pollice dentro, il più vicino possibile al collo." },
      { titolo: "Esecuzione", testo: "Ruota il polso e porta l'avambraccio destro contro il **lato del collo** di uke, mentre il bavero tira dall'altra parte. La mano sinistra controlla uke (braccio o spalla)." },
      { titolo: "Finalizzazione", testo: "Stringi lentamente con il polso e con il peso del corpo. Appena uke batte due volte, lascia." }
    ],
    errori: ["Presa poco profonda", "Spingere sulla gola", "Usare solo la forza della mano senza ruotare il polso", "Lasciare uke libero di girarsi"],
    uchikomi: ["Presa profonda e rotazione del polso, poi lasciare", "Chiusura lenta da diverse posizioni, uke batte al primo fastidio"],
    collegamenti: ["Katate jime → Nami juji jime (aggiungendo la seconda mano)", "Kesa gatame → Katate jime", "Katate jime → Okuri eri jime se uke si gira"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ryote-jime", nome: "Ryote jime", gruppo: "Shime waza", kyo: "",
    sign: "Strangolamento con le due mani (ryote = due mani), senza incrociare le braccia.",
    quando: "Quando sei davanti a uke, sopra di lui o con lui tra le gambe, e puoi afferrare i due baveri vicino al collo.",
    presa: "Mano destra al bavero sinistro di uke, mano sinistra al bavero destro di uke, pollici dentro, braccia non incrociate.",
    passi: [
      { titolo: "Posizione", testo: "Sei a cavalcioni su uke o sotto con uke tra le gambe, di fronte a lui." },
      { titolo: "Presa", testo: "La **mano destra** afferra in alto il **bavero sinistro** di uke, la **mano sinistra** il **bavero destro**, pollici dentro, vicino al collo. Le braccia non si incrociano." },
      { titolo: "Esecuzione", testo: "Ruota i polsi verso l'interno e avvicina i pugni: le nocche e i polsi premono sui **due lati del collo** di uke. Tira leggermente verso di te." },
      { titolo: "Finalizzazione", testo: "Stringi lentamente. Appena uke batte due volte, apri le mani." }
    ],
    errori: ["Prese troppo basse", "Pugni che si incontrano sulla gola davanti", "Tirare di scatto", "Gomiti larghi e braccia tese"],
    uchikomi: ["Solo presa e rotazione dei polsi, senza stringere", "Chiusura lenta, uke batte al primo fastidio"],
    collegamenti: ["Ryote jime → Nami juji jime", "Tsukkomi jime → Ryote jime", "Ryote jime → Ude hishigi juji gatame se uke spinge con le braccia"],
    sicurezza: "La pressione va sui lati del collo (carotidi), mai sulla trachea o sul pomo d'Adamo. Lento e controllato: uke batte due volte e tu lasci subito. Gli strangolamenti sono permessi o limitati secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ude-garami", nome: "Ude garami", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva a braccio avvolto (ude = braccio, garami = intrecciare): torci il gomito piegato di uke.",
    quando: "Quando sei in controllo laterale o in kesa gatame e uke alza il braccio sinistro per spingerti la testa o la spalla. In gara sono permesse solo le leve al gomito: ude garami è una di queste.",
    presa: "Mano sinistra al polso sinistro di uke, palmo in basso; braccio destro sotto il suo braccio sinistro che afferra il tuo polso sinistro (presa a figura 4).",
    passi: [
      { titolo: "Posizione", testo: "Sei di traverso sul **fianco destro** di uke, petto sul suo petto, in controllo laterale." },
      { titolo: "Presa", testo: "Con la **mano sinistra**, palmo in basso, afferra il **polso sinistro** di uke e schiaccialo sul tatami vicino alla sua testa: il suo braccio è piegato a L, gomito a terra, dorso della mano sul tatami. Il **braccio destro** passa sotto il suo braccio sinistro e la **mano destra** afferra il tuo polso sinistro." },
      { titolo: "Esecuzione", testo: "Tieni il polso di uke a terra e fallo scivolare piano verso il suo fianco, mentre il tuo avambraccio destro alza il suo gomito." },
      { titolo: "Finalizzazione", testo: "La spalla e il gomito di uke ruotano: muoviti lentamente, millimetro per millimetro. Appena uke batte due volte, lasci subito." }
    ],
    errori: ["Polso di uke staccato dal tatami", "Braccio di uke troppo aperto o troppo chiuso: niente angolo a L", "Movimento veloce o a strappo", "Petto staccato: uke si gira e scappa"],
    uchikomi: ["Dal controllo laterale: presa a figura 4 e lasciare, a ripetizione", "Esecuzione lentissima con uke che batte al primo fastidio"],
    collegamenti: ["Yoko shiho gatame → Ude garami", "Kesa gatame → Ude garami sul braccio libero", "Ude garami → Ude hishigi juji gatame se uke tende il braccio"],
    sicurezza: "Lento e controllato, mai a strappo. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ude-hishigi-juji-gatame", nome: "Ude hishigi juji gatame", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva al braccio a croce (ude hishigi = spezzare il braccio, juji = croce): il tuo corpo e il braccio di uke formano una croce.",
    quando: "Quando uke è sulla schiena e tu sei vicino alla sua spalla, oppure quando uke spinge con un braccio teso. In gara sono permesse solo le leve al gomito: questa è la più usata.",
    presa: "Le mani tengono il polso destro di uke contro il tuo petto, con il suo pollice verso l'alto; il braccio di uke resta stretto tra le tue cosce.",
    passi: [
      { titolo: "Posizione", testo: "Siediti vicino alla **spalla destra** di uke, il sedere attaccato alla sua spalla, il corpo perpendicolare al suo." },
      { titolo: "Presa", testo: "Afferra il **polso destro** di uke con le due mani e tienilo contro il tuo petto, con il **pollice di uke verso l'alto**. Passa la **gamba sinistra** sopra il suo viso o collo e la **gamba destra** sopra il suo petto." },
      { titolo: "Esecuzione", testo: "Stringi le ginocchia attorno al suo braccio e sdraiati indietro piano, tenendo il braccio di uke teso e il suo gomito sopra le tue anche." },
      { titolo: "Finalizzazione", testo: "Alza le anche lentamente mentre tiri il polso verso il petto. Appena uke batte due volte, lasci subito." }
    ],
    errori: ["Sedere lontano dalla spalla di uke: il braccio scivola via", "Pollice di uke girato di lato", "Ginocchia aperte", "Alzare le anche di scatto"],
    uchikomi: ["Da kesa gatame o da cavalcioni: entrata in juji gatame e lasciare", "Esecuzione lentissima, uke batte al primo fastidio"],
    collegamenti: ["Tate shiho gatame → Ude hishigi juji gatame", "Kata gatame → Ude hishigi juji gatame", "Sankaku jime → Ude hishigi juji gatame"],
    sicurezza: "Lento e controllato, mai a strappo. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ude-hishigi-ude-gatame", nome: "Ude hishigi ude gatame", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva al braccio con il braccio (ude gatame): il braccio teso di uke viene bloccato e le tue mani premono sul gomito.",
    quando: "Quando sei al fianco di uke sulla schiena e lui allunga il braccio verso di te (per afferrarti il bavero o spingerti). In gara sono permesse solo le leve al gomito.",
    presa: "Il polso sinistro di uke resta bloccato tra il tuo collo e la spalla destra; le tue mani, una sopra l'altra, premono sul suo gomito.",
    passi: [
      { titolo: "Posizione", testo: "Inginocchiati al **fianco destro** di uke, con il ginocchio destro contro il suo fianco e la gamba sinistra tesa di lato per fare base." },
      { titolo: "Presa", testo: "Uke allunga il **braccio sinistro** verso di te. Blocca il suo **polso sinistro** tra il collo e la tua **spalla destra**. Metti le mani sul suo **gomito sinistro**, la destra sopra la sinistra." },
      { titolo: "Esecuzione", testo: "Il braccio di uke deve essere teso, con la punta del gomito rivolta verso l'esterno, lontano da te. Le mani tirano il gomito verso di te e verso il basso." },
      { titolo: "Finalizzazione", testo: "Aumenta la pressione piano, aiutandoti con il busto. Appena uke batte due volte, lasci subito." }
    ],
    errori: ["Polso di uke non bloccato: il braccio si piega", "Mani sul braccio e non sul gomito", "Ginocchio staccato da uke", "Pressione di scatto"],
    uchikomi: ["Uke allunga il braccio, tori blocca il polso e le mani sul gomito, poi lascia", "Esecuzione lentissima, uke batte al primo fastidio"],
    collegamenti: ["Kesa gatame → Ude hishigi ude gatame quando uke spinge", "Ude hishigi ude gatame → Ude hishigi juji gatame", "Ude hishigi ude gatame → Kata gatame se uke piega il braccio"],
    sicurezza: "Lento e controllato, mai a strappo. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ude-hishigi-hiza-gatame", nome: "Ude hishigi hiza gatame", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva al braccio con il ginocchio (hiza = ginocchio): il tuo ginocchio preme sul gomito teso di uke.",
    quando: "Quando sei seduto o sulla schiena davanti a uke, lui è in ginocchio e ti tiene il judogi con un braccio teso. In gara sono permesse solo le leve al gomito.",
    presa: "Il braccio destro di uke è chiuso sotto la tua ascella sinistra; le tue mani tengono il suo polso o la manica; il ginocchio sinistro preme sul gomito.",
    passi: [
      { titolo: "Posizione", testo: "Sei seduto davanti a uke, che è in ginocchio e ti afferra. Il **piede destro** si appoggia sul suo fianco sinistro (anca) per controllare la distanza." },
      { titolo: "Presa", testo: "Chiudi il **braccio destro** di uke sotto la tua **ascella sinistra**, tenendo il polso o la manica con le mani. Il braccio di uke è teso." },
      { titolo: "Esecuzione", testo: "Ruota sul tuo fianco destro e porta il **ginocchio sinistro** sopra il **gomito destro** di uke, dall'esterno." },
      { titolo: "Finalizzazione", testo: "Premi con il ginocchio verso l'interno mentre tieni fermo il polso. Lentamente: appena uke batte due volte, lasci subito." }
    ],
    errori: ["Braccio di uke non chiuso sotto l'ascella", "Ginocchio sulla spalla o sull'avambraccio invece che sul gomito", "Piede destro senza appoggio: uke ti schiaccia", "Pressione a scatto"],
    uchikomi: ["Uke in ginocchio afferra, tori blocca il braccio e porta il ginocchio, poi lascia", "Esecuzione lentissima, uke batte al primo fastidio"],
    collegamenti: ["Ude hishigi hiza gatame → Ude hishigi juji gatame se uke si alza", "Ude hishigi hiza gatame → Ude hishigi waki gatame", "Ude hishigi hiza gatame → Sankaku jime se uke piega il braccio"],
    sicurezza: "Lento e controllato, mai a strappo. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ude-hishigi-waki-gatame", nome: "Ude hishigi waki gatame", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva al braccio con l'ascella (waki = ascella): la tua ascella preme sul gomito teso di uke.",
    quando: "Quando uke ti afferra con un braccio teso, in piedi o a terra. In gara sono permesse solo le leve al gomito, ed è vietato buttarsi direttamente a terra con waki gatame partendo da in piedi.",
    presa: "Le tue mani tengono il polso destro di uke; la tua ascella sinistra sta sopra il suo gomito destro, con la punta del gomito verso l'alto.",
    passi: [
      { titolo: "Posizione", testo: "Sei al **fianco destro** di uke, che tiene il **braccio destro** teso (per esempio ti afferra il judogi o è a terra a pancia in giù)." },
      { titolo: "Presa", testo: "Afferra il **polso destro** di uke con le due mani. Gira il busto e chiudi il suo braccio teso sotto la tua **ascella sinistra**, con la punta del suo gomito verso l'alto." },
      { titolo: "Esecuzione", testo: "Tira il polso verso l'alto e verso di te, mentre l'ascella spinge in basso sul gomito. Il braccio di uke resta teso e bloccato." },
      { titolo: "Finalizzazione", testo: "Abbassa il busto lentamente e con controllo, accompagnando uke a terra se serve. Appena uke batte due volte, lasci subito." }
    ],
    errori: ["Ascella sull'avambraccio o sulla spalla invece che sul gomito", "Gomito di uke girato di lato", "Cadere di peso a terra con la leva", "Strappo veloce"],
    uchikomi: ["Uke porge il braccio, tori lo blocca sotto l'ascella e lascia", "Da uke a pancia in giù: entrata lenta e controllata"],
    collegamenti: ["Ude hishigi waki gatame → Ude hishigi hara gatame", "Ude hishigi hiza gatame → Ude hishigi waki gatame", "Ude hishigi waki gatame → Ude hishigi juji gatame"],
    sicurezza: "Lento e controllato, mai a strappo, e mai cadere di peso a terra con la leva. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "ude-hishigi-hara-gatame", nome: "Ude hishigi hara gatame", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva al braccio con la pancia (hara = ventre): spingi sul gomito teso di uke con l'addome.",
    quando: "Quando uke è a quattro zampe o in ginocchio e tu sei al suo fianco, e riesci a tirargli fuori un braccio teso. In gara sono permesse solo le leve al gomito.",
    presa: "Le tue mani tengono il polso destro di uke; il suo gomito destro, teso, è appoggiato contro il tuo ventre.",
    passi: [
      { titolo: "Posizione", testo: "Inginocchiati al **fianco destro** di uke, che è a quattro zampe o in ginocchio." },
      { titolo: "Presa", testo: "Afferra il **polso destro** di uke con le due mani e tira il suo braccio teso verso di te. Il suo **gomito destro** si appoggia contro il tuo **ventre**, con la punta del gomito verso di te." },
      { titolo: "Esecuzione", testo: "Tieni fermo il polso e spingi l'addome in avanti contro il gomito, usando tutto il busto e non solo le braccia." },
      { titolo: "Finalizzazione", testo: "Aumenta la pressione lentamente. Appena uke batte due volte, lasci subito." }
    ],
    errori: ["Braccio di uke piegato", "Pancia contro l'avambraccio invece che sul gomito", "Tirare solo con le braccia", "Spinta di scatto"],
    uchikomi: ["Uke a quattro zampe: tirare fuori il braccio e appoggiarlo sul ventre, poi lasciare", "Esecuzione lentissima, uke batte al primo fastidio"],
    collegamenti: ["Ude hishigi waki gatame → Ude hishigi hara gatame", "Ude hishigi hara gatame → Ude hishigi juji gatame se uke si gira", "Uke a quattro zampe → Okuri eri jime o Ude hishigi hara gatame"],
    sicurezza: "Lento e controllato, mai a strappo. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });
  T.push({
    id: "sankaku-gatame", nome: "Sankaku gatame", gruppo: "Kansetsu waza", kyo: "",
    sign: "Leva a triangolo (sankaku = triangolo): con le gambe a triangolo blocchi uke e fai leva sul braccio intrappolato.",
    quando: "Quando hai chiuso il triangolo di gambe attorno al collo e al braccio destro di uke: invece di strangolare, fai leva al suo gomito. In gara sono permesse solo le leve al gomito.",
    presa: "Le gambe a triangolo bloccano il collo e il braccio destro di uke; le tue mani tengono il suo polso destro.",
    passi: [
      { titolo: "Posizione", testo: "Sei sulla schiena con uke tra le gambe. Il suo **braccio destro** è dentro, il **sinistro** fuori." },
      { titolo: "Presa", testo: "**Gamba destra** sopra la spalla sinistra di uke e dietro il suo collo, caviglia destra bloccata sotto il **ginocchio sinistro**: il triangolo è chiuso. Afferra il **polso destro** di uke con le due mani." },
      { titolo: "Esecuzione", testo: "Tieni il triangolo stretto e tira il braccio destro di uke teso verso il tuo fianco, con la punta del gomito contro la tua coscia." },
      { titolo: "Finalizzazione", testo: "Alza leggermente le anche contro il gomito mentre tieni il polso. Lentamente: appena uke batte due volte, lasci subito." }
    ],
    errori: ["Triangolo largo: uke tira fuori il braccio", "Braccio di uke piegato", "Leva fatta di scatto", "Dimenticare di controllare la testa di uke"],
    uchikomi: ["Chiudere il triangolo, tendere il braccio, lasciare", "Esecuzione lentissima, uke batte al primo fastidio"],
    collegamenti: ["Sankaku jime → Sankaku gatame", "Sankaku gatame → Ude hishigi juji gatame", "Sankaku gatame → osaekomi girando uke sulla schiena"],
    sicurezza: "Lento e controllato, mai a strappo. Il triangolo stringe anche il collo: non strangolare e fare leva insieme con forza. Uke batte due volte e tu lasci subito. In gara sono ammesse solo le leve al gomito. Le leve sono permesse o limitate secondo l'età e le regole della federazione, chiedi al maestro."
  });

  // schemi dall'alto (pianta.js): tori in blu parte in basso, uke in bianco in alto
  const start = {
    tori: { c: [0, 0], sx: [-14, -4], dx: [14, -4], etichetta: [0, -24] },
    uke: { c: [0, 64], sx: [14, 68], dx: [-14, 68], etichetta: [0, 90] },
    prese: [{ da: [22, 0], a: [7, 56], testo: "bavero", dx: 4, dy: 16 }, { da: [-22, 0], a: [-31, 54], testo: "manica", fine: true, dx: -6 }]
  };
  const PIANTE = {
    "osoto-gari": [
      start,
      { tori: { c: [0, 6], sx: [-14, 2], dx: [14, -4], etichetta: [0, -24] }, uke: start.uke,
        prese: [{ da: [22, 6], a: [7, 56] }, { da: [-22, 6], a: [-31, 54] }],
        frecce: [{ da: [-4, 72], a: [-26, 104], tipo: "squilibrio", testo: "dietro-destra di uke", fine: true, tx: -30, ty: 108 }] },
      { tori: { c: [-24, 42], sx: [-42, 60], dx: [-6, 18], alza: "dx", prima: { sx: [-14, 2] }, etichetta: [-48, 20] }, uke: start.uke,
        prese: [{ da: [-2, 42], a: [7, 56] }, { da: [-46, 42], a: [-31, 54] }],
        frecce: [{ da: [-14, 6], a: [-40, 46], tipo: "piede", testo: "passo accanto al suo piede destro", fine: true, tx: -50, ty: 30, curva: .15 }] },
      { tori: { c: [-26, 48], sx: [-42, 60], dx: [-12, 96], alza: "dx", etichetta: [-52, 26] }, uke: { c: [0, 64], sx: [14, 68], dx: [-14, 68], alza: "dx", etichetta: [16, 92] },
        prese: [{ da: [-4, 48], a: [7, 56] }, { da: [-48, 48], a: [-31, 54] }],
        frecce: [{ da: [-6, 20], a: [-12, 90], tipo: "falciata", testo: "la gamba destra passa dietro e falcia", tx: -4, ty: 30, curva: -.18 }, { da: [6, 74], a: [-14, 116], tipo: "caduta", testo: "caduta", tx: -10, ty: 120 }] }
    ],
    "o-uchi-gari": [
      start,
      { tori: { c: [0, 6], sx: [-14, 2], dx: [14, -4], etichetta: [0, -24] }, uke: start.uke,
        prese: [{ da: [22, 6], a: [7, 56] }, { da: [-22, 6], a: [-31, 54] }],
        frecce: [{ da: [4, 72], a: [26, 104], tipo: "squilibrio", testo: "dietro-sinistra di uke", tx: 30, ty: 108 }] },
      { tori: { c: [2, 34], sx: [-6, 18], dx: [6, 44], alza: "dx", prima: { sx: [-14, 2], dx: [14, -4] }, etichetta: [-30, 30] }, uke: start.uke,
        prese: [{ da: [24, 34], a: [7, 56] }, { da: [-20, 34], a: [-31, 54] }],
        frecce: [{ da: [14, 0], a: [8, 38], tipo: "piede", curva: -.1 }, { da: [-14, 4], a: [-8, 14], tipo: "piede", testo: "il sinistro dietro il destro", fine: true, tx: -18, ty: 12 }] },
      { tori: { c: [4, 38], sx: [-6, 18], dx: [24, 74], alza: "dx", etichetta: [-30, 30] }, uke: { c: [0, 64], sx: [14, 68], dx: [-14, 68], alza: "sx", etichetta: [-20, 92] },
        prese: [{ da: [26, 38], a: [7, 56] }, { da: [-18, 38], a: [-31, 54] }],
        frecce: [{ da: [6, 46], a: [30, 70], tipo: "falciata", testo: "da dentro, il destro falcia il suo sinistro", tx: 34, ty: 46, curva: .45 }, { da: [6, 74], a: [24, 112], tipo: "caduta", testo: "caduta", tx: 28, ty: 114 }] }
    ],
    "ippon-seoi-nage": [
      start,
      { tori: { c: [0, 8], sx: [-14, 2], dx: [14, 6], etichetta: [0, -24] }, uke: start.uke,
        prese: [{ da: [22, 8], a: [7, 56] }, { da: [-22, 8], a: [-36, 40] }],
        frecce: [{ da: [-8, 56], a: [-40, 26], tipo: "squilibrio", testo: "avanti-destra di uke", fine: true, tx: -44, ty: 20 }] },
      { tori: { c: [0, 46], rot: 180, dx: [-10, 42, 180], sx: [10, 42, 180], prima: { dx: [14, 6], sx: [-14, 2] }, etichetta: [36, 30] }, uke: start.uke,
        prese: [{ da: [-22, 46], a: [-22, 62], testo: "braccio sotto l'ascella", fine: true, dx: -8 }, { da: [22, 46], a: [-36, 36], testo: "tira la manica", fine: true, dx: -6, dy: 10 }],
        frecce: [{ da: [14, 8], a: [-8, 36], tipo: "piede", curva: -.1 }, { da: [-14, 4], a: [9, 36], tipo: "piede", curva: .55 }] },
      { tori: { c: [0, 44], rot: 180, dx: [-10, 42, 180], sx: [10, 42, 180], etichetta: [36, 30] }, uke: { c: [0, 62], sx: [14, 68], dx: [-14, 68], alza: "entrambi", etichetta: [26, 88] },
        prese: [{ da: [-22, 44], a: [-22, 60] }, { da: [22, 44], a: [-36, 26] }],
        frecce: [{ da: [4, 70], a: [-34, 4], tipo: "caduta", testo: "sopra la spalla destra di tori", fine: true, tx: -38, ty: -4, curva: .25 }] }
    ],
    "hon-kesa-gatame": [
      { tori: { seduta: true, c: [-40, 50], busto: [-24, 62], rot: -60, dx: [-66, 96], sx: [-82, 14], etichetta: [-80, 70] }, uke: { terra: true, testa: [0, 96], bacino: [0, 20], etichetta: [30, 6] } },
      { tori: { seduta: true, c: [-40, 50], busto: [-24, 62], rot: -60, dx: [-66, 96], sx: [-82, 14], etichetta: [-80, 70] }, uke: { terra: true, testa: [0, 96], bacino: [0, 20], etichetta: [30, 6] },
        prese: [{ da: [-14, 74], a: [12, 98], testo: "braccio attorno al collo", dx: 6, dy: -2 }, { da: [-34, 54], a: [-30, 72], testo: "braccio di uke bloccato", fine: true, dx: -8, dy: 2 }] },
      { tori: { seduta: true, c: [-40, 50], busto: [-22, 64], rot: -60, dx: [-66, 96], sx: [-82, 14], etichetta: [-80, 70] }, uke: { terra: true, testa: [0, 96], bacino: [0, 20], etichetta: [30, 6] },
        prese: [{ da: [-12, 76], a: [12, 98] }, { da: [-32, 56], a: [-30, 72] }],
        frecce: [{ da: [-40, 84], a: [-10, 70], tipo: "squilibrio", testo: "peso del petto", fine: true, tx: -44, ty: 90 }] },
      { tori: { seduta: true, c: [-40, 50], busto: [-22, 64], rot: -60, dx: [-66, 96], sx: [-82, 14], etichetta: [-80, 70] }, uke: { terra: true, testa: [0, 96], bacino: [0, 20], etichetta: [30, 6] },
        prese: [{ da: [-12, 76], a: [12, 98] }, { da: [-32, 56], a: [-30, 72] }],
        frecce: [{ da: [-90, 20], a: [-90, 52], tipo: "piede", testo: "gambe larghe: base stabile", fine: true, tx: -94, ty: 4 }] }
    ]
  };
  T.forEach(tc => (PIANTE[tc.id] || []).forEach((p, i) => { if (tc.passi[i]) tc.passi[i].pianta = p; }));
  // vista laterale (laterale.js): pose dei due judoka per ogni passo
  const st1 = { tori: { pelvis: [0, 92, 0], yaw: 0, lean: 5, piedi: { dx: [2, 0, 13], sx: [-2, 0, -13] }, mani: { dx: [44, 128, 8], sx: [40, 104, -26] } },
  uke: { pelvis: [64, 92, 0], yaw: 180, lean: 5, piedi: { dx: [64, 0, -13], sx: [62, 0, 13] }, mani: { dx: [20, 128, -8], sx: [24, 104, 26] } } };
  const LATO = {
  "o-uchi-gari": { cam: { yaw: -22, pitch: 12 }, passi: [
    st1,
    { tori: { pelvis: [12, 92, 0], yaw: 0, lean: 8, piedi: { dx: [14, 0, 13], sx: [8, 0, -13] }, mani: { dx: [58, 124, 8], sx: [48, 108, -26] } },
      uke: { pelvis: [70, 92, 4], yaw: 180, lean: -14, tilt: 6, piedi: { dx: [64, 0, -13], sx: [70, 0, 14] }, mani: { dx: [30, 124, -8], sx: [34, 104, 26] } },
      frecce: [{ da: [74, 150, 4], a: [100, 150, 26] }] },
    { tori: { pelvis: [36, 88, 0], yaw: -10, lean: 12, piedi: { dx: [46, 0, 2], sx: [28, 0, -6] }, mani: { dx: [62, 122, 8], sx: [54, 108, -28] } },
      uke: { pelvis: [72, 92, 4], yaw: 180, lean: -14, tilt: 6, piedi: { dx: [66, 0, -13], sx: [72, 0, 16] }, mani: { dx: [46, 124, -6], sx: [50, 104, 22] } },
      frecce: [{ da: [14, 2, 13], a: [42, 2, 4], col: "#6b7480", dash: true }] },
    { tori: { pelvis: [46, 86, 2], yaw: -20, lean: 22, piedi: { dx: [76, 10, 28], sx: [32, 0, -6] }, ginocchio: { dx: [.5, .2, 1] }, mani: { dx: [72, 116, 8], sx: [62, 104, -24] } },
      uke: { pelvis: [80, 80, 6], yaw: 180, lean: -36, tilt: 8, piedi: { dx: [68, 0, -13], sx: [84, 22, 34] }, mani: { dx: [56, 116, -6], sx: [60, 100, 20] } },
      frecce: [{ da: [56, 8, 10], a: [84, 12, 38], col: "#c8372d" }, { da: [86, 140, 6], a: [116, 100, 24] }] }
  ] },
  "ippon-seoi-nage": { cam: { yaw: 25, pitch: 10 }, passi: [
    st1,
    { tori: { pelvis: [-6, 92, 0], yaw: 0, lean: -4, piedi: { dx: [4, 0, 13], sx: [-10, 0, -13] }, mani: { dx: [40, 126, 8], sx: [10, 116, -30] } },
      uke: { pelvis: [56, 94, 0], yaw: 180, lean: 16, piedi: { dx: [58, 0, -13], sx: [64, 0, 13] }, mani: { dx: [14, 126, -8], sx: [18, 104, 24] } },
      frecce: [{ da: [46, 150, 0], a: [18, 150, -24] }] },
    { tori: { pelvis: [44, 80, 0], yaw: 180, lean: 12, piedi: { dx: [46, 0, -10], sx: [46, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, gomito: { dx: [0, -1, -.3] }, mani: { dx: [62, 126, -14], sx: [22, 112, -26] } },
      uke: { pelvis: [66, 94, 0], yaw: 180, lean: 22, piedi: { dx: [62, 0, -13], sx: [66, 0, 13] }, mani: { dx: [34, 118, 6], sx: [40, 100, 18] } },
      frecce: [{ da: [10, 2, 13], a: [42, 2, -8], col: "#6b7480", dash: true }] },
    { tori: { pelvis: [46, 86, 0], yaw: 180, lean: 55, piedi: { dx: [48, 0, -10], sx: [48, 0, 10] }, ginocchio: { dx: [-1, 0, 0], sx: [-1, 0, 0] }, mani: { dx: [12, 116, -12], sx: [0, 92, -26] } },
      uke: { pelvis: [70, 122, -6], yaw: 180, lean: 78, tilt: -15, piedi: { dx: [104, 140, -14], sx: [108, 128, 8] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [6, 104, -20], sx: [28, 118, 18] } },
      frecce: [{ da: [100, 170, -6], a: [0, 80, -6] }] }
  ] },
  "osoto-gari": { cam: { yaw: 160, pitch: 10 }, passi: [
    st1,
    { tori: { pelvis: [12, 92, -2], yaw: 0, lean: 8, piedi: { dx: [8, 0, 13], sx: [18, 0, -13] }, mani: { dx: [58, 124, 6], sx: [40, 112, -30] } },
      uke: { pelvis: [70, 92, -4], yaw: 180, lean: -14, tilt: -6, piedi: { dx: [68, 0, -14], sx: [62, 0, 13] }, mani: { dx: [28, 124, -8], sx: [34, 104, 24] } },
      frecce: [{ da: [72, 150, 0], a: [100, 150, -22] }] },
    { tori: { pelvis: [44, 90, -14], yaw: -12, lean: 14, piedi: { dx: [36, 22, 4], sx: [54, 0, -36] }, ginocchio: { dx: [1, 0.3, 0] }, mani: { dx: [70, 122, 2], sx: [52, 116, -40] } },
      uke: { pelvis: [74, 92, -6], yaw: 180, lean: -16, tilt: -8, piedi: { dx: [70, 0, -14], sx: [62, 0, 13] }, mani: { dx: [46, 124, -16], sx: [48, 104, 18] } },
      frecce: [{ da: [30, 2, -14], a: [50, 2, -34], col: "#6b7480", dash: true }] },
    { tori: { pelvis: [64, 88, -38], yaw: -30, lean: 30, piedi: { dx: [114, 62, -22], sx: [56, 0, -46] }, ginocchio: { dx: [0.3, -1, 0] }, gomito: { sx: [0, -1, -1] }, mani: { dx: [86, 116, -2], sx: [74, 100, -34] } },
      uke: { pelvis: [90, 78, -8], yaw: 180, lean: -44, tilt: -8, piedi: { dx: [58, 46, -16], sx: [68, 0, 13] }, ginocchio: { dx: [-1, .4, 0] }, mani: { dx: [60, 110, -18], sx: [62, 98, 14] } },
      frecce: [{ da: [96, 40, -40], a: [124, 74, -40], col: "#c8372d" }, { da: [96, 140, -10], a: [130, 92, -16] }] }
  ] },
  "hon-kesa-gatame": { cam: { yaw: -35, pitch: 32 }, passi: (() => {
    const uke = { pelvis: [40, 12, 0], yaw: 180, lean: -88, piedi: { dx: [-40, 6, -16], sx: [-40, 6, 16] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [56, 26, -40], sx: [60, 8, 34] } };
    const tori = { pelvis: [66, 14, -38], yaw: 15, lean: 10, tilt: 45, piedi: { dx: [140, 4, -76], sx: [-4, 4, -90] }, ginocchio: { dx: [0, 1, 0], sx: [0, 1, 0] }, mani: { dx: [104, 16, 8], sx: [54, 26, -46] } };
    return [
      { tori: { ...tori, tilt: 20, mani: { dx: [90, 30, -20], sx: [60, 30, -50] } }, uke },
      { tori, uke },
      { tori: { ...tori, tilt: 55 }, uke, frecce: [{ da: [74, 80, -50], a: [84, 50, -10] }] },
      { tori: { ...tori, tilt: 55, piedi: { dx: [146, 4, -86], sx: [-10, 4, -100] } }, uke }
    ];
  })() }
};
  T.forEach(tc => { const L = LATO[tc.id]; if (L) L.passi.forEach((p, i) => { if (tc.passi[i]) { tc.passi[i].lato = p; tc.cam = L.cam; } }); });
})();
