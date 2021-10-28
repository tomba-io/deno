import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Usage extends Service {
  /**
     * get Usage
     *
     * Returns a your monthly requests
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async getUsage<T extends unknown>(): Promise<T> {
    let path = "/usage";
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
