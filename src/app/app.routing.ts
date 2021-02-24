import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { EventsComponent } from './pages/events/events.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'events',
        component: EventsComponent,
        data: {
          title: 'Events',
        },
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        data: {
          title: 'Recipes',
        },
      },
      {
        path: 'ingredients',
        component: IngredientsComponent,
        data: {
          title: 'Ingredients',
        },
      },
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
        data: {
          title: 'Shopping list',
        },
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
        data: {
          title: 'My account',
        },
      },
      {
        path: 'my-team',
        component: MyTeamComponent,
        data: {
          title: 'My account',
        },
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'corrected',
    useHash: false
}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
