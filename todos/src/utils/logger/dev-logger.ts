import { createLogger, transports, format } from "winston";
import {timeDateFormat} from "../time-format";

const devLogger = createLogger({
  level:"info",
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: "logs",
      filename: "todos.log",
    }),
  ],
  format: format.combine(
    format.timestamp({format:timeDateFormat}),
    // format.colorize(),  // if you use format.json() then colorize will add some text in level in log
    format.printf(({ timestamp, level, message, stack}) => {
      return `[${level}] ${timestamp}: ${stack|| message}`;
    }),
    format.errors({stack:true}),
    format.json() 
  ),
});


export { devLogger }
