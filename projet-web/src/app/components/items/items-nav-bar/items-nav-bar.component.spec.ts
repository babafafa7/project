import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNavBarComponent } from './items-nav-bar.component';

describe('ItemsNavBarComponent', () => {
  let component: ItemsNavBarComponent;
  let fixture: ComponentFixture<ItemsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
