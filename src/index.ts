import express from "express"
import { env } from "node:process"

const app = express()
const port: number = Number(env.PORT) || 3000 // Possibility for Crash
const address: string = "0.0.0.0" // Localhost - required for Render

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" })
})

app.listen(port, address, () => {
  console.log(`Listening to port ${port}`)
})
