import {Action} from "@ngrx/store";
import {UserModel} from "../../model/user.model";


export enum UsersActionsTypes {
  /* Get All Users */
  GET_ALL_USERS="[Users] Get All users",
  GET_ALL_USERS_SUCCESS="[Users] Get All users Success",
  GET_ALL_USERS_ERROR="[Users] Get All users Error",

  /* Get Search Users */
  SEARCH_USERS="[Users] Get Search users",
  SEARCH_USERS_SUCCESS="[Users] Get Search users Success",
  SEARCH_USERS_ERROR="[Users] Get Search users Error",

  /* Delete User */
  DELETE_USER="[User] Delete user",
  DELETE_USER_SUCCESS="[User] Delete user Success",
  DELETE_USER_ERROR="[User] Delete user Error",

  /* New User */
  NEW_USER="[User] New user",
  NEW_USER_SUCCESS="[User] New user Success",
  NEW_USER_ERROR="[User] New user Error",

  /* Save User */
  SAVE_USER="[User] Save user",
  SAVE_USER_SUCCESS="[User] Save user Success",
  SAVE_USER_ERROR="[User] Save user Error",

  /* Edit User */
  EDIT_USER="[User] Edit user",
  EDIT_USER_SUCCESS="[User] Edit user Success",
  EDIT_USER_ERROR="[User] Edit user Error",

  /* Update User */
  UPDATE_USER="[User] Update user",
  UPDATE_USER_SUCCESS="[User] Update user Success",
  UPDATE_USER_ERROR="[User] Update user Error",

}

/* Get All Users */

export class GetAllUsersAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.GET_ALL_USERS;
  constructor(public payload :any) {
  }
}

export class GetAllUsersActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.GET_ALL_USERS_SUCCESS;
  constructor(public payload :UserModel[]) {
  }
}

export class GetAllUsersActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.GET_ALL_USERS_ERROR;
  constructor(public payload :string) {
  }
}

/* Get Search Users */

export class SearchUsersAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.SEARCH_USERS;
  constructor(public payload :any) {
  }
}

export class SearchUsersActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.SEARCH_USERS_SUCCESS;
  constructor(public payload :UserModel[]) {
  }
}

export class SearchUsersActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.SEARCH_USERS_ERROR;
  constructor(public payload :string) {
  }
}

/* Delete User */

export class DeleteUserAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.DELETE_USER;
  constructor(public payload :UserModel) {
  }
}

export class DeleteUserActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.DELETE_USER_SUCCESS;
  constructor(public payload :UserModel) {
  }
}

export class DeleteUserActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.DELETE_USER_ERROR;
  constructor(public payload :string) {
  }
}

/* New User */

export class NewUserAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.NEW_USER;
  constructor(public payload :any) {
  }
}

export class NewUserActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.NEW_USER_SUCCESS;
  constructor(public payload :any) {
  }
}

export class NewUserActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.NEW_USER_ERROR;
  constructor(public payload :string) {
  }
}

/* Save User */

export class SaveUserAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.SAVE_USER;
  constructor(public payload :UserModel) {
  }
}

export class SaveUserActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.SAVE_USER_SUCCESS;
  constructor(public payload :UserModel) {
  }
}

export class SaveUserActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.SAVE_USER_ERROR;
  constructor(public payload :string) {
  }
}

/* Edit User */

export class EditUserAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.EDIT_USER;
  constructor(public payload :number) {
  }
}

export class EditUserActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.EDIT_USER_SUCCESS;
  constructor(public payload :UserModel) {
  }
}

export class EditUserActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.EDIT_USER_ERROR;
  constructor(public payload :string) {
  }
}

/* Update User */

export class UpdateUserAction implements Action {
  type: UsersActionsTypes=UsersActionsTypes.UPDATE_USER;
  constructor(public payload :UserModel) {
  }
}

export class UpdateUserActionSuccess implements Action {
  type: UsersActionsTypes=UsersActionsTypes.UPDATE_USER_SUCCESS;
  constructor(public payload :UserModel) {
  }
}

export class UpdateUserActionError implements Action {
  type: UsersActionsTypes=UsersActionsTypes.UPDATE_USER_ERROR;
  constructor(public payload :string) {
  }
}


export type UsersActions=
  GetAllUsersAction | GetAllUsersActionSuccess | GetAllUsersActionError
  | SearchUsersAction | SearchUsersActionSuccess | SearchUsersActionError
  | DeleteUserAction | DeleteUserActionSuccess | DeleteUserActionError
  | NewUserAction | NewUserActionSuccess | NewUserActionError
  | SaveUserAction | SaveUserActionSuccess | SaveUserActionError
  | EditUserAction | EditUserActionSuccess | EditUserActionError
  | UpdateUserAction | UpdateUserActionSuccess | UpdateUserActionError
  ;
