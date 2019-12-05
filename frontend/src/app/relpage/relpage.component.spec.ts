import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelpageComponent } from './relpage.component';

describe('RelpageComponent', () => {
  let component: RelpageComponent;
  let fixture: ComponentFixture<RelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
