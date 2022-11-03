import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import {ProjectsComponent} from './projects/projects.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"Page4",component:Page4Component},
  {path:"Page5",component:Page5Component},
  {path:"Page6",component:Page6Component},
  {path:"Page7",component:Page7Component},
  {path:"Page8",component:Page8Component},
  {path:"Page9",component:Page9Component},
  {path:"Projects",component:ProjectsComponent},
  {path:"About",component:AboutComponent},
  {path:"Contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
