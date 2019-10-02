import EventEmitter from "events";

export class TraderEngine extends EventEmitter {
  public static async execute(key: string): Promise<void> {
    console.log(key);
  }

  public static async stop(key: string): Promise<void> {
    console.log(key);
  }
}
