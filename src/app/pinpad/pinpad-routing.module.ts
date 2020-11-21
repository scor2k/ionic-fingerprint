import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinpadPage } from './pinpad.page';

const routes: Routes = [
  {
    path: '',
    component: PinpadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinpadPageRoutingModule {}
