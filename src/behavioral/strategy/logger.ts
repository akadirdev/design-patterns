import { LoggingStrategy } from "./logging-strategy";
import { ConsoleLoggingStrategy } from "./strategy-impls";

export class Logger {
  private _strategy: LoggingStrategy = new ConsoleLoggingStrategy();

  public setStrategy(strategy: LoggingStrategy) {
    this._strategy = strategy;
  }

  public log(msg: any): void {
    this._strategy.log(msg);
  }
}
