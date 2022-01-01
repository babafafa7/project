import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      forename:["",Validators.required],
      surname:["",Validators.required],
      mail:["",Validators.email],
    });
  }

  onSaveUser() {
    this.submitted=true;
    if(this.userFormGroup?.invalid) return;
    this.userService.postUser(this.userFormGroup?.value)
      .subscribe(data=>{
       this.router.navigateByUrl("/users").then();
      });
  }

}
