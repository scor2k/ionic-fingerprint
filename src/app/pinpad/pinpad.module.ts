import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinpadPageRoutingModule } from './pinpad-routing.module';

import { PinpadPage } from './pinpad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinpadPageRoutingModule
  ],
  declarations: [PinpadPage]
})
export class PinpadPageModule {}
