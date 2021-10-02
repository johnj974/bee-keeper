import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { MainInputComponent } from './main-input/main-input.component';


@NgModule({
  declarations: [
    MainInputComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule
  ]
})
export class InputModule { }
