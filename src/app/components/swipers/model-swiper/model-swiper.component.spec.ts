import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSwiperComponent } from './model-swiper.component';

describe('ModelSwiperComponent', () => {
  let component: ModelSwiperComponent;
  let fixture: ComponentFixture<ModelSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
