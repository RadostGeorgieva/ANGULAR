import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/themes';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getThemes().subscribe(themes => {
      console.log(themes)
      this.themes = themes;
      this.isLoading = false;
    })
  }
}
