import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class LeadsLists extends Service {
  /**
     * Get Leads Lists
     *
     * Returns a list of leads lists..
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async getLists<T extends unknown>(): Promise<T> {
    let path = "/leads_lists/{id}";
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Delete List ID
     *
     * Delete a specific list by passing id.
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
  async deleteListId<T extends unknown>(id: string): Promise<T> {
    if (typeof id === "undefined") {
      throw new TombaException('Missing required parameter: "id"');
    }

    let path = "/leads_lists/{id}".replace("{id}", id);
    let payload: Payload = {};

    return await this.client.call("delete", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Create new List
     *
     * Create a new leads list with the name request parameter
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async createList<T extends unknown>(): Promise<T> {
    let path = "/leads_lists/{id}";
    let payload: Payload = {};

    return await this.client.call("post", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Update List ID
     *
     * Update the fields of a list using id.
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
  async updateListId<T extends unknown>(id: string): Promise<T> {
    if (typeof id === "undefined") {
      throw new TombaException('Missing required parameter: "id"');
    }

    let path = "/leads_lists/{id}".replace("{id}", id);
    let payload: Payload = {};

    return await this.client.call("put", path, {
      "content-type": "application/json",
    }, payload);
  }
}
