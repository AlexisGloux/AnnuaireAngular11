import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateReactiveComponent } from './contact-create-reactive.component';

describe('ContactCreateReactiveComponent', () => {
  let component: ContactCreateReactiveComponent;
  let fixture: ComponentFixture<ContactCreateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCreateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
