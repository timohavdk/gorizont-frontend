import 'dotenv/config';
import { Global, Module } from '@nestjs/common';
import { MINIO_TOKEN } from './minio.decorator';
import * as Minio from 'minio';

@Global()
@Module({
    exports: [MINIO_TOKEN],
    providers: [
        {
            provide: MINIO_TOKEN,
            useFactory: async (): Promise<Minio.Client> => {
                const client = new Minio.Client({
                    endPoint: process.env.MINIO_ENDPOINT,
                    port: +process.env.MINIO_PORT,
                    accessKey: process.env.MINIO_USER,
                    secretKey: process.env.MINIO_PASSWORD,
                    useSSL: !!process.env.MINIO_SSL,
                });
                return client;
            },
        },
    ],
})
export class MinioModule { }
