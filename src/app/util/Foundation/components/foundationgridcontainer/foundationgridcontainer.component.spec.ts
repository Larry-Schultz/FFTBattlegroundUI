import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationGridContainerComponent } from './foundationgridcontainer.component';

describe('FoundationgridcontainerComponent', () => {
  let component: FoundationGridContainerComponent;
  let fixture: ComponentFixture<FoundationGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationGridContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
