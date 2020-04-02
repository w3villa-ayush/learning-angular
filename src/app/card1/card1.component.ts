import { MessageService } from './../app-service/message.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  // product: { name: string; id: string;};
   products ={}; 
  

  constructor(private _msgService : MessageService) { }


  ngOnInit(): void {
    // this.product=  this._msgService.product;
    this._msgService.product().
    subscribe(productData => this.products = productData)

  }
  btnAlert(){
    this._msgService.messageAlert();
  }
  

}
