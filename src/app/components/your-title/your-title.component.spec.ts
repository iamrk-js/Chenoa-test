import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTitleComponent } from './your-title.component';

describe('YourTitleComponent', () => {
  let component: YourTitleComponent;
  let fixture: ComponentFixture<YourTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
