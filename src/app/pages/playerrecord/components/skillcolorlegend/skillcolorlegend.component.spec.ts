import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillColorLegendComponent } from './skillcolorlegend.component';

describe('SkillcolorlegendComponent', () => {
  let component: SkillColorLegendComponent;
  let fixture: ComponentFixture<SkillColorLegendComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillColorLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillColorLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
