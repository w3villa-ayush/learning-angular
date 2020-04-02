import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app-service/message.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _designService : MessageService) { 
    this._designService.userName.subscribe(uname =>(
      this.userName = uname)
     ) }


  ngOnInit(): void {
  }
  userName:string;

  getUserName(uname){
    //  this.userName = uname.value;
    
    this._designService.userName.next(uname.value);
    
      }

}
