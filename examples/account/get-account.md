```javascript
import * as tomba from "https://deno.land/x/tomba/mod.ts";

// Init SDK
let client = new tomba.Client();

let account = new tomba.Account(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret

const result = account.getAccount();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```
