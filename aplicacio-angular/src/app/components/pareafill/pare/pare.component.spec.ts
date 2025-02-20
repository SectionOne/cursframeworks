import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PareComponent } from './pare.component';

describe('PareComponent', () => {
  let component: PareComponent;
  let fixture: ComponentFixture<PareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
