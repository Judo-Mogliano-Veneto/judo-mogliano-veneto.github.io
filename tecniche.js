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
