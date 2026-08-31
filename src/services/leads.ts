import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Leads
 *
 * Manage your leads.
 *
 * @see {@link https://docs.tomba.io/api/leads | Leads API}
 */
export class Leads extends Service {
    /**
     * List Leads
     *
     * Returns a list of leads.
     *
     * @see {@link https://docs.tomba.io/api/leads | List Leads API}
     * @param {number} page
     * @param {number} limit
     * @param {string} listId
     * @throws {TombaException}
     * @returns {Promise}
     */
    async listLeads(
        page?: number,
        limit?: number,
        listId?: string,
        domain?: string,
    ): Promise<TombaResponse> {
        const path = "/leads";
        const payload: Payload = {};

        if (typeof page !== "undefined") {
            payload["page"] = page;
        }

        if (typeof limit !== "undefined") {
            payload["limit"] = limit;
        }

        if (typeof listId !== "undefined") {
            payload["list_id"] = listId;
        }

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Get Lead
     *
     * Returns a specific lead by its id.
     *
     * @see {@link https://docs.tomba.io/api/leads#retrieve-a-single-lead | Get Lead API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getLead(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/leads/" + id;
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Create Lead
     *
     * Create a new lead.
     *
     * @see {@link https://docs.tomba.io/api/leads#create-a-lead | Create Lead API}
     * @param {Payload} data
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createLead(data: Payload): Promise<TombaResponse> {
        const path = "/leads";
        const payload: Payload = data;

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Update Lead
     *
     * Update an existing lead by its id.
     *
     * @see {@link https://docs.tomba.io/api/leads#update-a-lead | Update Lead API}
     * @param {string} id
     * @param {Payload} data
     * @throws {TombaException}
     * @returns {Promise}
     */
    async updateLead(id: string, data: Payload): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/leads/" + id;
        const payload: Payload = data;

        return await this.client.call("put", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Delete Lead
     *
     * Delete a specific lead by its id.
     *
     * @see {@link https://docs.tomba.io/api/leads#delete-a-lead | Delete Lead API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async deleteLead(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/leads/" + id;
        const payload: Payload = {};

        return await this.client.call("delete", path, {
            "content-type": "application/json",
        }, payload);
    }
}
