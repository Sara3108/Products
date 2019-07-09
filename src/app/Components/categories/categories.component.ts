import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entities/category';
import { ActivatedRoute } from '@angular/router';
import { RootCategory } from 'src/app/Entities/RootCategories';
import { DataService } from 'src/app/Services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm= new FormGroup({
    name:new FormControl('',[Validators.required])
  })
  panelOpenState = false;
  categories: RootCategory[];
  subCategories:RootCategory[];
  categoryId;
  rootCategoryId;
  loading:boolean;
  constructor(private service: DataService, private route: ActivatedRoute) { }
cat:any[]=[];
// sendId(RootCateId){
//   // this.rootCategoryId=RootCateId;

// }
  ngOnInit() {
this.getCategory();
  }
  getCategory(){
    this.categories = this.service.getAllRootCategory();
    this.route.paramMap.subscribe(param=>{
    this.rootCategoryId=param.get('Rid');
      this.subCategories = this.service.getAllCates(this.rootCategoryId);
      this.loading=true;
      console.log(this.subCategories)
    })
  }
    getName(){
      return this.categoryForm.get('name');
    }
 
  
   rootCateId;
   cate;
catId:number=10;

     AddCategory(){
     this.route.paramMap.subscribe(param=>{
     this.rootCateId=param.get('Rid'); 
      this.cate={id:this.catId, name:this.getName().value, rootCategoryId:this.rootCateId}
      console.log(this.cate);
      this.getName().setValue('');
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
       })
      this.service.Addcate(this.cate);
      this.cate = {}; 
      this.getCategory();
     }

  }

    
  
  


