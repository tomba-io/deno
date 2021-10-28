import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Finder extends Service {
  /**
     * Email Finder
     *
     * generates or retrieves the most likely email address from a domain name, a
     * first name and a last name.
     *
     * @param {string} domain
     * @param {string} firstName
     * @param {string} lastName
     * @throws {TombaException}
     * @returns {Promise}
     */
  async emailFinder<T extends unknown>(
    domain: string,
    firstName: string,
    lastName: string,
  ): Promise<T> {
    if (typeof domain === "undefined") {
      throw new TombaException('Missing required parameter: "domain"');
    }

    if (typeof firstName === "undefined") {
      throw new TombaException('Missing required parameter: "firstName"');
    }

    if (typeof lastName === "undefined") {
      throw new TombaException('Missing required parameter: "lastName"');
    }

    let path = "/email-finder/{domain}".replace("{domain}", domain);
    let payload: Payload = {};

    if (typeof firstName !== "undefined") {
      payload["first_name"] = firstName;
    }

    if (typeof lastName !== "undefined") {
      payload["last_name"] = lastName;
    }

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
