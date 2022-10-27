export class Logger {
  private static _logger: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger._logger) Logger._logger = new Logger();

    return Logger._logger;
  }

  public info(msg: string): void {
    console.log(msg);
  }
}
