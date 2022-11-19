import { Files } from "./files";
export declare class FilesController {
    private pythonService;
    constructor(pythonService: Files);
    getByValue(): Promise<unknown>;
}
