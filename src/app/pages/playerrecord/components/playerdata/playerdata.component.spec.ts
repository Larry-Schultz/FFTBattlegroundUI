import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDataComponent } from './playerdata.component';

describe('PlayerdataComponent', () => {
  let component: PlayerDataComponent;
  let fixture: ComponentFixture<PlayerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
