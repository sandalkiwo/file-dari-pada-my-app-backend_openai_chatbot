import express from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
const app = express();
// Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// Remove It In Production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map