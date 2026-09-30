import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Flag
 *
 * Manage email address flags.
 *
 * @see {@link https://docs.tomba.io/api/flag | Flag API}
 */
export class Flag extends Service {
    /**
     * List Flags
     *
     * Returns a list of email address flags.
     *
     * @see {@link https://docs.tomba.io/api/flag#list-flags | List Flags API}
     * @throws {TombaException}
     * @returns {Promise}
     */
    async listFlags(page?: number, limit?: number): Promise<TombaResponse> {
        const path = "/flag";
        const payload: Payload = {};

        if (typeof page !== "undefined") {
            payload["page"] = page;
        }

        if (typeof limit !== "undefined") {
            payload["limit"] = limit;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Create Flag
     *
     * Create a new email address flag.
     *
     * @see {@link https://docs.tomba.io/api/flag#create-flag | Create Flag API}
     * @param {string} flag_type
     * @param {string} value
     * @param {string} reason
     * @param {string} comment
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createFlag(
        flag_type: string,
        value: string,
        reason: string,
        comment?: string,
    ): Promise<TombaResponse> {
        if (typeof flag_type === "undefined") {
            throw new TombaException('Missing required parameter: "flag_type"');
        }

        if (typeof value === "undefined") {
            throw new TombaException('Missing required parameter: "value"');
        }

        if (typeof reason === "undefined") {
            throw new TombaException('Missing required parameter: "reason"');
        }

        const path = "/flag";
        const payload: Payload = {};

        if (typeof flag_type !== "undefined") {
            payload["flag_type"] = flag_type;
        }

        if (typeof value !== "undefined") {
            payload["value"] = value;
        }

        if (typeof reason !== "undefined") {
            payload["reason"] = reason;
        }

        if (typeof comment !== "undefined") {
            payload["comment"] = comment;
        }

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }
}
