import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(environment.apiUrl).pipe(
      catchError((error: any) => {
        let res: any = {
          msg: error.message,
          err: true,
        };
        return of(res);
      })
    );
  }
}
