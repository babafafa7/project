import {ItemModel} from "../../model/item.model";
import {Action} from "@ngrx/store";
import {ItemsActions, ItemsActionsTypes} from "./item.action";

export enum ItemsStateEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="NEW",
  UPDATED="UPDATED",
}

export interface ItemsState {
  items : ItemModel[],
  errorMessage:string,
  dataState:ItemsStateEnum,
  currentItem:ItemModel|null,
}

const initState:ItemsState={
  items:[],
  errorMessage:"",
  dataState:ItemsStateEnum.INITIAL,
  currentItem:null,
}

export function itemReducer(state:ItemsState=initState, action:Action): ItemsState {
  switch (action.type) {

    /* Get All Items */

    case ItemsActionsTypes.GET_ALL_ITEMS:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.GET_ALL_ITEMS_SUCCESS:
      return {...state, dataState:ItemsStateEnum.LOADED, items:(<ItemsActions>action).payload}
    case ItemsActionsTypes.GET_ALL_ITEMS_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    /* Get Search Items */

    case ItemsActionsTypes.SEARCH_ITEMS:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.SEARCH_ITEMS_SUCCESS:
      return {...state, dataState:ItemsStateEnum.LOADED, items:(<ItemsActions>action).payload}
    case ItemsActionsTypes.SEARCH_ITEMS_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    /* Delete Item */

    case ItemsActionsTypes.DELETE_ITEM:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.DELETE_ITEM_SUCCESS:
      let p:ItemModel=(<ItemsActions>action).payload;
      let itemsList=[...state.items];
      let index=state.items.indexOf(p);
      itemsList.splice(index,1);
      return {...state, dataState:ItemsStateEnum.LOADED, items:itemsList}
    case ItemsActionsTypes.DELETE_ITEM_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    /* New Item */

    case ItemsActionsTypes.NEW_ITEM:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.NEW_ITEM_SUCCESS:
      return {...state, dataState:ItemsStateEnum.NEW}
    case ItemsActionsTypes.NEW_ITEM_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    /* Save Item */

    case ItemsActionsTypes.SAVE_ITEM:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.SAVE_ITEM_SUCCESS:
      let prods=[...state.items];
      prods.push((<ItemsActions>action).payload);
      return {...state, dataState:ItemsStateEnum.LOADED, items:prods}
    case ItemsActionsTypes.SAVE_ITEM_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    /* Edit Item */

    case ItemsActionsTypes.EDIT_ITEM:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.EDIT_ITEM_SUCCESS:
      return {...state, dataState:ItemsStateEnum.LOADED, currentItem:(<ItemsActions>action).payload}
    case ItemsActionsTypes.EDIT_ITEM_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    /* Update Item */

    case ItemsActionsTypes.UPDATE_ITEM:
      return {...state, dataState:ItemsStateEnum.LOADING}
    case ItemsActionsTypes.UPDATE_ITEM_SUCCESS:
      let updatedItem:ItemModel=(<ItemsActions>action).payload;
      let updatedItems:ItemModel[]=state.items.map(p=>(p.id==updatedItem.id)?updatedItem:p);
      return {...state, dataState:ItemsStateEnum.UPDATED,items:updatedItems}
    case ItemsActionsTypes.UPDATE_ITEM_ERROR:
      return {...state, dataState:ItemsStateEnum.ERROR, errorMessage:(<ItemsActions>action).payload}

    default :
      return {...state}
  }
}
