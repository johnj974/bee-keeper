import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //.
  hiveForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.hiveForm = new FormGroup({
      hiveId: new FormControl(null, [Validators.required, Validators.min(0)]),
      queen: new FormControl(null, Validators.required),
      cells: new FormControl(null, Validators.required),
      eggs: new FormControl(null, Validators.required),
      larvae: new FormControl(null, Validators.required),
      stores: new FormControl(null, Validators.required),
      supers: new FormControl(null, [Validators.required, Validators.min(0)]),
      notes: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  submitForm() {
    console.log(this.hiveForm);
  }
}
