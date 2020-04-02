import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 @Input() placeholderText:string = "abc";

 @Input() product = false;
 @Input() selectedproduct : string;
@Output() addedProduct = new EventEmitter<any>();


 onAddProduct(){
  this.addedProduct.emit(this.selectedproduct);
}

}
