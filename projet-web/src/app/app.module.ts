import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreFeatureModule, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./ngrx/user/user.effects";
import {userReducer} from "./ngrx/user/user.reducer";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {UsersComponent} from "./components/users/users.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {UsersNavBarComponent} from "./components/users/users-nav-bar/users-nav-bar.component";
import {UsersListComponent} from "./components/users/users-list/users-list.component";
import {UserItemComponent} from "./components/users/users-list/user-item/user-item.component";
import { ItemsComponent } from './components/items/items.component';
import { ItemsNavBarComponent } from './components/items/items-nav-bar/items-nav-bar.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { ItemEditComponent } from './components/items/item-edit/item-edit.component';
import { ItemAddComponent } from './components/items/item-add/item-add.component';
import { ItemItemComponent } from './components/items/items-list/item-item/item-item.component';
import {itemReducer} from "./ngrx/item/item.reducer";
import {ItemEffects} from "./ngrx/item/item.effects";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    HomeComponent,
    UserAddComponent,
    UserEditComponent,
    UsersNavBarComponent,
    UsersListComponent,
    UserItemComponent,
    ItemsComponent,
    ItemsNavBarComponent,
    ItemsListComponent,
    ItemEditComponent,
    ItemAddComponent,
    ItemItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({catalogState:userReducer,catalogState2:itemReducer}),
    EffectsModule.forRoot([UserEffects,ItemEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
