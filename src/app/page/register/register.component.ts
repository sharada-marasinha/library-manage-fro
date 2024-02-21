import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
    console.log(this.userObject);
    this.http.post("http://localhost:8080/user/add",this.userObject).subscribe(data =>{
      console.log("add user");

    });

  }
}
