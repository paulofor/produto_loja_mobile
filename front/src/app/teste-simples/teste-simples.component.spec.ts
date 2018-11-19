import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSimplesComponent } from './teste-simples.component';

describe('TesteSimplesComponent', () => {
  let component: TesteSimplesComponent;
  let fixture: ComponentFixture<TesteSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
