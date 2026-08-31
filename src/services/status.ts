import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Status
 *
 * Check domain status and autocomplete company names.
 *
 * @see {@link https://docs.tomba.io/api/status | Status API}
 */
export class Status extends Service {
    /**
     * Domain status
     *
     * Returns domain status if is webmail or disposable.
     *
     * @see {@link https://docs.tomba.io/api/status#domain-status | Domain Status API}
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async domainStatus(domain: string): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/domain-status";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Company Autocomplete
     *
     * Company Autocomplete is an API that lets you auto-complete company names
     * and retrieve logo and domain information.
     *
     * @see {@link https://docs.tomba.io/api/status#domain-suggestions | Domain Suggestions API}
     * @param {string} query
     * @throws {TombaException}
     * @returns {Promise}
     */
    async autoComplete(query: string): Promise<TombaResponse> {
        if (typeof query === "undefined") {
            throw new TombaException('Missing required parameter: "query"');
        }

        const path = "/domain-suggestions";
        const payload: Payload = {};

        if (typeof query !== "undefined") {
            payload["query"] = query;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
