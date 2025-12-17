import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentApiCalls } from './dependent-api-calls';

describe('DependentApiCalls', () => {
  let component: DependentApiCalls;
  let fixture: ComponentFixture<DependentApiCalls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependentApiCalls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentApiCalls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
