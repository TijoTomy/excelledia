import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../adapter/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public strService: StoreService) {}

  ngOnInit(): void {}
  checkAddon(data: any): boolean {
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  addItem() {
    this.strService.cartItemCount = this.strService.cartItemCount + 1;
  }
  removeItem() {
    this.strService.cartItemCount = this.strService.cartItemCount - 1;
  }
}
