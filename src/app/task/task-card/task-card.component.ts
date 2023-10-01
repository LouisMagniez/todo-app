import { Component, Input, Output } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["task-card.component.css"],
})
export class TaskCardComponent {
  constructor(private taskService: TaskService) {}

  @Input() cardListID!: number

  @Output() cardID: number = this.cardListID

  filterDoneStatus: string = "SEE_ALL"

  taskList: Task[] = this.taskService.getTaskList(this.cardID)

  ngOnInit() {}

  refreshTaskList() {
    this.taskList = this.taskService.getTaskList(this.cardID)
  }

  onChangeChipCheckUndefined() {
    if (this.filterDoneStatus === undefined) {
      setTimeout(() => {
        this.filterDoneStatus = "SEE_ALL"
      }, 0)
    }
  }

  onChangeDoneStatus(task: Task) {
    this.taskService.updateTask(task)
  }

  filterTaskList(searchFilter: string, filterDoneStatus: string) {
    let searchedTaskList = this.taskService.searchFilter(
      this.taskList,
      searchFilter
    )
    return this.taskService.statusFilter(searchedTaskList, filterDoneStatus)
  }

  onClickEdit(task: Task) {
    task.edit = true
  }

  onClickDelete(task: Task) {
    this.taskService.deleteTask(task)
  }

  trackById(_index: number, task: Task) {
    return task.id
  }
  taskCounter(
    searchFilter: string,
    filterDoneStatus: string,
    counterType: string
  ) {
    return this.taskService.manageTaskCounter(
      counterType,
      this.filterTaskList(searchFilter, filterDoneStatus)
    )
  }
}
