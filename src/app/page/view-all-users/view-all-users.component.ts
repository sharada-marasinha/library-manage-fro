import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
    selector: 'app-view-all-users',
    standalone: true,
    templateUrl: './view-all-users.component.html',
    styleUrl: './view-all-users.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavComponent]
})
export class ViewAllUsersComponent {
  private http;
  public userlist:any;
  public selectedUser : any={
  "id": null,
  "firstName": null,
  "lastName": null,
  "userName": null,
  "email": null,
  "address": null,
  "address2": null,
  "country": null,
  "phoneNumber": null
};
  constructor(private httpCliant:HttpClient){
    this.http=httpCliant;
  }
  ngOnInit(): void {
      this.loadUsers();
  }
  loadUsers() {
    this.http.get('http://localhost:8080/user/get-all-users').subscribe((data) => {
      this.userlist = data;
    });
  }
  deleteUser(){
    let api = "http://localhost:8080/user/delete/"+this.selectedUser.id;
    this.http.delete(api,{responseType:'text'}).subscribe((responce:string) => {
      this.loadUsers();
      Swal.fire({
        title: "Deleted!",
        text: `You Deleted ${this.selectedUser.title} book`,
        icon: "success"
      });
      this.selectedUser={};
    });
  }
  setSelectedBook(user:any){
    this.selectedUser=user;
  }
  saveUser(){
    let postApi ="http://localhost:8080/user/add-user";
    this.http.post(postApi,this.selectedUser).subscribe(data =>{
      this.loadUsers();
      Swal.fire({
        title: "Saved!",
        text: `You Update ${this.selectedUser.title} book`,
        icon: "success"
      });
      this.selectedUser={};
    });
  }
}
