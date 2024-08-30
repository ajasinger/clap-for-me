import express from "express";
import authRoutes from './route/auth.ts';
import accomplishmentRoutes from './route/accomplishment.ts';

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5001;

app.use(express.json()); //used to parse json data

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.use("/api/auth", authRoutes);
app.use("/api/accomplishment", accomplishmentRoutes);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});