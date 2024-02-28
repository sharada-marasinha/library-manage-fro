import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
    private http;
    public countryList:any;
    public selectedCountryCode:any;
    public isExsistUser:any;
    private isRegisterUser :boolean=false;
    private canRegisterUser :boolean=false;
    public selectedCountry:any="Country";
    public userObject={
      firstName:null,
      lastName:null,
      userName:null,
      email:null,
      address:null,
      address2:null,
      country:this.selectedCountry,
      phoneNumber:null
    }
    constructor(private httpCliant:HttpClient){
      this.http=httpCliant;
    }
    ngOnInit(): void {
      this.loadCountries();
  }
  loadCountries(){
    let api ="https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe(res =>{
      this.countryList=res;
    });
  }


  setSlectodCountry(country:any){
    console.log(country.name.common);
    this.selectedCountry=country.name.common;
    this.selectedCountryCode=country.idd.root+""+country.idd.suffixes[0]+" ";
    console.log(this.selectedCountryCode);

  }

  submitForm() {
    this.http.get(`http://localhost:8080/user/is-exist-user/${this.userObject.userName}`).subscribe(
      (data) => {
        this.isExsistUser=data;
        console.log(data);
          if(this.isExsistUser==true){
            this.registerUser(false);
            Swal.fire({
              title: "Can't Register this user",
              text: `${this.userObject.userName} has already been registered!`,
              icon: "error"
            });
          }else{
            this.registerUser(true);
          }







      },
      (error) => {
        Swal.fire({
          title: "Can't Register this user",
          text: `${this.userObject.userName} has already been registered!`,
          icon: "error"
        });
      }
    );



  }

  registerUser(condition:boolean){
    if(condition){
      console.log(this.userObject);
      this.http.post("http://localhost:8080/user/add-user", this.userObject).subscribe(
        (data) => {
          console.log("add user");
          Swal.fire({
            title: "User Registration Success!",
            text: `Hello ${this.userObject.firstName}`,
            icon: "success"
          });
        },
        (error) => {
          console.error('Error:', error);
          // Handle error during user registration
          Swal.fire({
            title: "Error",
            text: "An error occurred while registering the user.",
            icon: "error"
          });
        }
      );
    }

  }
}
