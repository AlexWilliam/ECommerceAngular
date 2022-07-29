import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    livros: Array<Book> = [
        {
            id: 1,
            name: 'livro Teste',
            category: 'Terror',
            quantity: 1,
            price: 19.99,
            img: "1"
        },
        {
            id: 2,
            name: 'livro Teste 2',
            category: 'Aventura',
            quantity: 1,
            price: 39.99,
            img: "2"
        }
    ];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        console.log(this.livros);
    }

    getBooks(): void {
        /*this.productService.getBooks().subscribe(response => {
            this.books = response;
        })*/
    }

}
