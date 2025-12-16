import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleApiCalls } from './multiple-api-calls';

describe('MultipleApiCalls', () => {
  let component: MultipleApiCalls;
  let fixture: ComponentFixture<MultipleApiCalls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleApiCalls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleApiCalls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
