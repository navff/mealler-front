import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { EventsComponent } from './pages/events/events.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { EventEditComponent } from './pages/events/event-edit/event-edit.component';
import { MealEditComponent } from './pages/events/meal-edit/meal-edit.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { IngredientsListComponent } from './pages/ingredients/ingredients-list/ingredients-list.component';
import { IngredientEditComponent } from './pages/ingredients/ingredient-edit/ingredient-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { EmailSentComponent } from './pages/login/email-sent/email-sent.component';

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
              title: 'Edit recipe'
            }
          }
        ]
      },
      {
        path: 'ingredients',
        data: {
          title: 'Ingredients'
        },
        children: [
          {
            path: '',
            component: IngredientsListComponent,
            pathMatch: 'full'
          },
          {
            path: 'edit/:id',
            component: IngredientEditComponent,
            data: {
              title: 'Edit ingredient'
            }
          }
        ]
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
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login or Register'
    }
  },
  {
    path: 'login/email-sent',
    component: EmailSentComponent,
    data: {
      title: 'Email sent'
    }
  },
  {
    path: 'login/:token',
    component: LoginComponent,
    data: {
      title: 'Login or Register'
    }
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
