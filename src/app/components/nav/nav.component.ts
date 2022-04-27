import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../adapter/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public strService: StoreService) {}

  ngOnInit(): void {}
}
