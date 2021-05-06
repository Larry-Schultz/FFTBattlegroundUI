import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitInfoComponent } from './unitinfo.component';

describe('UnitinfoComponent', () => {
  let component: UnitInfoComponent;
  let fixture: ComponentFixture<UnitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
