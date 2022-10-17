require('dotenv').config()
const express = require('express');

var cors = require('cors')
const sequelize = require("./db")

const userRoute = require('./routes/UserRoute')

const server = express();

server.use(cors({
    origin:"*"
}))

server.use(express.json());
server.use("/api/v1", userRoute)



server.listen(process.env.PORT , () => {
    console.log("Server is listening on", process.env.PORT);
    console.log(`http://localhost:${process.env.PORT}`)
})