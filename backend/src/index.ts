import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from './route/auth';
import accomplishmentRoutes from './route/accomplishment';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5001;

app.use(cookieParser()); //parse cookies
app.use(express.json()); //parse json request bodies

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.use("/api/auth", authRoutes);
app.use("/api/accomplishment", accomplishmentRoutes);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});