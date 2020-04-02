import { MessageService } from './../app-service/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  product: any;


  constructor(private _messageService:MessageService) { }



  ngOnInit(): void {
  this.product = this._messageService.product;
  }
 
  btnAlert(){
    this._messageService.messageAlert();
  }
 


}
