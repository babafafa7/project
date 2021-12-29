import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "../../../../model/item.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {DeleteItemAction} from "../../../../ngrx/item/item.action";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.css']
})
export class ItemItemComponent implements OnInit {

  @Input() item?:ItemModel;
  shopping = false;
  userId = "";

  constructor(private store:Store,
              private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
    if (this.router.url.startsWith('/shopping')){
      this.shopping = true;
      this.userId = this.router.url.substr(10, this.router.url.length);
    }
  }

  onDelete(item: ItemModel) {
    this.store.dispatch(new DeleteItemAction(item));
  }

  onEdit(item: ItemModel) {
    this.router.navigateByUrl("/editItem/" + item.id).then();
  }

  onShopping(item: ItemModel) {
    // @ts-ignore
    this.http.post("http://localhost:8080/user/" + this.userId + "/cart/add/" + item.id);
    this.router.navigateByUrl("/shopping/" + this.userId).then();
  }
}
