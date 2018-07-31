import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletMenuTitleComponent } from './outlet-menu-title.component';

describe('MenuCategoryComponent', () => {
  let component: OutletMenuTitleComponent;
  let fixture: ComponentFixture<OutletMenuTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletMenuTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
