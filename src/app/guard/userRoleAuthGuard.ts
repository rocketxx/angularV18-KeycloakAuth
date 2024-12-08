import { Injectable } from '@angular/core';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root', 
  })
  //TODO: creare due guard: AdminAuthGuard e UserAuthGuard e le metti nel routing
  export class userRoleAuthGuard extends KeycloakAuthGuard {
    constructor(
      protected override keycloakAngular: KeycloakService,
      protected override router: Router
    ) {
      super(router,keycloakAngular);
    }
  
    isAccessAllowed(): Promise<boolean> {
      return new Promise(async (resolve, reject) => {
        if (!this.authenticated) {
          // Se non autenticato, reindirizza al login di Keycloak
          await this.keycloakAngular.login();
          resolve(false);
        } else {
          // Controllo dei ruoli
          const roles = this.keycloakAngular.getUserRoles();
          if (roles.includes('userRole')) {
            resolve(true)
          }
          else {
            // Nessun ruolo appropriato: reindirizza a una pagina di errore o Home
            this.router.navigate(['/notfound']);
          }
          resolve(false); // Blocca l'accesso diretto alla rotta protetta
        }
      });
    }
    
  }