import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * PhoneFinder
 *
 * Find and validate phone numbers.
 *
 * @see {@link https://docs.tomba.io/api/phone | Phone API}
 */
export class PhoneFinder extends Service {
    /**
     * Phone Finder
     *
     * Search phone numbers based on the email. You give one email and it
     * returns phone data.
     *
     * @see {@link https://docs.tomba.io/api/phone#phone-finder | Phone Finder API}
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
    async finder(email: string, webhookUrl?: string): Promise<TombaResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        const path = "/phone-finder";
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
     * Phone Validator
     *
     * Validate a phone number and get additional information about it.
     *
     * @see {@link https://docs.tomba.io/api/phone#phone-validator | Phone Validator API}
     * @param {string} phone
     * @throws {TombaException}
     * @returns {Promise}
     */
    async validator(phone: string): Promise<TombaResponse> {
        if (typeof phone === "undefined") {
            throw new TombaException('Missing required parameter: "phone"');
        }

        const path = "/phone-validator";
        const payload: Payload = {};

        if (typeof phone !== "undefined") {
            payload["phone"] = phone;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
