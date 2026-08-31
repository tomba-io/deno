import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";

/**
 * Logs
 *
 * Check your API request logs.
 *
 * @see {@link https://docs.tomba.io/api/account#retrieve-api-logs | Logs API}
 */
export class Logs extends Service {
    /**
     * Get Logs
     *
     * Returns your last 1,000 requests you made during the last 3 months.
     *
     * @see {@link https://docs.tomba.io/api/account#retrieve-api-logs#get-logs | Get Logs API}
     * @returns {Promise}
     */
    async getLogs(page?: number, limit?: number): Promise<TombaResponse> {
        const path = "/logs";
        const payload: Payload = {};

        if (typeof page !== "undefined") {
            payload["page"] = page;
        }

        if (typeof limit !== "undefined") {
            payload["limit"] = limit;
        }

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
