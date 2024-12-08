import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
// import { HomeComponent } from './home/home.component'; // Sostituire con i tuoi componenti
// import { ProtectedComponent } from './protected/protected.component'; // Sostituire con i tuoi componenti
import { Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@Injectable({
  providedIn: 'root', 
})
//TODO: creare due guard: AdminAuthGuard e UserAuthGuard e le metti nel routing
export class AppAuthGuard extends KeycloakAuthGuard {
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
        if (roles.includes('adminRole')) {
          // Ruolo admin: reindirizza a ProtectedComponent
          window.alert("Ciao admin");
          resolve(true)
        } else if (roles.includes('userRole')) {
          // Ruolo user: reindirizza a HomeComponent
          window.alert("Ciao admin");
          resolve(true)
        } else {
          // Nessun ruolo appropriato: reindirizza a una pagina di errore o Home
          this.router.navigate(['/notfound']);
        }
        resolve(false); // Blocca l'accesso diretto alla rotta protetta
      }
    });
  }
  
}

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [AppAuthGuard]},
  { path: 'notfound', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard], // Registra la guardia
})
export class AppRoutingModule {}
