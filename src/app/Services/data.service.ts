import { Injectable } from '@angular/core';
import { RootCategory } from '../Entities/RootCategories';
import { Category } from '../Entities/category';
import { Product } from '../Entities/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rootCates : RootCategory[]= [
    {id:1,name:"Books"},
    {id:2,name:"Foods"},
    {id:3,name:"Toys"},
    {id:4,name:"Furnitures"},
    {id:5,name:"Accessories"},
    {id:6,name:"Clothes"}
  ]

  cates: Category[]=[
    {id:1, name:"Music Books",rootCategoryId:1},
    {id:2, name:"Kids Books",rootCategoryId:1},
    {id:3, name:"Fruits",rootCategoryId:2},
    {id:4, name:"Drinks",rootCategoryId:2},
  ]
  prods: Product[]=[
    {id:1, categoryId:2,name:"Lets Lern ABCs",price:20,code:"BKL01"},
    {id:2, categoryId:2,name:"Lets Lern 123s",price:20,code:"BKL01"},
    {id:4, categoryId:3,name:"Banana",price:20,code:"BKL01"},
    {id:1, categoryId:1,name:"A Visit from the Goon Squad",price:10,code:"MBS01"},
    {id:2, categoryId:1,name:"High Fidelity",price:10,code:"MBW02"},
    {id:3, categoryId:1,name:"Porcelain",price:10,code:"MBL03"},
    {id:4, categoryId:1,name:"Jagger",price:10,code:"MBH04"}, 

  ]



  getAllRootCategory(){
    
    return this.rootCates;
  }

  getAllCates(cateId){
    return this.cates.filter(c=>c.rootCategoryId==cateId);
  }
  GetAllProducts(cId){
    return this.prods.filter(p=>p.categoryId==cId);
  }

  AddRootCate(c){
    this.rootCates.push(c);
  }
  Addcate(c) {
    this.cates.push(c);
  }
  Addproduct(p){
    this.prods.push(p);
  }

  deleteProds(deleted:Product[]){
    if(deleted!=null){
      console.log('ddddd')
      for(let i=0;i<deleted.length;i++){
        var index = this.prods.findIndex(p => p.id == deleted[i].id);
        console.log("index "+index);
        this.prods.splice(index, 1);
      }
    } 
  }

  updateProd(prod){
    let index=this.prods.findIndex(p=>p.id==prod.id);
    let up={
      id:this.prods[index].id,
      categoryId:this.prods[index].categoryId,
      name:prod.name,
      code:prod.code,
      price:prod.price
    }
    this.prods[index]=up;
  }
  
  getCategoryName(id){
   return this.cates.find(c=>c.id==id).name;
  }
}
