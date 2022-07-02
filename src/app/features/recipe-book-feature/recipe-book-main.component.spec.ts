import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookMainComponent } from './recipe-book-main.component';

describe('RecipeBookMainComponent', () => {
  let component: RecipeBookMainComponent;
  let fixture: ComponentFixture<RecipeBookMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBookMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
