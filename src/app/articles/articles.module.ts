import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    ArticlesComponent
  ]
})
export class ArticlesModule { }
