import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }
    async getBeverages(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/beverage`).toPromise();
        const beverage = resp.json();
        return beverage || [];
    }

    async getBeverageById(beverageID): Promise<Object> {
        const resp = await this.http.get(`${this.apiUrl}/beverage/id/${beverageID}`).toPromise();
        const beverage = resp.json();
        return beverage || [];
    }

    async addBeverage(beverage): Promise<Object> {
        const resp = await this.http.post(`${this.apiUrl}/book`, beverage).toPromise();
        const newBeverage = resp.json();
        return newBeverage || null;
    }

    async deleteBeverage(beverageID): Promise<Object> {
        const resp = await this.http.delete(`${this.apiUrl}/beverage/id/${beverageID}`).toPromise();
        const status = resp.json();
        return status;
    }

    async updateBeverage(beverageID, book): Promise<Object> {
        const resp = await this.http.put(`${this.apiUrl}/beverage/id/${beverageID}`, book).toPromise();
        const updatedBeverage = resp.json();
        return updatedBeverage;
    }

}


//    async getBeverages(): Promise<Array<Object>> {
//         return this.http.get(`${this.apiUrl}/beverage`)
//         .toPromise()
//         .then((resp) => {
//             let beverages = resp.json();
//             return beverages;
//         });
//     }

//     getBeverageById(beverageId): Promise<Object> {
//         return;
//     }

//     addBeverage(beverage): Promise<Object> {
//         return;
//     }

//     deleteBeverage(id): Promise<Object> {
//         return;
//     }

//     updateBeverage(id, beverage): Promise<Object> {
//         return;
//     }

// }
