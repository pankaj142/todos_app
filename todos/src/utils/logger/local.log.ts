import { createLogger, transports, format } from "winston";
import {timeDateFormat} from "../time-format";

const localLogger = createLogger({
  level:"debug",
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: "logs",
      filename: "todos.log",
    }),
  ],
  format: format.combine(
    format.timestamp({format : timeDateFormat}),
    format.colorize(),
    format.printf(({ timestamp, level, message}) => {
      return `[${level}] ${timestamp}: ${message}`;
    })
  ),
});

export { localLogger }