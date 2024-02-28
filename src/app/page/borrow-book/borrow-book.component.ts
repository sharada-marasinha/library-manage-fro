import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";
@Component({
    selector: 'app-borrow-book',
    standalone: true,
    templateUrl: './borrow-book.component.html',
    styleUrl: './borrow-book.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavComponent]
})
export class BorrowBookComponent implements OnInit{

  private http;

  public userName:String="unknown";

  constructor(http:HttpClient){
    this.http=http;
  }

  ngOnInit(): void {

  }

  searchUser(){
    console.log(this.userName);

    this.http.get(`http://localhost:8080/user/find-by-user-name/${this.userName}`).subscribe(data=>{
      console.log(data);

    })

  }

}
