import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}
  toLoginPage(){
this.router.navigate(['/login']);
  }
opened=false;
toggle(){
  this.opened=!this.opened;
}
navlist= [
  {
    selected:true,
   link:'/home',
    name: 'Home',
    
  },
  {link:'/services',
    name: 'Services',
    selected:false
    
  },
  {link:'/shipping',
    name: 'Shipping Fee',
    selected:false
    
  },
  {link:'/blog',
    name: 'Blog',
    selected:false
  },
  {
    link:'/contactus',
    name: 'Contact Us',
    selected:false
  }
];


}


