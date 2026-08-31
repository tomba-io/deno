import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Similar
 *
 * Find similar websites to a given domain.
 *
 * @see {@link https://docs.tomba.io/api/similar | Similar API}
 */
export class Similar extends Service {
    /**
     * Similar Websites
     *
     * Find websites that are similar to the specified domain.
     *
     * @see {@link https://docs.tomba.io/api/similar#similar-websites | Similar Websites API}
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async websites(domain: string): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/similar";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
