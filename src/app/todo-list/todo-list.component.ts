import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

interface Task{
  title: string,
  is_canceled: boolean
 }
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Array<Task> = [
    {
      title: "Morning Walk",
      is_canceled: false
    },
    {
      title:"Angular Rxjs And Chart.js learn",
      is_canceled: false
    },
    {
      title: "Take break and lunch",
      is_canceled: false
    }
  ];
  todoForm!:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      task : new FormControl('',[Validators.required,Validators.minLength(2)])
      
    })
  }

  onSubmit(){
  }
  
 
  clearToDo(){
    let do_delete = confirm("Are you sure to delete all tasks?");
    if (do_delete){
      this.tasks.splice(0);
    }
  }
 
  addTask(input:any){
    if(input.value == ''){
      return
    }
    let value = input.value;
    input.value = "";
    this.tasks.push(
      {
        title: value,
        is_canceled: false
      });
  }
 
  cancelTask(idx: number){
    if (this.tasks[idx].is_canceled){
      this.tasks[idx].is_canceled = false;
    }else{
      this.tasks[idx].is_canceled = true;
    }
  }
 
  deleteTask(idx: number){
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete){
      this.tasks.splice(idx, 1);
    }
  }
 
  editTask(idx: number){
    let title = this.tasks[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.tasks[idx].title = result;
    }
  }
}
