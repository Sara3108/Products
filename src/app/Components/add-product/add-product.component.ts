import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/Entities/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
ProductForm= new FormGroup({
  name:new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.required]),
  code:new FormControl('',[Validators.required]),
})
productId:number=20;

getName(){
  return this.ProductForm.get('name');
}
getPrice(){
  return this.ProductForm.get('price');
}
getCode(){
  return this.ProductForm.get('code');
}
// product:Product={
//   id:this.productId+1,
//   name: this.getName().value,
//   price:this.getPrice().value,
//   code:this.getCode().value
// }

  // constructor(private service: CategoriesService) { }
  // addProduct(){
  //   this.service.addProduct(this.product);
  // }

  ngOnInit() {
    // console.log(this.ProductForm.controls);

  }

}
