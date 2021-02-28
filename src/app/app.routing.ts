import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { EventsComponent } from './pages/events/events.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { EventEditComponent } from './pages/events/event-edit/event-edit.component';
import { MealEditComponent } from './pages/events/meal-edit/meal-edit.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
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
        data: {
          title: 'Events'
        },
        children: [
          {
            path: '',
            component: EventsComponent,
            pathMatch: 'full'
          },
          {
            path: 'edit/:id',
            component: EventEditComponent,
            data: {
              title: 'Edit event'
            }
          },
          {
            path: 'meal/:id',
            component: MealEditComponent,
            data: {
              title: 'Edit meal'
            }
          }
        ]
      },
      {
        path: 'recipes',
        data: {
          title: 'Recipes'
        },
        children: [
          {
            path: '',
            component: RecipesListComponent,
            pathMatch: 'full'
          },
          {
            path: 'edit/:id',
            component: RecipeEditComponent,
            data: {
              title: 'Edit event'
            }
          }
        ]
      },
      {
        path: 'ingredients',
        component: IngredientsComponent,
        data: {
          title: 'Ingredients'
        }
      },
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
        data: {
          title: 'Shopping list'
        }
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
        data: {
          title: 'My account'
        }
      },
      {
        path: 'my-team',
        component: MyTeamComponent,
        data: {
          title: 'My account'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'corrected',
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
