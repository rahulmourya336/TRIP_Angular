import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  createTrip(tripName: string, tripImage: string, startDate: string, endDate: string, creatorId: string) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:4500/api/v1/trip/',
      {
        'name': tripName,
        'url': tripImage,
        'startDate': startDate,
        'endDate': endDate,
        'creatorID': creatorId,
      }, options);
  }

  getAllTrips(creatorId: string) {
    let params = new HttpParams();
    params = params.append('id', creatorId);
    const headers = { 'Content-Type': 'application/json' };

    const options: {
      headers?: HttpHeaders,
      observe?: 'body',
      params?: HttpParams,
      reportProgress?: boolean,
      responseType: 'json',
      withCredentials?: boolean
    } = {
      params: params,
      responseType: 'json',
    };
    return this.http.get('http://localhost:4500/api/v1/trip/',  options);
  }
}
