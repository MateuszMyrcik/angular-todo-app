import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Task } from "../interfaces/task";

@Injectable({
  providedIn: "root"
})
export class ItemsDataService {
  public sender = new Subject("default message");
  public receiver: Observable<any>;

  constructor() {
    this.receiver = this.sender.asObservable();
  }

  addMessage(message: Task) {
    this.sender.next(message);
  }
}
