import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app-service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _designService : MessageService) { 
    this._designService.userName.subscribe(uname =>(
      this.userName = uname)
     ) }


  ngOnInit(): void {
  }
  userName:string;
}
