import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFilesTableAndImageToArticle1756634475725 implements MigrationInterface {
    name = 'AddFilesTableAndImageToArticle1756634475725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "files" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "bucket" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "articles" ADD "imageId" uuid');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "articles" DROP COLUMN "imageId"');
        await queryRunner.query('DROP TABLE "files"');
    }
}
