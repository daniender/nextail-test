import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../components/layouts/main-layout/main-layout.component';
import { HeaderLayoutComponent } from '../components/layouts/header-layout/header-layout.component';
import { BodyLayoutComponent } from '../components/layouts/body-layout/body-layout.component';



@NgModule({
  declarations: [
    BodyLayoutComponent,
    HeaderLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BodyLayoutComponent,
    HeaderLayoutComponent,
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
