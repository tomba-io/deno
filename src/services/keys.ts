import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class Keys extends Service {
  /**
     * Get your keys.
     *
     * Returns a list of your keys.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async getKeys<T extends unknown>(): Promise<T> {
    let path = "/keys/{id}";
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Delete key
     *
     * Delete key
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
  async deleteKey<T extends unknown>(id: string): Promise<T> {
    if (typeof id === "undefined") {
      throw new TombaException('Missing required parameter: "id"');
    }

    let path = "/keys/{id}".replace("{id}", id);
    let payload: Payload = {};

    return await this.client.call("delete", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Create Key
     *
     * Create a new Key.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async createKey<T extends unknown>(): Promise<T> {
    let path = "/keys/{id}";
    let payload: Payload = {};

    return await this.client.call("post", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Reset a key
     *
     * Rest your key.
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
  async resetKey<T extends unknown>(id: string): Promise<T> {
    if (typeof id === "undefined") {
      throw new TombaException('Missing required parameter: "id"');
    }

    let path = "/keys/{id}".replace("{id}", id);
    let payload: Payload = {};

    return await this.client.call("put", path, {
      "content-type": "application/json",
    }, payload);
  }
}
