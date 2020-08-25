import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Quote } from './quote';
import { computed, observable } from 'mobx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'quotify';

  @observable
  quotes = [
    new Quote('Live your life', 'lorem Ipsum', 'Reilly'),
    new Quote('Train hard fight easy', 'Lorem Ipsum', 'Kingsley')
  ];

  constructor() {
  }

  @computed
  get sortedQuotes(): Quote[] {
    const sorted = this.quotes.slice().sort((a: Quote, b: Quote) => {
      return (a.upvotes > b.upvotes) ? 1 : -1;
    });
    return sorted;
  }
}