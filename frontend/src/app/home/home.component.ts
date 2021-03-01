import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public product: Product[] = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getData().subscribe(
      (result: any) => {
        this.product = result;
        return this.product;
      }
    );
  }

  delete(id: number){
    this.productService.delete(id).subscribe(
      (result: any) => {
        return result;
      }
    );
  }
}
