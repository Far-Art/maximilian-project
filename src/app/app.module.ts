import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './features/shopping-feature/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/shopping-feature/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './features/recipe-book-feature/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './features/recipe-book-feature/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipeCardComponent } from './features/recipe-book-feature/recipe-card/recipe-card.component';
import { RecipeBookMainComponent } from './features/recipe-book-feature/recipe-book-main.component';
import { ShoppingMainComponent } from './features/shopping-feature/shopping-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeCardComponent,
    RecipeBookMainComponent,
    ShoppingMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
