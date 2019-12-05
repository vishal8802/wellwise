import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindoctComponent } from './logindoct.component';

describe('LogindoctComponent', () => {
  let component: LogindoctComponent;
  let fixture: ComponentFixture<LogindoctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindoctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
