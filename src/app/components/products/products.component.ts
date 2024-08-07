import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  constructor(private products: ProductsService) {}

  ngOnInit() {
    this.products.getAllProducts();

    this.products.getAllProducts().subscribe((res) => {
      this.allProducts = res;
      console.log(res);
    });
  }
}
