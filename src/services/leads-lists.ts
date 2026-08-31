import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Leads Lists
 *
 * Manage your leads lists.
 *
 * @see {@link https://docs.tomba.io/api/leads-lists | Leads Lists API}
 */
export class LeadsLists extends Service {
    /**
     * Get Leads Lists
     *
     * Returns a list of leads lists.
     *
     * @see {@link https://docs.tomba.io/api/leads-lists#list-leads-lists | List Leads Lists API}
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getLists(): Promise<TombaResponse> {
        const path = "/leads_lists";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Delete List ID
     *
     * Delete a specific list by passing id.
     *
     * @see {@link https://docs.tomba.io/api/lead-lists#delete-leads-list | Delete List API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async deleteListId(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/leads_lists/" + id;
        const payload: Payload = {};

        return await this.client.call("delete", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Create new List
     *
     * Create a new leads list with the name request parameter.
     *
     * @see {@link https://docs.tomba.io/api/lead-lists#create-leads-list | Create List API}
     * @param {string} name
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createList(name: string): Promise<TombaResponse> {
        if (typeof name === "undefined") {
            throw new TombaException('Missing required parameter: "name"');
        }

        const path = "/leads_lists";
        const payload: Payload = {};

        if (typeof name !== "undefined") {
            payload["name"] = name;
        }

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Update List ID
     *
     * Update the fields of a list using id.
     *
     * @see {@link https://docs.tomba.io/api/lead-lists#update-leads-list | Update List API}
     * @param {string} id
     * @param {string} name
     * @throws {TombaException}
     * @returns {Promise}
     */
    async updateListId(id: string, name: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        if (typeof name === "undefined") {
            throw new TombaException('Missing required parameter: "name"');
        }

        const path = "/leads_lists/" + id;
        const payload: Payload = {};

        if (typeof name !== "undefined") {
            payload["name"] = name;
        }

        return await this.client.call("put", path, {
            "content-type": "application/json",
        }, payload);
    }
}
