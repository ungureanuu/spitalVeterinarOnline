import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-traffic',
  styleUrls: ['./traffic.component.scss'],
  template: `

  `,
})
export class TrafficComponent implements OnDestroy {

  private alive = true;

  trafficChartPoints: number[];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
      this.currentTheme = theme.name;
    });

  }

  ngOnDestroy() {
    this.alive = false;
  }
//   <nb-card size="tiny">
//   <nb-card-header>
//     <span>Traffic Consumption</span>

//     <nb-select [(selected)]="type">
//       <nb-option *ngFor="let t of types" [value]="t">{{ t }}</nb-option>
//     </nb-select>
//   </nb-card-header>

//   <ngx-traffic-chart [points]="trafficChartPoints"></ngx-traffic-chart>
// </nb-card>
}
