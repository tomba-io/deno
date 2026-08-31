import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Enrichment
 *
 * Enrich data about a person or company.
 *
 * @see {@link https://docs.tomba.io/api/enrichment | Enrichment API}
 */
export class Enrichment extends Service {
    /**
     * Person Enrichment
     *
     * Get enrichment data for a person based on their email address.
     *
     * @see {@link https://docs.tomba.io/api/enrichment#person-enrichment | Person Enrichment API}
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
    async person(email: string, webhookUrl?: string): Promise<TombaResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        const path = "/enrichment";
        const payload: Payload = {};

        if (typeof email !== "undefined") {
            payload["email"] = email;
        }

        if (typeof webhookUrl !== "undefined") {
            payload["webhook_url"] = webhookUrl;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Company Enrichment
     *
     * Get enrichment data for a company based on its domain.
     *
     * @see {@link https://docs.tomba.io/api/enrichment#company-enrichment | Company Enrichment API}
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async company(domain: string): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/enrichment/company";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Combined Enrichment
     *
     * Get combined enrichment data for both person and company.
     *
     * @see {@link https://docs.tomba.io/api/enrichment#combined-enrichment | Combined Enrichment API}
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
    async combined(email: string): Promise<TombaResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        const path = "/enrichment/combined";
        const payload: Payload = {};

        if (typeof email !== "undefined") {
            payload["email"] = email;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
