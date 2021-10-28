import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Status extends Service {
  /**
     * Domain status
     *
     * Returns domain status if is webmail or disposable.
     *
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
  async domainStatus<T extends unknown>(domain: string): Promise<T> {
    if (typeof domain === "undefined") {
      throw new TombaException('Missing required parameter: "domain"');
    }

    let path = "/domain-status";
    let payload: Payload = {};

    if (typeof domain !== "undefined") {
      payload["domain"] = domain;
    }

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * get Company Autocomplete
     *
     * Company Autocomplete is an API that lets you auto-complete company names
     * and retrieve logo and domain information.
     *
     * @param {string} query
     * @throws {TombaException}
     * @returns {Promise}
     */
  async autoComplete<T extends unknown>(query: string): Promise<T> {
    if (typeof query === "undefined") {
      throw new TombaException('Missing required parameter: "query"');
    }

    let path = "/domains-suggestion";
    let payload: Payload = {};

    if (typeof query !== "undefined") {
      payload["query"] = query;
    }

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
