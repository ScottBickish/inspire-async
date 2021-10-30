import { TimeController } from "./Controllers/TimeController.js"
import { BackgroundsController } from "./Controllers/BackgroundsController.js"
import { WeatherController } from "./Controllers/WeatherController.js"
class App {
  timeController = new TimeController()
  backgroundsController = new BackgroundsController()
  weatherController = new WeatherController()
}

window["app"] = new App();
