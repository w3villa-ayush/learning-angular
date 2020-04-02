import { TestDirectiveDirective } from './../app-directive/test-directive.directive';
import { Component, OnInit, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

   userName = "defaultValue";
   @ContentChild('childCon') childparagraph:ElementRef;

   @ViewChild(TestDirectiveDirective) myDir:TestDirectiveDirective;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
  console.log(this.childparagraph);
  this.renderer.setStyle(this.childparagraph.nativeElement,'color','red');

  
  }

changeColor(color:string){
    this.myDir.changeFg(color);
   }


  clickme(){
    alert(this.userName);
    var text = this.renderer.createText(' text added');
    this.renderer.appendChild(this.childparagraph.nativeElement,text);   
  }
  

   
}
