import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Keys
 *
 * Manage your API keys.
 *
 * @see {@link https://docs.tomba.io/api/keys | Keys API}
 */
export class Keys extends Service {
    /**
     * Get your keys.
     *
     * Returns a list of your keys.
     *
     * @see {@link https://docs.tomba.io/api/keys | List Keys API}
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getKeys(): Promise<TombaResponse> {
        const path = "/keys";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Delete key
     *
     * Delete a specific key by passing its id.
     *
     * @see {@link https://docs.tomba.io/api/keys#delete-an-api-key | Delete Key API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async deleteKey(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/keys/" + id;
        const payload: Payload = {};

        return await this.client.call("delete", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Create Key
     *
     * Create a new Key.
     *
     * @see {@link https://docs.tomba.io/api/keys#create-an-api-key | Create Key API}
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createKey(): Promise<TombaResponse> {
        const path = "/keys";
        const payload: Payload = {};

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Reset a key
     *
     * Reset your key.
     *
     * @see {@link https://docs.tomba.io/api/keys#reset-an-api-key | Reset Key API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async resetKey(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/keys/" + id;
        const payload: Payload = {};

        return await this.client.call("put", path, {
            "content-type": "application/json",
        }, payload);
    }
}
