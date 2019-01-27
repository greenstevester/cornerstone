import { DynamicComponents } from "../components";
import { ViewApp } from "./view-app";

export const Views = {
  load: {
    app: function () {
      DynamicComponents.await.card();
      ViewApp.define('stn-app')
    }
  }
};
