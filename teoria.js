/* Pagine di teoria. Ogni pagina ha: id, title, text (riga nel menu), blocks.
   Tipi di blocco: text, h, list, table, cards, chips, accordion, tree, steps, callout, checklist, links.
   Nei testi **doppio asterisco** = grassetto. I nomi nei blocchi "chips" si aprono con il significato se sono nel glossario. */
window.TEORIA = [
  {
    id: "storia", title: "Storia e fondatore", text: "Kano, il Kodokan, dal ju jitsu al judo",
    blocks: [
      { type: "text", text: "Il **judo** nasce in Giappone nel **1882**, quando **Jigoro Kano** (1860–1938) apre a Tokyo il **Kodokan**, «il luogo in cui si studia la via». Kano aveva studiato diverse scuole di **ju jitsu** e le aveva riordinate in un metodo educativo, togliendo le tecniche più pericolose e aggiungendo il principio di allenarsi liberamente (randori) senza farsi male." },
      { type: "h", text: "Da dove deriva" },
      { type: "text", text: "Dal ju jitsu dei samurai. Dalla scuola **Tenshin shin'yo ryu**, più civile, Kano prese molte tecniche di controllo a terra e il Katame no kata; dalla **Kito ryu**, più militare, le proiezioni e il Nage no kata e il Koshiki no kata." },
      { type: "h", text: "Cosa significa la parola" },
      { type: "cards", items: [
        { title: "Ju", text: "cedevole, flessibile, morbido" },
        { title: "Do", text: "via, strada: il percorso di vita che si impara allenandosi" },
        { title: "Judo", text: "**la via della cedevolezza**" },
        { title: "Ju jitsu", text: "**l'arte della cedevolezza** (jitsu = tecnica, arte)" }
      ] },
      { type: "h", text: "Date da ricordare" },
      { type: "table", head: ["Anno", "Fatto"], rows: [
        ["1860", "Nasce Jigoro Kano, a Mikage (Hyogo)"],
        ["1882", "Fondazione del Kodokan a Tokyo"],
        ["1895", "Kano definisce il Gokyo no waza (poi rivisto nel 1920)"],
        ["1964", "Il judo entra alle Olimpiadi (Tokyo, gare maschili)"],
        ["1992", "Le donne gareggiano nel judo olimpico (dimostrazione già nel 1988)"]
      ] },
      { type: "callout", tone: "info", title: "Da controllare", text: "Le date sono quelle che si ritrovano di solito nei manuali: se il maestro insegna date diverse per l'esame, segui lui." }
    ]
  },
  {
    id: "principi", title: "Principi del judo", text: "Massima efficienza, aiuto reciproco, cedevolezza",
    blocks: [
      { type: "cards", items: [
        { title: "Seiryoku zen'yo", sub: "Massima efficienza", text: "Usare al meglio le energie del corpo e della mente. Non sprecare forza: ottenere il massimo col minimo sforzo." },
        { title: "Jita kyoei", sub: "Prosperità e benessere reciproci", text: "Ci si allena **con** il compagno, non **contro** di lui. Si migliora insieme, e chi cade oggi fa crescere chi proietta." },
        { title: "Ju yoku go o seisu", sub: "La cedevolezza vince la forza", text: "Se l'avversario spinge, si cede e si sfrutta la sua spinta; se tira, si entra." }
      ] },
      { type: "h", text: "Il saluto e il rispetto" },
      { type: "text", text: "Il **rei** (saluto) si fa entrando e uscendo dal tatami, al maestro e al compagno prima e dopo ogni esercizio. Il judo comincia e finisce con il rispetto." },
      { type: "h", text: "I principi dei kata" },
      { type: "text", text: "Nel Nage no kata si studiano principi tattici che tornano anche nel randori." },
      { type: "table", head: ["Principio", "Significato"], rows: [
        ["Sen", "Prendere l'iniziativa"],
        ["Go no sen", "Contrastare l'iniziativa dell'avversario e sfruttarla"],
        ["Sen no sen", "Anticipare l'iniziativa"],
        ["Omote", "Cogliere l'opportunità"],
        ["Hyoshi", "Attacco in combinazione (renraku waza)"]
      ] }
    ]
  },
  {
    id: "fasi", title: "Le tre fasi di una tecnica", text: "Kuzushi, tsukuri, kake, e le 8 direzioni",
    blocks: [
      { type: "steps", items: [
        { title: "Kuzushi · squilibrio", text: "Si rompe l'equilibrio di uke: con trazione, spinta o approfittando del suo movimento." },
        { title: "Tsukuri · preparazione", text: "Tori entra: si posiziona e adatta il corpo per poter eseguire la proiezione." },
        { title: "Kake · esecuzione", text: "La tecnica si completa e uke cade." }
      ] },
      { type: "text", text: "Le tre fasi sono **collegate**: nelle tecniche ben fatte sembrano un unico gesto. Per questo si ripetono gli **uchi komi**, cioè le entrate, senza proiettare." },
      { type: "h", text: "Le otto direzioni dello squilibrio" },
      { type: "text", text: "**Happo no kuzushi**: davanti, dietro, destra, sinistra e le quattro diagonali. Ogni tecnica ha la sua direzione di squilibrio." },
      { type: "table", head: ["Direzione", "Esempi di tecniche"], rows: [
        ["Avanti", "Seoi nage, O goshi, Tai otoshi"],
        ["Indietro", "O soto gari, O uchi gari"],
        ["Avanti-destra / avanti-sinistra", "Harai goshi, Uchi mata"],
        ["Indietro-destra / indietro-sinistra", "Ko soto gari, Ko uchi gari, Hiza guruma"],
        ["Di lato", "De ashi barai, Okuri ashi barai"]
      ] },
      { type: "callout", tone: "info", text: "La tabella è un promemoria generale, non un elenco ufficiale: la direzione esatta cambia con la presa e il movimento di uke." }
    ]
  },
  {
    id: "classificazione", title: "Come si dividono le tecniche", text: "Nage waza, katame waza, atemi waza",
    blocks: [
      { type: "text", text: "Le tecniche del judo (**waza**) si dividono in tre grandi famiglie. Nelle gare si usano le prime due." },
      { type: "tree", items: [
        { label: "Nage waza", text: "tecniche di proiezione", children: [
          { label: "Tachi waza", text: "in piedi", children: [
            { label: "Te waza", text: "braccia (seoi nage, kata guruma, tai otoshi, uki otoshi)" },
            { label: "Koshi waza", text: "anca (o goshi, uki goshi, harai goshi, tsurikomi goshi)" },
            { label: "Ashi waza", text: "gambe (osoto gari, ouchi gari, de ashi barai, hiza guruma)" }
          ] },
          { label: "Sutemi waza", text: "sacrificio", children: [
            { label: "Ma sutemi waza", text: "sulla schiena (tomoe nage, sumi gaeshi)" },
            { label: "Yoko sutemi waza", text: "su un fianco (yoko gake, uki waza)" }
          ] }
        ] },
        { label: "Katame waza", text: "tecniche di controllo (ne waza)", children: [
          { label: "Osaekomi waza", text: "immobilizzazioni" },
          { label: "Shime waza", text: "strangolamenti" },
          { label: "Kansetsu waza", text: "leve articolari (in gara solo al gomito)" }
        ] },
        { label: "Atemi waza", text: "percussioni: non si usano in gara, si studiano nei kata e nel Ju Jitsu" }
      ] },
      { type: "h", text: "Combinazioni e contro-tecniche" },
      { type: "cards", items: [
        { title: "Renraku waza", text: "Combinazioni: una tecnica ne prepara un'altra. Esempio: ko uchi gari seguita da o uchi gari quando uke reagisce." },
        { title: "Renzoku waza", text: "Ripetizioni: la stessa tecnica (o catena di tecniche) a ripetizione." },
        { title: "Kaeshi (gaeshi) waza", text: "Contro-tecniche: si sfrutta l'attacco di uke per proiettarlo." }
      ] }
    ]
  },
  {
    id: "gokyo", title: "Gokyo · le 40 proiezioni", text: "I cinque gruppi di Kano, da toccare per il significato",
    blocks: [
      { type: "text", text: "Il **Gokyo** («cinque insegnamenti») è l'elenco di 40 tecniche di proiezione in 5 gruppi (**kyo**) di 8, ordinate per difficoltà. Tocca un nome per vedere il significato." },
      { type: "chips", title: "1° kyo", items: ["De ashi barai", "Hiza guruma", "Sasae tsurikomi ashi", "Uki goshi", "O soto gari", "O goshi", "O uchi gari", "Seoi nage"] },
      { type: "chips", title: "2° kyo", items: ["Ko soto gari", "Ko uchi gari", "Koshi guruma", "Tsurikomi goshi", "Okuri ashi barai", "Tai otoshi", "Harai goshi", "Uchi mata"] },
      { type: "chips", title: "3° kyo", items: ["Ko soto gake", "Tsuri goshi", "Yoko otoshi", "Ashi guruma", "Hane goshi", "Harai tsurikomi ashi", "Tomoe nage", "Kata guruma"] },
      { type: "chips", title: "4° kyo", items: ["Sumi gaeshi", "Tani otoshi", "Hane makikomi", "Sukui nage", "Utsuri goshi", "O guruma", "Soto makikomi", "Uki otoshi"] },
      { type: "chips", title: "5° kyo", items: ["Osoto guruma", "Uki waza", "Yoko wakare", "Yoko guruma", "Ushiro goshi", "Ura nage", "Sumi otoshi", "Yoko gake"] },
      { type: "callout", tone: "info", title: "Oltre il Gokyo", text: "Il Kodokan riconosce altre proiezioni (chiamate **shinmeisho no waza**, aggiunte nel tempo). Alcune tecniche sono vietate in gara: kani basami, kawazu gake, do jime e ashi garami." }
    ]
  },
  {
    id: "base", title: "Posizioni, prese e spostamenti", text: "Shizen tai, jigo tai, kumi kata, ayumi ashi, tsugi ashi, tai sabaki",
    blocks: [
      { type: "cards", items: [
        { title: "Shizen tai", sub: "posizione fondamentale", text: "In piedi, naturale: piedi alla larghezza delle spalle, ginocchia morbide, schiena dritta, sguardo avanti. È la posizione di partenza." },
        { title: "Jigo tai", sub: "posizione difensiva", text: "Piedi più larghi, ginocchia piegate, baricentro basso: ci si difende da un attacco o da una spinta." },
        { title: "Kumi kata", sub: "le prese", text: "**Presa fondamentale:** una mano sul bavero (altezza clavicola) e l'altra sulla manica all'altezza del gomito." },
        { title: "Ayumi ashi", sub: "spostamento naturale", text: "Si cammina, un passo dopo l'altro." },
        { title: "Tsugi ashi", sub: "piede-scaccia-piede", text: "Un piede avanza e l'altro lo raggiunge, senza incrociare le gambe." },
        { title: "Tai sabaki", sub: "spostamento circolare", text: "Si ruota il corpo attorno a un piede per schivare o per entrare in tecnica." },
        { title: "Tsuri ashi", sub: "movimento dei piedi", text: "Il piede scivola vicino al tatami senza staccarsi: così si resta stabili." }
      ] },
      { type: "h", text: "Le cadute (ukemi waza)" },
      { type: "text", text: "Si imparano per prime: sapere cadere permette di allenarsi in sicurezza. In tutte, **il mento resta al petto** e si espira mentre si cade." },
      { type: "table", head: ["Caduta", "Come si fa"], rows: [
        ["Ushiro ukemi", "All'indietro: mento al petto, schiena arrotondata, le braccia battono a circa 30-45° dal corpo"],
        ["Yoko ukemi", "Laterale: un braccio batte a terra a circa 45°, gambe leggermente divaricate e rilassate"],
        ["Mae ukemi", "In avanti"],
        ["Mae mawari ukemi", "Arrotolata in avanti: si rotola sopra la spalla e si batte con il braccio"],
        ["Capovolte", "In avanti e indietro, senza battere a terra: si rotola sulla schiena arrotondata"]
      ] },
      { type: "callout", tone: "warn", title: "Dopo il laser", text: "Per Marco: cadute, capovolte e contatto solo dopo il via libera dell'oculista. Vedi la pagina «Paletti per l'occhio» nel programma di allenamento." }
    ]
  },
  {
    id: "neWaza", title: "Ne waza · lavoro a terra", text: "Immobilizzazioni, strangolamenti, leve, guardia",
    blocks: [
      { type: "text", text: "Il **ne waza** comprende tre gruppi di tecniche di controllo (**katame waza**). Tocca i nomi per vedere il significato." },
      { type: "chips", title: "Osaekomi waza · immobilizzazioni", items: ["Hon kesa gatame", "Kuzure kesa gatame", "Ushiro kesa gatame", "Makura kesa gatame", "Kata gatame", "Yoko shiho gatame", "Kuzure yoko shiho gatame", "Kami shiho gatame", "Kuzure kami shiho gatame", "Tate shiho gatame"],
        text: "In gara l'immobilizzazione vale 20 s = **ippon**, 10–19 s = **waza-ari**, 5–9 s = **yuko**." },
      { type: "chips", title: "Shime waza · strangolamenti", items: ["Hadaka jime", "Okuri eri jime", "Kata ha jime", "Sankaku jime", "Sode guruma jime", "Tsukkomi jime", "Nami juji jime", "Gyaku juji jime", "Kata juji jime", "Katate jime", "Ryote jime"] },
      { type: "chips", title: "Kansetsu waza · leve articolari", items: ["Ude garami", "Ude hishigi juji gatame", "Ude hishigi ude gatame", "Ude hishigi hiza gatame", "Ude hishigi waki gatame", "Ude hishigi hara gatame", "Sankaku gatame"] },
      { type: "h", text: "Altro nel ne waza" },
      { type: "list", items: [
        "**Rovesciamenti:** togliere la posizione a uke quando è a quattro zampe (quadrupedica) o disteso",
        "**Lavoro da guardia:** uscire dalla guardia chiusa e aperta, e rovesciare, strangolare o fare leve dalla guardia",
        "**Transizione:** si può passare da tachi waza a ne waza e viceversa"
      ] }
    ]
  },
  {
    id: "regole", title: "Regole di gara IJF 2025–2028", text: "Punteggi, penalità e novità del regolamento",
    blocks: [
      { type: "callout", tone: "info", title: "Fonte", text: "Sintesi dell'«Aggiornamento del Regolamento delle competizioni di Judo 2025–2028» (IJF Technical Seminar, Istanbul, dicembre 2024). Per i dettagli vale il testo ufficiale IJF e quanto spiega il maestro." },
      { type: "h", text: "Punteggi in piedi (tachi waza)" },
      { type: "table", head: ["Punto", "Atterraggio di uke"], rows: [
        ["Ippon", "Completamente sul dorso, con forza, velocità e controllo. Anche rotolando da parte a parte, se non ci sono interruzioni."],
        ["Waza-ari", "Incompleto sul dorso o sul fianco, con asse delle spalle a più di 90° rispetto al tatami."],
        ["Yuko", "Sul fianco (spalle a circa 90°), sull'alto della schiena, sul fianco e gomito o sui glutei."]
      ] },
      { type: "callout", tone: "warn", title: "Niente yuko se...", items: ["l'atterraggio è sul fianco ma pancia, basso ventre o entrambe le ginocchia toccano il tatami", "l'atterraggio è sui glutei ma il busto è chiaramente piegato verso le ginocchia"] },
      { type: "h", text: "Osaekomi (a terra)" },
      { type: "table", head: ["Durata", "Punto"], rows: [["20 secondi", "Ippon"], ["10–19 secondi", "Waza-ari"], ["5–9 secondi", "Yuko"]] },
      { type: "text", text: "Contano solo le tecniche di immobilizzazione (con i principi kesa, shiho o ura) in cui si **immobilizza e controlla** uke: il solo controllo non basta." },
      { type: "h", text: "Penalità (shido)" },
      { type: "cards", items: [
        { title: "Kumi kata", text: "Con le prese convenzionali, **30 secondi** per preparare un attacco, poi shido per passività. Prese non convenzionali: solo per proiettare o attaccare." },
        { title: "Falso attacco", text: "Non attaccare realmente, attaccare senza prese, ripetere falsi attacchi senza rompere l'equilibrio, infilare una gamba tra quelle di uke per bloccare." },
        { title: "Uscita dall'area", text: "Uscire volontariamente dall'area di combattimento (in piedi o a terra)." },
        { title: "Prese sotto la cintura", text: "Giacca anche sotto la cintura e pantaloni fino all'inguine sì; agganciare o afferrare le gambe, o toccarle sotto l'inguine no." },
        { title: "Presa dell'orso", text: "Permessa, tranne quando le mani si chiudono formando un cerchio attorno al tronco di uke." },
        { title: "Dentro maniche e pantaloni", text: "In piedi: dentro le maniche sì, dentro i pantaloni no. A terra: entrambi sì." }
      ] },
      { type: "h", text: "Squalifica (hansoku-make)" },
      { type: "list", items: [
        "**Diving:** tuffarsi con la testa a terra piegando il collo (uchi mata, harai goshi, seoi nage, tai otoshi, kata guruma, tsuri goshi, ura nage) o saltare in avanti con uke sulle spalle",
        "**Kansetsu o shime in piedi** con rischio elevato per uke e senza possibilità di uscita (con rischio basso: shido)",
        "Tecniche vietate dal Kodokan per tutte le classi: kawazu gake, kani basami, do jime, ashi garami"
      ] },
      { type: "h", text: "Differenze per le categorie giovanili (cadetti e inferiori)" },
      { type: "list", items: [
        "Tori non può toccare il tatami con la testa per proiettare (shido, nessun punteggio)",
        "Uke non può usare la testa per ruotare e difendersi (shido, punto a tori se la caduta è valida)",
        "Reverse seoi nage vietato (shido), consentito per seniores e juniores",
        "L'atterraggio in **bridge** vale sempre ippon, in tutte le classi"
      ] }
    ]
  },
  {
    id: "kata", title: "I kata", text: "Le forme: Nage no kata e Katame no kata",
    blocks: [
      { type: "text", text: "Un **kata** è una forma: una sequenza fissa di tecniche che trasmette i principi del judo. Nel judo il kata è la «grammatica»; il randori e lo shiai sono il «componimento libero». Si studiano insieme." },
      { type: "chips", title: "I sei kata riconosciuti da Kano", items: ["Nage no kata", "Katame no kata", "Kime no kata", "Ju no kata", "Koshiki no kata", "Itsutsu no kata"], text: "Il Nage no kata e il Koshiki no kata vengono dalla Kito ryu; il Katame no kata e il Kime no kata dalla Tenshin shin'yo ryu; Ju no kata e Itsutsu no kata sono creazioni di Kano. Nage no kata e Katame no kata insieme formano il **Randori no kata**." },
      { type: "h", text: "Nage no kata · la forma dei lanci" },
      { type: "text", text: "15 tecniche in 5 gruppi, ognuna eseguita da **entrambi i lati**: il judo richiede pratica ambidestra. Si applicano le tre fasi (kuzushi, tsukuri, kake) e i principi sen, go no sen, sen no sen, omote, hyoshi." },
      { type: "table", head: ["Gruppo", "Tecniche (principio)"], rows: [
        ["Te waza", "Uki otoshi (omote) · Seoi nage (go no sen) · Kata guruma (omote)"],
        ["Koshi waza", "Uki goshi (go no sen) · Harai goshi (omote) · Tsurikomi goshi (hyoshi)"],
        ["Ashi waza", "Okuri ashi barai (sen) · Sasae tsurikomi ashi (sen no sen) · Uchi mata (sen)"],
        ["Ma sutemi waza", "Tomoe nage (sen) · Ura nage (go no sen) · Sumi gaeshi (sen)"],
        ["Yoko sutemi waza", "Yoko gake (omote) · Yoko guruma (hyoshi) · Uki waza (sen)"]
      ] },
      { type: "h", text: "Katame no kata · la forma dei controlli" },
      { type: "text", text: "15 tecniche in 3 gruppi da 5: immobilizzazioni, strangolamenti e leve." },
      { type: "chips", title: "Osaekomi", items: ["Kesa gatame", "Kata gatame", "Kami shiho gatame", "Yoko shiho gatame", "Kuzure kami shiho gatame"] },
      { type: "chips", title: "Shime", items: ["Kata juji jime", "Hadaka jime", "Okuri eri jime", "Kata ha jime", "Gyaku juji jime"] },
      { type: "chips", title: "Kansetsu", items: ["Ude garami", "Ude hishigi juji gatame", "Ude hishigi ude gatame", "Ude hishigi hiza gatame", "Ashi garami"] },
      { type: "callout", tone: "info", title: "Fonte e verifica", text: "Il Nage no kata è tratto dalla dispensa «I Kata di Judo» (M° Daniele Mainenti, 6° dan, edizione 2023). L'elenco del Katame no kata è dalla tradizione Kodokan: verifica con il maestro l'ordine esatto." },
      { type: "links", items: [{ href: "https://kdkjd.org/kodokan-kata-textbook/", label: "Manuali ufficiali dei kata (Kodokan)", text: "PDF in inglese di Nage, Katame, Kime, Ju, Goshin jutsu, Itsutsu e Koshiki no kata ↗" }] }
    ]
  },
  {
    id: "jujitsu", title: "Ju Jitsu · le basi", text: "Propedeutica, atemi, parate e difesa personale",
    blocks: [
      { type: "callout", tone: "info", title: "Fonte", text: "«Programma fondamentali Ju Jitsu FIJLKAM» (esami Dan) e programmi di cintura Ju Jitsu 2026. La parte propedeutica è comune a tutti i gradi." },
      { type: "chips", title: "Posizioni del corpo (shisei)", items: ["Shizen tai", "Jigo tai", "Musubi dachi", "Heisoku dachi", "Hachiji dachi", "Kokutsu dachi", "Zenkutsu dachi", "Kiba dachi"] },
      { type: "chips", title: "Guardie (kamae)", items: ["Gedan", "Chudan", "Jodan"] },
      { type: "chips", title: "Percussioni con le braccia", items: ["Shuto uchi", "Haito uchi", "Empi uchi", "Oi tsuki", "Gyaku tsuki", "Kizami tsuki", "Uraken uchi", "Teisho uchi"] },
      { type: "chips", title: "Calci", items: ["Mae geri", "Hiza geri", "Mawashi geri", "Yoko geri", "Ushiro geri", "Ura mawashi geri", "Kakato geri"] },
      { type: "chips", title: "Parate (uke waza)", items: ["Jodan age uke", "Uchi uke", "Soto uke", "Gedan barai", "Juji uke"] },
      { type: "chips", title: "Leve a polso e braccio", items: ["Kote gaeshi", "Ikkyo", "Nikyo", "Sankyo", "Shiho nage", "Waki gatame", "Hara gatame"] },
      { type: "h", text: "Come si costruisce una difesa personale" },
      { type: "text", text: "Nel programma FIJLKAM la «difesa personale» è lo studio delle applicazioni che il praticante elabora a partire dai gesti fondamentali. Ogni applicazione si legge in sette elementi:" },
      { type: "steps", items: [
        { title: "Distanza", text: "Lo spazio e il tempo utili per difendersi, che cambiano con il tipo di attacco." },
        { title: "Guardia", text: "La posizione più funzionale per muoversi con velocità, senza esasperazioni stilistiche." },
        { title: "Attacco", text: "Eseguito con determinazione: percussioni, prese, strangolamenti, armi." },
        { title: "Controllo dell'attacco", text: "Intercettare e gestire l'attacco rompendo l'equilibrio posturale dell'aggressore." },
        { title: "Disturbo dell'attenzione", text: "Un movimento o una percussione di disturbo, con direzione coerente con lo squilibrio che segue." },
        { title: "Riduzione a terra", text: "Portare l'avversario a terra con squilibrio, trascinamento o proiezione." },
        { title: "Controllo a terra", text: "Bloccaggi, compressioni, leve o strangolamenti; preferibilmente con l'avversario prono." }
      ] },
      { type: "text", text: "**Nota di sicurezza dal programma:** si evitano tecniche di sacrificio che vincolino chi esegue all'aggressore in modo troppo limitante." },
      { type: "text", text: "Per le cinture, il Ju Jitsu del dojo usa anche le «tecniche di settore» del metodo Bianchi (numeri e lettere come 1A, 7A, ...) e il Gyaku no kata della Hontai Yoshin Ryu. Vedi la pagina Cinture." }
    ]
  },
  {
    id: "domande", title: "Domande d'esame · teoria", text: "Le domande dei programmi, con una traccia di risposta",
    blocks: [
      { type: "text", text: "Sono le domande che compaiono nei programmi di esame delle cinture. Le risposte sono tracce da imparare e **da confrontare con quello che spiega il maestro**." },
      { type: "accordion", items: [
        { title: "Quando nasce il Judo? Chi è il fondatore?", blocks: [{ type: "text", text: "Nasce nel **1882** a Tokyo ad opera di **Jigoro Kano**, che fonda il **Kodokan**." }] },
        { title: "Da dove deriva il Judo?", blocks: [{ type: "text", text: "Dal **ju jitsu** dei samurai, in particolare dalle scuole **Tenshin shin'yo ryu** e **Kito ryu**, che Kano studiò e riordinò in un metodo educativo." }] },
        { title: "Cosa significa la parola Judo?", blocks: [{ type: "text", text: "«**Via della cedevolezza**»: ju = cedevole, do = via." }] },
        { title: "Quali sono i principi del Judo?", blocks: [{ type: "text", text: "**Seiryoku zen'yo** (massima efficienza nell'uso delle energie) e **jita kyoei** (prosperità e benessere reciproci). Il principio guida è che la cedevolezza vince la forza." }] },
        { title: "Quali sono le tre fasi di esecuzione di una tecnica?", blocks: [{ type: "text", text: "**Kuzushi** (squilibrio), **tsukuri** (preparazione/entrata), **kake** (esecuzione)." }] },
        { title: "Come si suddividono le tecniche di Judo?", blocks: [{ type: "text", text: "In **nage waza** (proiezioni: tachi waza e sutemi waza), **katame waza** (controlli: osaekomi, shime, kansetsu) e **atemi waza** (percussioni, non usate in gara). Le tachi waza si dividono in te waza, koshi waza e ashi waza; i sutemi in ma sutemi e yoko sutemi." }] },
        { title: "Come funziona l'arbitraggio nel Judo? (cintura marrone)", blocks: [{ type: "text", text: "Si vede la pagina **Regole di gara IJF 2025–2028**: punti (ippon, waza-ari, yuko), osaekomi (20/10–19/5–9 secondi), penalità (shido) e squalifiche (hansoku-make), con i comandi dell'arbitro nel glossario (hajime, matte, sore made, ...)." }] },
        { title: "Elementi di organizzazione federale (cintura marrone)", blocks: [{ type: "callout", tone: "warn", text: "Da chiedere al maestro: struttura FIJLKAM (federazione italiana), CONI, comitati regionali e società sportive." }] }
      ] }
    ]
  }
];
