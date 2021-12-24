import {Injectable} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DeleteUserActionError,
  DeleteUserActionSuccess, EditUserActionError, EditUserActionSuccess,
  GetAllUsersActionError,
  GetAllUsersActionSuccess,
  NewUserActionSuccess,
  UsersActions,
  UsersActionsTypes, SaveUserActionError, SaveUserActionSuccess,
  SearchUsersActionError,
  SearchUsersActionSuccess, UpdateUserActionSuccess, UpdateUserActionError
} from "./user.action";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class UserEffects {
  constructor(private usersService:UserService,
              private effectActions:Actions) {
  }

  getAllUsersEffect:Observable<Action>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_USERS),
      mergeMap(()=>{
        return this.usersService.getAllUsers()
          .pipe(
            map((users)=>new GetAllUsersActionSuccess(users)),
            catchError((err) => of(new GetAllUsersActionError(err.message)))
          )
      })
    )
  );
  searchUsersEffect:Observable<UsersActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.SEARCH_USERS),
      mergeMap((action:UsersActions)=>{
        return this.usersService.searchUsers(action.payload)
          .pipe(
            map((users)=>new SearchUsersActionSuccess(users)),
            catchError((err) => of(new SearchUsersActionError(err.message)))
          )
      })
    )
  );

  deleteUserEffect:Observable<UsersActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.DELETE_USER),
      mergeMap((action:UsersActions)=>{
        return this.usersService.deleteUser(action.payload.id)
          .pipe(
            map(()=>new DeleteUserActionSuccess(action.payload)),
            catchError((err) => of(new DeleteUserActionError(err.message)))
          )
      })
    )
  );

  newUserEffect:Observable<UsersActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.NEW_USER),
      map(()=>{
        return new NewUserActionSuccess({});
      })
    )
  );

  saveUserEffect:Observable<UsersActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.SAVE_USER),
      mergeMap((action:UsersActions)=>{
        return this.usersService.save(action.payload)
          .pipe(
            map((user)=>new SaveUserActionSuccess(user)),
            catchError((err) => of(new SaveUserActionError(err.message)))
          )
      })
    )
  );

  editUserEffect:Observable<UsersActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.EDIT_USER),
      mergeMap((action:UsersActions)=>{
        return this.usersService.getUser(action.payload)
          .pipe(
            map((user)=>new EditUserActionSuccess(user)),
            catchError((err) => of(new EditUserActionError(err.message)))
          )
      })
    )
  );

  updateUserEffect:Observable<UsersActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.UPDATE_USER),
      mergeMap((action:UsersActions)=>{
        return this.usersService.updateUser(action.payload)
          .pipe(
            map((user)=>new UpdateUserActionSuccess(user)),
            catchError((err) => of(new UpdateUserActionError(err.message)))
          )
      })
    )
  );
}
