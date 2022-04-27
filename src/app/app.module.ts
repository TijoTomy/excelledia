import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './service/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreService } from './adapter/store.service';
import { MatTabsModule } from '@angular/material/tabs';
import { NavComponent } from './components/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppComponent, MainComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [DataService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
