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

  taskList!: Task[]

  isChecked: boolean = true

  ngOnInit() {
    this.taskList = this.taskService.getTaskList()
  }

  isDone(task: Task, isChecked: boolean) {
    task.done = isChecked
    const taskElement = document.getElementById("task" + task.id)
    taskElement?.classList.toggle("task-done")
  }
}
