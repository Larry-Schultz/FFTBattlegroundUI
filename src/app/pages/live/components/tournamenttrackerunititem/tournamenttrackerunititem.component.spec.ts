import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamenttrackerunititemComponent } from './tournamenttrackerunititem.component';

describe('TournamenttrackerunititemComponent', () => {
  let component: TournamenttrackerunititemComponent;
  let fixture: ComponentFixture<TournamenttrackerunititemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamenttrackerunititemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamenttrackerunititemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
