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
        console.log('itemul vietii', item);
        let url = this.baseUrl + '/timeline/new';
        return this.httpClient.post(url, this.toFormData(item));
    }

    editTimelineItem(id, item) {
        let url = `${this.baseUrl}/timeline/edit/${id}`;
        return this.httpClient.put(url, item);
    }

    deleteTimelineItem(id): Observable<any> {
        let url = `${this.baseUrl}/timeline/delete/${id}`;
        return this.httpClient.delete(url, { headers: this.headers });
    }

    toFormData<T>( formValue: T ) {
        const formData = new FormData();
        for ( const key of Object.keys(formValue) ) {
          const value = formValue[key];
          formData.append(key, value);
        }
      
        return formData;
    }

}