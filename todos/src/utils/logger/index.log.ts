import {prodLogger} from "./prod.log";
import {devLogger} from "./dev.log";
import {localLogger} from "./local.log";

let logger = process.env.NODE_ENV === "prod" ? prodLogger : process.env.NODE_ENV === "dev" ? devLogger : process.env.NODE_ENV === "local" ? localLogger : localLogger;

export { logger }
