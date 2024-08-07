import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListchecklistPage } from './listchecklist.page';

describe('ListchecklistPage', () => {
  let component: ListchecklistPage;
  let fixture: ComponentFixture<ListchecklistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
