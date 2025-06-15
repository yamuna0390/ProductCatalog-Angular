import { Component, signal } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductCards } from './product-cards/product-cards';
@Component({
  selector: 'app-productlist',
  imports: [ProductCards],
  template: `
   <div class="product-card-grid">
     @for (product of products(); track product.id) {
       <app-product-cards [product]="product" />  
     }
   </div>
  `,
  styles: ``
})
export class Productlist {
products= signal<ProductModel[]>([
   { 
   id : 1,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes.Softride Pro Dynamic Flex Men Comfort Running Shoes.Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/618CBn3N0LL._SY625_.jpg',
    price:1200,
    edition:"new",
    colors:['#f31b03','#6cc74e','#0b0b0b','#604ec7','#edbc0d','#ed0db1','#120252','#06dbd4'],
    stars:3
  },
     { 
   id : 2,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/618CBn3N0LL._SY625_.jpg',
    price:1200,
    edition:"",
    colors:['#604ec7','#edbc0d','#ed0db1','#f31b03','#6cc74e','#0b0b0b'],
    stars:2
  },
     { 
   id : 3,
    title: 'Puma sniker shine',
    description:'Court Classic Lux Sneakers',
    image:'https://m.media-amazon.com/images/I/61nIy-G4otL._SY625_.jpg',
    price:1200,
     edition:"sale",
     colors:['#f31b03','#6cc74e','#ed0db1','#120252','#06dbd4'],
     stars:3
  },
     { 
   id : 4,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/51UMGzTFmXL._SX625_.jpg',
    price:1200,
     edition:"limited",
     colors:['#ed0db1','#120252','#f31b03','#6cc74e','#0b0b0b','#604ec7','#edbc0d'],
     stars:5
  },
     { 
   id : 5,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/51wyhWcsr7L._SY625_.jpg',
    price:1200,
     edition:"",
    colors:['#ed0db1','#120252','#06dbd4','#604ec7','#edbc0d'],
    stars:4
  },
     { 
   id : 6,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/41BiuxnzCIL._SY575_.jpg',
    price:1200,
    edition:"sale",
    colors:['#f31b03','#6cc74e','#0b0b0b','#604ec7','#edbc0d','#ed0db1','#120252','#06dbd4'],
    stars:1
  },
     { 
   id : 7,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/618CBn3N0LL._SY625_.jpg',
    price:1200,
     edition:"",
     colors:['#ed0db1','#120252','#06dbd4','#604ec7','#edbc0d'],
     stars:3
  },
     { 
   id : 8,
    title: 'Puma sniker shine',
    description:'Softride Pro Dynamic Flex Men Comfort Running Shoes',
    image:'https://m.media-amazon.com/images/I/71V4GGv1edL._SY625_.jpg',
    price:1200,
     edition:"",
    colors:['#ed0db1','#120252','#06dbd4','#604ec7','#edbc0d'],
    stars:4
  }
])
}
