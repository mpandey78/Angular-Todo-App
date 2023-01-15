import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.scss']
})
export class ToDoAppComponent implements OnInit{

  constructor(private service:CommonService){

  }
  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.service.getApi('WorkSheet_Controller/getTaskList',0).subscribe(res=>{
      console.log(res);
      
    })
  }
}
