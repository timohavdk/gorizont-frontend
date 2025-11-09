import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Minio from 'minio';
import { InjectMinio } from 'src/minio/minio.decorator';
import handleAsync from 'src/utils/handle-async';
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
        const get = () => {
            return new Promise<string>(async (resolve, reject) => {
                const file = await this.filesRepository.findOne({
                    where: {
                        id: fileId,
                    },
                });

                if (!file) {
                    reject(`Файл c id: ${fileId} не найден!`);

                    return;
                }

                const { name, bucket } = file;

                const url = `${process.env.MINIO_URI}/${bucket}/${name}`;

                resolve(url);
            });
        };

        return handleAsync(get);
    }

    async uploadFile(
        file: Express.Multer.File,
        bucket: string = this._bucket,
        prefix: string = '',
    ) {
        const { mimetype, originalname, buffer, size } = file;

        const destName = `${uuidv4()}-${originalname}`;

        const filename = prefix ? `${prefix}/${destName}` : destName;

        const upload = () => {
            return new Promise<string>(async (resolve, reject) => {
                try {
                    await this.minioService.putObject(bucket, filename, buffer, size, {
                        'Content-Type': mimetype,
                        'Content-Disposition': 'inline',
                    }).catch(() => {
                        throw new Error('Ошибка загрузки файла в minio');
                    });

                    const entity = this.filesRepository.create({
                        id: uuidv4(),
                        name: filename,
                        bucket,
                    });

                    const { id } = await this.filesRepository.save(entity);

                    resolve(id);
                } catch (error) {
                    reject();
                }
            });
        };

        return handleAsync(upload);
    }
}
