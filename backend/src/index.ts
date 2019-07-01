import express from "express";
import { appRouter } from "./controllers";

require("dotenv").config();

const app = express();
const port = process.env.MS_PORT;

app.get("/", appRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});