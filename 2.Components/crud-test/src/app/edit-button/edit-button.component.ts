import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.css'
})
export class EditButtonComponent {
  @Output() edit = new EventEmitter<void>();

  editList() {
    this.edit.emit();
  }
}
