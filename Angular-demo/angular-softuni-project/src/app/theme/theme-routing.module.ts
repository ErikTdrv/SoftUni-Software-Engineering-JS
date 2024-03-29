import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AuthActivate } from '../core/guards/auth.activate';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';

  const routes: Routes = [
    {
      path: 'themes',
      children: [
        {
          path: '',
          pathMatch: 'full',
          component: ThemesComponent,
        },
        {
          path: ':themeId',
          component: ThemeComponent,
        }
      ]
    },
    {
      path: 'new-theme',
      component: NewThemeComponent,
      canActivate: [AuthActivate],
      data: {
        authenticationRequired: true,
        authenticationFailureRedirectUrl: '/login',
      }
    }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
