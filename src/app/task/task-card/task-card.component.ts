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

  @Input() CardID!: number

  filterDoneStatus: string = "SEE_ALL"

  taskList!: Task[]

  ngOnInit() {
    this.taskList = this.taskService.getTaskList(this.CardID)
  }

  refreshTaskList() {
    console.log("in refresh")
    this.taskList = this.taskService.getTaskList(this.CardID)
  }

  onChangeChipCheckUndefined() {
    if (this.filterDoneStatus === undefined) {
      setTimeout(() => {
        this.filterDoneStatus = "SEE_ALL"
      }, 0)
    }
  }

  onChangeDoneStatus(task: Task) {
    this.taskService.updateTask(task, this.CardID)
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
    this.taskService.deleteTask(task, this.CardID)
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
