import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelPageComponent } from './tabel-page.component';

describe('TabelPageComponent', () => {
  let component: TabelPageComponent;
  let fixture: ComponentFixture<TabelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
