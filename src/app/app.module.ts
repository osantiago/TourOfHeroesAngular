import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from "./heroes/heroes.component";

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    data: { title: 'Hero List' }
  },
  // {
  //   path: 'product-details/:id',
  //   component: ProductDetailComponent,
  //   data: { title: 'Product Details' }
  // },
  // {
  //   path: 'product-add',
  //   component: ProductAddComponent,
  //   data: { title: 'Product Add' }
  // },
  // {
  //   path: 'product-edit/:id',
  //   component: ProductEditComponent,
  //   data: { title: 'Product Edit' }
  // },
  // { path: '',
  //   redirectTo: '/products',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
