import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTeste2Component } from './item-teste2.component';

describe('ItemTeste2Component', () => {
  let component: ItemTeste2Component;
  let fixture: ComponentFixture<ItemTeste2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTeste2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTeste2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
