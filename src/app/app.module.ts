import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarToggleComponent } from './side/side-bar-toggle/side-bar-toggle.component';
import { SideBarComponent } from './side/side-bar/side-bar.component';
import { ChildOneComponent } from './children/child-one/child-one.component';
import { DivicesComponent } from './children/divices/divices.component';
import { SentToParentComponent } from './children/sent-to-parent/sent-to-parent.component';
import { AgeComponent } from './children/age/age.component';
import { ReactifFormCourseComponent } from './forms/reactif-form-course/reactif-form-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './forms/form-control/form-control.component';
import { CatsComponent } from './API/cats/cats.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCatsComponent } from './API/single-cats/single-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarToggleComponent,
    SideBarComponent,
    ChildOneComponent,
    DivicesComponent,
    SentToParentComponent,
    AgeComponent,
    ReactifFormCourseComponent,
    FormControlComponent,
    CatsComponent,
    SingleCatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
