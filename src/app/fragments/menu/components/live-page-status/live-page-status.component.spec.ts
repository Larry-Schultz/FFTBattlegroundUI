import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePageStatusComponent } from './live-page-status.component';

describe('LivePageStatusComponent', () => {
  let component: LivePageStatusComponent;
  let fixture: ComponentFixture<LivePageStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePageStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePageStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
