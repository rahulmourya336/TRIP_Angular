import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  createTrip(tripName: string, tripImage: string, startDate: string, endDate: string, creatorId: string) {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
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

    const options: {
      params?: HttpParams,
      responseType: 'json',
    } = {
      params: params,
      responseType: 'json',
    };
    return this.http.get('http://localhost:4500/api/v1/trip/', options);
  }

  removeTrip(tripId: string) {
    const options: {
      params?: HttpParams,
      responseType: 'json',
    } = {
      responseType: 'json',
    };
    return this.http.delete('http://localhost:4500/api/v1/trip/' + tripId, options);
  }

  patchTrip(tripId: string) {

  }
}
