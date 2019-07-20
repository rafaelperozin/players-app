import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { DataService } from './data.service';
import { OrderPipe } from 'ngx-order-pipe';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  players$: Player[];
  p: number = 1;
  playersPerPage: number = 10;
  totalPlayers: number;
  order: string = name;
  reverse: boolean = false;

  constructor(private dataService: DataService) {}
  
  countPlayers() {
    this.dataService.getPlayer().subscribe(result=>{
      this.totalPlayers=result.length;
    });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  filterPlayers(searchTerm: any){
    this.dataService.getPlayer()
        .subscribe(data => this.players$ = data.filter(element => {
          return element.name.includes(searchTerm) || element.team.name.includes(searchTerm);
        }));
    this.countPlayers();
  }
  
  getPlayers(): void {
    this.dataService.getPlayer()
      .subscribe(data => this.players$ = data);
    this.countPlayers();
  }
  
  ngOnInit(): void {
    return this.getPlayers();
  }
}
