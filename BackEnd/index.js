import express, { Router } from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import Connection from "./DataBase/db.js";
import Routes from "./Routes/routing.js";

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Your server is running successfully at port: ${PORT}`)
);
