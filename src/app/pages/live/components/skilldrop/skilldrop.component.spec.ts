import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilldropComponent } from './skilldrop.component';

describe('SkilldropComponent', () => {
  let component: SkilldropComponent;
  let fixture: ComponentFixture<SkilldropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilldropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilldropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
