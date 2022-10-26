import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  defaultControl = 'australia';
  fisrtname: string = '';
  lastname: string = '';
  @ViewChild('myForm') form!: NgForm;

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form);
  }
}
