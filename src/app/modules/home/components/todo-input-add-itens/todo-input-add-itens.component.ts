import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{
  @Output() public createItem = new EventEmitter();
  public addItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public submitItem(): void {
    this.addItem = this.addItem.trim();

    if(this.addItem){
      this.createItem.emit(this.addItem);
      this.addItem = '';
    }
  }
}
