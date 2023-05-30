import { createLogger, transports, format } from "winston";
import { timeDateFormat } from "../time-format";

const localLogger = createLogger({
  level:"debug",
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: "logs",
      filename: "users.log",
    }),
  ],
  format: format.combine(
    format.timestamp({format : timeDateFormat}),
    format.colorize(),
    format.printf(({ timestamp, level, message, stack}) => {
      return `[${level}] ${timestamp}: ${stack || message}`; // incase of error, log the comlete error stack
    }),
    format.errors({stack: true}), // incase of error, log the error stack as well, this is not recommendated to use in prod env
    ),
});

export { localLogger }