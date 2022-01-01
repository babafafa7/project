import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {AppDataState, DataStateEnum} from "../../states/data.state";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {catchError, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$:Observable<AppDataState<UserModel[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.onGetAllUsers();
  }

  onGetAllUsers() {
    this.users$= this.userService.getAllUsers().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSearch(dataForm: any) {
    this.users$= this.userService.searchUsers(dataForm.keyword).pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onDelete(u: UserModel) {
    this.userService.deleteUser(u)
      .subscribe(() =>
      this.onGetAllUsers()
      );
  }

  onNewUser() {
    this.router.navigateByUrl("/newUser").then();
  }

  onEdit(u: UserModel) {
    this.router.navigateByUrl("/editUser/"+u.id).then();
  }

  onCart(u:UserModel) {
    this.router.navigateByUrl("/user/" + u.id + "/cart").then();
  }

  onShopping(u:UserModel) {
    this.router.navigateByUrl("shopping/user/" + u.id).then();
  }
}
