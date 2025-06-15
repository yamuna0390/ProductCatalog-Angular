import { Component,input } from '@angular/core';

@Component({
  selector: 'app-product-stars',
  imports: [],
  template: `
  <div class="star-rating">
    @for (index of [1, 2, 3, 4, 5]; track index) {
        <span class="star" 
              [style.color]="index <= stars() ? 'gold' : 'gray'">
            ★
        </span>
    }
   </div>
  `,
  styles: ``
})
export class ProductStars {
 stars = input.required<number>();

}
