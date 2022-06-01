import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TableUserService, User} from "../tableUser.service";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  constructor(private TableUserService: TableUserService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      this.TableUserService.createNewUser(formData).subscribe(res => {
        console.log(res)
        this.form.reset()
      })
    }
  }
}
