import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRootCategoryComponent } from './add-root-category.component';

describe('AddRootCategoryComponent', () => {
  let component: AddRootCategoryComponent;
  let fixture: ComponentFixture<AddRootCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRootCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
