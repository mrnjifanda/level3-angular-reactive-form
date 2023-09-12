import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifFormCourseComponent } from './reactif-form-course.component';

describe('ReactifFormCourseComponent', () => {
  let component: ReactifFormCourseComponent;
  let fixture: ComponentFixture<ReactifFormCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactifFormCourseComponent]
    });
    fixture = TestBed.createComponent(ReactifFormCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
