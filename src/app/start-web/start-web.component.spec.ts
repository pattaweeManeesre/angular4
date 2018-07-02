import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWebComponent } from './start-web.component';

describe('StartWebComponent', () => {
  let component: StartWebComponent;
  let fixture: ComponentFixture<StartWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
