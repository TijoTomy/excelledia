import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  hotelData: any = [];
  cartItemCount: number = 0;
  constructor() {}
}
