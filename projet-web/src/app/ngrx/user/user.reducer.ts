import {UserModel} from "../../model/user.model";
import {Action} from "@ngrx/store";
import {UsersActions, UsersActionsTypes} from "./user.action";

export enum UsersStateEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="NEW",
  UPDATED="UPDATED",
}

export interface UsersState {
  users : UserModel[],
  errorMessage:string,
  dataState:UsersStateEnum,
  currentUser:UserModel|null,
}

const initState:UsersState={
  users:[],
  errorMessage:"",
  dataState:UsersStateEnum.INITIAL,
  currentUser:null,
}

export function userReducer(state:UsersState=initState, action:Action): UsersState {
  switch (action.type) {

    /* Get All Users */

    case UsersActionsTypes.GET_ALL_USERS:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.GET_ALL_USERS_SUCCESS:
      return {...state, dataState:UsersStateEnum.LOADED, users:(<UsersActions>action).payload}
    case UsersActionsTypes.GET_ALL_USERS_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    /* Get Search Users */

    case UsersActionsTypes.SEARCH_USERS:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.SEARCH_USERS_SUCCESS:
      return {...state, dataState:UsersStateEnum.LOADED, users:(<UsersActions>action).payload}
    case UsersActionsTypes.SEARCH_USERS_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    /* Delete User */

    case UsersActionsTypes.DELETE_USER:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.DELETE_USER_SUCCESS:
      let p:UserModel=(<UsersActions>action).payload;
      let usersList=[...state.users];
      let index=state.users.indexOf(p);
      usersList.splice(index,1);
      return {...state, dataState:UsersStateEnum.LOADED, users:usersList}
    case UsersActionsTypes.DELETE_USER_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    /* New User */

    case UsersActionsTypes.NEW_USER:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.NEW_USER_SUCCESS:
      return {...state, dataState:UsersStateEnum.NEW}
    case UsersActionsTypes.NEW_USER_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    /* Save User */

    case UsersActionsTypes.SAVE_USER:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.SAVE_USER_SUCCESS:
      let prods=[...state.users];
      prods.push((<UsersActions>action).payload);
      return {...state, dataState:UsersStateEnum.LOADED, users:prods}
    case UsersActionsTypes.SAVE_USER_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    /* Edit User */

    case UsersActionsTypes.EDIT_USER:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.EDIT_USER_SUCCESS:
      return {...state, dataState:UsersStateEnum.LOADED, currentUser:(<UsersActions>action).payload}
    case UsersActionsTypes.EDIT_USER_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    /* Update User */

    case UsersActionsTypes.UPDATE_USER:
      return {...state, dataState:UsersStateEnum.LOADING}
    case UsersActionsTypes.UPDATE_USER_SUCCESS:
      let updatedUser:UserModel=(<UsersActions>action).payload;
      let updatedUsers:UserModel[]=state.users.map(p=>(p.id==updatedUser.id)?updatedUser:p);
      return {...state, dataState:UsersStateEnum.UPDATED,users:updatedUsers}
    case UsersActionsTypes.UPDATE_USER_ERROR:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}

    default :
      return {...state}
  }
}
