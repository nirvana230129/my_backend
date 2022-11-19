import { PythonService } from "./python.service";
export declare class PythonController {
    private pythonService;
    constructor(pythonService: PythonService);
    getByValue(): Promise<unknown>;
}
