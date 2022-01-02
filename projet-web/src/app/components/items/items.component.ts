import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {AppDataState, DataStateEnum} from "../../states/data.state";
import {Router} from "@angular/router";
import {catchError, map, startWith} from "rxjs/operators";
import {ItemModel} from "../../models/item.model";
import {ItemService} from "../../services/item.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items$:Observable<AppDataState<ItemModel[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  user!:number;
  shopping = false;

  constructor(private itemService:ItemService,
              private cartService:CartService,
              private router:Router) { }

  ngOnInit(): void {
    if(this.router.url.startsWith("/shopping")) {
      this.shopping = true;
      this.user = parseInt(this.router.url.split("/")[3]);
    }
    this.onGetAllItems();
  }

  onGetAllItems() {
    this.items$= this.itemService.getAllItems().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSearch(dataForm: any) {
    this.items$= this.itemService.searchItems(dataForm.keyword).pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onDelete(i: ItemModel) {
    this.itemService.deleteItem(i)
      .subscribe(() =>
        this.onGetAllItems()
      );
  }

  onNewItem() {
    this.router.navigateByUrl("/newItem").then();
  }

  onEdit(i: ItemModel) {
    this.router.navigateByUrl("/editItem/"+i.id).then();
  }

  onAddToCart(i:ItemModel) {
    this.cartService.addItem(this.user,i)
      .subscribe(()=>
        this.onGetAllItems()
        );
  }

}
