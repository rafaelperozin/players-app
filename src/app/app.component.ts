import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  players$: Player[];

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    return this.dataService.getPlayer()
      .subscribe(data => this.players$ = data);
  }
}
