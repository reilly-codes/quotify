import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public show = false;

  @Input()
  quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
   this.show = !this.show;
  }

}
