import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CommentaireApiService } from './services/commentaire-api.service';
import { UserApiService } from './services/user-api.service';
import { FilApiService } from './services/fil-api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CommentaireApiService,
    UserApiService,
    FilApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
