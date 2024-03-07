import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isChacked:Boolean=false;
  public isDesableButton:Boolean=true;
  loginObj:any={
    "email":"",
    "password":""
  }
  constructor(private http:HttpClient,private router:Router){}



  login(){
    this.http.post("http://localhost:8080/login/request-login",this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res===true){
        this.router.navigate(['/home']);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Hello !",
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          title: "Can't access this user",
          text: `please chack your user name and password !`,
          icon: "error"
        });
      }
    })
  }

  anableButton(){
    this.isDesableButton=this.isChacked?true:false;
  }


}
