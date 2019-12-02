import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-progress',
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  @Input() progress = 0;
}