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

  onChangeChipCheckUndefined() {
    if (this.filterDoneStatus === undefined) {
      setTimeout(() => {
        this.filterDoneStatus = "SEE_ALL"
      }, 0)
    }
  }

  onChangeDoneStatus(task: Task) {
    this.taskService.updateTask(task)
    this.taskList = this.taskService.getTaskList()
  }

  onChangeForm() {
    this.taskList = this.taskService.getTaskList()
  }

  filterTaskList(searchFilter: string, filterDoneStatus: string) {
    let searchedTaskList = this.taskService.searchFilter(
      this.taskList,
      searchFilter
    )
    return this.taskService.statusFilter(searchedTaskList, filterDoneStatus)
  }

  trackById(_index: number, task: Task) {
    return task.id
  }
}
