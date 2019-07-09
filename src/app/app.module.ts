import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddRootCategoryComponent } from './Components/add-root-category/add-root-category.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { MatComponentsModule } from './mat-components/mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsComponent,
    AddProductComponent,
    AddRootCategoryComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatComponentsModule,
    RouterModule.forRoot([
      {path:'', component:CategoriesComponent},
      {path:'product/:Cid', component:ProductsComponent},
      {path:'category/:Rid', component:CategoriesComponent}


    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
