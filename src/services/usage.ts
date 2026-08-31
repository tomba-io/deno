import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";

/**
 * Usage
 *
 * Check your monthly API usage.
 *
 * @see {@link https://docs.tomba.io/api/account#retrieve-api-usage | Usage API}
 */
export class Usage extends Service {
    /**
     * Get Usage
     *
     * Returns your monthly requests.
     *
     * @see {@link https://docs.tomba.io/api/account#retrieve-api-usage#get-usage | Get Usage API}
     * @returns {Promise}
     */
    async getUsage(): Promise<TombaResponse> {
        const path = "/usage";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
