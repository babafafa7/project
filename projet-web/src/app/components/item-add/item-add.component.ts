import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../../services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  itemFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,
              private itemService:ItemService,
              private router:Router) { }

  ngOnInit(): void {
    this.itemFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
    });
  }

  onSaveItem() {
    this.submitted=true;
    if(this.itemFormGroup?.invalid) return;
    this.itemService.postItem(this.itemFormGroup?.value)
      .subscribe(data=>{
        this.router.navigateByUrl("/items").then();
      });
  }

}
