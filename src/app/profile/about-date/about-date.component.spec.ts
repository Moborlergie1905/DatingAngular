import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDateComponent } from './about-date.component';

describe('AboutDateComponent', () => {
  let component: AboutDateComponent;
  let fixture: ComponentFixture<AboutDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
