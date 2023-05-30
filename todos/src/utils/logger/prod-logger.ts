import { createLogger, transports, format } from "winston";
import {timeDateFormat} from "../time-format";

const prodLogger = createLogger({
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
    format.printf(({ timestamp, level, message, service, stack}) => {
      return `[${level}]  ${timestamp} ${service}: ${ message}`;
    }),
  ),
  defaultMeta: {
    service: "Todos Service"
  },
});

export { prodLogger }