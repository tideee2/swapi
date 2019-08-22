import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSearchBarComponent } from './material-search-bar.component';

describe('MaterialSearchBarComponent', () => {
  let component: MaterialSearchBarComponent;
  let fixture: ComponentFixture<MaterialSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
