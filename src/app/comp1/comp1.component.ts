import { MessageService } from './../app-service/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
