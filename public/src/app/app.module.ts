import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateAuthorComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
