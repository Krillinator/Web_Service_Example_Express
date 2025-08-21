import express from "express"
import { env } from "node:process"

const app = express()
const port: number = Number(env.PORT) || 3000 // Could crash

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" })
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port ${port}`)
})
