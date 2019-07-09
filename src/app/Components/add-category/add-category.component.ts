import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { Category } from 'src/app/Entities/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

 
categoryForm= new FormGroup({
  name:new FormControl('',[Validators.required])
})
 constructor(private sevice:DataService,private route:ActivatedRoute,private router:Router) { }
catId:number=10;
 getName(){
   return this.categoryForm.get('name');
 }

  ngOnInit() {
  }

rootCateId;
cate;
sendId(id){
console.log(id);
}
  AddCategory(){

  this.route.paramMap.subscribe(param=>{
  this.rootCateId=param.get('Rid'); 
   this.cate={id:this.catId, name:this.getName().value, rootCategoryId:this.rootCateId}
   console.log(this.cate);
   this.getName().setValue('');
   console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    })
   this.sevice.Addcate(this.cate);
   this.cate = {}; 
  }
}
