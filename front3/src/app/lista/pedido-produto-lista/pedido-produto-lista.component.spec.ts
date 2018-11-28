
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProdutoListaComponent } from './pedido-produto-lista.component';

describe('PedidoProdutoListaComponent', () => {
  let component: PedidoProdutoListaComponent;
  let fixture: ComponentFixture<PedidoProdutoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoProdutoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProdutoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});