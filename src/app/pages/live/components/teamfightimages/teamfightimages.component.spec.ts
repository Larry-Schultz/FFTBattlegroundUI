import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFightImagesComponent } from './teamfightimages.component';

describe('TeamfightimagesComponent', () => {
  let component: TeamFightImagesComponent;
  let fixture: ComponentFixture<TeamFightImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFightImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFightImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
