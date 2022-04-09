import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail-component',
  templateUrl: './quote-detail-component.component.html',
  styleUrls: ['./quote-detail-component.component.css'],
})
export class QuoteDetailComponentComponent implements OnInit {
  @Input()
  quote: Quote = new Quote;
  constructor() {}

  ngOnInit(): void {}
}
