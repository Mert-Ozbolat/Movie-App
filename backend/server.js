const http = require("http");
const getRequest = require("./methodes/get");
const postRequest = require("./methodes/post");
const deleteRequest = require("./methodes/delete");
const defaultRequest = require("./methodes/default");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");

    switch (req.method) {
        case "GET":
            return getRequest(req, res);

        case "POST":
            return postRequest(req, res);

        case "DELETE":
            return deleteRequest(req, res);

        default:
            return defaultRequest(req, res);
    }
});

const port = 4091;

server.listen(port, () => {
    console.log(`Server ${port}' gelen istekleri dinlemeye başladı`);
});