import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ItemModel} from "../model/item.model";

@Injectable({providedIn: "root"})

export class ItemService {

  private host = environment.host+"/item/";

  constructor(private http:HttpClient) {
  }
  getAllItems():Observable<ItemModel[]>{
    return this.http.get<ItemModel[]>(this.host+"all");
  }

  searchItems(keyword:string):Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(this.host+"search?search="+keyword);
  }

  deleteItem(id:number):Observable<void> {
    return this.http.delete<void>(this.host+id);
  }

  save(item:ItemModel):Observable<ItemModel> {
    return this.http.post<ItemModel>(this.host+"add", item);
  }

  getItem(id:number):Observable<ItemModel>{
    return this.http.get<ItemModel>(this.host+id);
  }

  updateItem(item:ItemModel):Observable<ItemModel>{
    return this.http.put<ItemModel>(this.host+item.id+"/update",item);
  }
}
