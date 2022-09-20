import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './modules/components.module';
import { LayoutsModule } from './modules/layouts.module';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    LayoutsModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    ComponentsModule,
    LayoutsModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
