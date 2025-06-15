import { Component,inject,input ,signal} from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ColorOptions } from './color-options/color-options';
import { ProductStars } from './product-stars/product-stars';
import { CartService } from '../../../services/cart-service';
@Component({
  selector: 'app-product-cards',
  imports: [ColorOptions,ProductStars],
  template: `
    <div class="product-single-card">
          <div class="edition">
            
           @if (product().edition=='limited') {
               <span class="red" > {{ product().edition }}</span>
            }
           @if (product().edition=='sale') {
               <span class="green"> {{ product().edition }}</span>
           }
          @if (product().edition=='new') {
               <span class="blueviolet"> {{ product().edition }}</span>
           }
          </div>
       <div class="img-container"> 
       <img [src]="product().image" class="product-image"/> 
        <!-- [] for dynamic data -->
         </div>
     
       <div class="product-details"> 
            <app-color-options [colors]="product().colors"></app-color-options>  
             <!-- <app-color-options/> -->
             <span class="title ">{{product().title}}</span>
             <span class="price"><i class="fa fa-inr" aria-hidden="true"></i>{{product().price}}</span>
             <span class="description">{{product().description}}</span>
             <app-product-stars [stars]="product().stars"/>
             <div class="product-actions">
    <button class="cart-button" [class.active]="isInCart()" (click)="toggleCart()" >
        {{ isInCart() ? 'Remove from Cart' : 'Add to Cart' }}
    </button>

    <button class="wishlist-button" [class.active]="isInWishlist()" (click)="toggleWishlist()">
        {{ isInWishlist() ? 'Remove from Wishlist' : 'Add to Wishlist' }}
    </button>
</div>
      </div>


  </div>
  `,
  styles: ` .product-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .title {
        font-size: 1.2rem;
        font-weight: bold;
    }
    .price {
        font-weight:.5rem;
       font-size: 2rem;
    }
  `
})
export class ProductCards {
product = input.required<ProductModel>();
 cartservice =inject(CartService);
  isInCart = signal(false);
  isInWishlist = signal(false);

toggleCart() {
  if (!this.isInCart()) {
    this.cartservice.addToCart(this.product()); // Add product to cart
  } else {
    this.cartservice.removeFromCart(this.product().id); // Remove from cart
  }
  this.isInCart.set(!this.isInCart()); // Toggle button state
}
  toggleWishlist() {
    this.isInWishlist.set(!this.isInWishlist());
  }
}
