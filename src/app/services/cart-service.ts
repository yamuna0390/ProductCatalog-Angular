import { Injectable,signal } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart = signal<ProductModel[]>([]);

addToCart(product:ProductModel){
  this.cart.set([...this.cart(),product]);
}
removeFromCart(id:number){
  this.cart.set(this.cart().filter((p) => p.id !== id));
}
  constructor() { }
}
