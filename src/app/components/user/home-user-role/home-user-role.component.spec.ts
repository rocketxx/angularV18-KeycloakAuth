import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserRoleComponent } from './home-user-role.component';

describe('HomeUserRoleComponent', () => {
  let component: HomeUserRoleComponent;
  let fixture: ComponentFixture<HomeUserRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeUserRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
