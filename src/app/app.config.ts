import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVy9sy1idyne3hfiTDhUcIXlTXnjHkAKY",
  authDomain: "auth-firebase-5d0b7.firebaseapp.com",
  projectId: "auth-firebase-5d0b7",
  storageBucket: "auth-firebase-5d0b7.firebasestorage.app",
  messagingSenderId: "371217573824",
  appId: "1:371217573824:web:d53985c86400e1d2f14a25"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
};