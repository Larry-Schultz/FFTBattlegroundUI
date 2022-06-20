import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustadioDataComponent } from './mustadiodata.component';

describe('MustadiodataComponent', () => {
  let component: MustadioDataComponent;
  let fixture: ComponentFixture<MustadioDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustadioDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MustadioDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
