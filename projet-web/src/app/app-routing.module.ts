import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./components/items/items.component";
import {ItemAddComponent} from "./components/items/item-add/item-add.component";
import {ItemEditComponent} from "./components/items/item-edit/item-edit.component";

const routes: Routes = [
  {path:"items", component: ItemsComponent},
  {path:"newItem", component:ItemAddComponent},
  {path:"editItem/:id", component:ItemEditComponent},
  {path:"**", component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
