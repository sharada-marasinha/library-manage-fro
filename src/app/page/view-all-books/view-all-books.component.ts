import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";




@Component({
    selector: 'app-view-all-books',
    standalone: true,
    templateUrl: './view-all-books.component.html',
    styleUrl: './view-all-books.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavComponent]
})
export class ViewAllBooksComponent implements OnInit{
    private http;
    public bookList:any;
    public selectedBook : any={
      "id":null,
      "isbn":null,
      "title":null,
      "author":null,
      "category":null,
      "qyt":null
    };


    constructor(private httpCliant:HttpClient){
      this.http=httpCliant;
    }
    ngOnInit(): void {
        this.loadBooks();
    }
    loadBooks() {
      this.http.get('http://localhost:8081/book/get').subscribe((data) => {
        this.bookList = data;
      });
    }
    deleteBook(){
      let api = "http://localhost:8081/book/"+this.selectedBook.id;
      this.http.delete(api,{responseType:'text'}).subscribe((responce:string) => {
        console.log(responce);
        this.loadBooks();
        Swal.fire({
          title: "Deleted!",
          text: `You Deleted ${this.selectedBook.title} book`,
          icon: "success"
        });
        this.selectedBook={};
      });
    }

    setSelectedBook(book:any){
      this.selectedBook=book;
      console.log("setSelectedBook"+book.id);
    }
    saveBook(){
      let postApi ="http://localhost:8081/book/add";
      this.http.post(postApi,this.selectedBook).subscribe(data =>{
        console.log("saved");
        console.log(data);
        this.loadBooks();
        Swal.fire({
          title: "Saved!",
          text: `You Update ${this.selectedBook.title} book`,
          icon: "success"
        });
        this.selectedBook={};
      });
    }
}
