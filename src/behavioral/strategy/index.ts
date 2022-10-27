import { Logger } from "./logger";
import { NosqlLoggingStrategy } from "./strategy-impls";

export const strategy = () => {
  const logger = new Logger();
  logger.setStrategy(new NosqlLoggingStrategy());

  logger.log("Hello Strategy Pattern!");
};
