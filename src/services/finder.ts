import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Finder
 *
 * Find email addresses using various methods.
 *
 * @see {@link https://docs.tomba.io/api/finder | Finder API}
 */
export class Finder extends Service {
    /**
     * Email Finder
     *
     * Generates the most likely email address from a domain name, a first name
     * and a last name.
     *
     * @see {@link https://docs.tomba.io/api/finder#email-finder | Email Finder API}
     * @param {string} domain
     * @param {string} firstName
     * @param {string} lastName
     * @throws {TombaException}
     * @returns {Promise}
     */
    async emailFinder(
        domain: string,
        firstName: string,
        lastName: string,
        webhookUrl?: string,
    ): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        if (typeof firstName === "undefined") {
            throw new TombaException('Missing required parameter: "firstName"');
        }

        if (typeof lastName === "undefined") {
            throw new TombaException('Missing required parameter: "lastName"');
        }

        const path = "/email-finder";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        if (typeof firstName !== "undefined") {
            payload["first_name"] = firstName;
        }

        if (typeof lastName !== "undefined") {
            payload["last_name"] = lastName;
        }

        if (typeof webhookUrl !== "undefined") {
            payload["webhook_url"] = webhookUrl;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Author Finder
     *
     * This API endpoint generates or retrieves the most likely email address
     * from a blog post url.
     *
     * @see {@link https://docs.tomba.io/api/finder#author-finder | Author Finder API}
     * @param {string} url
     * @throws {TombaException}
     * @returns {Promise}
     */
    async authorFinder(url: string, webhookUrl?: string): Promise<TombaResponse> {
        if (typeof url === "undefined") {
            throw new TombaException('Missing required parameter: "url"');
        }

        const path = "/author-finder";
        const payload: Payload = {};

        if (typeof url !== "undefined") {
            payload["url"] = url;
        }

        if (typeof webhookUrl !== "undefined") {
            payload["webhook_url"] = webhookUrl;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Linkedin Finder
     *
     * This API endpoint generates or retrieves the most likely email address
     * from a Linkedin URL.
     *
     * @see {@link https://docs.tomba.io/api/finder#linkedin-finder | Linkedin Finder API}
     * @param {string} url
     * @throws {TombaException}
     * @returns {Promise}
     */
    async linkedinFinder(url: string, webhookUrl?: string): Promise<TombaResponse> {
        if (typeof url === "undefined") {
            throw new TombaException('Missing required parameter: "url"');
        }

        const path = "/linkedin";
        const payload: Payload = {};

        if (typeof url !== "undefined") {
            payload["url"] = url;
        }

        if (typeof webhookUrl !== "undefined") {
            payload["webhook_url"] = webhookUrl;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Phone Finder
     *
     * Search phone numbers based on the email. You give one email and it
     * returns phone data.
     *
     * @see {@link https://docs.tomba.io/api/finder#phone-finder | Phone Finder API}
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
    async phoneFinder(email: string, webhookUrl?: string): Promise<TombaResponse> {
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
}
