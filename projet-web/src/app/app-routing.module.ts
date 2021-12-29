import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";
import {ItemsComponent} from "./components/items/items.component";
import {ItemAddComponent} from "./components/items/item-add/item-add.component";
import {ItemEditComponent} from "./components/items/item-edit/item-edit.component";

const routes: Routes = [
  {path:"users", component: UsersComponent},
  {path:"newUser", component:UserAddComponent},
  {path:"editUser/:id", component:UserEditComponent},
  {path:"items", component: ItemsComponent},
  {path:"newItem", component:ItemAddComponent},
  {path:"editItem/:id", component:ItemEditComponent},
  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
