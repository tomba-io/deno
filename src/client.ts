import { TombaException } from "./exception.ts";

export interface Payload {
  [key: string]: any;
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

  withoutHeader(key: string, headers: Payload): Payload {
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
  ) {
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
    };

    try {
      let response = await fetch(url.toString(), options);
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        if (response.status >= 400) {
          let res = await response.json();
          throw new TombaException(res.message, res.status, res);
        }

        return response.json();
      } else {
        if (response.status >= 400) {
          let res = await response.text();
          throw new TombaException(res, response.status, null);
        }
        return response;
      }
    } catch (error) {
      throw new TombaException(
        error?.response?.errors?.message || error.message,
        error?.response?.errors?.code,
        error.response,
      );
    }
  }

  flatten(data: Payload, prefix = "") {
    let output: Payload = {};

    for (const key in data) {
      let value = data[key];
      let finalKey = prefix ? prefix + "[" + key + "]" : key;

      if (Array.isArray(value)) {
        output = { ...output, ...this.flatten(value, finalKey) }; // @todo: handle name collision here if needed
      } else {
        output[finalKey] = value;
      }
    }

    return output;
  }
}
