import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entities/category';
import { ActivatedRoute } from '@angular/router';
import { RootCategory } from 'src/app/Entities/RootCategories';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  panelOpenState = false;
  categories: RootCategory[];
  subCategories:RootCategory[];
  categoryId;
  rootCategoryId;
  loading:boolean;
  constructor(private service: DataService, private route: ActivatedRoute) { }
cat:any[]=[];
sendId(RootCateId){
  // this.rootCategoryId=RootCateId;

}
  ngOnInit() {
    this.categories = this.service.getAllRootCategory();
    this.route.paramMap.subscribe(param=>{
    this.rootCategoryId=param.get('Rid');
      this.subCategories = this.service.getAllCates(this.rootCategoryId);
      this.loading=true;
      console.log(this.subCategories)
    })

  }

    
  
  

}
