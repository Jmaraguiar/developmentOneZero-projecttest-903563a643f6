import knex from "knex";
import path from 'path'

export class Database {
     static connection = knex({
        client: "better-sqlite3",
        connection: {
            filename: './users.db'
        },
        useNullAsDefault: true,
    });
};