import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: '../product/product.component.html',
})
export class EditProductComponent implements OnInit {
  idProdut: number;
  product = new Product()

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    let id = +this.route.snapshot.params['id'];
    this.idProdut = id;
   }

  private routeSub: Subscription;
  selectedFile: File = null;
  
  ngOnInit(): void {
   this.getById(this.idProdut);
  }

  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }

  create(product: Product) {
    var formData: any = new FormData();
    formData.append('Id', product.id);
    formData.append('Name', product.name);
    formData.append('SalePrice', product.salePrice)
    formData.append('Image', this.selectedFile);

    this.productService.update(formData).subscribe(
      (result: any) => {
        this.router.navigate(['/home']);
      }
    );
  }



  getById(id: number) {
    this.productService.getById(id).subscribe(
      (result: any) => {
        this.product = result;
        this.product.image= '';
      }
    );
  }

}
