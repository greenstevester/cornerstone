import { DynamicComponents } from "../src/app/components";
import { start } from "./stn-shrm";

//init app components
DynamicComponents.await.all();

//start demo app
start();



