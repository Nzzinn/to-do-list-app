//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/modules/home/components/header/header.component';
import { TodoButtonDeleteAllComponent } from '../app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';

//Pages
import { HomeComponent } from './modules/home/pages/home/home.component';

//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
