import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app-service/message.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
