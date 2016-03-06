var DSServer = require("deepstream.io");
var RethinkDBStorageConnector = require("deepstream.io-storage-rethinkdb");

// Setup the deepstream server
var server = new DSServer();
server.set("host", "localhost");
server.set("port", 6020);

// Setup the RethinkDB storage connector
server.set("storage", new RethinkDBStorageConnector({
    port: 28015,
    host: "localhost",
    splitChar: "/",
    defaultTable: "dp-records"
}));

// Run the server
server.start();