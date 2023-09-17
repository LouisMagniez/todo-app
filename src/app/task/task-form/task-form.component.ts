import { Component, Input } from "@angular/core"
import { Task } from "../task"
import { Router } from "@angular/router"
import { TaskService } from "../task.service"
import { TASKS } from "../mock-task-list"

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["task-form.component.css"],
})
export class TaskFormComponent {
  task!: Task

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.task = new Task()
    this.task.id = TASKS.length + 1
  }

  onSubmit() {
    this.taskService.addTask(this.task)
    this.task = new Task()
    this.task.id = TASKS.length + 1
  }
}
