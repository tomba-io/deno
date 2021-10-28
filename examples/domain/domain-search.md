```javascript
import * as tomba from "https://deno.land/x/tombaio/mod.ts";

// Init SDK
let client = new tomba.Client();

let domain = new tomba.Domain(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret

const result = domain.domainSearch("stripe.com");

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```
