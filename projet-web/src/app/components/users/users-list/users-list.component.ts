import {Component, Input, OnInit} from '@angular/core';
import {UsersState} from "../../../ngrx/user/user.reducer";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() state?:UsersState;

  constructor() { }

  ngOnInit(): void {
  }
}
