import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PetTimelineService {
    baseUrl = environment.baseUrl;
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor( private httpClient: HttpClient) {}

    getTimeline(type) {
        let url = `${this.baseUrl}/timeline/${type}`;
        return this.httpClient.get<JSON>(url);
    }

    newTimelineItem(item) {
        let url = this.baseUrl + '/timeline/new';
        return this.httpClient.post(url, item);
    }

    editTimelineItem(id, item) {
        let url = `${this.baseUrl}/timeline/edit/${id}`;
        return this.httpClient.put(url, item);
    }

    deleteTimelineItem(id): Observable<any> {
        let url = `${this.baseUrl}/timeline/delete/${id}`;
        return this.httpClient.delete(url, { headers: this.headers });
    }

}