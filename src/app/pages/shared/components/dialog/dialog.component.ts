import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { requiredFileType } from '../file-upload/upload-file-validators';

//Services
import { PetTimelineService } from '../../../pet-timeline/pet-timeline.service';

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
  ];
  public progress = 0;
  public success = false;

    constructor(
        private petTimelineService: PetTimelineService,
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
          picture: [null, [Validators.required, requiredFileType('jpg')]],
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

    public hasError( field: string, error: string ) {
      const control = this.form.get(field);
      return control.dirty && control.hasError(error);
    }

    public changePicture($event) {
      let picture = this.form.get('picture');
      if (!picture.value.location) {
        
        let data = {
          _id: this.form.get('_id').value,
          animalType: this.form.get('animalType').value,
          picture: picture.value
        };
        debugger;
        this.petTimelineService.changeItemPicture(data)
        .subscribe((res)=>{
          console.log('response of changed pic', res);
          // this.petTimelineService.getTimeline(type).subscribe((res)=>{
          //   this.timelineItems = res;
          //   console.log('response of timeline', res);
          // });      
        });  
      }
    }
    
}

export function markAllAsDirty( form: FormGroup ) {
  for ( const control of Object.keys(form.controls) ) {
    form.controls[control].markAsDirty();
  }
}
