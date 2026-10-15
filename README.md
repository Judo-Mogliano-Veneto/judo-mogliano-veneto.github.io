# Judo Mogliano

App web installabile su iPhone per il judo: teoria, allenamenti, programmi di cintura e glossario. Si apre a schermo intero e funziona anche senza rete.

## Menu dell'app
- **Allenamenti**: programma post-LASIK (6 settimane), movimenti fatti in classe, diario delle sedute.
- **Teoria**: storia, principi, tre fasi, classificazione, Gokyo, posizioni e cadute, ne waza, regole IJF 2025–28, kata, Ju Jitsu, domande d'esame.
- **Cinture**: una pagina per cintura, «in cantiere» finché il maestro non comunica i programmi.
- **Glossario**: termini giapponesi con significato; i nomi delle tecniche nelle altre pagine si possono toccare.
- **Dojo**: orari e appuntamenti.

## Dove modificare i contenuti
| File | Cosa contiene |
| --- | --- |
| `cinture.js` | programmi per cintura, stato («in cantiere» / «definito»), cintura attuale |
| `lezione.js` | movimenti visti a lezione (si possono anche aggiungere dall'app, sul telefono) |
| `teoria.js` | pagine di teoria |
| `glossario.js` | termini e significati |
| `dojo.js` | orari, palestra, eventi |
| `content.js`, `exercises.js` | programma post-LASIK e esercizi |
| `style.css` | colori e aspetto |

`figures.js` (disegni), `render.js`, `app.js` (schermate), `sw.js` (offline) non servono per cambiare i contenuti.
Se aggiungi un file nuovo, inseriscilo anche in `index.html` e nell'elenco `FILES` di `sw.js`, e cambia il numero di `CACHE` in `sw.js`.

Dopo una modifica GitHub Pages pubblica in uno o due minuti. Apri l'app con la rete attiva: scarica da sola i file nuovi.

## Installazione su iPhone
1. Apri l'indirizzo dell'app in **Safari**.
2. Tocca Condividi (il quadrato con la freccia).
3. Scegli **Aggiungi alla schermata Home**.

Spunte, diario, movimenti aggiunti e test restano salvati sul telefono.

## Fonti
Programmi di cintura FIJLKAM del dojo (Judo e Ju Jitsu), «Aggiornamento del Regolamento IJF 2025–2028», dispensa «I Kata di Judo» (M° Mainenti), «Programma fondamentali Ju Jitsu FIJLKAM».
