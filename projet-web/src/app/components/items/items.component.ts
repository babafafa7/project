import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ItemsState,ItemsStateEnum} from "../../ngrx/item/item.reducer";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsState$?:Observable<ItemsState>;
  readonly ItemsStateEnum=ItemsStateEnum;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.itemsState$=this.store.pipe(
      map((state)=> state.catalogState2)
    )
  }

}
