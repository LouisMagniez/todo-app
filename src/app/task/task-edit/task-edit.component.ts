import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"
import { MatInput } from "@angular/material/input"

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.css"],
})
export class TaskEditComponent {
  @Input() taskToEdit!: Task

  @ViewChild("taskEditInput")
  editInput!: MatInput

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.editInput.focus()
  }

  onSubmit() {
    this.taskToEdit.edit = false
    this.taskService.updateTask(this.taskToEdit)
  }
}
