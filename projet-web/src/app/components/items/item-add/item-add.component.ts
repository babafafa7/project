import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemsState,ItemsStateEnum} from "../../../ngrx/item/item.reducer";
import {Store} from "@ngrx/store";
import {NewItemAction, SaveItemAction} from "../../../ngrx/item/item.action";

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  itemFormGroup!:FormGroup;
  state?:ItemsState;
  readonly ItemsStateEnum=ItemsStateEnum;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,
              private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewItemAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState2;
      if(this.state?.dataState==ItemsStateEnum.NEW){
        this.itemFormGroup=this.fb.group({
          name:["",Validators.required],
          price:["",Validators.required],
          quantity:["",Validators.required],
        });
      }
    })
  }

  onSaveItem() {
    this.submitted=true;
    if(this.itemFormGroup?.invalid)return;
    this.store.dispatch(new SaveItemAction(this.itemFormGroup.value));
  }

  newItem() {
    this.store.dispatch(new NewItemAction({}));
  }

}
