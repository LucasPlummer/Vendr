import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { VendrController } from "./Controllers/VendrController.js";


class App {
  //   valuesController = new ValuesController();
  vendrController = new VendrController
  snacksController = new SnacksController
}

window["app"] = new App();
