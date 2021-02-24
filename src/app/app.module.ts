import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent,
  DefaultHeaderComponent,
];

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  BreadcrumbModule,
  CardModule,
  CalloutModule,
  ChartModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  LayoutModule,
  ListGroupModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  SwitchModule,
  TabsetModule,
  TogglerModule,
} from '@coreui/angular';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

// 3rd party
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { EventsComponent } from './pages/events/events.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

@NgModule({
    imports: [
        AlertModule,
        BadgeModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        BreadcrumbModule,
        CardModule,
        CalloutModule,
        ChartModule,
        CollapseModule,
        DropdownModule,
        GridModule,
        IconModule,
        IconSetModule.forRoot(),
        SharedModule,
        LayoutModule,
        ListGroupModule,
        ProgressModule,
        SidebarModule,
        SwitchModule,
        TabsetModule,
        TogglerModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        FormModule,
    ],
  exports: [SharedModule],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    EventsComponent,
    RecipesComponent,
    ShoppingListComponent,
    MyAccountComponent,
    MyTeamComponent,
    IngredientsComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    IconSetService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
