import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './enviroments/enviroment';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HomeComponent } from './components/home/home.component';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeAdminRoleComponent } from './components/admin/home-admin-role/home-admin-role.component';
import { HomeUserRoleComponent } from './components/user/home-user-role/home-user-role.component';
import { MenubarModule } from 'primeng/menubar';
export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'login-required', // O 'check-sso'
        checkLoginIframe: false,  // Disabilita il controllo dell'iframe
      },
    });
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedSidebarComponent,
    PageNotFoundComponent,
    HomeAdminRoleComponent,
    HomeUserRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    MenubarModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
