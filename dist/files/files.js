"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const common_1 = require("@nestjs/common");
const python_shell_1 = require("python-shell");
let Files = class Files {
    goPy(scriptPath) {
        const pythonShell = new python_shell_1.PythonShell(scriptPath, { mode: 'json' });
        return new Promise(function (resolve) {
            pythonShell.on('message', (message) => {
                console.log(message);
                resolve(message);
            });
        });
    }
    goPy2(scriptPath) {
        python_shell_1.PythonShell.run(scriptPath, { mode: 'json' }, function (err, results) {
            console.log(results);
            results = [0.1, 0.2, 0.3];
            let answer = {
                "localShimmer": results[0],
                "localJitter": results[1],
                "rapJitter": results[2],
            };
            console.log('results: ', answer);
            return answer;
        });
    }
};
Files = __decorate([
    (0, common_1.Injectable)()
], Files);
exports.Files = Files;
//# sourceMappingURL=files.js.map