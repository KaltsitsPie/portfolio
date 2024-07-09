import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import router from "./routes/getFiles.js";

const app = express();
app.use(bodyParser.json({
    limit: "32mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "32mb",
    extended: true
}));
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server run in port: ${PORT}`);
})

