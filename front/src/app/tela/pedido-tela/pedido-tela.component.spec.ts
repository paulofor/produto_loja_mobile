
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoTelaComponent } from './tela-pedido.component';

describe('PedidoTelaComponent', () => {
  let component: ListaProjetoValorComponent;
  let fixture: ComponentFixture<PedidoTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});