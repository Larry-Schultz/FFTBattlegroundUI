import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneFileComponent } from './genefile.component';

describe('GenefileComponent', () => {
  let component: GeneFileComponent;
  let fixture: ComponentFixture<GeneFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
