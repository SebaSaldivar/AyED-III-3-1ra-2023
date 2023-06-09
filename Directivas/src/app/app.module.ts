import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormsModule } from '@angular/forms';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
