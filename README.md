# AmExp - Analizzatore Spese

Un'applicazione web interamente client-based che aiuta ad analizzare gli estratti conto della carta di credito fornendo visualizzazioni e categorizzazione delle spese.

## Caratteristiche

- 📊 Grafico a ciambella interattivo per le spese
- 🏷️ Gestione personalizzata delle categorie con pattern matching
- 🔍 Funzione di filtro transazioni
- 📱 Design responsive
- 💾 Import e export della configurazione categorie

## Utilizzo

1. Scarica il tuo estratto conto AmEx in formato CSV
2. Carica il file tramite l'interfaccia web
3. Configura la mappatura delle colonne se necessario (Descrizione, Data, Importo)
4. Visualizza l'analisi delle tue spese attraverso:
   - Grafico a ciambella interattivo
   - Spese categorizzate
   - Lista delle transazioni principali

## Dettagli Tecnici

- Sviluppato con Next.js 14
- Utilizza Chart.js per le visualizzazioni
- Layout gestito tramite Tailwind CSS
- TypeScript per la type safety
- Local storage per la persistenza
- Elaborazione file CSV

## Gestione Categorie

- Creazione categorie personalizzate
- Aggiunta di pattern multipli per categoria
- Importazione/Esportazione configurazioni
- Categorizzazione automatica delle spese

## Privacy

Tutta l'elaborazione dei dati avviene lato client. Nessun dato viene memorizzato su server esterni.

## Licenza

Licenza MIT - libero utilizzo e modifica secondo necessità.
