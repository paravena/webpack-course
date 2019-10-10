import { Component } from "@angular/core";

@Component({
  selector: "root-app",
  template: require("./app.component.html"),
  styles: [require("./app.component.css").toString()]
})
export class AppRoot {
  message = "Hello Angular"
}
