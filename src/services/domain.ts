import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Domain extends Service {
  /**
     * Domain Search
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user
     * /account/sessions endpoint. Use width, height and quality arguments to
     * change the output settings.
     *
     * @param {string} domain
     * @param {number} page
     * @param {number} limit
     * @param {string} department
     * @throws {TombaException}
     * @returns {Promise}
     */
  async domainSearch<T extends unknown>(
    domain: string,
    page?: number,
    limit?: number,
    department?: string,
  ): Promise<T> {
    if (typeof domain === "undefined") {
      throw new TombaException('Missing required parameter: "domain"');
    }

    let path = "/domain-search";
    let payload: Payload = {};

    if (typeof domain !== "undefined") {
      payload["domain"] = domain;
    }

    if (typeof page !== "undefined") {
      payload["page"] = page;
    }

    if (typeof limit !== "undefined") {
      payload["limit"] = limit;
    }

    if (typeof department !== "undefined") {
      payload["department"] = department;
    }

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
