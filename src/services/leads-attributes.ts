import { Service } from "../service.ts";
import { Payload } from "../client.ts";
import { TombaException } from "../exception.ts";

export class LeadsAttributes extends Service {
  /**
     * Get Lead Attributes
     *
     * Returns a list of Lead Attributes.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async getLeadAttributes<T extends unknown>(): Promise<T> {
    let path = "/leads/attributes/{id}";
    let payload: Payload = {};

    return await this.client.call("get", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Delete Lead Attribute
     *
     * Delete a specific Attributes by passing id.
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
  async deleteLeadAttribute<T extends unknown>(id: string): Promise<T> {
    if (typeof id === "undefined") {
      throw new TombaException('Missing required parameter: "id"');
    }

    let path = "/leads/attributes/{id}".replace("{id}", id);
    let payload: Payload = {};

    return await this.client.call("delete", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Create Lead Attribute
     *
     * Create a new Attributes with the name and type request parameter.
     *
     * @throws {TombaException}
     * @returns {Promise}
     */
  async createLeadAttribute<T extends unknown>(): Promise<T> {
    let path = "/leads/attributes/{id}";
    let payload: Payload = {};

    return await this.client.call("post", path, {
      "content-type": "application/json",
    }, payload);
  }

  /**
     * Update Lead Attribute
     *
     * Update the fields of a Attributes using id.
     *
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
  async updateLeadAttribute<T extends unknown>(id: string): Promise<T> {
    if (typeof id === "undefined") {
      throw new TombaException('Missing required parameter: "id"');
    }

    let path = "/leads/attributes/{id}".replace("{id}", id);
    let payload: Payload = {};

    return await this.client.call("put", path, {
      "content-type": "application/json",
    }, payload);
  }
}
