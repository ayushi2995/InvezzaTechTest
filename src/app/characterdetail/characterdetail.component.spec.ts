import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailComponent } from './characterdetail.component';

describe('CharacterdetailComponent', () => {
  let component: CharacterdetailComponent;
  let fixture: ComponentFixture<CharacterdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterdetailComponent]
    });
    fixture = TestBed.createComponent(CharacterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
