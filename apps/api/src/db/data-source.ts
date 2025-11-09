import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'reflect-metadata';

export const dataSourceOptions: DataSourceOptions = {
    type: process.env.DB_DIALECT as 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PW,
    database: process.env.POSTGRES_DB,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    migrationsTableName: `${process.env.POSTGRES_DB}_migration_table`,
    synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
