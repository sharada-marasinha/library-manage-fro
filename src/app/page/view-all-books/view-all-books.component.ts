import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
    private http;
    public bookList:any ={};

    constructor(private httpCliant:HttpClient){
      this.http=httpCliant;
    }
    ngOnInit(): void {
        this.loadBooks();
    }
    loadBooks() {
      this.http.get('http://localhost:8080/book/get').subscribe((data) => {
        this.bookList = data; // Assuming that the response is assigned to bookList
        console.log(this.bookList);
      });
    }
}
