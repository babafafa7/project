import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({catalogState:userReducer}),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
