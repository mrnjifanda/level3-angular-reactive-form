import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactifFormCourseComponent } from './forms/reactif-form-course/reactif-form-course.component';
import { FormControlComponent } from './forms/form-control/form-control.component';
import { CatsComponent } from './API/cats/cats.component';
import { SingleCatsComponent } from './API/single-cats/single-cats.component';

const routes: Routes = [
  { path: 'reactif-form', component: ReactifFormCourseComponent, title: 'Use reactif form' },
  { path: 'form-control', component: FormControlComponent, title: 'Use form control' },
  { path: 'cats', component: CatsComponent, title: 'All cats' },
  { path: 'cats/:id', component: SingleCatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
