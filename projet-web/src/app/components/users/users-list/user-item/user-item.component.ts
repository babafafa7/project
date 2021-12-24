import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {UserModel} from "../../../../model/user.model";
import {DeleteUserAction} from "../../../../ngrx/user/user.action";


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user?:UserModel;

  constructor(private store:Store,
              private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(user: UserModel) {
    this.store.dispatch(new DeleteUserAction(user));
  }

  onEdit(user: UserModel) {
    this.router.navigateByUrl("/editUser/" + user.id).then();
  }
}
