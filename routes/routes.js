const Hapi = require('@hapi/hapi');
const { addNoteHandler } = require("../handler/handler");

const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
    }
]

module.exports = routes