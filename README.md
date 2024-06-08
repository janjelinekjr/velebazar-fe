# Frontend pro camunda-it

## Rychlý start vývoje

Nastavení bankovního npm repo:
> npm config set registry https://artifactory.rb.cz/artifactory/api/npm/npm-cai-virtual/

Přihlašujeme se heslem do artifactory:
> npm login

Dále standardně pro lokální vývoj
-  pro instalaci závislostí
   > npm install  
-  pro spuštění vývojového serveru
   > npm run dev   

## BE Mock
- vygeneruje soubory v /public, které zajistí mock worker pro mockování server requestů, stačí spustit jednou (projekt již obsahuje daný soubor, takže ve většině případů není třeba spouštět znovu) ¨
   > npm run msw-init
- dle specifikované api definice v tomto scriptu, vygeneruje vlastní mockové reponse na volání backendu, po vygenerování není třeba volat znovu, pokud se nezmění api definice, je vygenerováno do: /generatedMockServer/mock.js
   > npm run gen-mock-server
- v src/index.tsx - zajistí navázání mockových odpovědí při běhu aplikace, je možné importovat generované mockové odpovědi z předchozího kroku, nebo si vytvořit vlastní (viz. /mockHandlers/personApiHandlers.ts), pokud nechci mockovat server, tyto příkazy v index.tsx zakomentuji
   ```
   import {startWorker} from './mockHandlers/personApiHandlers';
  
   // @ts-ignore
   if (process.env.NODE_ENV === 'development') {
       startWorker();
   }
   ```


## Zdroje k přečtení (v daném pořadí):

### Getting started
https://confluence.rb.cz/confluence/display/ODU/Getting+Started

### Definice FE Strategie - postupů a technologií
https://confluence.rb.cz/confluence/display/ODU/FE+Strategie
