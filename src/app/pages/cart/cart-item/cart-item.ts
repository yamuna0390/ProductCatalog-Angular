import { Component, inject, input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { CartService } from '../../../services/cart-service';
import { Buttons } from '../../../components/header/buttons/buttons';
@Component({
  selector: 'app-cart-item',
  imports: [Buttons],
  template: `
   <div class="cart-iem-container">
      <img [src]="item().image" class="p-image"/>
      <div>
         <span class="head-text single-display ">{{item().title}}</span>
         <span class="text-small single-display">{{'$ '+item().price}}</span>
      </div>
      <div>
        <app-buttons label="Remove" (btnClicked)="cartService.removeFromCart(item().id)"/>
      </div>
            
   </div>
  `,
  styles: ``
})
export class CartItem {
  cartService = inject(CartService);
item = input.required<ProductModel>();
}
