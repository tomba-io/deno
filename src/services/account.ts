import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";

/**
 * Account
 *
 * Manage your Tomba account.
 *
 * @see {@link https://docs.tomba.io/api/account | Account API}
 */
export class Account extends Service {
    /**
     * Get Account
     *
     * Returns information about the current account.
     *
     * @see {@link https://docs.tomba.io/api/account#get-account | Get Account API}
     * @returns {Promise}
     */
    async getAccount(): Promise<TombaResponse> {
        const path = "/me";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
