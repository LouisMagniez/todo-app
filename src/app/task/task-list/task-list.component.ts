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

  option: string = "SEE_ALL"

  taskList: Task[] = this.taskService.getTaskList()

  ngOnInit() {}

  onChangeChipCheckUndefined() {
    if (this.option === undefined) {
      setTimeout(() => {
        this.option = "SEE_ALL"
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

  filterTaskList(searchFilter: string, option: string) {
    if (searchFilter) {
      let searchedTaskList = this.taskService.searchFilter(searchFilter)
      return (searchedTaskList = this.taskService.statusFilter(
        searchedTaskList,
        option
      ))
    } else {
      return this.taskService.statusFilter(this.taskList, option)
    }
  }
}
