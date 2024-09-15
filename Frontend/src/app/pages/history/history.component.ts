import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatchCardComponent, NgxTypedJsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{

  allMatches : any 
  loading = true

  constructor(private _api: ApiCallService){}

  ngOnInit(): void {
    this.loadMatchHistory();
  }

  private loadMatchHistory() {
    this._api.getAllMatches().subscribe({
      next: data => {
        this.allMatches = data;
        this.loading = false
      },
      error: error => {
        console.log(error);
        this.loading = false
      }
    });
  }
  refreshScore() {
    this.loadMatchHistory();
  }
}
