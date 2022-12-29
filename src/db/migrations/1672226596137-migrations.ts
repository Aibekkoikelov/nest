import { MigrationInterface, QueryRunner } from "typeorm"

export class migrations1672226596137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY ("id"))`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
