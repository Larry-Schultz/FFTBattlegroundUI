import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotxmlComponent } from './botxml.component';

describe('BotxmlComponent', () => {
  let component: BotxmlComponent;
  let fixture: ComponentFixture<BotxmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotxmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotxmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
