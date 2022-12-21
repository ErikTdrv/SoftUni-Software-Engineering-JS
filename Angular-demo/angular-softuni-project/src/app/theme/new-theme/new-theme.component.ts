import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent{

  constructor(private contentService: ContentService, private router: Router) { }

  createTheme(form: NgForm): void{
    this.contentService.createTheme(form.value).subscribe({
      next: () => this.router.navigate(['/'])
    })
  }

}
