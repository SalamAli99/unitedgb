import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  typeOfShipmentsList=[
    'Type Of Shipment',
    'Normal',
    'Battery',
    'Magnet',
    'Special Goods'
  ];
  typeOfShippingList=[
    'Type Of Shipping ',
    'Air',
    'Sea'
  ];
  addressToList=[
    'Syria',
    'Lebanon',
    'Egypt'
  ];
}
