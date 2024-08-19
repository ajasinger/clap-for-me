import express from "express";
import authRoutes from './route/auth';
import accomplishmentRoutes from './route/accomplishment';

const app = express();
const port = 5001;

app.use("/api/auth", authRoutes);
app.use("/api/accomplishment", accomplishmentRoutes);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});