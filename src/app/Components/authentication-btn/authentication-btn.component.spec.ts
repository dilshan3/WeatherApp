import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationBtnComponent } from './authentication-btn.component';

describe('AuthenticationBtnComponent', () => {
  let component: AuthenticationBtnComponent;
  let fixture: ComponentFixture<AuthenticationBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
