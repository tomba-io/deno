import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Sources
 *
 * Find email address sources on the web.
 *
 * @see {@link https://docs.tomba.io/api/sources | Email Sources API}
 */
export class Sources extends Service {
    /**
     * Email Sources
     *
     * Find email address source somewhere on the web.
     *
     * @see {@link https://docs.tomba.io/api/sources#email-sources | Email Sources API}
     * @param {string} email
     * @throws {TombaException}
     * @returns {Promise}
     */
    async emailSources(email: string): Promise<TombaResponse> {
        if (typeof email === "undefined") {
            throw new TombaException('Missing required parameter: "email"');
        }

        const path = "/email-sources";
        const payload: Payload = {};

        if (typeof email !== "undefined") {
            payload["email"] = email;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
