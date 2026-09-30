import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Location
 *
 * Get location information based on Domain.
 *
 * @see {@link https://docs.tomba.io/api/finder#location | Location API}
 */
export class Location extends Service {
    /**
     * Get Location
     *
     * Get the current location information based on Domain.
     *
     * @see {@link https://docs.tomba.io/api/finder#location#get-location | Get Location API}
     * @param {string} domain
     * @throws {TombaException}
     * @returns {Promise}
     */
    async getLocation(domain: string): Promise<TombaResponse> {
        if (typeof domain === "undefined") {
            throw new TombaException('Missing required parameter: "domain"');
        }

        const path = "/location";
        const payload: Payload = {};

        if (typeof domain !== "undefined") {
            payload["domain"] = domain;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
