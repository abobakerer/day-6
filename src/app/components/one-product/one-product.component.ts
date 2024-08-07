import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-one-product',
  standalone: true,
  imports: [],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css',
})
export class OneProductComponent implements OnInit {
  sProduct!: any;
  constructor(private product: ProductsService) {}

  ngOnInit() {
    this.product.getOneProduct(4).subscribe((res) => {
      this.sProduct = res;
    });
  }
}
