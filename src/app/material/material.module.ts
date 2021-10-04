import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const materialComponents = [
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
