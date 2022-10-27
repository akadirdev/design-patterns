import { EventListener } from "./event-listener";
import { EventManager } from "./event-manager";

export const observer = () => {
  const listener1 = new EventListener();

  const eventManager = new EventManager();
  eventManager.subscribe("message", listener1);

  eventManager.publish("message", "Hello observer!");
};
