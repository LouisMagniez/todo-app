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

  taskList!: Task[]

  isChecked: boolean = true

  ngOnInit() {
    this.taskList = this.taskService.getTaskList()
  }

  filteredList(filter: string): Task[] {
    if (filter) {
      return this.taskService.searchFilter(filter)
    } else {
      return this.taskService.getTaskList()
    }
  }
}
