import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CoursespageComponent } from './coursespage/coursespage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutpageComponent},
  {path:'courses',component:CoursespageComponent},
  {path:'blog',component:BlogpageComponent},
  {path:'contact',component:ContactpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
