/// <reference types="multer" />
import { FilesService } from "./files.service";
export declare class FilesController {
    private pythonService;
    constructor(pythonService: FilesService);
    handleUpload(file: Express.Multer.File): Promise<unknown>;
}
