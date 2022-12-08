import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
opened=false;
toggle(){
  this.opened=!this.opened;
}
navlist= [
  {
   link:'/home',
    name: 'Home',
    
  },
  {link:'/services',
    name: 'Services',
    
  },
  {link:'/shipping',
    name: 'Shipping Fee',
    
  },
  {
    link:'/prices',
    name: ' Prices',
    
  },
  {link:'/blog',
    name: 'Blog',
    
  },
  {
    link:'/contactus',
    name: 'Contact Us',
    
  },
  {
    link:'/features',
    name: 'Features',
    
  },
  {
    link:'/language',
    name:'Change Language'
  }
];


}


