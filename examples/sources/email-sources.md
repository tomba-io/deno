```javascript
import * as tomba from "https://deno.land/x/tombaio/mod.ts";

// Init SDK
let client = new tomba.Client();

let sources = new tomba.Sources(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret

const result = sources.emailSources("b.mohamed@tomba.io");

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```
