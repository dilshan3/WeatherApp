import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutBtnComponent } from './log-out-btn.component';

describe('LogOutBtnComponent', () => {
  let component: LogOutBtnComponent;
  let fixture: ComponentFixture<LogOutBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOutBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
