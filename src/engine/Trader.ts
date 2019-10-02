import EventEmitter from "events";
import fs from "fs";
import path from "path";

// @ts-ignore
import { Engine } from "bpmn-engine";

export class TraderEngine extends EventEmitter {
  public static async execute(key: string): Promise<void> {
    const engine = Engine({
      name: "trader",
      source: fs.readFileSync(
        path.join(__dirname, "../../bpmn/script1.bpmn"),
        "utf8"
      ),
      moddleOptions: {
        camunda: require("camunda-bpmn-moddle/resources/camunda")
      }
    });

    const listener = new EventEmitter();
    listener.on("activity.enter", (elementApi, engineApi) => {
      console.log(
        `${elementApi.type} <${elementApi.id}> of ${engineApi.name} is entered`
      );
    });

    // listener.on("wait", (elemntApi, instance) => {
    //   console.log(
    //     `${elemntApi.type} <${elemntApi.id}> of ${instance.name} is waiting for input`
    //   );
    //   // elemntApi.signal("don´t wait for me");
    // });

    engine.execute({
      listener
    });
  }

  public static async stop(key: string): Promise<void> {
    console.log(key);
  }
}
