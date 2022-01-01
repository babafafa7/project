import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ItemModel} from '../models/item.model';

@Injectable({providedIn:"root"})
export class ItemService {
  host = environment.host + "item/";
  constructor(private http: HttpClient) {
  }

  getAllItems():Observable<ItemModel[]>{
    return this.http.get<ItemModel[]>(this.host+"all");
  }

  getItem(itemID:number):Observable<ItemModel>{
    return this.http.get<ItemModel>(this.host + itemID);
  }

  postItem(item:ItemModel):Observable<ItemModel>{
    return this.http.post<ItemModel>(this.host + "add",item);
  }

  putItem(item:ItemModel):Observable<ItemModel>{
    return this.http.put<ItemModel>(this.host + item.id + "/update", item);
  }

  deleteItem(item:ItemModel):Observable<String>{
    return this.http.delete<String>(this.host + item.id);
  }

  searchItems(search:string):Observable<ItemModel[]>{
    return this.http.get<ItemModel[]>(this.host + "search?search=" + search)
  }

}
