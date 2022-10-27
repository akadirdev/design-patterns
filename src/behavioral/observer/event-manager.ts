import { Listener } from "./listener";

export class EventManager {
  private _listeners = new Map<string, Listener[]>();

  public subscribe(event: string, listener: Listener): void {
    if (this._listeners.has(event)) {
      const ls = this._listeners.get(event)!;
      ls.push(listener);
      this._listeners.set(event, ls);
    } else {
      this._listeners.set(event, [listener]);
    }
  }

  public unsubscribe(event: string, listener: Listener): void {
    if (this._listeners.has(event)) {
      const ls = this._listeners.get(event)!;
      const found = ls.findIndex((f) => Object.is(f, listener));
      if (found > -1) ls.splice(found, 1);
      this._listeners.set(event, ls);
    } else {
      throw new Error(`not found event!`);
    }
  }

  public publish(event: string, data: any): void {
    if (this._listeners.has(event)) {
      const listeners = this._listeners.get(event)!;
      for (const l of listeners) {
        l.on(event, data);
      }
    } else {
      throw new Error(`not found event!`);
    }
  }
}
