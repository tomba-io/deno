import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Verifier extends Service {
  /**
     * Email Verifier
     *
     * verify the deliverability of an email address.
     *
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
  async emailVerifier<T extends unknown>(email: string): Promise<T> {
    if (typeof email === "undefined") {
      throw new TombaException('Missing required parameter: "email"');
    }

    let path = "/email-verifier/{email}".replace("{email}", email);
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
