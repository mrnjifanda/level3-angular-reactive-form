import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactifFormCourseComponent } from './forms/reactif-form-course/reactif-form-course.component';
import { FormControlComponent } from './forms/form-control/form-control.component';

const routes: Routes = [
  { path: 'reactif-form', component: ReactifFormCourseComponent, title: 'Use reactif form' },
  { path: 'form-control', component: FormControlComponent, title: 'Use form control' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
