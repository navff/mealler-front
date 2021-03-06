import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import {
  cilApplicationsSettings,
  cilEnvelopeClosed,
  cilLibraryAdd,
  cilMoon,
  cilPencil,
  cilSun,
  cilTrash,
  cilUser,
  cilX
} from '@coreui/icons';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService]
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              public iconSet: IconSetService,
              private translateService: TranslateService) {
    // iconSet singleton
    iconSet.icons = {
      cilMoon, cilSun, cilApplicationsSettings, cilX,
      cilLibraryAdd, cilPencil,
      cilTrash, cilUser, cilEnvelopeClosed
    };
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
