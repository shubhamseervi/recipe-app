import { Recipe } from './recipe.model';
import { Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();


    private recipes: Recipe[] = [
        new Recipe('Quick Chicken Nuggets',
            'These breaded chicken tenders are served with a mustard and mayonnaise',
            'http://images.meredith.com/bhg/images/recipe/p_R115589.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('French Fries', 20)
            ]),

        new Recipe('Mediterranean Chicken and Pasta',
            'Better Homes and Gardens Artichoke hearts, garlic, oregano, olives, roasted sweet peppers',
            'http://images.meredith.com/bhg/images/recipe/p_R157276.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Pasta', 1),
                new Ingredient('French Fries', 20)
            ]),

        new Recipe('Cranberry-Apple Pork Roast',
            'Italian sausage, basil, and oregano season this slow cooker chili.',
            'http://images.meredith.com/content/dam/bhg/Images/recipe/34/R087164.jpg.rendition.largest.jpg',
            [
                new Ingredient('Apple', 1),
                new Ingredient('Pork', 1),
                new Ingredient('French Fries', 20)
            ])
    ];

    constructor(private slService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[] ) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}