import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Bulk
 *
 * Manage bulk email operations.
 *
 * @see {@link https://docs.tomba.io/api/bulk | Bulk API}
 */
export class Bulk extends Service {
    /**
     * List Bulk Tasks
     *
     * Returns a list of bulk tasks.
     *
     * @see {@link https://docs.tomba.io/api/bulks | List Bulk API}
     * @throws {TombaException}
     * @returns {Promise}
     */
    async list(): Promise<TombaResponse> {
        const path = "/bulk";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Get Bulk Task
     *
     * Returns a specific bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#get-bulk | Get Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async get(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + id;
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Create Bulk Task
     *
     * Create a new bulk task.
     *
     * @see {@link https://docs.tomba.io/api/bulk#create-bulk | Create Bulk API}
     * @param {Payload} data
     * @throws {TombaException}
     * @returns {Promise}
     */
    async create(data: Payload): Promise<TombaResponse> {
        const path = "/bulk";
        const payload: Payload = data;

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Launch Bulk Task
     *
     * Launch a bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#launch-bulk | Launch Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async launch(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + id + "/launch";
        const payload: Payload = {};

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Delete Bulk Task
     *
     * Delete a specific bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#delete-bulk | Delete Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async delete(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + id;
        const payload: Payload = {};

        return await this.client.call("delete", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Archive Bulk Task
     *
     * Archive a bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#archive-bulk | Archive Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async archive(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + id + "/archive";
        const payload: Payload = {};

        return await this.client.call("post", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Rename Bulk Task
     *
     * Rename a bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#rename-bulk | Rename Bulk API}
     * @param {string} id
     * @param {string} name
     * @throws {TombaException}
     * @returns {Promise}
     */
    async rename(id: string, name: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        if (typeof name === "undefined") {
            throw new TombaException('Missing required parameter: "name"');
        }

        const path = "/bulk/" + id + "/rename";
        const payload: Payload = {};

        if (typeof name !== "undefined") {
            payload["name"] = name;
        }

        return await this.client.call("put", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Bulk Progress
     *
     * Get the progress of a bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#bulk-progress | Bulk Progress API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async progress(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + id + "/progress";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }

    /**
     * Download Bulk Results
     *
     * Download the results of a bulk task by its id.
     *
     * @see {@link https://docs.tomba.io/api/bulk#download-bulk | Download Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async download(id: string): Promise<TombaResponse> {
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + id + "/download";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
