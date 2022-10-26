import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'angularFormPractice';
  @ViewChild('myForm') form!: NgForm;
  onSubmit() {
    console.log(this.form);
  }
}
