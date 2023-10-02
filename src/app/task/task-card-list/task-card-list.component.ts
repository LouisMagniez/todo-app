import { Component } from "@angular/core"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-card-list",
  templateUrl: "./task-card-list.component.html",
  styleUrls: ["./task-card-list.component.css"],
})
export class TaskCardListComponent {
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    localStorage.clear()
    this.taskService.initCard()
  }

  cardList = this.taskService.getCardList()
}
