import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { ArticlesModule } from './articles/articles.module';
import CacheModule from './cache/cache-module';
import { MinioModule } from './minio/minio.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRoot(dataSourceOptions),
        ArticlesModule,
        CacheModule,
        MinioModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
