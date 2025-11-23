import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesBasicos } from './componentes-basicos';

describe('ComponentesBasicos', () => {
  let component: ComponentesBasicos;
  let fixture: ComponentFixture<ComponentesBasicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentesBasicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesBasicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
