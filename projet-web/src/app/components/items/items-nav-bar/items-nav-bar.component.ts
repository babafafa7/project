import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetAllItemsAction, SearchItemsAction} from "../../../ngrx/item/item.action";

@Component({
  selector: 'app-items-nav-bar',
  templateUrl: './items-nav-bar.component.html',
  styleUrls: ['./items-nav-bar.component.css']
})
export class ItemsNavBarComponent implements OnInit {

  constructor(private store:Store<any>,
              private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllItems() {
    this.store.dispatch(new GetAllItemsAction({}));
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchItemsAction(dataForm.keyword));
  }

  onNewItem() {
    this.router.navigateByUrl("/newItem").then();
  }

}
