import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Domain
 *
 * Search emails by domain.
 *
 * @see {@link https://docs.tomba.io/api/finder#domain-search | Domain Search API}
 */
export class Domain extends Service {
    /**
     * Domain Search
     *
     * Search emails from a domain. Returns all the email addresses found using
     * a given domain, with sources.
     *
     * @see {@link https://docs.tomba.io/api/finder#domain-search#domain-search | Domain Search API}
     * @param {string} domain
     * @param {number} page
     * @param {number} limit
     * @param {string} department
     * @throws {TombaException}
     * @returns {Promise}
     */
    async domainSearch(
        domain: string,
        page?: number,
        limit?: number,
        department?: string,
        enrichMobile?: boolean,
        webhookUrl?: string,
    ): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/domain-search";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        if (typeof page !== "undefined") {
            payload["page"] = page;
        }

        if (typeof limit !== "undefined") {
            payload["limit"] = limit;
        }

        if (typeof department !== "undefined") {
            payload["department"] = department;
        }

        if (typeof enrichMobile !== "undefined") {
            payload["enrich_mobile"] = enrichMobile;
        }

        if (typeof webhookUrl !== "undefined") {
            payload["webhook_url"] = webhookUrl;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
