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
        age: 2,
        Title: "Title",
        Date: new Date(),
        Description: "Lorem ipsum dolor sit amet",
      },
      {
        age: 2,
        Title: "Title",
        Date: new Date(),
        Description: "Lorem ipsum dolor sit amet",
      },
      {
        age: 2,
        Title: "Title",
        Date: new Date(),
        Description: "Lorem ipsum dolor sit amet",
      },
      {
        age: 2,
        Title: "Title",
        Date: new Date(),
        Description: "Lorem ipsum dolor sit amet",
      },
      {
        age: 2,
        Title: "Title",
        Date: new Date(),
        Description: "Lorem ipsum dolor sit amet",
      },
      {
        age: 2,
        Title: "Title",
        Date: new Date(),
        Description: "Lorem ipsum dolor sit amet",
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

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '10%',
      left: '40%'
    };
    dialogConfig.data = {
      id: 1,
      title: 'Adauga cart'
  };

    //this.dialog.open(DialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );  
}

  // ngAfterViewChecked() {
  //   let elem = this.container.nativeElement;
  //   if (elem.offsetWidth < 768) {

  //     let timelineCnt = elem.classList.querySelector('.timeline-content');
  //     if (timelineCnt.classList.contains('js--fadeInLeft')) {
  //         timelineCnt.removeClass('js--fadeInLeft').addClass('js--fadeInRight')
  //     }
  //     window.sr.reveal('.js--fadeInRight', {
  //       origin: 'right',
  //       distance: '300px',
  //       easing: 'ease-in-out',
  //       duration: 800,
  //     });
  //   } else {

  //     window.sr.reveal('.js--fadeInLeft', {
  //       origin: 'left',
  //       distance: '300px',
  //   	  easing: 'ease-in-out',
  //       duration: 800,
  //     });

  //     window.sr.reveal('.js--fadeInRight', {
  //       origin: 'right',
  //       distance: '300px',
  //       easing: 'ease-in-out',
  //       duration: 800,
  //     });
  //   }
  //   window.sr.reveal('.js--fadeInLeft', {
  //     origin: 'left',
  //     distance: '300px',
  //     easing: 'ease-in-out',
  //     duration: 800,
  //   });

  //   window.sr.reveal('.js--fadeInRight', {
  //     origin: 'right',
  //     distance: '300px',
  //     easing: 'ease-in-out',
  //     duration: 800,
  //   });

  // }

}
