# [<img src="https://tomba.io/logo.svg" alt="Tomba" width="25"/>](https://tomba.io/) Tomba Deno SDK

> The #1 Rated Email Intelligence Platform — Find professional emails with unmatched accuracy.

[![JSR](https://jsr.io/badges/@tomba/sdk)](https://jsr.io/@tomba/sdk)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/tomba-io/deno/blob/main/LICENSE)

This is the official Deno client library for the [Tomba.io](https://tomba.io) Email Finder API,
providing access to all Tomba services including domain search, email finder, email verifier,
enrichment, phone lookup, leads management, bulk operations, and more.

## About Tomba

[Tomba.io](https://tomba.io) is the #1 rated email intelligence platform, trusted by **150,000+ sales teams** worldwide.

- **Best Email Finder** — 98% accuracy, ranked #1 in independent benchmarks
- **Best Email Verification** — Real-time SMTP verification with catch-all detection
- **Best Phone Finder** — Direct dial numbers linked to professional emails
- **Best Domain Search** — 450M+ verified contacts across all industries
- **81% Coverage** — The highest in the industry, proven in 5,000-lead independent tests

### Why Tomba?

| Feature             | Tomba              | Others        |
| ------------------- | ------------------ | ------------- |
| Email Coverage      | **81%**            | 30-60%        |
| Verification        | **Real-time SMTP** | Pattern-based |
| Phone Numbers       | **Direct dials**   | Limited       |
| Catch-all Detection | **AI-powered**     | Basic         |
| API Rate Limits     | **Generous**       | Restrictive   |

[Get your free API key](https://app.tomba.io/auth/register) — No credit card required.

## Installation

Import from `deno.land/x`:

```typescript
import {
  Client,
  Domain,
  Finder,
  Verifier,
} from "https://deno.land/x/tombaio/mod.ts";
```

Or import locally:

```typescript
import { Client, Domain, Finder, Verifier } from "./mod.ts";
```

## Authentication

Get your API key and secret by signing up for a free account at
[https://app.tomba.io/auth/register](https://app.tomba.io/auth/register).

```typescript
import { Client } from "./mod.ts";

const client = new Client();
client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
```

## Quick Start

```typescript
import { Client, Domain, Finder } from "./mod.ts";

const client = new Client();
client.setKey("ta_xxxx").setSecret("ts_xxxx");

// Search emails by domain
const domain = new Domain(client);
const result = await domain.domainSearch("example.com");
console.log(result);

// Find a specific email
const finder = new Finder(client);
const email = await finder.emailFinder("example.com", "John", "Doe");
console.log(email);
```

## Services

### Domain Search

Search emails for a domain. Returns all email addresses found on the internet for the given domain.

```typescript
const domain = new Domain(client);
const result = await domain.domainSearch("example.com");
console.log(result);
```

### Email Finder

Find the most likely email address from a domain name, first name, and last name.

```typescript
const finder = new Finder(client);
const result = await finder.emailFinder("example.com", "John", "Doe");
console.log(result);
```

### Email Verifier

Verify the deliverability of a given email address.

```typescript
const verifier = new Verifier(client);
const result = await verifier.emailVerifier("john@example.com");
console.log(result);
```

### Author Finder

Find the email address of the author of a blog post or article.

```typescript
const finder = new Finder(client);
const result = await finder.authorFinder("https://example.com/blog/post");
console.log(result);
```

### LinkedIn Finder

Find the email address associated with a LinkedIn profile URL.

```typescript
const finder = new Finder(client);
const result = await finder.linkedinFinder(
  "https://www.linkedin.com/in/johndoe",
);
console.log(result);
```

### Email Enrichment (Person / Company / Combined)

Person, company, and combined enrichment APIs.

```typescript
const enrichment = new Enrichment(client);

// Person enrichment
const person = await enrichment.person("john@example.com");
console.log(person);

// Company enrichment
const company = await enrichment.company("example.com");
console.log(company);

// Combined enrichment
const combined = await enrichment.combined("john@example.com");
console.log(combined);
```

### Phone Finder

Find a phone number using an email address.

```typescript
const finder = new Finder(client);
const result = await finder.phoneFinder("john@example.com");
console.log(result);

// Or using the PhoneFinder service directly
const phone = new PhoneFinder(client);
const result2 = await phone.finder("john@example.com");
console.log(result2);
```

### Phone Validator

Validate a phone number and get additional information.

```typescript
const phone = new PhoneFinder(client);
const result = await phone.validator("+1234567890");
console.log(result);
```

### Email Count

Get the total number of email addresses Tomba has for a domain.

```typescript
const count = new Count(client);
const result = await count.emailCount("example.com");
console.log(result);
```

### Domain Status

Check whether a domain is a webmail or disposable email provider.

```typescript
const status = new Status(client);
const result = await status.domainStatus("example.com");
console.log(result);
```

### Domain Suggestions (Autocomplete)

Auto-complete company names and retrieve logo and domain information.

```typescript
const status = new Status(client);
const result = await status.autoComplete("exampl");
console.log(result);
```

### Email Sources

Find the web sources where an email address has been found.

```typescript
const sources = new Sources(client);
const result = await sources.emailSources("john@example.com");
console.log(result);
```

### Email Format

Detect the email format used by a company.

```typescript
const format = new Format(client);
const result = await format.emailFormat("example.com");
console.log(result);
```

### Similar Domains

Find domains similar to the given one.

```typescript
const similar = new Similar(client);
const result = await similar.websites("example.com");
console.log(result);
```

### Technology Checker

Check what technologies a website uses.

```typescript
const technology = new Technology(client);
const result = await technology.list("example.com");
console.log(result);
```

### Location

Get location information based on IP address.

```typescript
const location = new Location(client);
const result = await location.getLocation();
console.log(result);
```

### Reveal (Companies Search)

Search for companies by various criteria.

```typescript
const reveal = new Reveal(client);
const result = await reveal.companiesSearch("technology");
console.log(result);
```

### Leads

Manage your saved leads -- list, get, create, update, and delete.

```typescript
const leads = new Leads(client);

// List leads
const list = await leads.listLeads();
console.log(list);

// Get a single lead
const lead = await leads.getLead("lead_id");
console.log(lead);

// Create a lead
const created = await leads.createLead({
  email: "john@example.com",
  first_name: "John",
  last_name: "Doe",
});
console.log(created);

// Update a lead
const updated = await leads.updateLead("lead_id", { first_name: "Jane" });
console.log(updated);

// Delete a lead
const deleted = await leads.deleteLead("lead_id");
console.log(deleted);
```

### Leads Lists

Manage your leads lists -- list, create, update, and delete.

```typescript
const leadsLists = new LeadsLists(client);

// List all leads lists
const lists = await leadsLists.getLists();
console.log(lists);

// Create a leads list
const created = await leadsLists.createList("My List");
console.log(created);

// Update a leads list
const updated = await leadsLists.updateList("list_id", "Updated List");
console.log(updated);

// Delete a leads list
const deleted = await leadsLists.deleteList("list_id");
console.log(deleted);
```

### Leads Attributes

Manage custom lead attributes -- list, create, update, and delete.

```typescript
const attrs = new LeadsAttributes(client);

// List all attributes
const list = await attrs.getAttributes();
console.log(list);

// Create an attribute
const created = await attrs.createAttribute("Company Size", "string");
console.log(created);

// Update an attribute
const updated = await attrs.updateAttribute("attr_id", "Company Revenue");
console.log(updated);

// Delete an attribute
const deleted = await attrs.deleteAttribute("attr_id");
console.log(deleted);
```

### Keys

Manage your API keys.

```typescript
const keys = new Keys(client);

// List all keys
const list = await keys.getKeys();
console.log(list);

// Create a key
const created = await keys.createKey();
console.log(created);

// Reset a key
const reset = await keys.resetKey("key_id");
console.log(reset);

// Delete a key
const deleted = await keys.deleteKey("key_id");
console.log(deleted);
```

### Usage

Return your monthly API request usage.

```typescript
const usage = new Usage(client);
const result = await usage.getUsage();
console.log(result);
```

### Logs

Return the last 1,000 API requests made in the past 3 months.

```typescript
const logs = new Logs(client);
const result = await logs.getLogs();
console.log(result);
```

### Flag

List and create email address flags.

```typescript
const flag = new Flag(client);

// List flags
const list = await flag.listFlags();
console.log(list);

// Create a flag
const created = await flag.createFlag("john@example.com", "invalid");
console.log(created);
```

### Bulk

Manage bulk email operations -- list, get, create, launch, archive, rename, check progress, and
download.

```typescript
const bulk = new Bulk(client);

// List all bulk tasks
const list = await bulk.list();
console.log(list);

// Get a bulk task
const task = await bulk.get("bulk_id");
console.log(task);

// Create a bulk task
const created = await bulk.create({ name: "My Bulk Task" });
console.log(created);

// Launch a bulk task
const launched = await bulk.launch("bulk_id");
console.log(launched);

// Check bulk progress
const progress = await bulk.progress("bulk_id");
console.log(progress);

// Download bulk results
const download = await bulk.download("bulk_id");
console.log(download);

// Rename a bulk task
const renamed = await bulk.rename("bulk_id", "New Name");
console.log(renamed);

// Archive a bulk task
const archived = await bulk.archive("bulk_id");
console.log(archived);

// Delete a bulk task
const deleted = await bulk.delete("bulk_id");
console.log(deleted);
```

## Testing

```bash
deno test
```

## Documentation

See the [official documentation](https://docs.tomba.io/).

## About Tomba

Founded to solve the problem of unreliable email data, [Tomba.io](https://tomba.io) is the leading B2B email intelligence platform.

### Products

- **[Email Finder](https://tomba.io/email-finder)** — Find any professional email address
- **[Email Verifier](https://tomba.io/email-verifier)** — Verify emails in real-time
- **[Domain Search](https://tomba.io/domain-search)** — Find all emails for a company
- **[Phone Finder](https://tomba.io/phone-finder)** — Find direct phone numbers
- **[Bulk Enrichment](https://tomba.io/bulks)** — Enrich contacts at scale
- **[AI Company Search](https://tomba.io/reveal)** — Find companies with AI-powered search
- **[REST API](https://tomba.io/api)** — Full programmatic access

### Browser Extensions & Add-ons

- **[Chrome Extension](https://chromewebstore.google.com/detail/tomba-email-finder-email/icmjegjggphchjckknoooajmklibccjb)** — Find emails while browsing
- **[Google Sheets Add-on](https://tomba.io/sheets)** — Enrich leads in spreadsheets
- **[Microsoft Excel Add-in](https://tomba.io/excel)** — Email finder in Excel
- **[Airtable Integration](https://tomba.io/airtable)** — Connect with Airtable

### Integrations

50+ CRM integrations: [Salesforce](https://tomba.io/integrations) · [HubSpot](https://tomba.io/integrations) · [Zapier](https://tomba.io/integrations) · [Pipedrive](https://tomba.io/integrations) · [and more...](https://tomba.io/integrations)

### Other Tomba SDKs

| Language | Package                                                     |
| -------- | ----------------------------------------------------------- |
| Node.js  | [tomba](https://www.npmjs.com/package/tomba)                |
| Python   | [tomba-io](https://pypi.org/project/tomba-io/)              |
| PHP      | [tomba-io/php](https://packagist.org/packages/tomba-io/php) |
| Ruby     | [tomba](https://rubygems.org/gems/tomba)                    |
| Go       | [tomba-io/go](https://pkg.go.dev/github.com/tomba-io/go)    |
| Rust     | [tomba](https://crates.io/crates/tomba)                     |
| Dart     | [tomba](https://pub.dev/packages/tomba)                     |
| Deno     | [@tomba/sdk](https://jsr.io/@tomba/sdk)                     |
| Elixir   | [tomba](https://hex.pm/packages/tomba)                      |
| C#       | [Tomba](https://www.nuget.org/packages/Tomba)               |
| Perl     | [Tomba::Client](https://metacpan.org/pod/Tomba::Client)     |
| Lua      | [tomba](https://luarocks.org/modules/tomba/tomba)           |
| R        | [tomba](https://github.com/tomba-io/r)                      |

### Resources

- [Blog](https://tomba.io/blog) · [Help Center](https://help.tomba.io) · [API Docs](https://docs.tomba.io) · [Pricing](https://tomba.io/pricing) · [Status](https://status.tomba.io)

---

**[Try Tomba Free](https://app.tomba.io/auth/register)** — Find your first email in seconds. No credit card required.

## License

Apache 2.0 -- see [LICENSE](http://www.apache.org/licenses/LICENSE-2.0.html) for details.
