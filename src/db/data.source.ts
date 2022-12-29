import {DataSource, DataSourceOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import {join} from "path";


export const AppDataSource : DataSourceOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres',
    entities: [join(__dirname, '../entitys/**/*.entity{.ts,.js}')],
    synchronize: true,
    migrationsRun: true,
    migrationsTableName: 'migrations',
    namingStrategy: new SnakeNamingStrategy(),
    migrations: [join(__dirname, './migrations/*.ts')],

}
const dataSource = new DataSource(AppDataSource);

export default dataSource;

