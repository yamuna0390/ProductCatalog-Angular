import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Productlist } from './pages/productlist/productlist';
import { Banner } from './pages/banner/banner';
@Component({
  selector: 'app-root',
  imports: [Header ,Banner,Productlist],
  template: `
   <app-header/>
   <app-banner/>
     <h1 class="product-list-heading">Latest <span>products</span></h1>
   <app-productlist/>
  `,
  styles: [],
})
export class App {
  protected title = 'ecommweb';
}
