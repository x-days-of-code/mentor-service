import "reflect-metadata";
import express from "express";
import { createConnection, Connection } from "typeorm";

import { appRouter } from "./controllers";
import ormconfig from "./ormconfig";

const app = express();
const port = process.env.MS_PORT;

app.get("/", appRouter);

export let db: Connection;

createConnection(ormconfig)
    .then((connection) => {
        db = connection;

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`);
        });
    })
    .catch(error => console.log(error));