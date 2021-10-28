```javascript
import * as tomba from "https://deno.land/x/tomba/mod.ts";

// Init SDK
let client = new tomba.Client();

let usage = new tomba.Usage(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret

const result = usage.getUsage();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```
