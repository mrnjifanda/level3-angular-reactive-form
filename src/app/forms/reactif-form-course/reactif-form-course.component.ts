import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, pipe } from 'rxjs';

@Component({
  selector: 'app-reactif-form-course',
  templateUrl: './reactif-form-course.component.html',
  styleUrls: ['./reactif-form-course.component.css']
})
export class ReactifFormCourseComponent implements OnInit {

  reactifForm!: FormGroup;
  contentReactifForm$!: Observable<any>;

  constructor (
    private formBuilder: FormBuilder
  ) {}

  test(value: any) {
    return value
  }

  test2(value: any) {
    return value
  }

  ngOnInit (): void {

    this.reactifForm = this.formBuilder.group({
      username: [null, Validators.required, Validators.min(3)],
      email: [null, Validators.required, Validators.email],
      password: [null, ]
    });

    this.contentReactifForm$ = this.reactifForm.valueChanges.pipe(
      map((formValue: any) => ({
        ...formValue,
        id: 1
      }))
    )

  }

  onSubmitForm () {

    console.log(this.reactifForm.value);
    console.log(this.contentReactifForm$);
  }
}
