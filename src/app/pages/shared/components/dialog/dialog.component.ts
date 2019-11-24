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
  public editCart = null;
  public animalTypes: Array<string>;
  public infoList = [
    {info: ''},
    {info: ''}
  ]

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.editCart = data;
        if (this.editCart !== false) {
          this.infoList = [];
          this.infoList = data.infoItems;
        }
        const formArray = this.fb.array([]);  
        for (const data of this.infoList) {
          formArray.push(
            this.fb.group({info: new FormControl(data.info)})
          );      
        }
        this.form = this.fb.group({
          _id: null,
          age: this.fb.group({value: null, unit: ''}),
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
        if(this.editCart !== false) {
          (<FormGroup>this.form)
            .setValue(this.editCart, {onlySelf: true});
        }

    }

    save() {
        let type = this.editCart !== false ? 'edit' : 'save';
        this.dialogRef.close({type: type, data: this.form.value});
    }

    close() {
        this.dialogRef.close();
    }

    get itemsArray(): FormArray {
      return this.form.get('infoItems') as FormArray;
    }
  
    public addItems() {
      this.itemsArray.push(this.fb.group({info: new FormControl('')}))
      
    }
}
