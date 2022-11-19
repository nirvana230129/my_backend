export declare class FilesService {
    constructor();
    fromPython(pyCode?: {}): string;
    toJavaScript(pyStr?: string): any;
    fromPy(pyCode?: {}): any;
    pyScript(): Promise<void>;
    async(): any;
}
