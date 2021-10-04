import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { MainInputComponent } from './main-input/main-input.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainInputComponent, FormComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class InputModule {}
