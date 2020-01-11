import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { TimelineItemModel } from './pet-timeline.models';

@Injectable()
export class PetTimelineService {
    baseUrl = environment.baseUrl;
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor( private httpClient: HttpClient) {}

    getTimeline(type) {
        let url = `${this.baseUrl}/timeline/${type}`;
        return this.httpClient.get<TimelineItemModel[]>(url);
    }

    newTimelineItem(item) {
        let url = this.baseUrl + '/timeline/new';
        return this.httpClient.post(url, this.toFormData(item));
    }

    changeItemPicture(data) {
        let url = this.baseUrl + '/timeline/changePic';
        return this.httpClient.post(url, this.toFormData(data));
    }

    editTimelineItem(id, item) {
        let url = `${this.baseUrl}/timeline/edit/${id}`;
        if (item.picture.location) {
            item.picture = JSON.stringify(item.picture);
        }
        item.age = JSON.stringify(item.age);
        item.infoItems = JSON.stringify(item.infoItems);
        return this.httpClient.put(url, item);
    }

    deleteTimelineItem(id): Observable<any> {
        let url = `${this.baseUrl}/timeline/delete/${id}`;
        return this.httpClient.delete(url, { headers: this.headers });
    }

    toFormData<T>( formValue: T) {
        const formData = new FormData();
        for ( const key of Object.keys(formValue) ) {
            let value;
            if (key === 'picture') {
                value = formValue[key];              
            } else {
                value = this.formValueKey(formValue[key]);
            }    
            formData.append(key, value);
        }    
        return formData;
    }

    formValueKey(key) {
        let value;
        if (typeof key === 'object' && key !== null) {
            value = JSON.stringify(key);     
        } else {
            value = key;
        }
        return value;
    }

}