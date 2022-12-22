import { Component, OnInit } from '@angular/core';
import { TroChoiService } from './../../services/tro-choi/tro-choi.service';

@Component({
  selector: 'app-tro-choi-detail',
  templateUrl: './tro-choi-detail.component.html',
  styleUrls: ['./tro-choi-detail.component.css']
})
export class TroChoiDetailComponent implements OnInit {

  public name
  public detail
  public howtoplay
  public orther

  constructor(private common: TroChoiService) {
    const objectFound = this.common.trochoi.find(x => x.name)

    this.name = objectFound?.name
    this.detail = objectFound?.detail
    this.howtoplay = objectFound?.howtoplay
    this.orther = objectFound?.orther
  }

  ngOnInit(): void {
  }

}
