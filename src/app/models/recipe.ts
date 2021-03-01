import { RecipeIngredient } from './ingredient';

export class Recipe implements IRecipe {
  id: number;
  name: string;
  ingredients: RecipeIngredient[];
  portions: number;
  laborCosts: number;
  cookingTime: number;
}

export interface IRecipe {
  id: number;
  name: string;
}
