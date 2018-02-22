import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-log-user',
  templateUrl: './dialog-log-user.component.html',
  styleUrls: ['./dialog-log-user.component.scss']
})
export class DialogLogUserComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogLogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
