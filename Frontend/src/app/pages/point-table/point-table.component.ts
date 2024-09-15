import { Component } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent {
  pointTable: any;
  pointTableRow: any;

  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this.loadTable();
  }
  loadTable() {
    this._api.getCWC2023PointTable().subscribe({
      next: (data) => {
        this.pointTable = data;
        console.log(this.pointTable);
        this.pointTableRow = [...this.pointTable[0]];

        this.pointTable = this.pointTable.filter(
          (item: any, index: any) => index > 0
        );
      },
    });
  }
}
