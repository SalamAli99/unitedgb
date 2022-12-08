import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { LoginComponent } from './login/login.component';
import { PricesComponent } from './prices/prices.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'shipping',component:ShippingComponent},
  {path:'prices',component:PricesComponent},
  {path:'blog',component:BlogComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'features',component:FeaturesComponent},
  {path:'language',component:LanguageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
