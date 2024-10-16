import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvariasPage } from './avarias.page';

describe('AvariasPage', () => {
  let component: AvariasPage;
  let fixture: ComponentFixture<AvariasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
