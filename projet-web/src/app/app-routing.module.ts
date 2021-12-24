import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";

const routes: Routes = [
  {path:"users", component: UsersComponent},
  {path:"newUser", component:UserAddComponent},
  {path:"editUser/:id", component:UserEditComponent},
  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
