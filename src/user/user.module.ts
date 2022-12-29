import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController], // обязательно указываем контроллер в модуле
  providers: [UserService], // В providers мы указываем сервисы, которые будут использоваться в контроллерах этого модуля.
  exports: [UserService] // Экспортируем сервис, чтобы он был доступен в других модулях
})
export class UserModule {}
