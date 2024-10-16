import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Garrafas500mlPage } from './garrafas500ml.page';

describe('Garrafas500mlPage', () => {
  let component: Garrafas500mlPage;
  let fixture: ComponentFixture<Garrafas500mlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Garrafas500mlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
