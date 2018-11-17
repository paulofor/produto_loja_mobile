
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidoProdutoComponent } from './lista-pedido-produto.component';

describe('ListaPedidoProdutoComponent', () => {
  let component: ListaProjetoValorComponent;
  let fixture: ComponentFixture<ListaPedidoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});