import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarToggleComponent } from './side-bar-toggle.component';

describe('SideBarToggleComponent', () => {
  let component: SideBarToggleComponent;
  let fixture: ComponentFixture<SideBarToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarToggleComponent]
    });
    fixture = TestBed.createComponent(SideBarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
