import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule} from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [CommonModule, MatchCardComponent, NgxTypedJsModule],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css',
})
export class LiveScoreComponent implements OnInit {
  liveData: any;
  loading = true;

  constructor(private _api: ApiCallService) {}

  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: (data) => {
        console.log(data);
        this.liveData = data;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
    });
  }

  refreshScore() {
    this.loadLiveMatches();
  }
}
