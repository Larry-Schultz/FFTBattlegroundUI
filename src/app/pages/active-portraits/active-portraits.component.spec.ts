import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePortraitsComponent } from './active-portraits.component';

describe('ActivePortraitsComponent', () => {
  let component: ActivePortraitsComponent;
  let fixture: ComponentFixture<ActivePortraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePortraitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
