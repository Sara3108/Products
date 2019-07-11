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
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })
  panelOpenState = false;
  categories: RootCategory[];
  subCategories: RootCategory[];
  loading: boolean;
  dataDismiss: string = ""
  rootCateId;
  AddedCate;
  catId: number = 10;

  constructor(private service: DataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.categories = this.service.getAllRootCategory();
    this.route.paramMap.subscribe(param => {
      this.rootCateId = param.get('Rid');
      this.subCategories = this.service.getAllCates(this.rootCateId);
      this.loading = true;
      // console.log(this.subCategories)
    })
  }
  getName() {
    return this.categoryForm.get('name');
  }
  errMsgName() {
    return this.getName().hasError('required') ? 'Name is Required' : '';
  }

  AddCategory() {
    if (this.categoryForm.valid) {
      this.route.paramMap.subscribe(param => {
        this.rootCateId = param.get('Rid');
        this.AddedCate = { id: this.catId, name: this.getName().value, rootCategoryId: this.rootCateId }
      })
      this.service.Addcate(this.AddedCate);
      this.getCategory();
      this.dataDismiss = "modal"
    } else{
      this.dataDismiss=""
    }
    this.AddedCate = {};
    this.categoryForm.reset();
  }

  closeModal() {
    this.categoryForm.reset();
  }

}






