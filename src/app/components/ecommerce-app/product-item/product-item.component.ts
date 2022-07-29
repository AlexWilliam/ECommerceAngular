import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input()
    livro!: Book;

    constructor() {
        this.livro = {
            id: 0,
            name: "",
            category: "",
            quantity: 0,
            price: 0,
            img: ""
        }
     }

    ngOnInit(): void {
        console.log(this.livro);
    }

}
