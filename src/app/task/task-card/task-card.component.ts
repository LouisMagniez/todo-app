import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Task } from "../task"
import { TaskService } from "../task.service"

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["task-card.component.css"],
})
export class TaskCardComponent {
  constructor(private taskService: TaskService) {}

  @Input() CardID!: number

  @Input() CardTitle: string = "No title"

  @Input() search: string = ""

  @Input() filterDoneStatus: string = "SEE_ALL"

  @Output() refreshEvent = new EventEmitter()

  taskList!: Task[]

  titleEdit: boolean = false

  editTitleIcon: boolean = false

  ngOnInit() {
    this.taskList = this.taskService.getTaskList(this.CardID)
  }

  refreshTaskList() {
    console.log("in refresh")
    this.taskList = this.taskService.getTaskList(this.CardID)
  }

  onChangeDoneStatus(task: Task) {
    this.taskService.updateTask(task, this.CardID)
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

  onClickDelete(task: Task) {
    this.taskService.deleteTask(task, this.CardID)
  }

  trackById(_index: number, task: Task) {
    return task.id
  }

  onEventEditTitle(editValue: string) {
    this.titleEdit = false
    this.taskService.editTitle(editValue, this.CardID)
    this.refreshEvent.emit()
  }
}
