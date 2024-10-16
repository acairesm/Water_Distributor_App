import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesbordPage } from './desbord.page';

describe('DesbordPage', () => {
  let component: DesbordPage;
  let fixture: ComponentFixture<DesbordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesbordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
