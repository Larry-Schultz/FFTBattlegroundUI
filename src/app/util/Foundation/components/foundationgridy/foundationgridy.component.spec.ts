import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationGridYComponent } from './foundationgridy.component';

describe('FoundationgridyComponent', () => {
  let component: FoundationGridYComponent;
  let fixture: ComponentFixture<FoundationGridYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationGridYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationGridYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
