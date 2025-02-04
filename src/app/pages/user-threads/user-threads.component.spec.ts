import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThreadsComponent } from './user-threads.component';

describe('UserThreadsComponent', () => {
  let component: UserThreadsComponent;
  let fixture: ComponentFixture<UserThreadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserThreadsComponent]
    });
    fixture = TestBed.createComponent(UserThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
