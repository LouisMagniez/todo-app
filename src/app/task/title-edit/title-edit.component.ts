import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
  selector: "app-title-edit",
  templateUrl: "./title-edit.component.html",
  styleUrls: ["./title-edit.component.css"],
})
export class TitleEditComponent {
  @Input() titleToEdit: string = ""

  @Output() editTitleEvent = new EventEmitter<string>()

  onSubmit() {
    this.editTitleEvent.emit(this.titleToEdit)
  }
}
