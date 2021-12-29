import {Injectable} from "@angular/core";
import {ItemService} from "../../services/item.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DeleteItemActionError,
  DeleteItemActionSuccess, EditItemActionError, EditItemActionSuccess,
  GetAllItemsActionError,
  GetAllItemsActionSuccess,
  NewItemActionSuccess,
  ItemsActions,
  ItemsActionsTypes, SaveItemActionError, SaveItemActionSuccess,
  SearchItemsActionError,
  SearchItemsActionSuccess, UpdateItemActionSuccess, UpdateItemActionError
} from "./item.action";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ItemEffects {
  constructor(private itemsService:ItemService,
              private effectActions:Actions) {
  }

  getAllItemsEffect:Observable<Action>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.GET_ALL_ITEMS),
      mergeMap(()=>{
        return this.itemsService.getAllItems()
          .pipe(
            map((items)=>new GetAllItemsActionSuccess(items)),
            catchError((err) => of(new GetAllItemsActionError(err.message)))
          )
      })
    )
  );
  searchItemsEffect:Observable<ItemsActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.SEARCH_ITEMS),
      mergeMap((action:ItemsActions)=>{
        return this.itemsService.searchItems(action.payload)
          .pipe(
            map((items)=>new SearchItemsActionSuccess(items)),
            catchError((err) => of(new SearchItemsActionError(err.message)))
          )
      })
    )
  );

  deleteItemEffect:Observable<ItemsActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.DELETE_ITEM),
      mergeMap((action:ItemsActions)=>{
        return this.itemsService.deleteItem(action.payload.id)
          .pipe(
            map(()=>new DeleteItemActionSuccess(action.payload)),
            catchError((err) => of(new DeleteItemActionError(err.message)))
          )
      })
    )
  );

  newItemEffect:Observable<ItemsActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.NEW_ITEM),
      map(()=>{
        return new NewItemActionSuccess({});
      })
    )
  );

  saveItemEffect:Observable<ItemsActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.SAVE_ITEM),
      mergeMap((action:ItemsActions)=>{
        return this.itemsService.save(action.payload)
          .pipe(
            map((item)=>new SaveItemActionSuccess(item)),
            catchError((err) => of(new SaveItemActionError(err.message)))
          )
      })
    )
  );

  editItemEffect:Observable<ItemsActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.EDIT_ITEM),
      mergeMap((action:ItemsActions)=>{
        return this.itemsService.getItem(action.payload)
          .pipe(
            map((item)=>new EditItemActionSuccess(item)),
            catchError((err) => of(new EditItemActionError(err.message)))
          )
      })
    )
  );

  updateItemEffect:Observable<ItemsActions>=createEffect(() =>
    this.effectActions.pipe(
      ofType(ItemsActionsTypes.UPDATE_ITEM),
      mergeMap((action:ItemsActions)=>{
        return this.itemsService.updateItem(action.payload)
          .pipe(
            map((item)=>new UpdateItemActionSuccess(item)),
            catchError((err) => of(new UpdateItemActionError(err.message)))
          )
      })
    )
  );
}
