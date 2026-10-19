# Judo Mogliano Veneto

App web installabile (PWA) per il judo del dojo di Mogliano Veneto: teoria, catalogo delle tecniche con disegni e video, programmi di cintura, glossario, quiz e allenamenti. Si apre a schermo intero sul telefono e funziona anche senza rete.

Indirizzo: https://judo-mogliano-veneto.github.io/

Vuoi contribuire? Leggi [CONTRIBUTING.md](CONTRIBUTING.md): come far girare l'app sul tuo computer, come aggiungere contenuti e le convenzioni del progetto.

## Menu dell'app
- **Home**: saluto, prossima lezione del tuo corso, quiz, profilo.
- **Allenamenti**: movimenti fatti in classe, diario delle sedute. Il programma post-LASIK è una scheda personale di Marco e compare solo se attivata nel profilo.
- **Teoria**: storia, principi, tre fasi, classificazione, Gokyo, posizioni e cadute, ne waza, regole IJF 2025–28, kata, Ju Jitsu, domande d'esame.
- **Tecniche**: una pagina per tecnica con significato, video del Kodokan e, dove c'è, la scheda passo per passo con disegni (vista dall'alto e laterale).
- **Cinture**: una pagina per cintura, «in cantiere» finché il maestro non comunica i programmi.
- Inoltre: **Glossario** (i nomi giapponesi nelle pagine si possono toccare), **Quiz**, **Dojo** (orari e appuntamenti).

## Come è fatta
HTML, CSS e JavaScript semplici, senza framework, senza build e senza dipendenze da installare. Ogni file `.js` è caricato da `index.html` e mette i suoi dati o le sue funzioni in una variabile globale (`window.TEORIA`, `window.R`, ...). I dati personali (profilo, spunte, diario, punteggi del quiz) restano solo sul telefono, in `localStorage`: non c'è nessun server né database.

## Dove modificare i contenuti
| File | Cosa contiene |
| --- | --- |
| `teoria.js` | pagine di teoria |
| `tecniche.js` | schede tecnica passo per passo (testi) |
| `disegni.js` | disegni dei passi delle tecniche (vista dall'alto e laterale) |
| `video.js` | codici dei video YouTube: quelli ufficiali del Kodokan e quelli aggiunti |
| `glossario.js` | termini e significati (il quiz li usa da solo) |
| `cinture.js` | programmi per cintura e loro stato («in cantiere» / «definito») |
| `lezione.js` | movimenti visti a lezione validi per tutti |
| `dojo.js` | orari, palestra, eventi; in fondo `window.INFO` con crediti e versione |
| `content.js`, `exercises.js` | programma post-LASIK (scheda personale di Marco) ed esercizi |
| `style.css` | colori e aspetto |

I file che fanno funzionare l'app (non servono per cambiare i contenuti):

| File | Cosa fa |
| --- | --- |
| `app.js` | schermate e navigazione (router sull'indirizzo dopo `#`) |
| `render.js` | funzioni comuni: testo sicuro, memoria sul telefono, blocchi di contenuto, scheda dei termini |
| `quiz.js` | quiz costruito da glossario e catalogo tecniche |
| `pianta.js`, `laterale.js` | disegno delle tecniche visto dall'alto e di lato |
| `figures.js` | disegno delle figure degli esercizi |
| `sw.js` | service worker: funzionamento offline e aggiornamenti |

Se aggiungi un file nuovo, inseriscilo anche in `index.html` e nell'elenco `FILES` di `sw.js`, e aumenta il numero di `CACHE` in `sw.js`.

Dopo un merge su `main`, GitHub Pages pubblica in uno o due minuti. Apri l'app con la rete attiva: scarica da sola i file nuovi.

## Installazione su iPhone
1. Apri l'indirizzo dell'app in **Safari**.
2. Tocca Condividi (il quadrato con la freccia).
3. Scegli **Aggiungi alla schermata Home**.

Su Android, da Chrome: menu ⋮ e poi **Installa app** (o **Aggiungi a schermata Home**).

## Fonti
Video delle tecniche: canale YouTube ufficiale del Kodokan (elenco su kdkjd.org).
Programmi di cintura FIJLKAM del dojo (Judo e Ju Jitsu), «Aggiornamento del Regolamento IJF 2025–2028», dispensa «I Kata di Judo» (M° Mainenti), «Programma fondamentali Ju Jitsu FIJLKAM».

## Autore e licenza
Ideata e realizzata da **Marco Campodall'Orto** (Maeco96). Codice con licenza MIT (vedi `LICENSE`). I testi di judo sono riassunti di fonti di terzi e restano dei rispettivi titolari.
