import { Component } from "@angular/core"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-card-list",
  templateUrl: "./task-card-list.component.html",
  styleUrls: ["./task-card-list.component.css"],
})
export class TaskCardListComponent {
  constructor(private taskService: TaskService) {}

  cardList = this.taskService.getCardList()

  filterDoneStatus: string = "SEE_ALL"

  ngOnInit() {
    this.taskService.initCard()
  }

  generateNewCard() {
    this.taskService.addCard()
  }

  onChangeChipCheckUndefined() {
    if (this.filterDoneStatus === undefined) {
      setTimeout(() => {
        this.filterDoneStatus = "SEE_ALL"
      }, 0)
    }
  }

  refreshCardList() {
    this.cardList = this.taskService.getCardList()
  }
}
