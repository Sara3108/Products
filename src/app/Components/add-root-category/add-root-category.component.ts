import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'add-root-category',
  templateUrl: './add-root-category.component.html',
  styleUrls: ['./add-root-category.component.css']
})
export class AddRootCategoryComponent implements OnInit {

categoryForm= new FormGroup({
  name:new FormControl('',[Validators.required])
})
 constructor(private sevice:DataService) { }
catId:number=10;
 getName(){
   return this.categoryForm.get('name');
 }

  ngOnInit() {
  }

  AddRootCategory(){
    this.sevice.AddRootCate({name:this.getName().value,id:this.catId+1});
  }

}
