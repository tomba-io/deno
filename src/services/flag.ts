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
        const path = "/flags";
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
     * @param {string} email
     * @param {string} flag
     * @throws {TombaException}
     * @returns {Promise}
     */
    async createFlag(email: string, flag: string): Promise<TombaResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        if (typeof flag === "undefined") {
            throw new TombaException('Missing required parameter: "flag"');
        }

        const path = "/flags";
        const payload: Payload = {};

        if (typeof email !== "undefined") {
            payload["email"] = email;
        }

        if (typeof flag !== "undefined") {
            payload["flag"] = flag;
        }

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }
}
