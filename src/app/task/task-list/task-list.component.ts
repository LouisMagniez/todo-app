import { Component } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["task-list.component.css"],
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  filterDoneStatus: string = "SEE_ALL"

  taskList: Task[] = this.taskService.getTaskList()

  ngOnInit() {}

  refreshTaskList() {
    this.taskList = this.taskService.getTaskList()
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
