import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { requiredFileType } from '../file-upload/upload-file-validators';

// export function uploadProgress<T>( cb: ( progress: number ) => void ) {
//   return tap(( event: HttpEvent<T> ) => {
//     if ( event.type === HttpEventType.UploadProgress ) {
//       cb(Math.round((100 * event.loaded) / event.total));
//     }
//   });
// }

// export function toResponseBody<T>() {
//   return pipe(
//     filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
//     map(( res: HttpResponse<T> ) => res.body)
//   );
// }

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
          picture: new FormControl(null, [Validators.required, requiredFileType('png')]),
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

export function markAllAsDirty( form: FormGroup ) {
  for ( const control of Object.keys(form.controls) ) {
    form.controls[control].markAsDirty();
  }
}

export function toFormData<T>( formValue: T ) {
  const formData = new FormData();

  for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}
