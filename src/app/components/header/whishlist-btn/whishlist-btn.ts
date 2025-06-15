import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-whishlist-btn',
  imports: [],
  template: `
    <i class="fa fa-heart" aria-hidden="true" (click)="handleButtonClick()"></i>
  `,
  styles: ``
})
export class WhishlistBtn {
label = input('');
btnClicked = output();
handleButtonClick(){
this.btnClicked.emit();   //can call a function from header for click event
}
}
