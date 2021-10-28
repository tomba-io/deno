import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Count extends Service {
  /**
     * get Email Count
     *
     * Domain name from which you want to find the email addresses.
     *
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
  async emailCount<T extends unknown>(domain: string): Promise<T> {
    if (typeof domain === "undefined") {
      throw new TombaException('Missing required parameter: "domain"');
    }

    let path = "/email-count";
    let payload: Payload = {};

    if (typeof domain !== "undefined") {
      payload["domain"] = domain;
    }

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
