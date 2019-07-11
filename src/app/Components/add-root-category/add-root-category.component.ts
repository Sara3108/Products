import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'add-root-category',
  templateUrl: './add-root-category.component.html',
  styleUrls: ['./add-root-category.component.css']
})
export class AddRootCategoryComponent implements OnInit {
  catId: number = 10;
  dataDismiss: string = ""
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })
  constructor(private sevice: DataService) { }


  getName() {
    return this.categoryForm.get('name');
  }
  errMsgName() {
    return this.getName().hasError('required') ? 'Name is Required' : '';
  }

  ngOnInit() {
  }

  AddRootCategory() {
    if(this.categoryForm.valid){
      this.sevice.AddRootCate({ name: this.getName().value, id: this.catId + 1 });
      this.dataDismiss="modal"
      
    }
    else{
      this.dataDismiss=""
    }
    this.categoryForm.reset(); 
    
  }
  closeModal() {
    this.categoryForm.reset();
  }

}
