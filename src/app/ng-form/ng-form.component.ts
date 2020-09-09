import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})

export class NgFormComponent {
  formLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    pass: new FormControl('')
  })

  get email() { return this.formLogin.get('email') }

  onSubmit() {
    console.log(this.formLogin.value)
  }
}

