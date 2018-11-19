import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoNovoComponent } from './pedido-novo.component';

describe('PedidoNovoComponent', () => {
  let component: PedidoNovoComponent;
  let fixture: ComponentFixture<PedidoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
