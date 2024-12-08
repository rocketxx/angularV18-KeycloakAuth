import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { adminRoleAuthGuard } from './guard/adminRoleAuthGuard';
import { userRoleAuthGuard } from './guard/userRoleAuthGuard';
import { HomeAdminRoleComponent } from './components/admin/home-admin-role/home-admin-role.component';


const routes: Routes = [
  { path: 'home-admin', component: HomeAdminRoleComponent , canActivate: [adminRoleAuthGuard]},
  { path: 'home-user', component: HomeAdminRoleComponent , canActivate: [userRoleAuthGuard]},
  { path: 'notfound', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [adminRoleAuthGuard,userRoleAuthGuard], // Registro le guardia
})
export class AppRoutingModule {}
