import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GarrafaoPage } from './garrafao.page';

describe('GarrafaoPage', () => {
  let component: GarrafaoPage;
  let fixture: ComponentFixture<GarrafaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GarrafaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
