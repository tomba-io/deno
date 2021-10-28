import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as tomba from "./mod.ts";

Deno.test("test tomba", async (): Promise<void> => {
  const client = new tomba.Client();
  client
    .setKey("ta_xxxx")
    .setSecret("ts_xxxx");

  assertEquals(client.endpoint, "https://api.tomba.io/v1");
  assertEquals(client.headers["x-tomba-key"], "ta_xxxx");
  assertEquals(client.headers["x-tomba-secret"], "ts_xxxx");
});
