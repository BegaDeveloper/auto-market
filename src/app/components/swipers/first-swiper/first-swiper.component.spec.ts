import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSwiperComponent } from './first-swiper.component';

describe('FirstSwiperComponent', () => {
  let component: FirstSwiperComponent;
  let fixture: ComponentFixture<FirstSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
