import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app-service/message.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
