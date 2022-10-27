import { Listener } from "./listener";

export class EventListener implements Listener {
  on(event: string, data: any): void {
    console.log('Triggered "' + event + '" event and received data: ' + data);
  }
}
