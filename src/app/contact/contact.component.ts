import { HeaderService } from './../app-service/header.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy{

  constructor(private _header:HeaderService) { 

  }

  ngOnInit(): void {
    this._header.headerContactDeatails.next(true);
    this._header.goBackLink.next({text:'back to products',url:'/buy-product'});
    this._header.headerLoginBlock.next(false);
  }
  ngOnDestroy(){
    this._header.headerContactDeatails.next(false);
    this._header.goBackLink.next({text:'',url:''});
    this._header.headerLoginBlock.next(true);
  }

  

}
