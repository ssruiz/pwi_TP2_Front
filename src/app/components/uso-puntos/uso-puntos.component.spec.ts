import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoPuntosComponent } from './uso-puntos.component';

describe('UsoPuntosComponent', () => {
  let component: UsoPuntosComponent;
  let fixture: ComponentFixture<UsoPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
