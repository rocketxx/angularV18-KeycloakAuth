import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private userProfile: any | null = null;

  constructor(private keycloakService: KeycloakService) {}

  /**
   * Carica e restituisce il profilo utente.
   */
  async loadUserProfile(): Promise<any | null> {
    try {
      // Se il profilo è già stato caricato, lo restituisce
      if (this.userProfile) {
        return this.userProfile;
      }
      // Altrimenti, lo carica da Keycloak
      this.userProfile = await this.keycloakService.loadUserProfile();
      return this.userProfile;
    } catch (error) {
      console.error('Errore durante il caricamento del profilo utente:', error);
      return null;
    }
  }

  /**
   * Restituisce il profilo utente, se già caricato.
   */
  getUserProfile(): any | null {
    return this.userProfile;
  }
}
