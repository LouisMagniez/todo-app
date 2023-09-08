import { Pipe, PipeTransform } from "@angular/core"
import { Task } from "./task"

@Pipe({
  name: "taskStatusFilter",
  pure: false,
})
export class TaskStatusFilterPipe implements PipeTransform {
  transform(tasks: Task[], option: string) {
    switch (option) {
      case "SEE_ALL":
        return tasks

      case "TO_DO":
        return tasks.filter((task) => !task.done)

      case "DONE":
        return tasks.filter((task) => task.done)

      default:
        return tasks
    }
  }
}
