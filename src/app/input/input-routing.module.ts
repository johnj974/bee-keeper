import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInputComponent } from './main-input/main-input.component';

const routes: Routes = [{ path: '', component: MainInputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputRoutingModule {}
