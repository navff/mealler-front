import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import {
  AlertModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CalloutModule,
  CardModule,
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
  TogglerModule
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
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationService } from './common-services/MissingTranslationService';
import { MealListItemComponent } from './pages/events/meal-list-item/meal-list-item.component';
import { EventListItemComponent } from './pages/events/event-list-item/event-list-item.component';
import { EventEditComponent } from './pages/events/event-edit/event-edit.component';
import { MealEditComponent } from './pages/events/meal-edit/meal-edit.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { IngredientsListComponent } from './pages/ingredients/ingredients-list/ingredients-list.component';
import { IngredientEditComponent } from './pages/ingredients/ingredient-edit/ingredient-edit.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const APP_CONTAINERS = [
  DefaultLayoutComponent,
  DefaultHeaderComponent
];

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
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
      useDefaultLang: false
    }),
    NgSelectModule,
    TooltipModule,
    DataTableModule,
    FormsModule
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
    IngredientsComponent,
    MealListItemComponent,
    EventListItemComponent,
    EventEditComponent,
    MealEditComponent,
    RecipeEditComponent,
    RecipesListComponent,
    DataFilterPipe,
    IngredientsListComponent,
    IngredientEditComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
