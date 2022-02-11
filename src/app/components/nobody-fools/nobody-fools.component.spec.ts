import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobodyFoolsComponent } from './nobody-fools.component';

describe('NobodyFoolsComponent', () => {
  let component: NobodyFoolsComponent;
  let fixture: ComponentFixture<NobodyFoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobodyFoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NobodyFoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
