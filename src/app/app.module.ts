import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { StagiaireFormComponent } from './stagiaire-form/stagiaire-form.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { ListecoursComponent } from './listecours/listecours.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiaireComponent,
    StagiaireFormComponent,
    HomeComponent,
    ListecoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
