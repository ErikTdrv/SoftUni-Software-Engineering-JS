import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ContentService } from '../../content.service';
import { IPost, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent{
  theme: ITheme | undefined;
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.fetchTheme();
  }

  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.contentService.loadTheme(id).subscribe(theme => this.theme = theme);
  }

}
