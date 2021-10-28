```javascript
import * as tomba from "https://deno.land/x/tomba/mod.ts";

// Init SDK
let client = new tomba.Client();

let leadsAttributes = new tomba.LeadsAttributes(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret

const result = leadsAttributes.createLeadAttribute();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```
