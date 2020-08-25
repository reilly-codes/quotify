import { Component, OnInit, Input } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  @Input()
  quote: Quote;

  upwardVote(): void {
    this.quote.upvotes += 1;
  }

  downwardVote(): void {
    this.quote.downvotes += 1;
  }

  constructor(){}

  ngOnInit(): void {
  }

}
