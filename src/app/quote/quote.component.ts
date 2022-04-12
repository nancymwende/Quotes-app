import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Nancy Mwende',
      'Whoever is happy will make others happy too',
      'Nancy',
      new Date(2022, 3, 10)
      ,0,0
    ),
    new Quote(
      2,
      'Nancy Mwende',
      'The purpose of our lives is to be happy',
      'Nelson Mandela',
      new Date(2022, 3, 10)
      ,0,0
    ),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.Date = new Date(quote.Date);
    this.quotes.push(quote);
  }
}
