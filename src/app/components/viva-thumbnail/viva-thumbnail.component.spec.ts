import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaThumbnailComponent } from './viva-thumbnail.component';

describe('VivaThumbnailComponent', () => {
  let component: VivaThumbnailComponent;
  let fixture: ComponentFixture<VivaThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VivaThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VivaThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
