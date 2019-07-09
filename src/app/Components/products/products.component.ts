import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/product';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prod: Product[];
  categoryId;
  DeletedArr: Product[] = [];
  productId: number = 20;
  updatedId;

  ProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
  })

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getName() {
    return this.ProductForm.get('name');
  }
  getPrice() {
    return this.ProductForm.get('price');
  }
  getCode() {
    return this.ProductForm.get('code');
  }

  getProduct() {
    this.route.paramMap.subscribe(param => {
      this.categoryId = +param.get('Cid');
      this.prod = this.service.GetAllProducts(this.categoryId);
    })
  }

  onChangeDelete(e, cat: any) {
    if (e.checked) {
      this.DeletedArr.push(cat);
    }
    if (e.checked == false) {
      let index = this.DeletedArr.findIndex(p => p.id == cat.id);
      this.DeletedArr.splice(index, 1);
    }
  }

  DeleteProds() {
    this.service.deleteProds(this.DeletedArr);
    this.router.navigate(['/product', this.categoryId]);
    this.DeletedArr = [];
    this.getProduct();
  }

  AddProduct() {
    this.route.paramMap.subscribe(param => {
      this.categoryId = param.get('Cid');
    });
    console.log(this.categoryId);
    let product: Product = {
      id: this.productId + 1,
      categoryId: this.categoryId,
      name: this.getName().value,
      price: this.getPrice().value,
      code: this.getCode().value
    }
    this.service.Addproduct(product);
    console.log(product);
    this.getProduct();
  }
  EditProduct(p) {
    this.updatedId = p.id;
    this.getName().setValue(p.name);
    this.getPrice().setValue(p.price);
    this.getCode().setValue(p.code);
    //  this.ProductForm.setValue(p);
    // console.log(p);

  }
  UpdateProduct() {
    let updatedProd = {
      id: this.updatedId,
      name: this.getName().value,
      price: this.getPrice().value,
      code: this.getCode().value
    }
    this.service.updateProd(updatedProd);
    this.ProductForm.setValue({ name: "", code: "", price: "" });
    this.getProduct();
  }

  closeModal() {
    this.ProductForm.setValue({ name: "", code: "", price: "" });
  }








}
