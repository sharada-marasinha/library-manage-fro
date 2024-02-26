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
    private isUserAlreadyExist :boolean=false;
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

  submitForm(){

    try {
      this.http.get(`http://localhost:8080/user/find/${this.userObject.userName}`).subscribe((data) => {
          this.isUserAlreadyExist = true;
        },
        (error) => {
          console.error('Error:', error);
          this.isUserAlreadyExist = false;
        }


      )
    } catch (error) {
      Swal.fire({
        title: "Cant Register this user",
        text: `${this.userObject.userName} has been already registed ! `,
        icon: "error"
      });
    }


    if(!this.isUserAlreadyExist){
      console.log(this.userObject);
      this.http.post("http://localhost:8080/user/add",this.userObject).subscribe(data =>{
        console.log("add user");
        Swal.fire({
          title: "User Registation sucsess!",
          text: `Hello ${this.userObject.firstName} `,
          icon: "success"
        });
      });
    }else{


    }


  }
}
