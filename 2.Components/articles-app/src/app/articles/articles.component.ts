import { Component, OnInit } from '@angular/core';
import { Article } from '../data/article.model';
import { ArticleData } from '../data/data';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'ng',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];


  constructor() { }
  ngOnInit(): void {
    console.log("Fetching articles...");
    this.articles = new ArticleData().getData();
    console.log("Articles fetched:", this.articles);
  }
}
