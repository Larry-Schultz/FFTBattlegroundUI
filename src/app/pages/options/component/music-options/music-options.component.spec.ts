import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOptionsComponent } from './music-options.component';

describe('MusicOptionsComponent', () => {
  let component: MusicOptionsComponent;
  let fixture: ComponentFixture<MusicOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
