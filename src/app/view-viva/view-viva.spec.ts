import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewViva } from './view-viva';

describe('ViewViva', () => {
  let component: ViewViva;
  let fixture: ComponentFixture<ViewViva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewViva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewViva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
