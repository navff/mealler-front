export class Ingredient {
  id: number;
  name: string;
  description: string;
  priceAvg: number;
}

export class MealIngredient {
  mealId: number;
  ingredientId: number;
  ingredientName: string;
  count: number;
  cost: number;
}

export class RecipeIngredient {
  recipeId: number;
  ingredientId: number;
  ingredientName: string;
  count: number;
}
