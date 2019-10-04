import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';

const routes:Routes =[{
 path:"trending",
 component: TrendingComponent
},
{
  path:"search/:query",
  component: SearchComponent
 },
 {
  path:"",
  component: TrendingComponent
 }, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
