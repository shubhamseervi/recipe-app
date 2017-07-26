import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputref: ElementRef;
  @ViewChild('amountInput') amountInputref: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }


  onAdded() {
    const ingredientName = this.nameInputref.nativeElement.value;
    const ingredientAmount = this.amountInputref.nativeElement.value;
    console.log("ingredientName :",ingredientName);
    console.log("ingredientAmount :",ingredientAmount);
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.slService.addIngredient(newIngredient);
  }

  onDelete() {
    this.slService.clearIngredients();
  }

  onClear() {
     this.nameInputref.nativeElement.value = '';
     this.amountInputref.nativeElement.value = '';
  }
}
