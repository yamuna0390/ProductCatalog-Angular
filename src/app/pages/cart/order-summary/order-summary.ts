import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { PrimaryButton } from '../../../components/header/primary-button/primary-button';
@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButton],
  template: `
   <div class="cart-container">
    <h2>Order summary</h2>
    <span>Total :</span>
    <span>{{'$'+total()}}</span>
    <app-primary-button label="Proceed to checkout"/>
   </div>
  `,
  styles: ``
})
export class OrderSummary {
cartService = inject(CartService);
total = computed(() => {
  let total =0;
  for(const item of this.cartService.cart()){
    total+= item.price;
  }
  return total;
})
}
