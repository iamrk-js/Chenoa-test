import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WigetSectionComponent } from './wiget-section.component';

describe('WigetSectionComponent', () => {
  let component: WigetSectionComponent;
  let fixture: ComponentFixture<WigetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WigetSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WigetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
