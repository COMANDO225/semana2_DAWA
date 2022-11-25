import Express from "express";
import cors from "cors";
import { user } from "./components";

export const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/api/user", user);