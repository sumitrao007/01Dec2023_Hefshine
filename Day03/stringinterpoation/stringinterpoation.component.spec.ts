import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterpoationComponent } from './stringinterpoation.component';

describe('StringinterpoationComponent', () => {
  let component: StringinterpoationComponent;
  let fixture: ComponentFixture<StringinterpoationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringinterpoationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterpoationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
