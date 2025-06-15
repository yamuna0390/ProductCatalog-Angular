import { Component, inject } from '@angular/core';
import { Cartservice } from '../../services/cart';
import { CartItem } from "./cart-item/cart-item";
import { OrderSummary } from "./order-summary/order-summary";

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummary],
  template: `
  <div class="cart-container"> 
     <h2>My cart</h2>
     @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
     }
     <app-order-summary/>
  </div>
  `,
  styles: ``
})
export class Cart {
cartService = inject(Cartservice)
}
