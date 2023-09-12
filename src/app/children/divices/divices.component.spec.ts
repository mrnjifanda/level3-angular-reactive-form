import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivicesComponent } from './divices.component';

describe('DivicesComponent', () => {
  let component: DivicesComponent;
  let fixture: ComponentFixture<DivicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivicesComponent]
    });
    fixture = TestBed.createComponent(DivicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
