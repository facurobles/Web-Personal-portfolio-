import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../modelEmail/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "https://formspree.io/f/mrgwynyp"

  constructor(private http: HttpClient){}


  public sendEmail(email : Email, name:string){
	return this.http.post<any>(this.url, email).subscribe(data => {
    alert("Recibí tu email, " + name +". \nEn breve me contactaré contigo 🙂");
    window.location.reload();
  }, err => {
    alert("Error, intenté más tarde.");
  }
  )
    }

}



