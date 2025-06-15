import { Component,inject } from '@angular/core';
import { WhishlistBtn } from './whishlist-btn/whishlist-btn';
import { CartBtn } from "./cart-btn/cart-btn";
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-header',
  imports: [WhishlistBtn, CartBtn],
  template: `
  <header>
    <input type="checkbox" name="" id="toggler">
    <label for="toggler" class="fas fa-bars"></label>
  <span class ="logo" routerLink="/"> SOLE</span>  
  <nav class="navbar">
    <ul>
      <li>New & Featured</li>
      <li>Mens</li>
      <li>Womens</li>
      <li>Kids</li>
    </ul>
  </nav>
  <div class="header-icons">
   <app-whishlist-btn label="wishlist"  (btnClicked)="wishButtonClick()"/> 
   <app-cart-btn [label]="' ('+cartserv.cart().length+')'" routerLink="/cart"/>
   </div>
  
  </header>
  `,
  styles: ``
})
export class Header {

  wishButtonClick(){
    alert(" wish ready");
  }
  cartserv = inject(CartService);
}
