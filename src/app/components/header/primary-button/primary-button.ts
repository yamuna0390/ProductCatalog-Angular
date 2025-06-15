import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
 <button class="primary-button" (click)="handleButtonClick()">
    <span> {{label()}}</span>
 </button>
  `,
  styles: ``
})
export class PrimaryButton {
label = input('');
btnClicked = output();
handleButtonClick(){
   this.btnClicked.emit();   //can call a function from header for click event
}
}
