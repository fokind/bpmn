import EventEmitter from "events";
import { ObjectID } from "mongodb";
import { Edm, odata } from "odata-v4-server";
import { TraderEngine } from "../engine/Trader";

export class Trader extends EventEmitter {
  @Edm.Key
  @Edm.Computed
  @Edm.String
  // tslint:disable-next-line: variable-name
  public _id: ObjectID;

  @Edm.String
  public value: string;

  constructor(data: any) {
    super();
    Object.assign(this, data);
  }

  @Edm.Action
  public async execute(@odata.result result: any): Promise<void> {
    return TraderEngine.execute(result._id);
  }

  @Edm.Action
  public async stop(@odata.result result: any): Promise<void> {
    return TraderEngine.stop(result._id);
  }
}
