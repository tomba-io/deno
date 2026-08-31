import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";

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
     * @returns {Promise}
     */
    async getLocation(): Promise<TombaResponse> {
        const path = "/location";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
