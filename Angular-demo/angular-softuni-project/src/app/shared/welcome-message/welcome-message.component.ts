import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent{

  @Input() isLogged!: boolean;
  constructor(private userService: UserService) { }

  

}
