import { assertEquals, assertInstanceOf } from "https://deno.land/std/testing/asserts.ts";
import * as tomba from "./mod.ts";

Deno.test("Client - should create client with default endpoint", () => {
    const client = new tomba.Client();
    assertEquals(client.endpoint, "https://api.tomba.io/v1");
});

Deno.test("Client - should set custom endpoint", () => {
    const client = new tomba.Client();
    client.setEndpoint("https://custom.api.com/v1");
    assertEquals(client.endpoint, "https://custom.api.com/v1");
});

Deno.test("Client - should set key header", () => {
    const client = new tomba.Client();
    client.setKey("ta_test_key");
    assertEquals(client.headers["x-tomba-key"], "ta_test_key");
});

Deno.test("Client - should set secret header", () => {
    const client = new tomba.Client();
    client.setSecret("ts_test_secret");
    assertEquals(client.headers["x-tomba-secret"], "ts_test_secret");
});

Deno.test("Client - should chain setKey and setSecret", () => {
    const client = new tomba.Client();
    client.setKey("ta_test_key").setSecret("ts_test_secret");
    assertEquals(client.headers["x-tomba-key"], "ta_test_key");
    assertEquals(client.headers["x-tomba-secret"], "ts_test_secret");
});

Deno.test("Services - should create Account service", () => {
    const client = new tomba.Client();
    const account = new tomba.Account(client);
    assertInstanceOf(account, tomba.Account);
});

Deno.test("Services - should create Domain service", () => {
    const client = new tomba.Client();
    const domain = new tomba.Domain(client);
    assertInstanceOf(domain, tomba.Domain);
});

Deno.test("Services - should create Finder service", () => {
    const client = new tomba.Client();
    const finder = new tomba.Finder(client);
    assertInstanceOf(finder, tomba.Finder);
});

Deno.test("Services - should create Verifier service", () => {
    const client = new tomba.Client();
    const verifier = new tomba.Verifier(client);
    assertInstanceOf(verifier, tomba.Verifier);
});

Deno.test("Services - should create Sources service", () => {
    const client = new tomba.Client();
    const sources = new tomba.Sources(client);
    assertInstanceOf(sources, tomba.Sources);
});

Deno.test("Services - should create Status service", () => {
    const client = new tomba.Client();
    const status = new tomba.Status(client);
    assertInstanceOf(status, tomba.Status);
});

Deno.test("Services - should create Count service", () => {
    const client = new tomba.Client();
    const count = new tomba.Count(client);
    assertInstanceOf(count, tomba.Count);
});

Deno.test("Services - should create Usage service", () => {
    const client = new tomba.Client();
    const usage = new tomba.Usage(client);
    assertInstanceOf(usage, tomba.Usage);
});

Deno.test("Services - should create Logs service", () => {
    const client = new tomba.Client();
    const logs = new tomba.Logs(client);
    assertInstanceOf(logs, tomba.Logs);
});

Deno.test("Services - should create Keys service", () => {
    const client = new tomba.Client();
    const keys = new tomba.Keys(client);
    assertInstanceOf(keys, tomba.Keys);
});

Deno.test("Services - should create LeadsLists service", () => {
    const client = new tomba.Client();
    const leadsLists = new tomba.LeadsLists(client);
    assertInstanceOf(leadsLists, tomba.LeadsLists);
});

Deno.test("Services - should create LeadsAttributes service", () => {
    const client = new tomba.Client();
    const leadsAttributes = new tomba.LeadsAttributes(client);
    assertInstanceOf(leadsAttributes, tomba.LeadsAttributes);
});

Deno.test("Services - should create PhoneFinder service", () => {
    const client = new tomba.Client();
    const phoneFinder = new tomba.PhoneFinder(client);
    assertInstanceOf(phoneFinder, tomba.PhoneFinder);
});

Deno.test("Services - should create Format service", () => {
    const client = new tomba.Client();
    const format = new tomba.Format(client);
    assertInstanceOf(format, tomba.Format);
});

Deno.test("Services - should create Location service", () => {
    const client = new tomba.Client();
    const location = new tomba.Location(client);
    assertInstanceOf(location, tomba.Location);
});

Deno.test("Services - should create Similar service", () => {
    const client = new tomba.Client();
    const similar = new tomba.Similar(client);
    assertInstanceOf(similar, tomba.Similar);
});

Deno.test("Services - should create Technology service", () => {
    const client = new tomba.Client();
    const technology = new tomba.Technology(client);
    assertInstanceOf(technology, tomba.Technology);
});

Deno.test("Services - should create Enrichment service", () => {
    const client = new tomba.Client();
    const enrichment = new tomba.Enrichment(client);
    assertInstanceOf(enrichment, tomba.Enrichment);
});

Deno.test("Services - should create Reveal service", () => {
    const client = new tomba.Client();
    const reveal = new tomba.Reveal(client);
    assertInstanceOf(reveal, tomba.Reveal);
});

Deno.test("Services - should create Flag service", () => {
    const client = new tomba.Client();
    const flag = new tomba.Flag(client);
    assertInstanceOf(flag, tomba.Flag);
});

Deno.test("Services - should create Leads service", () => {
    const client = new tomba.Client();
    const leads = new tomba.Leads(client);
    assertInstanceOf(leads, tomba.Leads);
});

Deno.test("Services - should create Bulk service", () => {
    const client = new tomba.Client();
    const bulk = new tomba.Bulk(client);
    assertInstanceOf(bulk, tomba.Bulk);
});

Deno.test("TombaException - should create exception with message", () => {
    const exception = new tomba.TombaException("Test error");
    assertEquals(exception.message, "Test error");
    assertEquals(exception.code, 0);
});

Deno.test("TombaException - should create exception with message and code", () => {
    const exception = new tomba.TombaException("Not found", 404);
    assertEquals(exception.message, "Not found");
    assertEquals(exception.code, 404);
});
