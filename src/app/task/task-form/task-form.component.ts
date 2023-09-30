import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["task-form.component.css"],
})
export class TaskFormComponent {
  task!: Task

  @Input() formCardID!: number

  @Output() refreshTaskListEvent = new EventEmitter<null>()

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.resetCurrentTask()
  }

  onSubmit() {
    this.taskService.addTask(this.task, this.formCardID)
    this.resetCurrentTask()
    this.refreshTaskListEvent.emit()
  }

  resetCurrentTask() {
    this.task = new Task()
  }
}
