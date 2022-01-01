import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {AppDataState, DataStateEnum} from "../../states/data.state";
import {ItemModel} from "../../models/item.model";
import {Router} from "@angular/router";
import {catchError, map, startWith} from "rxjs/operators";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items$:Observable<AppDataState<ItemModel[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  user!:number;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.user = parseInt(this.router.url.split("/")[2]);
    this.onGetAllItems();
  }

  onGetAllItems() {
    this.items$= this.cartService.getAllItems(this.user).pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onRemove(item: ItemModel) {
    this.cartService.removeItem(this.user,item)
      .subscribe(() =>
        this.onGetAllItems()
      );
  }

  onPurchase() {
     this.cartService.getPrice(this.user)
       .subscribe(data => {
         let text = "You will purchase for " + data + "$";
         if(confirm(text)) {
           this.cartService.purchaseCart(this.user)
             .subscribe(() => {
               alert("Purchase ok");
               this.onGetAllItems();
             });
         }
       });
  }

}
