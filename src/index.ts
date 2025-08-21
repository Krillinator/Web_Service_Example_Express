import express from "express"
import { env } from "node:process"

const app = express()
const port = env.PORT || 3000

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" })
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
