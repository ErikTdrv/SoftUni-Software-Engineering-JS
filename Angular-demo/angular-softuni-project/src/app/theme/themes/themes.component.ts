import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ContentService } from '../../content.service';
import { IPost, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent{
  themes: ITheme[] | undefined;
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  constructor(private contentService: ContentService, private userService: UserService) {
    this.fetchThemes()
    this.recentFetchPosts()
   }

   fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes)
   }

  recentFetchPosts(): void {
    this.themes = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.themes = posts)
  }


}
