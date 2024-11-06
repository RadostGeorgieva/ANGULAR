import { Component, Input } from '@angular/core';
import { Article } from '../data/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article =  new Article('', '', '', '');; 
  @Input() articleDesc: string = "";
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    if (this.imageIsShown == false) {
      this.imageIsShown = true;
      this.imageButtonTitle = "Hide Image";
    } else {
      this.imageIsShown = false;
      this.imageButtonTitle = "Show Image";
    }
  }

  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;


  }
}
