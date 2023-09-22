import { Component, Input } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"
import { TaskListComponent } from "../task-list/task-list.component"

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["task-form.component.css"],
})
export class TaskFormComponent {
  task!: Task

  constructor(
    private taskService: TaskService,
    private listComponent: TaskListComponent
  ) {}

  ngOnInit() {
    this.task = new Task()
    this.task.id = this.taskService.generateNewTaskId()
  }

  onSubmit() {
    this.taskService.addTask(this.task)
    this.task = new Task()
    this.task.id = this.taskService.generateNewTaskId()
    this.listComponent.refreshTaskList()
  }
}
