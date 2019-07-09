import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/Entities/product';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';

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

cateID;
  constructor(private service: DataService,private route:ActivatedRoute) { }


  ngOnInit() {

  }
  AddProduct(){
   this.cateID= this.route.paramMap.subscribe(param=>{
      param.get('Cid')
    });
    let product:Product={
      id:this.productId+1,
      categoryId:this.cateID,
      name: this.getName().value,
      price:this.getPrice().value,
      code:this.getCode().value
    }

    this.service.Addproduct(product);
    console.log('klllllllllllllllggggggggggggggggggggggggg')
  }

}
