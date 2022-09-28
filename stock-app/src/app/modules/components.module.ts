
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../components/home/home.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: []
})
export class ComponentsModule { }
