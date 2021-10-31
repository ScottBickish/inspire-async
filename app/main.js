import { TimeController } from "./Controllers/TimeController.js"
import { BackgroundsController } from "./Controllers/BackgroundsController.js"
import { WeatherController } from "./Controllers/WeatherController.js"
import { TaskController } from "./Controllers/TaskController.js"
class App {
  timeController = new TimeController()
  backgroundsController = new BackgroundsController()
  weatherController = new WeatherController()
  taskController = new TaskController()
}

window["app"] = new App();
