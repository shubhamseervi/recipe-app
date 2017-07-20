import  { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

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

    addIngredientToShoppingList(ingredients: Ingredient[] ) {
        this.slService.addIngredients(ingredients);
    }
}