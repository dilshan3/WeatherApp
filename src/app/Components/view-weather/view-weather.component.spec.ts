import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeatherComponent } from './view-weather.component';

describe('ViewWeatherComponent', () => {
  let component: ViewWeatherComponent;
  let fixture: ComponentFixture<ViewWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
