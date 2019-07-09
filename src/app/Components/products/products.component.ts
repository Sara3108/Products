import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/product';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
prod:Product[];
categoryId;
  constructor(private service:DataService, private route : ActivatedRoute) { }

  getProduct(){
    this.route.paramMap.subscribe(param=>{
      this.categoryId =+param.get('Cid');
     this.prod=this.service.GetAllProducts(this.categoryId);

    })
  }

  ngOnInit() {
    // let categoryId = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

}
