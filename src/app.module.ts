import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DbModule} from "./db/db.module";
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import  {AppDataSource} from "./db/data.source";

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(AppDataSource), UserModule], //  В этом модуле подключаем все модули приложения
  controllers: [AppController], //
  providers: [AppService],
})
export class AppModule {}

// ConfigModule.forRoot() - это  встроенный модуль NestJS, который позволяет загружать переменные окружения из файла .env в процессе выполнения приложения. По умолчанию он загружает файл .env в корневой директории проекта. Если вы хотите загрузить другой файл, вы можете передать его имя в качестве параметра. Например, ConfigModule.forRoot({envFilePath: '.env.dev'}) загрузит файл .env.dev вместо .env.
// TypeOrmModule.forRoot(AppDataSource) - это модуль TypeORM, который позволяет подключиться к базе данных. В качестве параметра он принимает объект, который содержит настройки подключения к базе данных. В нашем случае мы используем объект AppDataSource, который мы определили в файле db/data.source.ts. Это позволяет нам разделить настройки подключения к базе данных и настройки модуля TypeORM.