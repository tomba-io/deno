import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Leads Attributes
 *
 * Manage your lead attributes.
 *
 * @see {@link https://docs.tomba.io/api/leads-attributes | Leads Attributes API}
 */
export class LeadsAttributes extends Service {
    /**
     * Get Lead Attributes
     *
     * Returns a list of Lead Attributes.
     *
     * @see {@link https://docs.tomba.io/api/leads-attributes#list-lead-attributes | List Lead Attributes API}
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getLeadAttributes(): Promise<TombaResponse> {
        const path = "/leads/attributes";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Delete Lead Attribute
     *
     * Delete a specific Attribute by passing id.
     *
     * @see {@link https://docs.tomba.io/api/leads-attributes#delete-lead-attribute | Delete Lead Attribute API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async deleteLeadAttribute(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/leads/attributes/" + id;
        const payload: Payload = {};

        return await this.client.call("delete", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Create Lead Attribute
     *
     * Create a new Attribute with the name and type request parameter.
     *
     * @see {@link https://docs.tomba.io/api/leads-attributes#create-lead-attribute | Create Lead Attribute API}
     * @param {string} name
     * @param {string} type
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createLeadAttribute(
        name: string,
        type: string,
    ): Promise<TombaResponse> {
        if (typeof name === "undefined") {
            throw new TombaException('Missing required parameter: "name"');
        }

        if (typeof type === "undefined") {
            throw new TombaException('Missing required parameter: "type"');
        }

        const path = "/leads/attributes";
        const payload: Payload = {};

        if (typeof name !== "undefined") {
            payload["name"] = name;
        }

        if (typeof type !== "undefined") {
            payload["type"] = type;
        }

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Update Lead Attribute
     *
     * Update the fields of an Attribute using id.
     *
     * @see {@link https://docs.tomba.io/api/leads-attributes#update-lead-attribute | Update Lead Attribute API}
     * @param {string} id
     * @param {string} name
     * @throws {TombaException}
     * @returns {Promise}
     */
    async updateLeadAttribute(
        id: string,
        name?: string,
    ): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/leads/attributes/" + id;
        const payload: Payload = {};

        if (typeof name !== "undefined") {
            payload["name"] = name;
        }

        return await this.client.call("put", path, {
            "content-type": "application/json",
        }, payload);
    }
}
