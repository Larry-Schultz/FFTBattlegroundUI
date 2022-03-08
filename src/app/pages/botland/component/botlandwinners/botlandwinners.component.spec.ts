import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotlandwinnersComponent } from './botlandwinners.component';

describe('BotlandwinnersComponent', () => {
  let component: BotlandwinnersComponent;
  let fixture: ComponentFixture<BotlandwinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotlandwinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotlandwinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
