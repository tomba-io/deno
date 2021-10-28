import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Account extends Service {
  /**
     * Get Account
     *
     * Returns information about the current account.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async getAccount<T extends unknown>(): Promise<T> {
    let path = "/me";
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
