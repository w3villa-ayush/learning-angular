import { element } from 'protractor';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef, private rendered:Renderer2) {
    this.rendered.setStyle(this.el.nativeElement,'backgroundColor','red');
   }
   changeBg(color:string){
    this.rendered.setStyle(this.el.nativeElement,'backgroundColor','color');
   }
   changeFg(color:string){
     this.rendered.setStyle(this.el.nativeElement,'color','color');
   }

}
