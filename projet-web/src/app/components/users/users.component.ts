import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {UsersState,UsersStateEnum} from "../../ngrx/user/user.reducer";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersState$?:Observable<UsersState>;
  readonly  UsersStateEnum=UsersStateEnum;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.usersState$=this.store.pipe(
      map((state)=> state.catalogState)
    )
  }
}
