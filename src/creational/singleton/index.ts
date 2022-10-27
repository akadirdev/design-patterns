import { Logger } from "./logger";

export const singleton = () => {
  const logger = Logger.getInstance();
  logger.info("singleton logger created!");
};
