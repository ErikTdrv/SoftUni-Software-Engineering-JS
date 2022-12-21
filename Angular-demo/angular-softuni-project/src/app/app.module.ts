import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
