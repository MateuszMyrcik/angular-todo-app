import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { ListItemsComponent } from "./list-items/list-items.component";

import { ItemsDataService } from "./services/items-data.service";

@NgModule({
  declarations: [AppComponent, NewTaskComponent, ListItemsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ItemsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
