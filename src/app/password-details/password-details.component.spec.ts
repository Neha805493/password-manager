import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDetailsComponent } from './password-details.component';

describe('PasswordDetailsComponent', () => {
  let component: PasswordDetailsComponent;
  let fixture: ComponentFixture<PasswordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
