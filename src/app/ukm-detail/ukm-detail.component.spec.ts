import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmDetailComponent } from './ukm-detail.component';

describe('UkmDetailComponent', () => {
  let component: UkmDetailComponent;
  let fixture: ComponentFixture<UkmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
