import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective
{
  @Input("appCustom") color:any;
  @HostListener('click') click(){
    this.ref.nativeElement.style.color = this.color;
  }

  constructor(public ref:ElementRef)
  {
    // console.log(ref);
    ref.nativeElement.style.color="blue";

  }


}
