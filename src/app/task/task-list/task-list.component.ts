import { Component } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["task-list.component.css"],
  animations: [],
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  option: string = "SEE_ALL"

  taskList!: Task[]

  isChecked: boolean = true

  ngOnInit() {
    this.taskList = this.taskService.getTaskList()
  }

  chipManage(option: string) {
    if (option === undefined) {
      setTimeout(() => {
        this.option = "SEE_ALL"
      }, 1)
    }
  }
}
