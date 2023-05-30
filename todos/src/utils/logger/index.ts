import {prodLogger} from "./prod-logger";
import {devLogger} from "./dev-logger";
import {localLogger} from "./local-logger";

let logger = process.env.NODE_ENV === "prod" ? prodLogger : process.env.NODE_ENV === "dev" ? devLogger : process.env.NODE_ENV === "local" ? localLogger : localLogger;

export { logger }
