import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeServiceService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://api.xmltime.com/timeservice';
  getTime(placeid: string, accesskey: string, secretkey: string) {
    let params = new HttpParams()
      .set('version', '3')
      .set('prettyprint', '1')
      .set('accesskey', accesskey)
      .set('secretkey', secretkey)
      .set('placeid', placeid);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
