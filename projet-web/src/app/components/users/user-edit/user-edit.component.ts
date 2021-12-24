import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {UsersState,UsersStateEnum} from "../../../ngrx/user/user.reducer";
import {EditUserAction, UpdateUserAction} from "../../../ngrx/user/user.action";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId:number;
  state?:UsersState;
  userFormGroup!:FormGroup;
  readonly UsersStateEnum=UsersStateEnum;
  submitted:boolean=false;
  formBuilt: boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
              private fb:FormBuilder,
              private store:Store<any>,
              private router:Router
              ) {
    this.userId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditUserAction(this.userId));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if(this.state?.dataState==UsersStateEnum.LOADED){
        if(this.state.currentUser!=null){
          this.userFormGroup=this.fb.group({
            id:[this.state.currentUser.id],
           surname:[this.state.currentUser.surname,Validators.required],
            forename:[this.state.currentUser.forename,Validators.required],
            mail:[this.state.currentUser.mail,Validators.email],
          })
          this.formBuilt=true;
        }
      }
    })
  }

  onUpdateUser() {
    this.submitted=true;
    if(this.userFormGroup.invalid)return;
    this.store.dispatch(new UpdateUserAction(this.userFormGroup.value));
  }

  okUpdated() {
    this.router.navigateByUrl("/users").then();
  }
}
