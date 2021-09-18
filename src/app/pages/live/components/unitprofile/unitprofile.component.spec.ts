import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitprofileComponent } from './unitprofile.component';

describe('UnitprofileComponent', () => {
  let component: UnitprofileComponent;
  let fixture: ComponentFixture<UnitprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
