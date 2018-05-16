import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioproductsComponent } from './bioproducts.component';

describe('BioproductsComponent', () => {
  let component: BioproductsComponent;
  let fixture: ComponentFixture<BioproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
