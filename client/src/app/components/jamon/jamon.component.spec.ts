import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamonComponent } from './jamon.component';

describe('JamonComponent', () => {
  let component: JamonComponent;
  let fixture: ComponentFixture<JamonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
