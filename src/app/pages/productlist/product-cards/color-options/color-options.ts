import { Component,input } from '@angular/core';
import { ProductModel } from '../../../../models/product.model';
@Component({
  selector: 'app-color-options',
  imports: [],
  template: `
   <div class="color-options">
    @for (color of colors(); track color) {
        <button class="color-button" [style.backgroundColor]="color"></button>
    }
</div>
  
  `,
  styles: ``
})
export class ColorOptions {
colors = input<string[]>();
}
