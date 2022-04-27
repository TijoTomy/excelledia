import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../adapter/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  incrementItem: any = [];
  constructor(public strService: StoreService) {}

  ngOnInit(): void {}
  checkAddon(data: any): boolean {
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  addItem(data: any, i: number) {
    this.strService.cartItemCount = this.strService.cartItemCount + 1;
    if (this.incrementItem.length == 0) {
      data.forEach((element: any) => {
        this.incrementItem.push(0);
      });
      this.incrementItem[i] = this.incrementItem[i] + 1;
    } else {
      this.incrementItem[i] = this.incrementItem[i] + 1;
    }
  }
  removeItem(i: number) {
    if (this.strService.cartItemCount != 0) {
      this.strService.cartItemCount = this.strService.cartItemCount - 1;
    }
    if (this.incrementItem.length > 0) {
      this.incrementItem[i] = this.incrementItem[i] - 1;
    }
  }
}
