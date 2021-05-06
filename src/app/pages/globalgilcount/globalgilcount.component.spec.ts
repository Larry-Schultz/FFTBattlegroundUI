import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalGilCountComponent } from './globalgilcount.component';

describe('GlobalgilcountComponent', () => {
  let component: GlobalGilCountComponent;
  let fixture: ComponentFixture<GlobalGilCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalGilCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGilCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
