const eventEmitter = require("events");
const Logger = require("./Logger");
const logger = new Logger();
logger.on("messageLogger", (arg) => {
  console.log(arg);
});
logger.log("Message");
