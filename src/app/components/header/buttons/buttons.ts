import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  template: `
   <button class="cart-item-button" (click)="btnClicked.emit()">
    <span> {{label()}}</span>
 </button>
  `,
  styles: ``
})
export class Buttons {
label = input('');
btnClicked = output();
}
