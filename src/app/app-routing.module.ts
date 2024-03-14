import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { WhoAmIComponent } from './componentes/who-am-i/who-am-i.component';
import { Option2Component } from './componentes/option2/option2.component';
import { Option3Component } from './componentes/option3/option3.component';
import { NoOptionsComponent } from './componentes/no-options/no-options.component';
import { ContactComponent } from './componentes/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'noOptions', pathMatch: 'full'},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'whoAmI', component: WhoAmIComponent},
  {path: 'option2', component: Option2Component},
  {path: 'option3', component: Option3Component},
  {path: 'noOptions', component: NoOptionsComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
