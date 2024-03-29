import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AuthActivate } from '../core/guards/auth.activate';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

  const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: false,
          authenticationFailureRedirectUrl: '/',
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: false,
          authenticationFailureRedirectUrl: '/',
        }
    },
    {
        path: 'users/profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/login',
        }
    },
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
