import { Component, Input } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.css"],
})
export class TaskEditComponent {
  @Input() taskToEdit!: Task

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.taskToEdit.edit = false
    this.taskService.updateTask(this.taskToEdit)
  }
}
