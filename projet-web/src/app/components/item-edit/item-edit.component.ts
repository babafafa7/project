import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {


  itemID:number;
  itemFormGroup?:FormGroup;
  public submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private itemService:ItemService,
              private fb:FormBuilder,
              private router:Router) {
    this.itemID=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.itemService.getItem(this.itemID)
      .subscribe(item=>{
        this.itemFormGroup=this.fb.group({
          id:[item.id,Validators.required],
          name:[item.name,Validators.required],
          price:[item.price,Validators.required],
          quantity:[item.quantity,Validators.required],
        })
      });
  }

  onUpdateItem() {
    this.submitted=true;
    if(this.itemFormGroup?.invalid) return;
    this.itemService.putItem(this.itemFormGroup?.value)
      .subscribe(data=>{
        this.router.navigateByUrl("/items").then();
      });
  }
}
