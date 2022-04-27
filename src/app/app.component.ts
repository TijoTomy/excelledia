import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { StoreService } from './adapter/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'exceldiatask';
  constructor(
    private dataService: DataService,
    private strService: StoreService
  ) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((res: any) => {
      this.strService.hotelData = res;
      console.log(res);
    });
  }
}
