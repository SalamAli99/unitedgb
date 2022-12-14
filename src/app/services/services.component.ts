import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesList=[
    {
      title:'Warehouses',
      content:`Warehouses In China And Saudi Arabia With Large And Organize Storage Areas Equipped With The Latest Technologies To Maintain The Maximum Degree Of Safety And Security For Your Products, While Following Storage Conditions, Storage Method, Spaces Inside The Warehouse, Methods Of Transportation, Receiving, Inspection And Warehouse Insurance.

      China Warehouse:
      
      Organized Storage Spaces, Where Each Customer Is Given His Own Address. He Can Shop From Chinese Websites And Stores With Ease. Then We Receive The Products In The Warehouse, Store And Assemble Them, And Save A Lot Of Shipping Costs.
      
      Saudi Warehouse:
      
      Spacious And Tidy Storage Areas, The Customer Can Store His Goods In Suitable And Organized Shelves, Providing Logistical Services From Tight Packaging For Each Order And Inspection Of The Products, And The Customer Can Choose One Of The Appropriate Local Shipping Companies To Ship The Order To The Customer's.
      
      US Warehouse:
      
      Organized Storage Spaces, Where Each Customer Is Given His Own Address. He Can Shop From American Websites And Stores With Ease. Then We Receive The Products In The Warehouse, Store And Assemble Them, And Save A Lot Of Shipping Costs.`,
      img:'/../../assets/images/warehouse.jpg',
    },
    {
      title:'Shipping Service',
      content:`Own An Address For Your In China Or USA Warehouse, That You Can Use This Address To Shop From Chinese Or American Websites And Stores, We Receive Your Products In The Warehouse, And They Are Stored In Organized Storage Areas Equipped With The Latest Technology, Distinctive Various Logistical Services From Inspecting, Sorting, Repackaging, Consolidating The Shipments, And Shipping Your Products To Any Address You Want, Whether Sea Or Air Freight, Including All Customs Clearance Procedures Through Various Shipping Companies.`
   , img:'/../../assets/images/shippingservices.jpg'
    },
    {
      title:'Shopper',
      content:`This Service Provides Shopping And Purchasing From China On Behalf Of The Customer From Chinese Websites Such As Alibaba (1688) And Taobao, And Enables The Customer To Order The Product He Wants Easily And In Arabic.

      With Ease, The Customer Is Only Required To Search For The Product He Wants From The Products Displayed On The Personal Shopper, Then Add It To The Cart And Buy It.
      The Personal Shopper Does Not Display All The Products On The Chinese Alibaba And Taobao Websites But The Customer Can Be Adding The Product Link That Is Not Available To The Personal Shopper.`
      ,img:'/../../assets/images/shopper.jpg'
    },
    {
      title:'Online Store And Drop Shipping Service',
      content:`We're Allowing To The Customer To Create An Online Store Without The Need For Any Technical Expertise, The Store Also Supports Drop Shipping Which Enables You To Add More Than A Million Products Without The Need To Purchase Them In The Online Store From The Available Products Within Many And Varied Categories, The Online Store Also Has Many Advantages And Services That Guarantee The Success Of The Trade And Achieve The Highest Sales, They Are:

      Modern And Distinctive Design .
      Add Banner Ads.
      Linking The Store To More Than One Payment Mechanism.
      Simple Interfaces And User Experience .
      Receiving An Infinite Number Of Requests And Customers.
      Direct Communication With Customers In More Than One Way .
      Compatible With All Browsers, Screens And Search Engines.
      Effective Marketing Tools Which Are Helping In Reach Customers.
      Add An Infinite Number Of Main, Sub-Sections And Products.
      The Possibility Of Activating Free Shipping In Drop Shipping For Your Online Store Customers.
      Drop Shipping Service Guarantees Profit Because The Products Are At Wholesale Prices And Fast Shipping To Your Customers Anywhere In The World.
      Connecting The Store With Reliable Local Shipping And Delivery Companies Such As: SMSA, Aramex, Fastlo, Sarukh, Zajil And Saudi Post.`,
      img:'/../../assets/images/onlinestore.jpg'
    }
  ]
}
