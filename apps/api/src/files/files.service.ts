import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Minio from 'minio';
import { InjectMinio } from 'src/minio/minio.decorator';
import { Files } from './file.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
    protected _bucket = 'private';

    constructor(
        @InjectMinio() private readonly minioService: Minio.Client,
        @InjectRepository(Files)
        private readonly filesRepository: Repository<Files>,
    ) {}

    async getFileUrl(fileId: string) {
        const file = await this.filesRepository.findOne({
            where: {
                id: fileId,
            },
        }).catch(() => {
            throw new Error(`Файл c id: ${fileId} не найден!`);
        });

        const { name, bucket } = file;

        const url = `${process.env.MINIO_URI}/${bucket}/${name}`;

        return url;
    }

    async uploadFile(
        file: Express.Multer.File,
        bucket: string = this._bucket,
        prefix: string = '',
    ) {
        const { mimetype, originalname, buffer, size } = file;

        const destName = `${uuidv4()}-${originalname}`;
        const filename = (prefix ? `${prefix}/${destName}` : destName);

        await this.minioService.putObject(bucket, filename, buffer, size, {
            'Content-Type': mimetype,
            'Content-Disposition': 'inline',
        }).catch((error) => {
            throw new Error(`Ошибка загрузки файла: ${filename} в хранилище, ${error}`);
        });

        const entity = this.filesRepository.create({
            id: uuidv4(),
            name: filename,
            bucket,
        });

        const { id } = await this.filesRepository.save(entity).catch((error) => {
            throw new Error(`Ошибка при сохранении данных файла: ${filename}, ${error}`);
        });

        return id;
    }
}
