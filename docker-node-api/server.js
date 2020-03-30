const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

class Server {
    constructor() {}

    configure() {
        app.get("/", (req, res) => {
            res.status(200).json({ message: "Hello There!" });
        });
    }

    run() {
        try {
            app.listen(3000);
            console.log("Server started on port 3000");
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Server;

const server = new Server();
server.configure();
server.run();
