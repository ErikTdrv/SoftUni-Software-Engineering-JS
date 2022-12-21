import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  inUpdateMode: boolean = false;
  constructor(private userService: UserService) { }

  get user(){
    return this.userService.user
  }
  updateUser(form: NgForm): void{
    this.userService.updateProfileInfo(form.value).subscribe({
      next: () => {this.inUpdateMode = false},
      error: (err) => {console.log}
    })
  }
}
