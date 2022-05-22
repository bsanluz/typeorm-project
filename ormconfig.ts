import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";


const config : SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'challenge.sqlite3',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/src/db/migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/db/models'
    }
}
export default config