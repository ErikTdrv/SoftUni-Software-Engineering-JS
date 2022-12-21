import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  get username(): string{
    return this.userService.user?.username || '';
  }
  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.log(err)
    })
    
  }

}
