import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {UserModel} from "../models/user.model";

@Injectable({providedIn:"root"})
export class CartService {
  host = environment.host + "user/";
  constructor(private http: HttpClient) {
  }

  getAllItems(userID:number):Observable<ItemModel[]>{
    return this.http.get<ItemModel[]>(this.host + userID + "/cart");
  }

  removeItem(userID:number,item:ItemModel):Observable<ItemModel[]>{
    return this.http.get<ItemModel[]>(this.host + userID + "/cart/remove/" + item.id);
  }

  addItem(userID:number,item:ItemModel):Observable<ItemModel>{
    return this.http.get<ItemModel>(this.host + userID + "/cart/add/" + item.id);
  }

  purchaseCart(userID:number):Observable<ItemModel>{
    return this.http.get<ItemModel>(this.host + userID + "/cart/purchase");
  }

  getPrice(userID:number):Observable<number>{
    return this.http.get<number>(this.host + userID + "/cart/price");
  }
}
