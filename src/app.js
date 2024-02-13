import express from "express";
import tokensRoutes from "./routes/tokens.routes.js"
const app = express()

app.use(express.json())

app.use(tokensRoutes)

export default app;
