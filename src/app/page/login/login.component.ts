import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
    "email":"",
    "password":""
  }
  constructor(private http:HttpClient,private router:Router){

  }

  login(){
    this.http.post("http://localhost:8080/login/request-login",this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res===true){
        console.log("hee");

        this.router.navigate(['/view-all-books']);
      }

    })
    console.log(this.loginObj);

  }
}
