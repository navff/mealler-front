import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly environment: any;

  // We need @Optional to be able start app without providing environment file
  constructor(private translateService: TranslateService,
              private titleService: Title) {
    this.environment = environment;
    this.translateService.use(environment.defaultLocale);
  }

  get env() {
    return this.environment;
  }

  getValue(key: string, defaultValue?: any): any {
    return this.environment[key] || defaultValue;
  }

  setTitle(prefixKey: string) {

    const prefix$ = this.translateService.get(prefixKey);
    const suffix$ = this.translateService.get('common.title');

    forkJoin([prefix$, suffix$]).subscribe((data) => {
      let title;
      const prefix = data[0];
      const suffix = data[1];

      if (!prefix) {
        title = suffix;
      } else {
        title = `${prefix} | ${suffix}`;
      }

      this.titleService.setTitle(title);
    });
  }
}
