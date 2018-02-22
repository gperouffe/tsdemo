import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { UserApiService } from './services/user-api.service';
import { Fil } from './models/Fil';
import { User } from './models/User';
import { Commentaire } from './models/Commentaire';
import { FilApiService } from './services/fil-api.service';
import { CommentaireApiService } from './services/commentaire-api.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogAddFilComponent } from './components/dialog-add-fil/dialog-add-fil.component';
import { VMFil } from './viewmodels/VMFil';
import { VMUser } from './viewmodels/VMUser';
import { DialogLogUserComponent } from './components/dialog-log-user/dialog-log-user.component';
import { VMCommentaire } from './viewmodels/VMCommentaire';

import {Observable} from 'rxjs/Rx';
import { DialogChangeSourceComponent } from './components/dialog-change-source/dialog-change-source.component';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isDarkTheme = false;

  currentFil: Fil;
  currentUser: User;
  currentMessage: string;
  commentaires: Commentaire[];
  fils: Fil[];
  
  @ViewChildren('msg') messages: QueryList<any>;
  @ViewChild('msgcontainer') content: ElementRef;
  
  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) {}
  }

  constructor(
    private userApi: UserApiService,
    private filApi: FilApiService,
    private commentaireApi: CommentaireApiService,
    private dialog: MatDialog,
    protected globals: Globals
  ){}

  ngAfterViewInit(): void {
    this.messages.changes.subscribe(this.scrollToBottom);
    setTimeout(() => this.logUser(), 0);
    this.refreshFils();

    Observable.interval(1000).subscribe(x => {
      this.refreshCommentaires();
    });
  }

  private refreshFils(){
    let parentId = null;

    if(this.currentFil != null){
      parentId = this.currentFil.id;
    }
    this.filApi.getByParent(parentId).subscribe(
      fils => {
        this.fils = fils;
        console.log(fils);
        this.refreshCommentaires();
      }
    );
  }

  private refreshCommentaires(){
    let filId = null;
    if(this.currentFil){
      filId = this.currentFil.id;
    }
    this.commentaireApi.getByFil(filId).subscribe(
      comms => {
        this.commentaires = comms;
        console.log(comms);
      }
    );
  }

  logUser(){
    let dialogRef = this.dialog.open(DialogLogUserComponent, {
      width: '250px',
      data: {username : "Utilisateur", ok : false},
      disableClose: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(username => {
      if(username != undefined){
        this.userApi.getByUsername(username).subscribe(
          user => {
            if(user == null){
              let userVm = new VMUser();
              userVm.username = username;
              this.userApi.create(userVm).subscribe(
                newUser => {
                   this.currentUser = newUser
                }
              )
            }
            else{
              this.currentUser = user;
            }
          }
        );
      }
    });
  }

  addFil(event: Event){
    event.preventDefault();
    event.stopPropagation ();
    let dialogRef = this.dialog.open(DialogAddFilComponent, {
      width: '250px',
      data: {titre : "Nouveau fil", ok : false}
    });

    dialogRef.afterClosed().subscribe(titre => {
      if(titre != undefined){
        let filVm = new VMFil();
        filVm.titre = titre;
        if(this.currentFil){
          filVm.parentId = this.currentFil.id;
        }
        else{
          filVm.parentId = null;
        }
        this.filApi.create(filVm).subscribe(
          createdFil => {
            this.refreshFils();
          }
        );
      }
    });
  }

  selectFil(fil:Fil){
    this.currentFil = fil;
    this.refreshFils();
  }

  sendMessage(){
    if(this.currentMessage && this.currentMessage != ""){
      let commVm = new VMCommentaire();
      commVm.filId = this.currentFil? this.currentFil.id: null;
      commVm.text = this.currentMessage;
      commVm.userId = this.currentUser.id;
      this.commentaireApi.create(commVm).subscribe(
        comm => {
          console.log(comm)
          this.currentMessage = "";
          this.refreshCommentaires();
        }
      );
    }
  }

  changeSource(){
    let dialogRef = this.dialog.open(DialogChangeSourceComponent, {
      width: '250px',
      data: {url : this.globals.BASE_URL}
    });

    dialogRef.afterClosed().subscribe(url => {
      if(url != undefined){
        this.globals.BASE_URL = url;
        this.currentFil = null;
        this.currentMessage = null;
        this.refreshFils();
      }
    });
  }
}
