import { Component, DoCheck } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setCreatedItems(item: string): void {
    this.taskList.push({
      task: item,
      checked: false,
    });
  }

  public validationInput(item: string, index: number) {
    if(!item.length){
      const confirm = window.confirm('Essa task está vazia, deseja excluir?');

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public deleteItemTaskList(index: number): void {
    this.taskList.splice(index, 1);
  }

  public deleteAllItems(): void {
    const confirm = window.confirm('Tem certeza que deseja excluir todas as tarefas?');

    if(confirm){
      this.taskList = [];
    }
  }

  public setLocalStorage(): void {
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
