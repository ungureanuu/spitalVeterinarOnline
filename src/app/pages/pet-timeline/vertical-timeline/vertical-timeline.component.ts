import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import ScrollReveal from 'scrollreveal';

declare global {
  interface Window { sr: any; }
};

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: 'vertical-timeline.component.html',
  styleUrls: ['vertical-timeline.component.scss'],
})

export class VerticalTimelineComponent implements OnInit, AfterViewChecked{
  @ViewChild('timeline', {static: false}) container : ElementRef;

  public timelineItems = null;

  constructor() { };

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
  };

  ngAfterViewChecked() {
    let elem = this.container.nativeElement;
    if (elem.offsetWidth < 768) {

      let timelineCnt = elem.classList.querySelector('.timeline-content');
      if (timelineCnt.classList.contains('js--fadeInLeft')) {
          timelineCnt.removeClass('js--fadeInLeft').addClass('js--fadeInRight')
      }
      window.sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    } else {

      window.sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
    	  easing: 'ease-in-out',
        duration: 800,
      });

      window.sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }
    window.sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    window.sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

}
