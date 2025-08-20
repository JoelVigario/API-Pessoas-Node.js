import express from "express";
import routes from "./routes.js";
const app = new express()

app.use(express.json())
app.use(routes)

export default app