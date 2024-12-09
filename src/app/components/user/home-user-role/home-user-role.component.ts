import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../services/auth-user.service';

@Component({
  selector: 'app-home-user-role',
  templateUrl: './home-user-role.component.html',
  styleUrl: './home-user-role.component.scss'
})
export class HomeUserRoleComponent implements OnInit {
  
  userProfile: any | null = null;

  constructor(private auth : AuthUserService){}
  
  async ngOnInit(): Promise<void> {
    this.userProfile = await this.auth.loadUserProfile();
  }

}
