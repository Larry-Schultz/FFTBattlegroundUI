import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationcellComponent } from './foundationcell.component';

describe('FoundationcellComponent', () => {
  let component: FoundationcellComponent;
  let fixture: ComponentFixture<FoundationcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
