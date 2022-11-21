"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const python_shell_1 = require("python-shell");
let FilesService = class FilesService {
    goPy(scriptPath, filePath) {
        const pythonShell = new python_shell_1.PythonShell(scriptPath, {
            mode: 'text',
            pythonPath: 'src/files/python/environment/bin/python'
        });
        return new Promise(function (resolve) {
            pythonShell.send(filePath);
            pythonShell.on('message', (message) => {
                console.log(message);
                console.log(typeof (message));
                resolve(message);
            });
        });
    }
    debugPy2(scriptPath, filePath) {
        python_shell_1.PythonShell.run(scriptPath, {
            mode: 'text',
            pythonPath: 'src/python/environment/bin/python',
            args: [filePath]
        }, function (err, results) {
            console.log(results);
            let answer = results[0];
            console.log('results: ', answer);
            if (err)
                throw err;
        });
    }
    goPy3(scriptPath, filePath) {
        const pythonShell = new python_shell_1.PythonShell(scriptPath, {
            mode: 'text',
            pythonPath: 'src/python/environment/bin/python'
        });
        return new Promise(function (resolve) {
            pythonShell.send(filePath);
            pythonShell.on('message', (message) => {
                console.log(message);
                resolve(message);
            });
        });
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map