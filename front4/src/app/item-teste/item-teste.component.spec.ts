import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTesteComponent } from './item-teste.component';

describe('ItemTesteComponent', () => {
  let component: ItemTesteComponent;
  let fixture: ComponentFixture<ItemTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
