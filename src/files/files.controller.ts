import {Controller, Get, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import { FilesService } from "./files.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import { extname } from 'path'


@Controller('files')
export class FilesController {

    constructor(private pythonService: FilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor(
        'file',
        {
            storage: diskStorage({
                destination: './sounds',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
                    const ext = extname(file.originalname)
                    const filename = `audio-${uniqueSuffix}${ext}`
                    callback(null, filename)
                }
            })
        }))
    handleUpload(@UploadedFile() file: Express.Multer.File) {
        const scriptPath = './src/python/main.py'
        const filePath = './sounds/' + file.filename
        return this.pythonService.goPy(scriptPath, filePath)
    }
}
