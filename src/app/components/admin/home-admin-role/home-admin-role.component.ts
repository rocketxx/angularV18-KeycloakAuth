import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../services/auth-user.service';

@Component({
  selector: 'app-home-admin-role',
  templateUrl: './home-admin-role.component.html',
  styleUrl: './home-admin-role.component.scss'
})
export class HomeAdminRoleComponent implements OnInit {
  
  userProfile: any | null = null;

  constructor(private auth : AuthUserService){}
  
  async ngOnInit(): Promise<void> {
    this.userProfile = await this.auth.loadUserProfile();
  }

}