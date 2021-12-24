import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";
import {UsersState, UsersStateEnum} from "../../../ngrx/user/user.reducer";
import {NewUserAction, SaveUserAction} from "../../../ngrx/user/user.action";


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userFormGroup!:FormGroup;
  state?:UsersState;
  readonly UsersStateEnum=UsersStateEnum;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,
              private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewUserAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if(this.state?.dataState==UsersStateEnum.NEW){
        this.userFormGroup=this.fb.group({
          surname:["",Validators.required],
          forename:["",Validators.required],
          mail:["",Validators.email],
        });
      }
    })
  }

  onSaveUser() {
    this.submitted=true;
    if(this.userFormGroup?.invalid)return;
    this.store.dispatch(new SaveUserAction(this.userFormGroup.value));
  }

  newUser() {
    this.store.dispatch(new NewUserAction({}));
  }
}
