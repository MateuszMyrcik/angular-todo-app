import { Component } from "@angular/core";
import { ItemsDataService } from "../services/items-data.service";
import { taskEntity } from "../entity/taskEntity";

@Component({
  selector: "new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"]
})
export class NewTaskComponent {
  public taskText: string;
  public isAddTaskArea: boolean;
  public taskId: number;
  public isValidateError: boolean;

  constructor(private data: ItemsDataService) {
    this.isAddTaskArea = false;
    this.taskId = 0;
    this.isValidateError = false;
  }

  public showAddTaskArea(text: string) {
    this.isAddTaskArea = !this.isAddTaskArea;
  }

  public addTask() {
    if (!this.taskText) {
      this.isValidateError = true;
      return;
    }

    this.isValidateError = false;

    const task = {
      text: this.taskText,
      id: this.taskId++
    };
    const newTask = new taskEntity(task);

    this.data.addMessage(newTask);
    this.taskText = "";
  }

  ngOnInit() {}
}
