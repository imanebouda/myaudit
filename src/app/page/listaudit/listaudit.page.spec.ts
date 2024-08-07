import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListauditPage } from './listaudit.page';

describe('ListauditPage', () => {
  let component: ListauditPage;
  let fixture: ComponentFixture<ListauditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListauditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
