import { Component, OnInit } from '@angular/core';
import {ItemsState,ItemsStateEnum} from "../../../ngrx/item/item.reducer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {EditItemAction, UpdateItemAction} from "../../../ngrx/item/item.action";

@Component({
  selector: 'app-items-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  itemId:number;
  state?:ItemsState;
  itemFormGroup!:FormGroup;
  readonly ItemsStateEnum=ItemsStateEnum;
  submitted:boolean=false;
  formBuilt: boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private fb:FormBuilder,
              private store:Store<any>,
              private router:Router
  ) {
    this.itemId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditItemAction(this.itemId));
    this.store.subscribe(state=>{
      this.state=state.catalogState2;
      if(this.state?.dataState==ItemsStateEnum.LOADED){
        if(this.state.currentItem!=null){
          this.itemFormGroup=this.fb.group({
            id:[this.state.currentItem.id],
            name:[this.state.currentItem.name,Validators.required],
            price:[this.state.currentItem.price,Validators.required],
            quantity:[this.state.currentItem.quantity,Validators.required],
          })
          this.formBuilt=true;
        }
      }
    })
  }

  onUpdateItem() {
    this.submitted=true;
    if(this.itemFormGroup.invalid)return;
    this.store.dispatch(new UpdateItemAction(this.itemFormGroup.value));
  }

  okUpdated() {
    this.router.navigateByUrl("/items").then();
  }

}
