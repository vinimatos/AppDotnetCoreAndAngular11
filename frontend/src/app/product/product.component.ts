import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) { }

  selectedFile: File = null;
  product = new Product()

  ngOnInit(): void {
   
  }


  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }
  create(product: Product) {
    console.log(product.salePrice)
    var formData: any = new FormData();
    formData.append('Name', product.name);
    formData.append('SalePrice', product.salePrice)
    formData.append('Image', this.selectedFile);

    this.productService.postData(formData).subscribe(
      (result: any) => {
        alert('Produto cadastrado com sucesso!')
        this.router.navigate(['/home']);
      }
    );
  }
}
