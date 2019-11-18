import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public form: FormGroup;
  public title: string;

  public newTimelineItem = new FormGroup({
        age: new FormControl(''),
        animalType: new FormControl(''), 
        title: new FormControl(''),
        picture: new FormControl(''),
        subtitle: new FormControl(''),
        descriptionText: new FormControl(''),
        infoItems: new FormArray([])
  });
  public animalType: string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.title = data.title;
    }

    ngOnInit() {
        this.form = this.fb.group(this.newTimelineItem);
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
