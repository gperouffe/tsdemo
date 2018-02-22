import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-change-source',
  templateUrl: './dialog-change-source.component.html',
  styleUrls: ['./dialog-change-source.component.scss']
})
export class DialogChangeSourceComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogChangeSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
