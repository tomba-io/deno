import { TombaException } from "./exception.ts";

export interface Payload {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
}

/**
 * Rate-limit information extracted from response headers.
 */
export interface RateLimit {
    xSecondRateLimit: string | null;
    xMinuteRateLimit: string | null;
    xDailyRateLimit: string | null;
    xMinuteRequestLeft: string | null;
    xDailyRequestLeft: string | null;
    xMinuteResetSeconds: string | null;
    xDailyResetSeconds: string | null;
    retryAfter: string | null;
    rateLimitPolicy: string | null;
    rateLimit: string | null;
}

/**
 * Response from the Tomba API containing data and rate-limit metadata.
 */
export interface TombaResponse<T = unknown> {
    data: T;
    rateLimit: RateLimit;
}

/**
 * Parse rate-limit headers from a fetch Response.
 */
function parseRateLimit(headers: Headers): RateLimit {
    return {
        xSecondRateLimit: headers.get("x-second-rate-limit"),
        xMinuteRateLimit: headers.get("x-minute-rate-limit"),
        xDailyRateLimit: headers.get("x-daily-rate-limit"),
        xMinuteRequestLeft: headers.get("x-minute-request-left"),
        xDailyRequestLeft: headers.get("x-daily-request-left"),
        xMinuteResetSeconds: headers.get("x-minute-reset-seconds"),
        xDailyResetSeconds: headers.get("x-daily-reset-seconds"),
        retryAfter: headers.get("retry-after"),
        rateLimitPolicy: headers.get("ratelimit-policy"),
        rateLimit: headers.get("ratelimit"),
    };
}

export class Client {
    endpoint: string = "https://api.tomba.io/v1";
    headers: Payload = {
        "x-sdk-version": "tomba:deno:v1.0.1",
    };

    /**
     * Set Key
     *
     * Your Key
     *
     * @param string value
     *
     * @return self
     */
    setKey(value: string): this {
        this.addHeader("X-Tomba-Key", value);

        return this;
    }

    /**
     * Set Secret
     *
     * Your Secret
     *
     * @param string value
     *
     * @return self
     */
    setSecret(value: string): this {
        this.addHeader("X-Tomba-Secret", value);

        return this;
    }

    /***
     * @param endpoint
     * @return this
     */
    setEndpoint(endpoint: string): this {
        this.endpoint = endpoint;

        return this;
    }

    /**
     * @param key string
     * @param value string
     */
    addHeader(key: string, value: string): this {
        this.headers[key.toLowerCase()] = value;

        return this;
    }

    withoutHeader(_key: string, headers: Payload): Payload {
        return Object.keys(headers).reduce((acc: Payload, cv) => {
            if (cv == "content-type") return acc;
            acc[cv] = headers[cv];
            return acc;
        }, {});
    }

    async call(
        method: string,
        path: string = "",
        headers: Payload = {},
        params: Payload = {},
        // deno-lint-ignore no-explicit-any
    ): Promise<TombaResponse<any>> {
        headers = { ...this.headers, ...headers };

        let body;
        const url = new URL(this.endpoint + path);
        if (method.toUpperCase() === "GET") {
            url.search = new URLSearchParams(this.flatten(params)).toString();
            body = null;
        } else {
            body = JSON.stringify(params);
        }

        const options = {
            method: method.toUpperCase(),
            headers: headers,
            body: body,
            signal: AbortSignal.timeout(120000),
        };

        try {
            const response = await fetch(url.toString(), options);
            const rateLimit = parseRateLimit(response.headers);
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                if (response.status >= 400) {
                    const res = await response.json();
                    throw new TombaException(res.message, res.status, res);
                }

                const data = await response.json();
                return { data, rateLimit };
            } else {
                if (response.status >= 400) {
                    const res = await response.text();
                    throw new TombaException(res, response.status, null);
                }
                return { data: response, rateLimit };
            }
            // deno-lint-ignore no-explicit-any
        } catch (error: any) {
            if (error instanceof TombaException) {
                throw error;
            }
            throw new TombaException(
                error?.response?.errors?.message || error.message,
                error?.response?.errors?.code,
                error.response,
            );
        }
    }

    flatten(data: Payload, prefix = ""): Payload {
        let output: Payload = {};

        for (const key in data) {
            const value = data[key];
            const finalKey = prefix ? prefix + "[" + key + "]" : key;

            if (Array.isArray(value)) {
                output = { ...output, ...this.flatten(value, finalKey) };
            } else {
                output[finalKey] = value;
            }
        }

        return output;
    }
}
