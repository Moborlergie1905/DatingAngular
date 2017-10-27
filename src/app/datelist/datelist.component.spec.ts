import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatelistComponent } from './datelist.component';

describe('DatelistComponent', () => {
  let component: DatelistComponent;
  let fixture: ComponentFixture<DatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
