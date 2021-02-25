import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { cilMoon, cilSun, cilApplicationsSettings, cilX, freeSet, brandSet, flagSet, cilLibraryAdd } from '@coreui/icons';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              public iconSet: IconSetService,
              private translateService: TranslateService) {
    // iconSet singleton
    iconSet.icons = { cilMoon, cilSun, cilApplicationsSettings, cilX, freeSet, brandSet, flagSet, cilLibraryAdd };
    this.translateService.use(environment.defaultLocale);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
