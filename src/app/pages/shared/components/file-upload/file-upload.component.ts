import { Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-file-upload',
  templateUrl: './file-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ],
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements ControlValueAccessor, OnInit {
  @Input() progress;
  @Input() fileName;
  @Output() changePictureEvent = new EventEmitter();
  onChange: Function;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {}

  ngOnInit() {}

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }

  changePicture() {
    this.changePictureEvent.emit('change');
  }

  testFoo(event) {
    debugger;
  }

}
