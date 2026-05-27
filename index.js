// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// Configurations
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`server is running on port ${app.config.port}`);
    });
};

// server start
app.createServer();
