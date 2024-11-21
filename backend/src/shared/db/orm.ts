import { MikroORM } from "@mikro-orm/core";
import { MySqlDriver } from "@mikro-orm/mysql";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";

export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'db',
    driver: MySqlDriver,
    clientUrl: 'mysql://root:5136@localhost:3306/db',
    highlighter: new SqlHighlighter(),
    debug: true,
    schemaGenerator: { //solo para desarrollo
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: [],
    },
})

export const syncSchema = async () => {
    const generator = orm.getSchemaGenerator()
    /* await generator.dropSchema()
    await generator.createSchema()
    */
    await generator.updateSchema()
}