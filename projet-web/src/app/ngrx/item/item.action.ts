import {Action} from "@ngrx/store";
import {ItemModel} from "../../model/item.model";



export enum ItemsActionsTypes {
  /* Get All Items */
  GET_ALL_ITEMS="[Items] Get All items",
  GET_ALL_ITEMS_SUCCESS="[Items] Get All items Success",
  GET_ALL_ITEMS_ERROR="[Items] Get All items Error",

  /* Get Search Items */
  SEARCH_ITEMS="[Items] Get Search items",
  SEARCH_ITEMS_SUCCESS="[Items] Get Search items Success",
  SEARCH_ITEMS_ERROR="[Items] Get Search items Error",

  /* Delete Item */
  DELETE_ITEM="[Item] Delete item",
  DELETE_ITEM_SUCCESS="[Item] Delete item Success",
  DELETE_ITEM_ERROR="[Item] Delete item Error",

  /* New Item */
  NEW_ITEM="[Item] New item",
  NEW_ITEM_SUCCESS="[Item] New item Success",
  NEW_ITEM_ERROR="[Item] New item Error",

  /* Save Item */
  SAVE_ITEM="[Item] Save item",
  SAVE_ITEM_SUCCESS="[Item] Save item Success",
  SAVE_ITEM_ERROR="[Item] Save item Error",

  /* Edit Item */
  EDIT_ITEM="[Item] Edit item",
  EDIT_ITEM_SUCCESS="[Item] Edit item Success",
  EDIT_ITEM_ERROR="[Item] Edit item Error",

  /* Update Item */
  UPDATE_ITEM="[Item] Update item",
  UPDATE_ITEM_SUCCESS="[Item] Update item Success",
  UPDATE_ITEM_ERROR="[Item] Update item Error",

}

/* Get All Items */

export class GetAllItemsAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.GET_ALL_ITEMS;
  constructor(public payload :any) {
  }
}

export class GetAllItemsActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.GET_ALL_ITEMS_SUCCESS;
  constructor(public payload :ItemModel[]) {
  }
}

export class GetAllItemsActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.GET_ALL_ITEMS_ERROR;
  constructor(public payload :string) {
  }
}

/* Get Search Items */

export class SearchItemsAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.SEARCH_ITEMS;
  constructor(public payload :any) {
  }
}

export class SearchItemsActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.SEARCH_ITEMS_SUCCESS;
  constructor(public payload :ItemModel[]) {
  }
}

export class SearchItemsActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.SEARCH_ITEMS_ERROR;
  constructor(public payload :string) {
  }
}

/* Delete Item */

export class DeleteItemAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.DELETE_ITEM;
  constructor(public payload :ItemModel) {
  }
}

export class DeleteItemActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.DELETE_ITEM_SUCCESS;
  constructor(public payload :ItemModel) {
  }
}

export class DeleteItemActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.DELETE_ITEM_ERROR;
  constructor(public payload :string) {
  }
}

/* New Item */

export class NewItemAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.NEW_ITEM;
  constructor(public payload :any) {
  }
}

export class NewItemActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.NEW_ITEM_SUCCESS;
  constructor(public payload :any) {
  }
}

export class NewItemActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.NEW_ITEM_ERROR;
  constructor(public payload :string) {
  }
}

/* Save Item */

export class SaveItemAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.SAVE_ITEM;
  constructor(public payload :ItemModel) {
  }
}

export class SaveItemActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.SAVE_ITEM_SUCCESS;
  constructor(public payload :ItemModel) {
  }
}

export class SaveItemActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.SAVE_ITEM_ERROR;
  constructor(public payload :string) {
  }
}

/* Edit Item */

export class EditItemAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.EDIT_ITEM;
  constructor(public payload :number) {
  }
}

export class EditItemActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.EDIT_ITEM_SUCCESS;
  constructor(public payload :ItemModel) {
  }
}

export class EditItemActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.EDIT_ITEM_ERROR;
  constructor(public payload :string) {
  }
}

/* Update Item */

export class UpdateItemAction implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.UPDATE_ITEM;
  constructor(public payload :ItemModel) {
  }
}

export class UpdateItemActionSuccess implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.UPDATE_ITEM_SUCCESS;
  constructor(public payload :ItemModel) {
  }
}

export class UpdateItemActionError implements Action {
  type: ItemsActionsTypes=ItemsActionsTypes.UPDATE_ITEM_ERROR;
  constructor(public payload :string) {
  }
}


export type ItemsActions=
  GetAllItemsAction | GetAllItemsActionSuccess | GetAllItemsActionError
  | SearchItemsAction | SearchItemsActionSuccess | SearchItemsActionError
  | DeleteItemAction | DeleteItemActionSuccess | DeleteItemActionError
  | NewItemAction | NewItemActionSuccess | NewItemActionError
  | SaveItemAction | SaveItemActionSuccess | SaveItemActionError
  | EditItemAction | EditItemActionSuccess | EditItemActionError
  | UpdateItemAction | UpdateItemActionSuccess | UpdateItemActionError
  ;
