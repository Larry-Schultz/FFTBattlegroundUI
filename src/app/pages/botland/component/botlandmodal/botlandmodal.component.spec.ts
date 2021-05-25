import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BotlandModalComponent } from './botlandmodal.component';

describe('BotlandmodalComponent', () => {
  let component: BotlandModalComponent;
  let fixture: ComponentFixture<BotlandModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BotlandModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotlandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
