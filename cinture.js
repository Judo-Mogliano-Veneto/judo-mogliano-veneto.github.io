/* Programmi per cintura. Il maestro non ha ancora definito i programmi del 2026/27, quindi ogni cintura è «in cantiere».
   Quando arrivano le informazioni:
   1. cambia "stato" di quella cintura (es. "definito") e scrivi la data in "aggiornato";
   2. riempi "programma" con le sezioni nuove (stesso formato di "riferimento");
   3. il programma degli anni scorsi resta in "riferimento" solo come promemoria, puoi toglierlo.
   Formato di una sezione: { titolo: "Tecniche in piedi", voci: ["O soto gari", ...] } */
(function () {
  // «Shizen tai, jigo tai» diventa due voci; le frasi lunghe restano intere
  const split = v => /[:()]/.test(v) || !v.includes(",") || v.split(",").some(p => p.trim().split(/\s+/).length > 3) ? [v] : v.split(",").map(p => p.trim().replace(/^./, ch => ch.toUpperCase()));
  const sec = (titolo, voci) => ({ titolo, voci: voci.flatMap(split) });
  const teoriaJudo = ["Quando nasce il Judo? Chi è il fondatore?", "Da dove deriva il Judo?", "Cosa significa la parola Judo?", "Quali sono i principi del Judo?"];
  const base = sec("Posizioni, prese e spostamenti", ["Shizen tai, jigo tai", "Kumi kata", "Ayumi ashi, tsugi ashi, tai sabaki", "Tsuri ashi"]);

  const ukemiAlto = sec("Cadute (ukemi waza)", ["Ushiro ukemi", "Yoko ukemi", "Mae ukemi", "Mae mawari ukemi", "Capovolta in avanti", "Capovolta indietro"]);

  const gialla = {
    teoria: teoriaJudo,
    pratica: [
      base,
      sec("Cadute (ukemi waza)", ["Ushiro ukemi", "Yoko ukemi", "Mae mawari ukemi", "Capovolta in avanti", "Capovolta indietro"]),
      sec("Tecniche in piedi (tachi waza)", ["O soto gari", "O uchi gari", "De ashi barai", "Uki goshi", "O goshi", "Hiza guruma", "Ippon seoi nage"]),
      sec("Immobilizzazioni", ["Hon kesa gatame", "Kuzure kesa gatame", "Yoko shiho gatame", "Tate shiho gatame"]),
      sec("Rovesciamenti e guardia", ["Almeno due rovesciamenti", "Uscire dalla guardia chiusa", "Almeno tre rovesciamenti dalla guardia"])
    ]
  };
  const arancione = {
    teoria: [...teoriaJudo, "Quali sono le tre fasi di esecuzione di una tecnica di Judo?"],
    pratica: [
      sec("Posizioni, prese e spostamenti", ["Shizen tai, jigo tai", "Kumi kata (prese fondamentali)", "Ayumi ashi, tsugi ashi, tai sabaki", "Tsuri ashi"]),
      ukemiAlto,
      sec("Tecniche in piedi (tachi waza)", ["O soto gari", "Ko soto gari", "O uchi gari", "Ko uchi gari", "Hiza guruma", "De ashi barai", "Okuri ashi barai", "Uki goshi", "O goshi", "Koshi guruma", "Harai goshi", "Ippon seoi nage", "Alcuni renraku e gaeshi"]),
      sec("Immobilizzazioni", ["Hon kesa gatame", "Kuzure kesa gatame", "Ushiro kesa gatame", "Yoko shiho gatame", "Kuzure yoko shiho gatame", "Tate shiho gatame", "Kata gatame"]),
      sec("Rovesciamenti e guardia", ["Almeno due rovesciamenti, da uke a quattro zampe e disteso", "Uscire dalla guardia chiusa e aperta", "Almeno tre rovesciamenti dalla guardia"])
    ]
  };
  const verde = {
    teoria: [...teoriaJudo, "Quali sono le tre fasi di esecuzione di una tecnica di Judo?", "Come si suddividono le tecniche di Judo?"],
    pratica: [
      sec("Posizioni, prese e spostamenti", ["Shizen tai, jigo tai", "Kumi kata (prese fondamentali)", "Ayumi ashi, tsugi ashi, tai sabaki", "Tsuri ashi"]),
      ukemiAlto,
      sec("Tecniche in piedi (tachi waza)", ["O soto gari", "Ko soto gari", "O uchi gari", "Ko uchi gari", "Hiza guruma", "De ashi barai", "Sasae tsurikomi ashi", "Okuri ashi barai", "Uki goshi", "O goshi", "Koshi guruma", "Harai goshi", "Hane goshi", "Uchi mata", "Ippon seoi nage", "Tai otoshi", "Renraku e gaeshi"]),
      sec("Immobilizzazioni", ["Hon kesa gatame", "Kuzure kesa gatame", "Ushiro kesa gatame", "Yoko shiho gatame", "Kuzure yoko shiho gatame", "Tate shiho gatame", "Kata gatame", "Kami shiho gatame"]),
      sec("Strangolamenti", ["Hadaka jime", "Okuri eri jime", "Kata ha jime", "Sankaku jime", "Sode guruma jime", "Nami juji jime", "Gyaku juji jime", "Kata juji jime"]),
      sec("Leve", ["Ude garami", "Ude hishigi juji gatame", "Ude hishigi ude gatame", "Ude hishigi waki gatame"]),
      sec("Rovesciamenti e guardia", ["Rovesciamenti da uke a quattro zampe e disteso", "Uscire dalla guardia chiusa e aperta", "Rovesciamenti, leve e strangolamenti dalla guardia"])
    ]
  };
  const blu = {
    teoria: [...teoriaJudo, "Quali sono le tre fasi di esecuzione di una tecnica di Judo?", "Come si suddividono le tecniche di Judo?"],
    pratica: [
      sec("Posizioni, prese e spostamenti", ["Shizen tai, jigo tai", "Kumi kata (prese fondamentali)", "Ayumi ashi, tsugi ashi, tai sabaki", "Tsuri ashi"]),
      ukemiAlto,
      sec("Tecniche in piedi (tachi waza)", ["O soto gari", "Ko soto gari", "O uchi gari", "Ko uchi gari", "Hiza guruma", "De ashi barai", "Sasae tsurikomi ashi", "Okuri ashi barai", "Uki goshi", "O goshi", "Koshi guruma", "Harai goshi", "Tsurikomi goshi", "Ippon seoi nage", "Tai otoshi", "Uchi mata", "Tsuri goshi", "Hane goshi", "Ashi guruma", "Almeno una tecnica di sacrificio (sutemi waza)", "Renraku e gaeshi"]),
      sec("Immobilizzazioni", ["Hon kesa gatame", "Kuzure kesa gatame", "Ushiro kesa gatame", "Yoko shiho gatame", "Kuzure yoko shiho gatame", "Tate shiho gatame", "Kata gatame", "Kami shiho gatame", "Kuzure kami shiho gatame"]),
      sec("Strangolamenti", ["Hadaka jime", "Okuri eri jime", "Kata ha jime", "Sankaku jime", "Sode guruma jime", "Tsukkomi jime", "Nami juji jime", "Gyaku juji jime", "Kata juji jime"]),
      sec("Leve", ["Ude garami", "Ude hishigi juji gatame", "Ude hishigi waki gatame", "Ude hishigi ude gatame", "Ude hishigi hiza gatame", "Sankaku gatame", "«Komlok» (scritto così nel programma: da chiarire con il maestro)"]),
      sec("Rovesciamenti e guardia", ["Rovesciamenti da uke a quattro zampe e disteso", "Uscire dalla guardia chiusa e aperta", "Rovesciamenti, strangolamenti e leve dalla guardia"])
    ]
  };
  const marrone = {
    teoria: [...teoriaJudo, "Quali sono le tre fasi di esecuzione di una tecnica di Judo?", "Come si suddividono le tecniche di Judo?", "Come funziona l'arbitraggio nel Judo?", "Elementi di organizzazione federale"],
    pratica: [
      sec("Posizioni, prese e spostamenti", ["Shizen tai, jigo tai", "Prese fondamentali e varianti (kumi kata)", "Ayumi ashi, tsugi ashi, tai sabaki", "Tsuri ashi"]),
      sec("Cadute (ukemi waza)", ["Ushiro ukemi", "Yoko ukemi", "Mae ukemi", "Mae mawari ukemi", "Capovolta in avanti e indietro", "Ruota e rondata"]),
      sec("Tecniche in piedi (tachi waza)", ["O soto gari", "Ko soto gari", "O uchi gari", "Ko uchi gari", "Hiza guruma", "De ashi barai", "Sasae tsurikomi ashi", "Okuri ashi barai", "Ashi guruma", "Uchi mata", "Uki goshi", "O goshi", "Koshi guruma", "Harai goshi", "Tsurikomi goshi", "Tsuri goshi", "Hane goshi", "Seoi nage (ippon, morote, kata, eri)", "Tai otoshi", "Kata guruma", "Almeno tre tecniche di sacrificio (tomoe nage, sumi gaeshi, hikikomi gaeshi, ...)", "Renraku e gaeshi"]),
      sec("Immobilizzazioni", ["Hon kesa gatame", "Kuzure kesa gatame", "Ushiro kesa gatame", "Yoko shiho gatame", "Kuzure yoko shiho gatame", "Tate shiho gatame", "Kata gatame", "Kami shiho gatame", "Kuzure kami shiho gatame"]),
      sec("Strangolamenti", ["Hadaka jime", "Okuri eri jime", "Kata ha jime", "Sankaku jime", "Sode guruma jime", "Tsukkomi jime", "Nami juji jime", "Gyaku juji jime", "Kata juji jime"]),
      sec("Leve", ["Ude garami", "Ude hishigi juji gatame", "Ude hishigi waki gatame", "Ude hishigi ude gatame", "Ude hishigi hiza gatame", "Sankaku gatame"]),
      sec("Rovesciamenti e guardia", ["Rovesciamenti da uke a quattro zampe e disteso", "Uscire dalla guardia chiusa e aperta", "Rovesciamenti, strangolamenti e leve dalla guardia"])
    ]
  };

  const jjTeoria = ["Cosa significa la parola Ju Jitsu?", "In quale contesto storico e per quale scopo è nato il Ju Jitsu?", "Come si possono suddividere gli stili o le scuole di Ju Jitsu?", "Che cos'è il metodo Bianchi? Come sono organizzate le tecniche al suo interno?"];
  const jjBase = [
    sec("Posizioni, guardie e spostamenti", ["Shizen tai, zenkutsu dachi, kokutsu dachi", "Guardie: gedan, chudan, jodan", "Ayumi ashi, tsugi ashi, tai sabaki", "Tsuri ashi"]),
  ];
  const jjColpi = [sec("Colpi (atemi waza)", ["Oi tsuki", "Gyaku tsuki", "Kizami tsuki", "Shuto uchi", "Mae geri", "Mawashi geri"]), sec("Parate (uke waza)", ["Gedan barai", "Soto uke", "Uchi uke", "Jodan age uke"])];
  const jjGialla = {
    teoria: jjTeoria,
    pratica: [...jjBase, sec("Cadute", ["Ushiro ukemi", "Mae mawari ukemi", "Capovolta in avanti", "Capovolta indietro"]), ...jjColpi,
      sec("Leve", ["Kote gaeshi", "Ikkyo (kote osae)", "Nikyo (kote mawashi)"]),
      sec("Tecniche di settore (metodo Bianchi)", ["Almeno otto tra: 4A, 16A, 2B, 17B, 5C, 6C, 1D, 13D, 1E, 9E"]),
      sec("Kata Hontai Yoshin Ryu", ["Le prime 5 tecniche del Gyaku no kata"]),
      sec("Difesa personale", ["Un'applicazione a scelta"])]
  };
  const jjArancione = {
    teoria: [...jjTeoria, "Breve presentazione dello stile Hontai Yoshin Ryu"],
    pratica: [...jjBase, sec("Cadute", ["Ushiro ukemi", "Yoko ukemi", "Mae ukemi", "Mae mawari ukemi", "Capovolta in avanti", "Capovolta indietro"]), ...jjColpi,
      sec("Leve", ["Kote gaeshi", "Ikkyo (kote osae)", "Nikyo (kote mawashi)", "Sankyo (kote hineri)"]),
      sec("Tecniche di settore (metodo Bianchi)", ["2A, 13A, 3B, 10B, 2C, 3C, 3D, 2E, 3E, 4E"]),
      sec("Kata Hontai Yoshin Ryu", ["Gyaku no kata"]),
      sec("Difesa personale", ["Un paio di applicazioni a scelta"])]
  };
  const jjVerde = {
    teoria: [...jjTeoria, "Breve presentazione dello stile Hontai Yoshin Ryu"],
    pratica: [...jjBase, sec("Cadute", ["Ushiro ukemi", "Yoko ukemi", "Mae ukemi", "Mae mawari ukemi", "Capovolta in avanti", "Capovolta indietro"]), ...jjColpi,
      sec("Leve", ["Kote gaeshi", "Ikkyo (kote osae)", "Nikyo (kote mawashi)", "Sankyo (kote hineri)"]),
      sec("Tecniche di settore (metodo Bianchi)", ["Le tecniche elencate e almeno tre concatenamenti: 1A, 7A, 9A, 17A, 1B, 4B, 18C, 17C, 7E, 14E"]),
      sec("Kata Hontai Yoshin Ryu", ["Gyaku no kata"]),
      sec("Difesa personale", ["Applicazioni a scelta"])]
  };

  window.CINTURE = {
    anno: "2026/27",
    lista: [
      { id: "bianca", nome: "Bianca", colore: "#f2f2ee", bordo: true, stato: "in cantiere", aggiornato: "", note: "" },
      { id: "gialla", nome: "Gialla", colore: "#f2c230", stato: "in cantiere", aggiornato: "", note: "", judo: gialla, jujitsu: jjGialla },
      { id: "arancione", nome: "Arancione", colore: "#ef8a2b", stato: "in cantiere", aggiornato: "", note: "", judo: arancione, jujitsu: jjArancione },
      { id: "verde", nome: "Verde", colore: "#2e9650", stato: "in cantiere", aggiornato: "", note: "", judo: verde, jujitsu: jjVerde },
      { id: "blu", nome: "Blu", colore: "#2a62c9", stato: "in cantiere", aggiornato: "", note: "", judo: blu },
      { id: "marrone", nome: "Marrone", colore: "#7a4a2a", stato: "in cantiere", aggiornato: "", note: "", judo: marrone },
      { id: "nera", nome: "Nera (dan)", colore: "#1b1f24", stato: "in cantiere", aggiornato: "", note: "Per gli esami dan il programma FIJLKAM di Ju Jitsu è nella pagina «Ju Jitsu · le basi» di Teoria." }
    ]
  };
})();
