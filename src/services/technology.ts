import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Technology
 *
 * Find technologies used by a domain.
 *
 * @see {@link https://docs.tomba.io/api/domain#technology | Technology API}
 */
export class Technology extends Service {
    /**
     * Technology List
     *
     * Returns a list of technologies used by the given domain.
     *
     * @see {@link https://docs.tomba.io/api/domain#technology#technology-finder | Technology Finder API}
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async list(domain: string): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/technology";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
