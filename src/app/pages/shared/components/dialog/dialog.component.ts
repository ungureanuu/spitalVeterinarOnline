import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  public form: FormGroup;
  public title: string;

  public animalTypes: Array<string>;
  public dataList = [
    {name: ''},
    {name: ''}
  ]

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.title = data.title;
        const formArray = this.fb.array([]);  

        for (const data of this.dataList) {
          formArray.push(
            this.fb.group({name: new FormControl(data.name)})
          );      
        }
        this.form = this.fb.group({
          age: null,
          animalType: null, 
          timelineIndex: null,
          title: null,
          picture: null,
          subtitle: null,
          descriptionText: null,
          infoItems: formArray,
        })
    }

    ngOnInit() {
        this.animalTypes = ['catel', 'pisica'];
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

    get itemsArray(): FormArray {
      return this.form.get('infoItems') as FormArray;
    }
  
    public addItems() {
      this.itemsArray.push(this.fb.group({name: new FormControl('')}))
      
    }
}
