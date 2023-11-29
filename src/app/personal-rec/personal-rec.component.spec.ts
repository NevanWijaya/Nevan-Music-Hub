import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecComponent } from './personal-rec.component';

describe('PersonalRecComponent', () => {
  let component: PersonalRecComponent;
  let fixture: ComponentFixture<PersonalRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalRecComponent]
    });
    fixture = TestBed.createComponent(PersonalRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
