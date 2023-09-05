import { Pipe, PipeTransform } from "@angular/core"
import { Task } from "./task"

@Pipe({
  name: "taskFilter",
  pure: false,
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[]) {
    return tasks.filter((task) => !task.done)
  }
}
