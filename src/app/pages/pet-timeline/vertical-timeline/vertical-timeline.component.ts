import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { PetTimelineService } from '../pet-timeline.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { TimelineItemModel } from '../pet-timeline.models';

// declare global {
//   interface Window { sr: any; }
// };

export function uploadProgress<T>( cb: ( progress: number ) => void ) {
  return tap(( event: HttpEvent<T> ) => {
    if ( event.type === HttpEventType.UploadProgress ) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
}

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: 'vertical-timeline.component.html',
  styleUrls: ['vertical-timeline.component.scss'],
})

export class VerticalTimelineComponent implements OnInit {
  @ViewChild('timeline', {static: false}) container : ElementRef;
  @Input() animalType: string;
  public timelineItems = null;

  constructor(
    private petTimelineService: PetTimelineService,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) { };

  ngOnInit() {
    this.timelineItems = [ ];
    console.log('in vertical timeline component');
    // window.sr = ScrollReveal();
    // this.petTimelineService.getTimeline('pisica').subscribe((res)=>{
    //   this.timelineItems = res;
    //   console.log('response of timeline', res);
    // });      
  };

  ngOnChanges(changes: SimpleChanges) {
    this.typeChanged(changes.animalType.currentValue, changes.animalType.previousValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
}

public typeChanged(newAnimalType, oldAnimalType) {
  console.log(newAnimalType, oldAnimalType);
  newAnimalType = newAnimalType !== undefined ? newAnimalType : 'pisica';
  this.petTimelineService.getTimeline(newAnimalType)
    .subscribe((res: TimelineItemModel[]) => {
      for(let item of Object.keys(res)) {
        this.timelineItems.push(this.mapResponse(res[item]))
      };
      console.log('response of timeline', this.timelineItems);
    });      
}

public mapResponse(item) {
  return {
    _id: item._id,
    age: JSON.parse(item.age),
    animalType: item.animalType,
    title: item.title,
    picture: JSON.parse(item.picture),
    subtitle: item.subtitle,
    descriptionText: item.descriptionText,
    timelineIndex: item.timelineIndex,
    infoItems: JSON.parse(item.infoItems)
  }
}

  newTimmelineItem() {
    let newItem = {
            age:'2an',
            animalType: 'soparla',
            title: 'titlu',
            picture: null,
            subtitle: 'subtitlu',
            descriptionText: 'descriere',
            infoItems: ['ion', 'tiriac'] 
    };
    this.petTimelineService.newTimelineItem(newItem).subscribe((res)=>{
      console.log('response of post', res);
    });  
  }

  openDialog(item) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '2%',
      left: '40%'
    };
    if (item !== false) {
      dialogConfig.data = item;
    } else {
      dialogConfig.data = false;
    }
    //this.dialog.open(DialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          let type = this.animalType ? this.animalType : 'pisica';
          switch(data.type){
            case 'save':
                this.petTimelineService.newTimelineItem(data.data)
                .pipe(
                  // uploadProgress(progress => (this.progress = progress)),
                  toResponseBody()
                ).subscribe((res)=>{
                  console.log('response of post', res);
                  debugger;
                  this.petTimelineService.getTimeline(type).subscribe((res)=>{
                    this.timelineItems = res;
                    console.log('response of timeline', res);
                  });      
                });  
              break;
            case 'edit':
                this.petTimelineService.editTimelineItem(data.data._id, data.data)
                .subscribe((res)=>{
                  console.log('response of edit', res);
                  this.petTimelineService.getTimeline(type)          
                  .subscribe((res: TimelineItemModel[]) => {
                    this.timelineItems = [];
                    for(let item of Object.keys(res)) {
                      this.timelineItems.push(this.mapResponse(res[item]))
                    };
                    console.log('response of edited timeline', this.timelineItems);
                  });   
                });  
              break;
            }
          console.log("Dialog output:", data)
        }
    );  
}

  public editCart(item) {
    console.log('item for edit', item);
    let zaItems = [];
    item.infoItems.forEach(element => {
      zaItems.push({info: element})
    });
    let editObj = {
      _id: item._id,
      age: item.age,
      animalType: item.animalType, 
      timelineIndex: item.timelineIndex,
      title: item.title,
      picture: item.picture,
      subtitle: item.subtitle,
      descriptionText: item.descriptionText,
      infoItems: item.infoItems,
    }
    this.openDialog(editObj);
  }

  public deleteCart(item) {
    this.petTimelineService.deleteTimelineItem(item._id)
    .subscribe((res)=>{
      console.log('response of delete', res);
      this.petTimelineService.getTimeline('pisica')
      .subscribe((res: TimelineItemModel[]) => {
        this.timelineItems = [];
        for(let item of Object.keys(res)) {
          this.timelineItems.push(this.mapResponse(res[item]))
        };
        console.log('response of deleted timeline', this.timelineItems);
      });        
    });  
  }

  public transform(location, name){
    location = location.replace('./', '/');
    let url = "http://smartvetserverpipelined-env.wpm7ygt3iv.eu-central-1.elasticbeanstalk.com/" + location + "/" + name
     
    return url;
  }
  

}
