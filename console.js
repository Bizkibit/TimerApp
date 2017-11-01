let repl = require("repl");
let m = require("../models");

let replServer = repl.start({});
replServer.context.m = m;
