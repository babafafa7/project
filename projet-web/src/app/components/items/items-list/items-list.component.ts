import {Component, Input, OnInit} from '@angular/core';
import {ItemsState} from "../../../ngrx/item/item.reducer";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() state?:ItemsState;

  constructor() { }

  ngOnInit(): void {
  }

}
