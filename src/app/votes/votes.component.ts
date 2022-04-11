import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  numberOflikes:number=0;
  likes(){
    this.numberOflikes++
  }
  numberOfdislikes:number=0;
  dislikes(){
    this.numberOfdislikes++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
