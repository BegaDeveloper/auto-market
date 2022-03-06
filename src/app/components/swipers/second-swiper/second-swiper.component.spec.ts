import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSwiperComponent } from './second-swiper.component';

describe('SecondSwiperComponent', () => {
  let component: SecondSwiperComponent;
  let fixture: ComponentFixture<SecondSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
