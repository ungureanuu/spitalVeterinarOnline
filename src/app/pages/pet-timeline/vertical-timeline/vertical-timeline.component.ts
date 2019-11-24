import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { PetTimelineService } from '../pet-timeline.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../../shared/components/dialog/dialog.component';


declare global {
  interface Window { sr: any; }
};

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: 'vertical-timeline.component.html',
  styleUrls: ['vertical-timeline.component.scss'],
})

export class VerticalTimelineComponent implements OnInit{
  @ViewChild('timeline', {static: false}) container : ElementRef;
  @Input() animalType: string
  public timelineItems = null;

  constructor(
    private petTimelineService: PetTimelineService,
    private dialog: MatDialog
  ) { };

  ngOnInit() {
    this.timelineItems = [ ];
    console.log('in pet timeline');
    window.sr = ScrollReveal();
    this.petTimelineService.getTimeline('pisica').subscribe((res)=>{
      this.timelineItems = res;
      console.log('response of timeline', res);
    });      
  };

  ngOnChanges(changes: SimpleChanges) {

    this.typeChanged(changes.animalType.currentValue, changes.animalType.previousValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}

public typeChanged(newAnimalType, oldAnimalType) {
  console.log(newAnimalType, oldAnimalType);
  this.petTimelineService.getTimeline(newAnimalType).subscribe((res)=>{
    this.timelineItems = res;
    console.log('response of timeline', res);
  });      
}

  newTimmelineItem() {
    let newItem = {
            age:'2an',
            animalType: 'soparla',
            title: 'titlu',
            picture: 'gdsgdsgdsgds',
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
                .subscribe((res)=>{
                  console.log('response of post', res);
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
                  this.petTimelineService.getTimeline(type).subscribe((res)=>{
                    this.timelineItems = res;
                    console.log('response of timeline', res);
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
      this.petTimelineService.getTimeline('pisica').subscribe((res)=>{
        this.timelineItems = res;
        console.log('response of timeline', res);
      });      
    });  
  }

}
