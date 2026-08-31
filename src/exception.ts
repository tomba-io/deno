export class TombaException {
    message: string;
    code: number;
    response: unknown;

    constructor(message: string, code: number = 0, response: unknown = "") {
        this.message = message;
        this.code = code;
        this.response = response;
    }
}
