// STEP 1 Import ModuleWithProviders Routes, RouterModule

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Step 2 Import the components that will be linked to a route 

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';


// Step 3 Setup the Routes
export const router: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent }
];

// Step 4 -Tell angular to use this router
export const routes: ModuleWithProviders = RouterModule.forRoot(router);