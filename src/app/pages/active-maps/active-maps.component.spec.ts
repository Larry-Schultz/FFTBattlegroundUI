import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMapsComponent } from './active-maps.component';

describe('ActiveMapsComponent', () => {
  let component: ActiveMapsComponent;
  let fixture: ComponentFixture<ActiveMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
