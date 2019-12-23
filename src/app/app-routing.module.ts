import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UkmListComponent } from './ukm-list/ukm-list.component';
import { UkmDetailComponent } from './ukm-detail/ukm-detail.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFavoriteComponent } from './user-favorite/user-favorite.component';

import { AuthGuardService } from './_shared/services/auth-guard.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ukm', component: UkmListComponent },
  { path: 'ukm/:kode', component: UkmDetailComponent },
  { path: 'register', component: RegistrasiComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService] },
  { path: 'favorites', component: UserFavoriteComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminSectionComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
