import { Injectable } from '@nestjs/common';
import {PythonShell} from "python-shell";


@Injectable()
export class FilesService {
    goPy(scriptPath: string, filePath: string) {
        const pythonShell = new PythonShell(
            scriptPath,
            {
                mode: 'text',
                pythonPath: 'src/python/environment/bin/python'
            }
        )
        return new Promise(function (resolve) {
            pythonShell.send(filePath)
            pythonShell.on('message', (message) => {
                console.log(message)
                console.log(typeof (message))
                resolve(message)
            })
        })
    }

    debugPy2(scriptPath: string, filePath: string) {

        PythonShell.run(
            scriptPath,
            {
                mode: 'text',
                pythonPath: 'src/python/environment/bin/python',
                args: [filePath]
            },
            function (err, results) {
                console.log(results)
                let answer = results[0]
                console.log('results: ', answer);
                if (err) throw err
            });
    }

    goPy3(scriptPath: string, filePath: string) {
        const pythonShell = new PythonShell(
            scriptPath,
            {
                mode: 'text',
                pythonPath: 'src/python/environment/bin/python'
            }
        )
        return new Promise(function (resolve) {
            pythonShell.send(filePath);
            pythonShell.on('message', (message) => {
                console.log(message)
                resolve(message)
            })

        })

    }
}
