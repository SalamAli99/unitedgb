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
    icon:'home',
    name: 'Home',
    
  },
  {
    icon:'settings',
    name: 'Services',
    
  },
  {
    icon:'local_shipping',
    name: 'Shipping Fee',
    
  },
  {
    icon:'attach_money',
    name: ' Prices',
    
  },
  {
    icon:'chat',
    name: 'Blog',
    
  },
  {
    icon:'phone',
    name: 'Contact Us',
    
  },
  {
    icon:'sentiment_satisfied_alt',
    name: 'Features',
    
  },
];

}


