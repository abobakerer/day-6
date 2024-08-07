import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OneProductComponent } from './components/one-product/one-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,NavbarComponent, OneProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
}
