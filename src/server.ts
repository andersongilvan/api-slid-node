import 'dotenv/config'
import express from "express"
import { routes } from './routes'

const app = express()


routes(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`)
})