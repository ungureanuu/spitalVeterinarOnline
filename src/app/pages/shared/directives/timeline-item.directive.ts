import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[timeline-item]'
})
export class TimelineItemDirective implements OnInit{

  constructor() {
   }

  ngOnInit() {
    console.log('in timeline directive');
  }

}
