import { Component, OnInit } from '@angular/core';
import { List } from '../data/list.model';
import { ListComponent } from '../list/list.component';
import { ToDoData } from '../data/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ListComponent, CommonModule, FormsModule, CreateComponent],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

  constructor() { }

  ngOnInit(): void {
    this.lists = new ToDoData().getData();
  }

  handleDelete(itemToDelete: List): void {
    this.lists = this.lists.filter(item => item !== itemToDelete);
  }

  handleEdit(itemToEdit: List): void {
    const index = this.lists.findIndex(item => item.number === itemToEdit.number);
    if (index !== -1) {
      console.log("in the handleEdit lists.components.ts")
      // Update the list in the array with the new description
      this.lists[index] = { ...itemToEdit };  // This ensures the list is updated
    }
  }

  handleCreate(): void {
    const newItem: List = new List(this.lists.length + 1, 'New Task', 'to-do');
    this.lists.push(newItem);
    }
  
}
