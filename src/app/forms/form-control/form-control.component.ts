import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  username = new FormControl('username', [
    Validators.required,
    Validators.minLength(5)
  ]);

  password = new FormControl('password', [
    Validators.required
  ])

  loginForm = new FormGroup({
    username: new FormControl('username', [
      Validators.required,
      Validators.minLength(5)
    ]),

    password: new FormControl('password', [
      Validators.required
    ])
  })

  constructor (
    private callApi: CallApiService,
    private formBuilder: FormBuilder
  ) {}

  onSubmitForm () {

    console.log(this.username);
  }
}
