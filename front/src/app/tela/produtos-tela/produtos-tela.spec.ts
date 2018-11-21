
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosTelaComponent } from './produtos-tela';

describe('ProdutosTelaComponent', () => {
  let component: ProdutosTelaComponent;
  let fixture: ComponentFixture<ProdutosTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});