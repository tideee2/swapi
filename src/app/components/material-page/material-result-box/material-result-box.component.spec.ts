import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialResultBoxComponent } from './material-result-box.component';

describe('MaterialResultBoxComponent', () => {
  let component: MaterialResultBoxComponent;
  let fixture: ComponentFixture<MaterialResultBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialResultBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialResultBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
