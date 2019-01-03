import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  public activeHotel$ = new Subject<IData>();

  public getData(): Observable<IData[]> {
    return this.http.get<IData[]>(`assets/data/data.json`);
  }
}
