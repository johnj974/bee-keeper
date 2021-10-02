import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainOutputComponent } from './main-output/main-output.component';

const routes: Routes = [{ path: '', component: MainOutputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutputRoutingModule {}
