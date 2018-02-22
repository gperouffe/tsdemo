import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CommentaireApiService } from './services/commentaire-api.service';
import { UserApiService } from './services/user-api.service';
import { FilApiService } from './services/fil-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatChipsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import "hammerjs";
import { DialogAddFilComponent } from './components/dialog-add-fil/dialog-add-fil.component';
import { DialogLogUserComponent } from './components/dialog-log-user/dialog-log-user.component';
import { DialogChangeSourceComponent } from './components/dialog-change-source/dialog-change-source.component';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddFilComponent,
    DialogLogUserComponent,
    DialogChangeSourceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatChipsModule,
    // Flex-layout
    FlexLayoutModule,

    BrowserAnimationsModule
  ],
  providers: [
    CommentaireApiService,
    UserApiService,
    FilApiService,
    Globals
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogAddFilComponent,
    DialogLogUserComponent,
    DialogChangeSourceComponent
  ]
})
export class AppModule { }
