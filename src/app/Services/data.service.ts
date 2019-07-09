import { Injectable } from '@angular/core';
import { RootCategory } from '../Entities/RootCategories';
import { Category } from '../Entities/category';
import { Product } from '../Entities/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  //  private FruitProd: Product[]=[
//     {id:1,name:"Banana",price:10,code:"FB01"},
//     {id:2,name:"strawperry",price:15,code:"FB02"},
//     {id:3,name:"Appel",price:8,code:"FA03"},
//     {id:4,name:"Mango",price:20,code:"FB014"}, 
//   ]
//   private DrinkProd: Product[]=[
//     {id:1,name:"Tea",price:7,code:"FB01"},
//     {id:2,name:"Milk",price:10,code:"FB02"},
//     {id:3,name:"Juice",price:15,code:"FA03"},
//     {id:4,name:"Coffe",price:13,code:"FB014"}, 
//   ]
//   private VegetableProd: Product[]=[
//     {id:1,name:"Tomato",price:10,code:"VT01"},
//     {id:2,name:"Broccoli",price:10,code:"VB02"},
//     {id:3,name:"Cabbage",price:10,code:"VC03"},
//     {id:4,name:"Spinach",price:10,code:"VS014"}, 
//   ]
//   // private foodCategory:Category[]=[
//   //   {id:8,name:"Fruits" , product:this.FruitProd},
//   //   {id:9,name:"Vegetables" , product:this.VegetableProd},
//   //   {id:10,name:"Drinks" , product:this.DrinkProd}   
//   // ]

//   private MenClothesProd: Product[]=[
//     {id:1,name:"T-Shirt",price:10,code:"MCT01"},
//     {id:2,name:"Sportswear",price:10,code:"MCS02"},
//     {id:3,name:"Polo Shirts",price:10,code:"MCP03"},
//   ]
//   private WommenClothesProd: Product[]=[
//     {id:1,name:"T-Shirt",price:10,code:"WCT01"},
//     {id:2,name:"Sportswear",price:10,code:"WCS02"},
//     {id:3,name:"Polo Shirts",price:10,code:"WCP03"},
//   ]
//   private ChildsClothesProd: Product[]=[
//     {id:1,name:"T-Shirt",price:10,code:"CCT01"},
//     {id:2,name:"Sportswear",price:10,code:"CCS02"},
//     {id:3,name:"Polo Shirts",price:10,code:"CCP03"},
//   ]
//   private kidsBooksProd: Product[]=[
//     {id:1,name:"Lets Learn ABCs",price:20,code:"BS01"},
//     {id:2,name:"Old Macdonald",price:20,code:"BW02"},
//     {id:3,name:"Lets Learn 123s",price:20,code:"BL03"},
//     {id:4,name:"Super Fun",price:30,code:"BH04"}, 
//   ]
//   private artsBooksProd: Product[]=[
//     {id:1,name:"In Search of Lost Time",price:10,code:"ABS01"},
//     {id:2,name:"War and Peace ",price:10,code:"ABW02"},
//     {id:3,name:"To the Lighthouse ",price:10,code:"ABL03"},
//     {id:4,name:"Heart of Darkness",price:10,code:"ABH04"}, 
//   ]
//     private musicBooksProd: Product[]=[
//     {id:1,name:"A Visit from the Goon Squad",price:10,code:"MBS01"},
//     {id:2,name:"High Fidelity",price:10,code:"MBW02"},
//     {id:3,name:"Porcelain",price:10,code:"MBL03"},
//     {id:4,name:"Jagger",price:10,code:"MBH04"}, 
//   ]

//   private FurnitureProd: Product[]=[
//     {id:1,name:"Bed",price:10,code:"FUB01"},
//     {id:2,name:"Couch",price:10,code:"FUC02"},
//     {id:3,name:"wardrobe",price:10,code:"FUW03"},
//     {id:4,name:"Windsor chair",price:10,code:"FUCB04"}, 
//   ]
//   private subCategories:Category[]=[
//     {id:14,name:"Kids Books" , product:this.kidsBooksProd,rootCategoryId:2},
//     {id:15,name:"Arts Books" , product:this.artsBooksProd,rootCategoryId:2},
//     {id:16,name:"Music Books" , product:this.musicBooksProd,rootCategoryId:2}  ,
//     {id:11,name:"Male Clothes" , product:this.MenClothesProd,rootCategoryId:7},
//     // {id:12,name:"Female Clothes" , product:this.WommenClothesProd},
//     // {id:13,name:"Child Clothes" , product:this.ChildsClothesProd}  
//   ]

//   private MainCategories: RootCategory[]= [
//     {id:2,name:"Books"},
//     {id:3,name:"Furniture"},
//     {id:4,name:"Toys"},
//     {id:5,name:"Foods"},
//     {id:6,name:"Jewelry & Accessories"},
//     {id:7,name:"Clothes"}
//   ]

  rootCates : RootCategory[]= [
    {id:1,name:"Books"},
    {id:2,name:"Foods"},
    {id:3,name:"Toys"},
    {id:4,name:"Furnitures"},
    {id:5,name:"Jewelry & Accessories"},
    {id:6,name:"Clothes"}
  ]

  cates: Category[]=[
    {id:1, name:"Kids Books",rootCategoryId:1},
    {id:2, name:"Music Books",rootCategoryId:1},
    {id:3, name:"Fruits",rootCategoryId:2},
    {id:4, name:"Drinks",rootCategoryId:2},
  ]
  prods: Product[]=[
    {id:1, categoryId:1,name:"Lets Lern ABCs",price:20,code:"BKL01"},
    {id:2, categoryId:1,name:"Lets Lern 123s",price:20,code:"BKL01"},
    {id:4, categoryId:3,name:"Banana",price:20,code:"BKL01"},
    {id:1, categoryId:2,name:"A Visit from the Goon Squad",price:10,code:"MBS01"},
    {id:2, categoryId:2,name:"High Fidelity",price:10,code:"MBW02"},
    {id:3, categoryId:2,name:"Porcelain",price:10,code:"MBL03"},
    {id:4, categoryId:2,name:"Jagger",price:10,code:"MBH04"}, 

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
}
