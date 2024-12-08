import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-auth';
  items: MenuItem[] = [];

  constructor(private keycloakService: KeycloakService, private router: Router) {}

  ngOnInit(): void {
    this.inizializzareMenuItem();
  }

  // Funzione per inizializzare il menu in base al ruolo
  inizializzareMenuItem() {
    // Verifica se l'utente è autenticato
    if (this.keycloakService.isLoggedIn()) {
      const roles = this.keycloakService.getUserRoles(); // Ottieni i ruoli dell'utente

      // Verifica il ruolo e crea i menu item corrispondenti
      if (roles.includes('adminRole')) {
        this.items = [
          {
            label: 'Home Admin',
            icon: 'pi pi-home',
            routerLink: '/home-admin' // Link alla rotta per l'admin
          },
          {
            label: 'Locale',
            icon: 'pi pi-map-marker',
            routerLink: '/locale' // Link per la pagina Locale
          }
        ];
      } else if (roles.includes('userRole')) {
        this.items = [
          {
            label: 'Home User',
            icon: 'pi pi-home',
            routerLink: '/home-user' // Link alla rotta per l'utente
          },
          {
            label: 'Profilo',
            icon: 'pi pi-user',
            routerLink: '/profilo' // Link per la pagina Profilo
          }
        ];
      }
    } else {
      this.items = [
        {
          label: 'Login',
          icon: 'pi pi-sign-in',
          command: () => this.keycloakService.login() // Link per il login
        }
      ];
    }
  }
}
