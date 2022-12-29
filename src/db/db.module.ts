import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {TYPEORM_DATABASE, TYPEORM_HOST, TYPEORM_PASSWORD, TYPEORM_PORT, TYPEORM_USERNAME} from "./db.constant";
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
                const conf: TypeOrmModuleOptions = {
                    type: 'postgres',
                    host: configService.get<string>(TYPEORM_HOST),
                    port: Number(configService.get<string>(TYPEORM_PORT)),
                    username: configService.get<string>(TYPEORM_USERNAME),
                    password: configService.get<string>(TYPEORM_PASSWORD),
                    database: configService.get<string>(TYPEORM_DATABASE),
                    entities: [join(__dirname, '../entitys/**/*.entity{.ts,.js}')],
                    synchronize: true,
                    migrationsTableName: 'migrations',
                    namingStrategy: new SnakeNamingStrategy(),
                    migrations: ['src/db/migrations/*.ts'],
                    // cli: {
                    //     migrationsDir: 'src/db/migrations',
                    // },
                };
                return conf;
            },
            inject: [ConfigService],
        })
]})
export class DbModule {}