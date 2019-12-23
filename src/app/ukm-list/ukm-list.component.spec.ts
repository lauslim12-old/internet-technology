import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmListComponent } from './ukm-list.component';

describe('UkmListComponent', () => {
  let component: UkmListComponent;
  let fixture: ComponentFixture<UkmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
