import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Comp5Component } from '../comp5/comp5.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userName:string = "ayush"
   @ViewChild('box') box:ElementRef;
  @ViewChild(Comp5Component)child:Comp5Component;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(){
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor = "blue";
       this.renderer.setStyle(this.box.nativeElement,'backgroundColor','red');
    // this.box.nativeElement.classList ="boxBlue";
    console.log(this.child);
  }
  changeChildProperty(){
    this.child.userName = "ayushJain";

  }

  callChildProperty(){
     this.child.clickme(); 

  }

}
