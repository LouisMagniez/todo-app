import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { Task } from "../task"

@Component({
  selector: "app-task-dialog",
  templateUrl: "./task-dialog.component.html",
  styleUrls: ["./task-dialog.component.css"],
})
export class TaskDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  editTask: boolean = false

  editDialogTask(task: Task) {
    this.editTask = true
    task.edit = true
  }

  showDialogContent() {
    this.editTask = false
  }
}
