import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  Stock  from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'http://localhost:8181/bootcamp';

  constructor( private http: HttpClient) { }

  async getStocks():Promise<Stock[]> {

    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
