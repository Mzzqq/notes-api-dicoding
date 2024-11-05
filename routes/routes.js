const Hapi = require('@hapi/hapi');
const { addNoteHandler, getAllNotesHandler } = require("../handler/handler");

const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
    },
    {
        method: "GET",
        path: "/notes",
        handler: getAllNotesHandler,
    }
]

module.exports = routes