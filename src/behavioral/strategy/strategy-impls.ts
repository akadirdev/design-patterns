import { LoggingStrategy } from "./logging-strategy";

export class FileLoggingStrategy implements LoggingStrategy {
  log(msg: any): void {
    // save log message to file
    console.log(`LogMessage:${msg} was saved to file!`);
  }
}

export class NosqlLoggingStrategy implements LoggingStrategy {
  log(msg: any): void {
    // save log message to Nosql DB
    console.log(`LogMessage:${msg} was saved to ElasticSearch!`);
  }
}

export class ConsoleLoggingStrategy implements LoggingStrategy {
  log(msg: any): void {
    // save log message to console
    console.log(`LogMessage:${msg} was saved to console!`);
  }
}
