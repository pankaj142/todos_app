import {prodLogger} from "./prod-logger";
import {devLogger} from "./dev-logger";
import {localLogger} from "./local-logger";

let log = process.env.NODE_ENV === "prod" ? prodLogger : process.env.NODE_ENV === "dev" ? devLogger : process.env.NODE_ENV === "local" ? localLogger : localLogger;

export { log }


// npm logging levels are prioritized from 0 to 6 (highest to lowest):
// {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
// }
