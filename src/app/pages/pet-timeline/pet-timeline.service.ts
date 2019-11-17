import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class PetTimelineService {
    baseUrl = environment.baseUrl;

    constructor( private httpClient: HttpClient) {}

    getTimeline() {
        let url = this.baseUrl + '/timeline';
        return this.httpClient.get<JSON>(url);
    }

    newTimelineItem(item) {
        // let item = {
        //     age:'1an',
        //     animalType: 'pisica',
        //     title: 'titlu',
        //     picture: 'gdsgdsgdsgds',
        //     subtitle: 'subtitlu',
        //     descriptionText: 'descriere',
        //     infoItems: ['ion', 'tiriac']
        // };
        let url = this.baseUrl + '/timeline/new';
        return this.httpClient.post(url, item);

    }

}