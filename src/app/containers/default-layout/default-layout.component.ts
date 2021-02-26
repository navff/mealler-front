import { Component, HostBinding, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { INavData } from '@coreui/angular';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  @HostBinding('class.c-app') cAppClass = true;
  navItems = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true
  };


  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    const translationsObservables = [];
    navItems.forEach((value => {
      translationsObservables.push(this.translateService.get('navigation.' + value.name));
    }));

    forkJoin(translationsObservables).subscribe(translations => {
      this.navItems = navItems.map((navItem: INavData, index) => {
        return {
          name: translations[index],
          url: navItem.url,
          href: navItem.href,
          icon: navItem.icon,
          badge: navItem.badge,
          title: navItem.title,
          children: navItem.children,
          variant: navItem.variant,
          attributes: navItem.attributes,
          divider: navItem.divider,
          label: navItem.label,
          wrapper: navItem.wrapper,
          linkProps: navItem.linkProps,
          class: navItem.class
        };
      });
    });
  }
}
