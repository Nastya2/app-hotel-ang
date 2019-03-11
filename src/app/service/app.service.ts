import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  public activeHotel$: Subject<IData> = new Subject<IData>();

  public getCurrentItem(): Observable<any> {
    return this.activeHotel$.asObservable();
  }

  public setCurrentItem(item: IData): void {
    this.activeHotel$.next(item);
  }

  public getData(): Observable<IData[]> {
    return this.http.get<IData[]>(`assets/data/data.json`);
  }
}
