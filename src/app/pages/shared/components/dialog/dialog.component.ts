import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  public form: FormGroup;
  public title: string;

  public animalTypes: Array<string>;
  public infoItems: number;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.title = data.title;
    }

    ngOnInit() {
        this.animalTypes = ['catel', 'pisica'];
        this.infoItems = 1;
        this.form = this.newTimelineItem();
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

    public newTimelineItem() {
        return new FormGroup({
            age: new FormControl(''),
            animalType: new FormControl(''), 
            timelineIndex: new FormControl(''),
            title: new FormControl(''),
            picture: new FormControl(''),
            subtitle: new FormControl(''),
            descriptionText: new FormControl(''),
            infoItems: this.fb.array([
              this.addItems()
            ])
      })
    }

    get addDynamicElement() {
        return this.form.get('infoItems') as FormArray
    }
    
    public addItems() {
    //this.addDynamicElement.push(this.fb.control(''))
    return this.fb.group({
      item: ['']
    })
    }
}
