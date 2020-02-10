import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbComponentSize, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  

  constructor(
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCamera(camera: any) {

  }
}
