import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AscensionComponent } from './ascension.component';

describe('AscensionComponent', () => {
  let component: AscensionComponent;
  let fixture: ComponentFixture<AscensionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AscensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
