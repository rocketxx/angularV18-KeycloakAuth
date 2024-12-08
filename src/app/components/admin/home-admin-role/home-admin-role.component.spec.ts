import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminRoleComponent } from './home-admin-role.component';

describe('HomeAdminRoleComponent', () => {
  let component: HomeAdminRoleComponent;
  let fixture: ComponentFixture<HomeAdminRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAdminRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
