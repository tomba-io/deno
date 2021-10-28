import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Logs extends Service {
  /**
     * get Logs
     *
     * Returns a your last 1,000 requests you made during the last 3 months.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async getLogs<T extends unknown>(): Promise<T> {
    let path = "/logs";
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }
}
