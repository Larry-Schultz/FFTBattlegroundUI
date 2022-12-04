import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePageOptionsComponent } from './live-page-options.component';

describe('LivePageOptionsComponent', () => {
  let component: LivePageOptionsComponent;
  let fixture: ComponentFixture<LivePageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePageOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
