"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
let FilesService = class FilesService {
    constructor() {
        'use strict';
        const python = require('python-bridge');
        const py = python();
        const { ex, end, } = py;
        const list = [3, 4, 2, 1];
        ex `import math`;
        ex `import pyautogui`;
        ex `import numpy as np`;
        ex `import pandas`;
        let pythonPath = '/Users/arif_meylanov/Desktop/Arif/Projects/js/my_back/src/python/environment/bin/python';
        python.ex `import math`;
    }
    fromPython(pyCode = {}) {
        return JSON.stringify(pyCode);
    }
    toJavaScript(pyStr = "") {
        return JSON.parse(pyStr);
    }
    fromPy(pyCode = {}) {
        return this.toJavaScript(this.fromPython(pyCode));
    }
    async pyScript() {
        try {
            let math = await this.py `math.sqrt(9)`;
            let sort = await this.py `sorted(${this.list})`;
            this.ex `
          value = np.random.randint(0, 7, size = 10)
          returnit = pandas.Series(value).tolist()
       `;
            let returnExample = await this.py `returnit`;
            console.log(returnExample);
            const test = (math + sort.reduce((a, c) => a + c, 0));
            let position = await this.py `pyautogui.position()`;
            console.log(position);
            this.ex `pyautogui.screenshot("test.png")`;
            this.ex `print(str(${test}))`;
            this.ex `pyautogui.typewrite(str(${test}))`;
            this.py `pyautogui.typewrite("show it to me")`;
            this.py `pyautogui.moveTo(${test}, ${math})`;
        }
        catch (e) {
            console.log(e);
        }
        this.end();
    }
    async() { }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FilesService);
exports.FilesService = FilesService;
{
    await this.pyscript();
}
().catch(error => {
    console.log("error");
    console.error(error);
});
//# sourceMappingURL=files2.service.js.map