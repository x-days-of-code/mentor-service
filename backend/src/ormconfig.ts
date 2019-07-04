import { ConnectionOptions } from "typeorm";

export = {
    type: "postgres",
    host: process.env.MS_DB_HOST,
    port: Number(process.env.MS_DB_PORT),
    username: process.env.MS_DB_USER,
    password: process.env.MS_DB_PASSWORD,
    database: process.env.MS_DB_NAME,
    entities: [
        "src/db/entities/**/*.ts"
    ],
    migrations: [
        "src/db/migrations/**/*.ts"
    ],
    cli: {
        migrationsDir: "src/db/migrations"
    },
} as ConnectionOptions;
