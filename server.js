const json = require("json-server")
const server = json.create()
const router = json.router("db.json")
const middlewares = json.defaults()
const port = 3001;
server.use(middlewares)
server.use(router)

server.listen(port, () => {
    console.log("Welcome to port")
})