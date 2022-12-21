import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost, ITheme } from './shared/interfaces';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  themes: ITheme[] | undefined;

  constructor(private contentService: ContentService, private userService: UserService){
    this.recentFetchPosts()
    this.userService.getProfileInfo().subscribe({
      next: (user) => {
        this.userService.user = user;
        console.log(user)
      },
      error: () => {
        this.userService.user = null;
      }
    })
  }

  recentFetchPosts(): void {
    this.themes = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.themes = posts)
  }


}
