import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {Router} from "@angular/router";
import {GetAllUsersAction, SearchUsersAction} from "../../../ngrx/user/user.action";

@Component({
  selector: 'app-users-nav-bar',
  templateUrl: './users-nav-bar.component.html',
  styleUrls: ['./users-nav-bar.component.css']
})
export class UsersNavBarComponent implements OnInit {

  constructor(private store:Store<any>,
              private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllUsers() {
    this.store.dispatch(new GetAllUsersAction({}));
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchUsersAction(dataForm.keyword));
  }

  onNewUser() {
    this.router.navigateByUrl("/newUser").then();
  }
}
