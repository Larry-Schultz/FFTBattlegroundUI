import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationGridXComponent } from './foundationgridx.component';

describe('FoundationgridxComponent', () => {
  let component: FoundationGridXComponent;
  let fixture: ComponentFixture<FoundationGridXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationGridXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationGridXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
