import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpcComponent } from './otpc.component';

describe('OtpcComponent', () => {
  let component: OtpcComponent;
  let fixture: ComponentFixture<OtpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
