import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userID:number;
  userFormGroup?:FormGroup;
  public submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private userService:UserService,
              private fb:FormBuilder,
              private router:Router) {
    this.userID=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.userService.getUser(this.userID)
      .subscribe(user=>{
        this.userFormGroup=this.fb.group({
          id:[user.id,Validators.required],
          forename:[user.forename,Validators.required],
          surname:[user.surname,Validators.required],
          mail:[user.mail,Validators.email],
        })
      });
  }

  onUpdateUser() {
    this.userService.putUser(this.userFormGroup?.value)
      .subscribe(data=>{
        this.router.navigateByUrl("/users").then();
      });
  }

}
