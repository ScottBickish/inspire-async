import { ValuesController } from "./Controllers/ValuesController.js";
import { BackgroundsController } from "./Controllers/BackgroundsController.js"
class App {
  // valuesController = new ValuesController();
  backgroundsController = new BackgroundsController()
}

window["app"] = new App();
