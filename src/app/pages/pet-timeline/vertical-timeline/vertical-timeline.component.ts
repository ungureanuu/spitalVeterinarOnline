import { Component, OnInit, AfterViewChecked } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: 'vertical-timeline.component.html',
  styleUrls: ['vertical-timeline.component.scss'],
})
export class VerticalTimelineComponent implements OnInit {

  constructor(private window: Window) { }

  ngOnInit() {
    console.log('in pet timeline');
  //  this.window.sr = ScrollReveal();

  // if ($(window).width() < 768) {

  // 	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  // 		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  // 	}

  // 	sr.reveal('.js--fadeInRight', {
	//     origin: 'right',
	//     distance: '300px',
	//     easing: 'ease-in-out',
	//     duration: 800,
	//   });

  // } else {
  	
  // 	sr.reveal('.js--fadeInLeft', {
	//     origin: 'left',
	//     distance: '300px',
	// 	  easing: 'ease-in-out',
	//     duration: 800,
	//   });

	//   sr.reveal('.js--fadeInRight', {
	//     origin: 'right',
	//     distance: '300px',
	//     easing: 'ease-in-out',
	//     duration: 800,
	//   });

  // }
  
  // sr.reveal('.js--fadeInLeft', {
	//     origin: 'left',
	//     distance: '300px',
	// 	  easing: 'ease-in-out',
	//     duration: 800,
	//   });

	//   sr.reveal('.js--fadeInRight', {
	//     origin: 'right',
	//     distance: '300px',
	//     easing: 'ease-in-out',
	//     duration: 800,
	//   });

  };

}
