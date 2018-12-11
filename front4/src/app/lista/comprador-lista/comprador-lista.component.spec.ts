
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorListaComponent } from './comprador-lista.component';

describe('CompradorListaComponent', () => {
  let component: CompradorListaComponent;
  let fixture: ComponentFixture<CompradorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});