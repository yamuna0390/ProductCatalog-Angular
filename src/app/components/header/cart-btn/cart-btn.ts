import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-cart-btn',
  imports: [],
  template: `
   <i class="fa fa-shopping-cart" aria-hidden="true" (click)="handleButtonClick()"></i>
   <span class="cart-count">{{ label() }}</span>
  `,
  styles: ``
})
export class CartBtn {
label = input('');
btnClicked = output();
handleButtonClick(){
this.btnClicked.emit();   //can call a function from header for click event
}
}
