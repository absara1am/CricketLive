import { Routes } from '@angular/router';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { HomeComponent } from './pages/home/home.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'live-score',
    component: LiveScoreComponent,
    title: 'Live Matches | CricketLive',
  },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | CricketLive',
  },

  {
    path: 'history',
    component: HistoryComponent,
    title: 'Match History | CricketLive',
  },

  {
    path: 'point-table',
    component: PointTableComponent,
    title: 'CWC2023 Point Table | CricketLive',
  },
];
