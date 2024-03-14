import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WhoAmIComponent } from './componentes/who-am-i/who-am-i.component';
import { Option2Component } from './componentes/option2/option2.component';
import { Option3Component } from './componentes/option3/option3.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { EmailService } from './componentes/serviceEmail/email.service';
import { NoOptionsComponent } from './componentes/no-options/no-options.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    WhoAmIComponent,
    Option2Component,
    Option3Component,
    ProjectsComponent,
    ContactComponent,
    NoOptionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
