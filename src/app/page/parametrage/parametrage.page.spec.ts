import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametragePage } from './parametrage.page';

describe('ParametragePage', () => {
  let component: ParametragePage;
  let fixture: ComponentFixture<ParametragePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
