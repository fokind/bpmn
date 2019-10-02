import { odata, ODataServer } from "odata-v4-server";
import { TraderController } from "./controllers/Trader";

@odata.cors
@odata.namespace("Trader")
@odata.controller(TraderController, true)
export class TraderServer extends ODataServer {}
