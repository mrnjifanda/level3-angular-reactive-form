import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentToParentComponent } from './sent-to-parent.component';

describe('SentToParentComponent', () => {
  let component: SentToParentComponent;
  let fixture: ComponentFixture<SentToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentToParentComponent]
    });
    fixture = TestBed.createComponent(SentToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
