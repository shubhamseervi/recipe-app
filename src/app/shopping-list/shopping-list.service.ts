import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject'

export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomoto' ,4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    clearIngredients() {
        this.ingredients = [];
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredients(index: number, newIngredients: Ingredient) {
        this.ingredients[index] = newIngredients;
        this.ingredientChanged.next(this.ingredients.slice());
    }

}