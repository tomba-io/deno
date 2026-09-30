import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Format
 *
 * Format and validate email addresses.
 *
 * @see {@link https://docs.tomba.io/api/format | Email Format API}
 */
export class Format extends Service {
    /**
     * Email Format
     *
     * Check the format of an email address and return detailed information.
     *
     * @see {@link https://docs.tomba.io/api/format#email-format | Email Format API}
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async emailFormat(domain: string): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/email-format";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
