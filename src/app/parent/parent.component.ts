import { HeaderService } from './../app-service/header.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy{

  constructor(private _header:HeaderService) { }

  ngOnInit(): void {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:'back to contact',url:'/contact'});
  }
  ngOnDestroy(){
    this._header.headerNav.next(true);
    this._header.goBackLink.next({text:'',url:''});
  }
  
  product = false;
  selectedproduct : string;
  addedProduct :any;


  onSelect( product){
     this.product = true;
      this.selectedproduct = product;
  }

  onAddedProduct(prodata){
    this.addedProduct = prodata;
  }
  mytext = "searching";


}
