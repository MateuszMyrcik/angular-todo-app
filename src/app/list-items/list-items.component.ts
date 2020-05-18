import { Component } from "@angular/core";
import { ItemsDataService } from "../services/items-data.service";
import { Task } from "../interfaces/task";

@Component({
  selector: "list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.scss"]
})
export class ListItemsComponent {
  private tasks: Task[];
  private message: any;

  constructor(public data: ItemsDataService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.data.receiver.subscribe(message => {
      this.tasks.push(message);
    });
  }

  public removeTask({ id }: Task) {
    this.tasks = this.tasks.filter(item => {
      return item.id !== id;
    });
  }

  public toggleTodoComplete(task: Task) {
    task.completed = !task.completed;
  }
}
