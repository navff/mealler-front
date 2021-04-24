import { RecipeIngredient } from './referenceIngredient';

export class Recipe implements IRecipe {
  id: number;
  name: string;
  ingredients: RecipeIngredient[];
  portions: number;
  laborCosts: number;
  cookingTime: number;
  description: string;
}

export interface IRecipe {
  id: number;
  name: string;
}
