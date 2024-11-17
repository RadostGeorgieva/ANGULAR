import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { List } from '../data/list.model';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [EditButtonComponent, DeleteButtonComponent, CreateComponent, FormsModule, CommonModule],  // Make sure these are imported
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list: List = new List(0, '', '');
  @Output() delete = new EventEmitter<List>();
  @Output() edit = new EventEmitter<List>();
  @Output() create = new EventEmitter<List>();

  isEditing: boolean = false;

  constructor() {}

  handleEdit() {
    this.isEditing = !this.isEditing; // Toggle edit mode
  }

  saveEdit() {
    this.edit.emit(this.list);
    this.isEditing = false; // Exit edit mode after saving
  }

  deleteList(): void {
    this.delete.emit(this.list); // Emit the delete event to the parent
  }

  createList() {
    this.create.emit(this.list);
  }
}
