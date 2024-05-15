import express from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import appRouter from "./routes/index.js";
const app = express();
// Middlewares
app.use(express.json());
// Remove It In Production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map