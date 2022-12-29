import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { customersRoutes } from "./customers/customers";
import * as dotenv from 'dotenv';

dotenv.config({path: ".env.local"});
const app = express();

customersRoutes(app);

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

// app.get("/", (req: Request, res: Response) => {
//   res.send(ads);
// });

app.listen(3001, () => {
  console.log("listening on port 3001");
});
