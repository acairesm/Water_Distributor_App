import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WppPage } from './wpp.page';

describe('WppPage', () => {
  let component: WppPage;
  let fixture: ComponentFixture<WppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
