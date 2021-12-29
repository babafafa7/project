import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "../../../../model/item.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {DeleteItemAction} from "../../../../ngrx/item/item.action";

@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.css']
})
export class ItemItemComponent implements OnInit {

  @Input() item?:ItemModel;

  constructor(private store:Store,
              private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(item: ItemModel) {
    this.store.dispatch(new DeleteItemAction(item));
  }

  onEdit(item: ItemModel) {
    this.router.navigateByUrl("/editItem/" + item.id).then();
  }
}
