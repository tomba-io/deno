import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Sources extends Service {
  /**
     * Email Sources
     *
     * Find email address source somewhere on the web.
     *
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
  async emailSources<T extends unknown>(email: string): Promise<T> {
    if (typeof email === "undefined") {
      throw new TombaException('Missing required parameter: "email"');
    }

    let path = "/email-sources/{email}".replace("{email}", email);
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
