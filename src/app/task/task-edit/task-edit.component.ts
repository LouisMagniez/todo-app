import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.css"],
})
export class TaskEditComponent {
  @Input() taskToEdit!: Task

  @Input() editCardID!: number

  @Input() isInDialog: boolean = false

  @Output() submitEvent = new EventEmitter()

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.taskToEdit.edit = false
    this.submitEvent.emit()
    this.taskService.updateTask(this.taskToEdit, this.editCardID)
  }
}
