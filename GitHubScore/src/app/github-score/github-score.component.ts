import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScoreServiceService } from './../score-service.service';

@Component({
  selector: 'app-github-score',
  templateUrl: './github-score.component.html',
  styleUrls: ['./github-score.component.css']
})
export class GithubScoreComponent implements OnInit {

  userExists: boolean = null;
  score: number = 0;
  username: string = null;

  constructor(private scoreService: ScoreServiceService) {}

  calculateScore(form: NgForm) {
    this.username = form.value.username;

    this.scoreService.retrieveScores(this.username)
      .subscribe(
        user => {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
          form.reset();
        },
        (response: Response) => this.userExists = false
      );
    }

  ngOnInit() {
    
  }

}
