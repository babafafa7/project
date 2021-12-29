import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
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
    StoreModule.forRoot({catalogState2:itemReducer}),
    EffectsModule.forRoot([ItemEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
