import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
    "EmailId":"",
    "Password":""
  }
  constructor(private http:HttpClient,private router:Router){

  }

  login(){
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login sucsess");
        this.router.navigateByUrl("/dashboard");
      }else{
        alert(res.massage);
      }
    })
    console.log(this.loginObj);

  }
}
