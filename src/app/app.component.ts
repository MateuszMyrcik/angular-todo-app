import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Task App";
  description = "Aplikcja przeznaczona  zarzadzania zadaniami.";
  public message: string;
}
