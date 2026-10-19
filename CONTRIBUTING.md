# Come contribuire

Guida per chi lavora sull'app insieme a Marco. L'app è stata ideata e realizzata da **Marco Campodall'Orto**: le decisioni su contenuti e aspetto passano da lui.

## In breve
1. Fai le modifiche su un ramo nuovo, mai direttamente su `main`.
2. Provale sul tuo computer (vedi sotto), anche dalla visuale telefono del browser.
3. Apri una pull request su GitHub e chiedi la revisione a Marco (`Maeco96`).
4. Quando la PR viene unita a `main`, GitHub Pages pubblica il sito da solo in un paio di minuti.

## Far girare l'app sul tuo computer
Non c'è niente da installare né da compilare: bastano i file e un piccolo server locale (aprire `index.html` con doppio clic non basta, perché il service worker funziona solo da `http://localhost` o da `https`).

```sh
git clone https://github.com/judo-mogliano-veneto/judo-mogliano-veneto.github.io.git
cd judo-mogliano-veneto.github.io
python3 -m http.server 8000
```

Poi apri http://localhost:8000. In alternativa: `npx serve` oppure l'estensione «Live Server» di VS Code.

**Attenzione alla cache.** Il service worker (`sw.js`) tiene una copia dei file per l'uso offline. Se non vedi le tue modifiche: in Chrome apri gli Strumenti per sviluppatori › Application › Service Workers e spunta «Update on reload», oppure ricarica con Ctrl+Shift+R. Per vedere l'app come su un telefono usa la visuale dispositivo (Ctrl+Shift+M negli strumenti per sviluppatori).

Per controllare che un file JavaScript non abbia errori di sintassi: `node --check nomefile.js`.

## Come è organizzato il codice
Ogni file `.js` viene caricato da `index.html`, nell'ordine scritto lì, e mette i suoi dati o le sue funzioni in una variabile globale. L'ordine conta: un file può usare solo quello che i file caricati prima hanno già definito.

```
index.html      carica style.css e tutti i .js
 ├─ glossario.js   window.GLOSSARIO   termini (usati da render.js per i nomi toccabili)
 ├─ render.js      window.R           funzioni comuni: esc, rich, store, block, wire, chip, sheet
 ├─ figures.js     window.Fig         disegno delle figure degli esercizi
 ├─ exercises.js   window.EXERCISES   esercizi del programma post-LASIK
 ├─ content.js     window.CONTENT     testi del programma post-LASIK
 ├─ teoria.js      window.TEORIA      pagine di teoria
 ├─ tecniche.js    window.TECNICHE    schede tecnica passo per passo
 ├─ disegni.js     (aggiunge i disegni ai passi di TECNICHE)
 ├─ video.js       window.VIDEO, VIDEO_ALIAS, VIDEO_EXTRA
 ├─ quiz.js        window.Quiz
 ├─ cinture.js     window.CINTURE
 ├─ lezione.js     window.LEZIONE
 ├─ dojo.js        window.DOJO, window.INFO (crediti)
 ├─ pianta.js      window.Plan        disegni visti dall'alto
 ├─ laterale.js    window.Side        disegni visti di lato
 └─ app.js         schermate, router e barra in basso (va caricato per ultimo)
```

Le pagine sono scelte dall'indirizzo dopo `#`: per esempio `#/teoria/storia` o `#/tecniche/osotogari`. Il collegamento tra indirizzi e pagine è nella funzione `route()` in fondo ad `app.js`.

## Aggiungere contenuti
Quasi tutto si fa nei file dati, copiando una voce esistente e cambiandone i testi. Ogni file dati ha in cima un commento con il formato.

- **Un termine nel glossario** (`glossario.js`): `{ t: "Termine", cat: "Categoria", d: "significato", n: "nota facoltativa", alias: ["altra grafia"] }`. Il termine diventa toccabile in tutte le pagine e entra da solo nel quiz.
- **Una pagina di teoria** (`teoria.js`): `{ id, title, text, blocks: [...] }`. I tipi di blocco disponibili (`text`, `h`, `list`, `table`, `cards`, `chips`, `accordion`, `steps`, `callout`, `checklist`, `links`, ...) sono nella funzione `block()` di `render.js`. Nei testi `**doppio asterisco**` diventa grassetto.
- **Una scheda tecnica** (`tecniche.js`): `T.push({ id, nome, gruppo, kyo, passi: [{ titolo, testo }], errori, uchikomi, collegamenti, sicurezza })`. Il nome deve corrispondere a una voce del glossario perché la tecnica compaia nel catalogo.
- **I disegni di una tecnica** (`disegni.js`): `DISEGNI[id] = { pianta: [4 passi], lato: { cam, passi: [4 passi] } }`, con lo stesso `id` della scheda. Il formato delle pose è spiegato in cima a `pianta.js` e `laterale.js`.
- **Un video** (`video.js`): una riga `"Nome tecnica": "codice YouTube"`.
- **Un programma di cintura** (`cinture.js`): istruzioni passo per passo nel commento in cima al file. I programmi del 2026/27 li decide il maestro: finché non arrivano le cinture restano «in cantiere».
- **Orari ed eventi** (`dojo.js`).

Se aggiungi un **file nuovo**: inseriscilo in `index.html` (al posto giusto nell'ordine), nell'elenco `FILES` di `sw.js`, e aumenta il numero di `CACHE` in `sw.js` (es. da `guida-judo-v27` a `guida-judo-v28`). Senza quest'ultimo passo i telefoni continuano a usare la versione vecchia offline.

## Convenzioni
- **Lingua**: testi dell'app, commenti nel codice e messaggi di commit in italiano.
- **Stile del codice**: JavaScript moderno senza librerie esterne, virgolette doppie, indentazione di 2 spazi. Ogni file è chiuso in una funzione `(function () { ... })();` ed espone solo la sua variabile globale.
- **Sicurezza dei testi**: tutto ciò che finisce nell'HTML passa da `esc()` (o `rich()` per il grassetto), definite in `render.js`.
- **Nomi giapponesi**: scritti come nel glossario (es. «O soto gari»), così diventano toccabili e i video si collegano da soli.
- **Niente dati personali nel repository**: il repository è pubblico. Profilo, diario e punteggi restano sul telefono di chi usa l'app. Il programma post-LASIK in `content.js` ed `exercises.js` è la scheda personale di Marco: non va modificato né presentato come programma per tutti.
- **Disegni, non immagini generate**: le tecniche si mostrano con gli schemi di `pianta.js` e `laterale.js` e con i video ufficiali del Kodokan, non con immagini generate dall'intelligenza artificiale.
- **Commit piccoli** con un messaggio che dice cosa vede chi usa l'app (es. «Glossario: aggiunti i termini di arbitraggio»).

## Crediti e licenza
L'app è ideata e realizzata da **Marco Campodall'Orto**: il suo nome resta nel piè di pagina, nella pagina «Crediti e note legali» (`window.INFO` in `dojo.js`), nel `README.md` e nel file `LICENSE`. Non togliere né cambiare questi crediti.

Il codice è distribuito con licenza **MIT** (vedi `LICENSE`). Contribuendo accetti che il tuo contributo sia distribuito con la stessa licenza. I testi di judo sono riassunti di fonti di terzi e restano dei rispettivi titolari.
