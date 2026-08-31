import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Reveal
 *
 * Search for companies.
 *
 * @see {@link https://docs.tomba.io/api/reveal | Reveal API}
 */
export class Reveal extends Service {
    /**
     * Companies Search
     *
     * Search for companies by various criteria.
     *
     * @see {@link https://docs.tomba.io/api/reveal#companies-search | Companies Search API}
     * @param {string} query
     * @param {number} page
     * @param {number} limit
     * @throws {TombaException}
     * @returns {Promise}
     */
    async companiesSearch(
        query: string,
        page?: number,
        limit?: number,
    ): Promise<TombaResponse> {
        if (typeof query === "undefined") {
            throw new TombaException('Missing required parameter: "query"');
        }

        const path = "/reveal";
        const payload: Payload = {};

        if (typeof query !== "undefined") {
            payload["query"] = query;
        }

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
}
