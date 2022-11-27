import cors from "cors";
import express from "express";
import routerMenu from "./Menu/MenuRouter.js";
import DinersRouter from './Diners/DinersRouter.js'
import TablesRouter from './Tables/TablesRouter.js'
import * as dotenv from 'dotenv'
import routerOrder from "./Order/Orders.js";
import routerCategory from "./Category/CategoryRouter.js"


dotenv.config()
const app = express();

const port = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use("/api/v1", routerMenu);
app.use("/api/v1", DinersRouter)
app.use("/api/v1", TablesRouter)
app.use("/api/v1", routerOrder)
app.use("/api/v1", routerCategory)



app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});