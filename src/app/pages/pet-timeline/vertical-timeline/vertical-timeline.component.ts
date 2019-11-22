import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
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

  public timelineItems = null;

  constructor(
    private petTimelineService: PetTimelineService,
    private dialog: MatDialog
  ) { };

  ngOnInit() {
    this.timelineItems = [
      {
        id: 22,
        age: {value: 1, unit: 'saptamana'},
        animalType: 'pisica', 
        timelineIndex: 0,
        title: 'primul titlu',
        picture: 'https://source.unsplash.com/433x649/?Uruguay',
        subtitle: 'primul subtitle',
        descriptionText: 'very short description',
        infoItems: [
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times',
          'lore ipsdum alot of times', 
        ],
      },
      {
        id: 22,
        age: {value: 2, unit: 'saptamana'},
        animalType: 'pisica', 
        timelineIndex: 1,
        title: 'al doilea titlu',
        picture: 'https://source.unsplash.com/530x572/?Jamaica',
        subtitle: 'al doilea subtitle',
        descriptionText: 'very short description',
        infoItems: [
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times'
        ],
      },
      {
        id: 22,
        age: {value: 3, unit: 'saptamana'},
        animalType: 'pisica', 
        timelineIndex: 2,
        title: 'al treilea titlu',
        picture: 'https://source.unsplash.com/531x430/?Kuwait',
        subtitle: 'al treilea subtitle',
        descriptionText: 'very short description',
        infoItems: [
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times', 
        ],
      },
      {
        id: 22,
        age: {value: 4, unit: 'saptamana'},
        animalType: 'pisica', 
        timelineIndex: 3,
        title: 'al patrulea titlu',
        picture: 'https://source.unsplash.com/586x1073/?Bermuda',
        subtitle: 'al patrulea subtitle',
        descriptionText: 'very short description',
        infoItems: [
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times',
          'lore ipsdum alot of times', 
          'lore ipsdum alot of times'
        ],
      }
    ];
    console.log('in pet timeline');
    window.sr = ScrollReveal();
    this.petTimelineService.getTimeline().subscribe((res)=>{
      console.log('response of timeline', res);
    });      
  };

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
        data => console.log("Dialog output:", data)
    );  
}

  public editCart(item) {
    console.log('item for edit', item);
    let zaItems = [];
    item.infoItems.forEach(element => {
      zaItems.push({info: element})
    });
    let editObj = {
      id: item.id,
      age: item.age,
      animalType: item.animalType, 
      timelineIndex: item.timelineIndex,
      title: item.title,
      picture: item.picture,
      subtitle: item.subtitle,
      descriptionText: item.descriptionText,
      infoItems: zaItems,
    }
    this.openDialog(editObj);
  }

  public deleteCart(item) {

  }

}
