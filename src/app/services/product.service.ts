import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';

import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    // API nunca foi construida
    //url: string = "http://localhost:8080/api/bookstore";

    httpOptions = {
        Headers: new HttpHeaders({"Content-Type": "application/json"})
    }

    constructor(private httpClient: HttpClient) { }

    /*getBooks(): Observable<Book[]> {
        //return this.httpClient.get<Book[]>(this.url);
    }*/
}
