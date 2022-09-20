import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../components/layouts/main-layout/main-layout.component';
import { HeaderLayoutComponent } from '../components/layouts/header-layout/header-layout.component';
import { BodyLayoutComponent } from '../components/layouts/body-layout/body-layout.component';
import { RouterModule } from '@angular/router';



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
