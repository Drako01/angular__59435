import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRoudedBlock]'
})
export class RoudedBlockDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    elementRef.nativeElement.textContent = 'Este texto fue manipulado desde appRoudedBlock';
    elementRef.nativeElement.style.backgroundColor = 'yellow';
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.margin = '10px';
    elementRef.nativeElement.style.borderRadius = '10px';
    elementRef.nativeElement.style.color = 'blue';
    if (elementRef.nativeElement.tagName === 'P') {
      elementRef.nativeElement.style.backgroundColor = 'blue';
      elementRef.nativeElement.style.color = 'white';
      elementRef.nativeElement.style.color = 'yellow';
    } else {
      elementRef.nativeElement.style.fontSize = '30px';
    }

  }

}
