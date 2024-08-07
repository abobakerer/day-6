import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { OneProductComponent } from './components/one-product/one-product.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'oneproduct', component: OneProductComponent },
  { path: '**', component: ProductsComponent },
];
