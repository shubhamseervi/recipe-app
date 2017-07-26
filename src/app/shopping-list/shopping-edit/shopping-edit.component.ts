import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

    this.subcription = this.slService.startedEditing
                          .subscribe(
                              (index: number) => {
                                this.editedItemIndex  = index;
                                this.editMode = true;
                                this.editedItem = this.slService.getIngredient(index);
                                this.slForm.setValue({
                                  name: this.editedItem.name,
                                  amount: this.editedItem.amount
                                })

                              }
                          );
  }


  onAddItem(form: NgForm) {
    console.log('called');
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.slService.updateIngredients(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }

    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onDelete() {

  }

  onClear() {

  }
}
