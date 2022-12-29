import {DataSource, DataSourceOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import {join} from "path";


export const AppDataSource : DataSourceOptions ={ // DataSourceOptions это интерфейс из typeorm с типом DataSource
    type: 'postgres', // тип БД (есть еще mysql, sqlite, mssql)
    host: 'localhost', // хост БД (можно указать ip адрес)
    port: 5432, // порт БД (по умолчанию 5432 у postgres)
    username: 'postgres', // имя пользователя БД (можно указать другое)
    password: 'mysecretpassword', // пароль пользователя БД (можно указать другой)
    database: 'postgres', // имя БД (который создается при установке postgres)
    entities: [join(__dirname, '../entitys/**/*.entity{.ts,.js}')], // путь к entitys (можно указать несколько путей)
    synchronize: true, // синхронизация с БД (если true, то при запуске приложения, если в entitys есть изменения, то они будут применены к БД)
    migrationsRun: true, // запуск миграций (если true, то при запуске приложения, если в папке migrations есть изменения, то они будут применены к БД)
    migrationsTableName: 'migrations', // имя таблицы для миграций
    namingStrategy: new SnakeNamingStrategy(), // стратегия именования (выглядит как snake_case)
    migrations: [join(__dirname, './migrations/*.ts')], // путь к миграциям (можно указать несколько путей)

}
const dataSource = new DataSource(AppDataSource); // создаем экземпляр DataSource с нашими настройками

export default dataSource; // экспортируем dataSource

// username, password, database, host, port - это данные для подключения к БД ( при создании сервера postgres, указываются эти данные)
// в поле entities указывается путь к entitys (entitys - это классы, которые описывают структуру таблиц в БД)
// в поле synchronize указывается, что при запуске приложения, если в entitys есть изменения, то они будут применены к БД
// в поле migrationsRun указывается, что при запуске приложения, если в папке migrations есть изменения, то они будут применены к БД
// в поле migrationsTableName указывается имя таблицы для миграций
// в поле namingStrategy указывается стратегия именования (выглядит как snake_case) образец выглядит так:  "user_id"
// в поле migrations указывается путь к миграциям (можно указать несколько путей)