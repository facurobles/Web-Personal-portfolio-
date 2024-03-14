import { Component, OnInit } from '@angular/core';
import { EmailService } from '../serviceEmail/email.service';
import { Email } from '../modelEmail/email';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  constructor(private emailService:EmailService, private fb: FormBuilder){}

  contactForm!: FormGroup;

  initForm(): FormGroup{
    return this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]],
      message:['', [Validators.required]]
    })
  }
 /*TRAER TODAS LA VALIDACIONES PARA EL TS CON UN METODO */

 
  onSubmit(){
   const email : Email = new Email(this.contactForm.get('email')?.value , this.contactForm.get('message')?.value, this.contactForm.get('name')?.value);
    this.emailService.sendEmail(email, this.contactForm.get('name')?.value); 
  }


 
}
