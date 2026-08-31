import { Service } from "../service.ts";
import type { Payload, TombaResponse } from "../client.ts";
import { TombaException } from "../exception.ts";

/**
 * Valid bulk operation types.
 */
export type BulkType = "search" | "similar" | "company" | "finder" | "enrich" | "linkedin" | "author" | "verifier" | "phone-finder" | "phone-validator";

const VALID_BULK_TYPES: string[] = ["search", "similar", "company", "finder", "enrich", "linkedin", "author", "verifier", "phone-finder", "phone-validator"];

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
    async list(type: BulkType): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }

        const path = "/bulk/" + type;
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
    async get(type: BulkType, id: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + type + "/" + id;
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
     * @see {@link https://docs.tomba.io/api/bulk | Create Bulk API}
     * @param {Payload} data
     * @throws {TombaException}
     * @returns {Promise}
     */
    async create(type: BulkType, data: Payload): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }

        const path = "/bulk/" + type;
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
     * @see {@link https://docs.tomba.io/api/bulk | Launch Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async launch(type: BulkType, id: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + type + "/" + id;
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
     * @see {@link https://docs.tomba.io/api/bulk | Delete Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async delete(type: BulkType, id: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + type + "/" + id + "/delete";
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
     * @see {@link https://docs.tomba.io/api/bulk | Archive Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async archive(type: BulkType, id: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + type + "/" + id + "/archive";
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
     * @see {@link https://docs.tomba.io/api/bulk | Rename Bulk API}
     * @param {string} id
     * @param {string} name
     * @throws {TombaException}
     * @returns {Promise}
     */
    async rename(type: BulkType, id: string, name: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        if (typeof name === "undefined") {
            throw new TombaException('Missing required parameter: "name"');
        }

        const path = "/bulk/" + type + "/" + id + "/rename";
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
     * @see {@link https://docs.tomba.io/api/bulk | Bulk Progress API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async progress(type: BulkType, id: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + type + "/" + id + "/progress";
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
     * @see {@link https://docs.tomba.io/api/bulk | Download Bulk API}
     * @param {string} id
     * @throws {TombaException}
     * @returns {Promise}
     */
    async download(type: BulkType, id: string): Promise<TombaResponse> {
        if (!VALID_BULK_TYPES.includes(type)) {
            throw new TombaException(`Invalid bulk type: "${type}". Must be one of: ${VALID_BULK_TYPES.join(", ")}`);
        }
        if (typeof id === "undefined") {
            throw new TombaException('Missing required parameter: "id"');
        }

        const path = "/bulk/" + type + "/" + id + "/download";
        const payload: Payload = {};

        return await this.client.call("get", path, {
            "content-type": "application/json",
        }, payload);
    }
}
