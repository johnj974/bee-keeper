import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputRoutingModule } from './output-routing.module';
import { MainOutputComponent } from './main-output/main-output.component';

@NgModule({
  declarations: [MainOutputComponent],
  imports: [CommonModule, OutputRoutingModule],
})
export class OutputModule {}
