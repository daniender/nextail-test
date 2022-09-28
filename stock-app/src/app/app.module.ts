import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './modules/components.module';
import { LayoutsModule } from './modules/layouts.module';
import { SharedModule } from './modules/shared.module';
import { MaterialModule } from './modules/material.module';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const socketConfig: SocketIoConfig = { url: environment.socketUrl, options: {}};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    LayoutsModule,
    MaterialModule,
    SharedModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [
  ],
  exports: [
    ComponentsModule,
    LayoutsModule,
    MaterialModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
