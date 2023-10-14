import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"
import { MatDialog } from "@angular/material/dialog"
import { TaskDialogComponent } from "../task-dialog/task-dialog.component"

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["task-card.component.css"],
})
export class TaskCardComponent {
  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
  ) {}

  @Input() cardID!: number

  @Input() cardTitle: string = "No title"

  @Input() search: string = ""

  @Input() filterDoneStatus: string = "SEE_ALL"

  @Output() refreshEvent = new EventEmitter()

  taskList!: Task[]

  titleEdit: boolean = false

  isInDialog: boolean = false

  ngOnInit() {
    this.taskList = this.taskService.getTaskList(this.cardID)
  }

  refreshTaskList() {
    this.taskList = this.taskService.getTaskList(this.cardID)
  }
  onChangeDoneStatus(task: Task) {
    this.taskService.updateTask(task, this.cardID)
  }

  filterTaskList(searchFilter: string, filterDoneStatus: string) {
    let searchedTaskList = this.taskService.searchFilter(
      this.taskList,
      searchFilter
    )
    return this.taskService.statusFilter(searchedTaskList, filterDoneStatus)
  }

  onClickEditTask(task: Task) {
    task.edit = true
  }

  onClickEditTitle() {
    this.titleEdit = true
  }

  onClickDeleteTask(task: Task) {
    this.taskService.deleteTask(task, this.cardID)
    this.refreshTaskList()
  }

  onClickDeleteCard() {
    this.taskService.deleteCard(this.cardID)
    this.refreshEvent.emit()
  }

  trackById(_index: number, task: Task) {
    return task.id
  }

  onEventEditTitle(editValue: string) {
    this.titleEdit = false
    this.taskService.editTitle(editValue, this.cardID)
    this.refreshEvent.emit()
  }

  checkDateTime(task: Task) {
    return this.taskService.checkDateTime(task)
  }

  openTaskDialog(task: Task) {
    this.isInDialog = true
    this.dialog.open(TaskDialogComponent, {
      data: { task: task, cardID: this.cardID, isInDialog: this.isInDialog },
    })
  }

  getTimeLeft(task: Task) {
    if (this.checkDateTime(task)) {
      return this.taskService.getTimeLeft(task)
    } else {
      return
    }
  }
}
