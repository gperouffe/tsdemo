import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-add-fil',
  templateUrl: './dialog-add-fil.component.html',
  styleUrls: ['./dialog-add-fil.component.scss']
})
export class DialogAddFilComponent {

 
  constructor(
    public dialogRef: MatDialogRef<DialogAddFilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
