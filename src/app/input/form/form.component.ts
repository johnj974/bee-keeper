import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      hiveId: new FormControl(null),
      queen: new FormControl(null),
      cells: new FormControl(null),
      eggs: new FormControl(null),
      larvae: new FormControl(null),
      stores: new FormControl(null),
      supers: new FormControl(null),
      notes: new FormControl(null),
    });
  }

  submitForm() {
    console.log('hello');
  }
}
