import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DbModule} from "./db/db.module";
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import  {AppDataSource} from "./db/data.source";
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(AppDataSource), UserModule, CatalogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
