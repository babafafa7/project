import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserAddComponent} from "./components/user-add/user-add.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {ItemsComponent} from "./components/items/items.component";
import {ItemAddComponent} from "./components/item-add/item-add.component";
import {ItemEditComponent} from "./components/item-edit/item-edit.component";
import {CartComponent} from "./components/cart/cart.component";
import {ShoppingComponent} from "./components/shopping/shopping.component";

const routes: Routes = [
  {path: "users", component:UsersComponent},
  {path:"newUser", component:UserAddComponent},
  {path:"editUser/:id",component:UserEditComponent},
  {path: "items", component:ItemsComponent},
  {path:"newItem", component:ItemAddComponent},
  {path:"editItem/:id",component:ItemEditComponent},
  {path:"user/:id/cart",component:CartComponent},
  {path:"shopping/user/:id",component:ShoppingComponent},
  {path: "**", component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
