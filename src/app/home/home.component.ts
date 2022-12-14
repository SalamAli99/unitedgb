import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data:number=0;
  ngOnInit():void{
    const obs$=interval(5);
   const subscribe= obs$.subscribe((d)=>{
      this.cards[0].amount=d;
      this.data=d;
   setTimeout(()=>{
    if(d==351){
      subscribe.unsubscribe()
    }
    
   },5)
    
    });




    const obs2$=interval(5);
   const subscribe2= obs2$.subscribe((t)=>{
      this.cards[1].amount=t;
      this.data=t;
   setTimeout(()=>{
    if(t==200){
      subscribe2.unsubscribe()
    }
    
   },5)
    
    });



    const obs3$=interval(5);
    const subscribe3= obs3$.subscribe((y)=>{
       this.cards[2].amount=y;
       this.data=y;
    setTimeout(()=>{
     if(y==300){
       subscribe3.unsubscribe()
     }
     
    },5)
     
     });



     const obs4$=interval(5);
     const subscribe4= obs4$.subscribe((x)=>{
        this.cards[3].amount=x;
        this.data=x;
     setTimeout(()=>{
      if(x==150){
        subscribe4.unsubscribe()
      }
      
     },5)
      
      });










  }
  cards=[
    {
      title:'Store Orders',
      amount:this.data,
      imgurl:'../../assets/images/storeorders.png'
    },
    {
      title:'Stores',
      amount:this.data,
      imgurl:'../../assets/images/shope.jpg'
    },
    {
      title:'Shopper Orders',
      amount:this.data,
      imgurl:'../../assets/images/shopperorders.png'
    },
    {
      title:'Shipments',
      amount:this.data,
      imgurl:'../../assets/images/shipments.png'
    }
  ];
slideIndex:number=0;
changeSlide(n:number){
this.slideIndex+=n;
if(this.slideIndex>3){
  this.slideIndex=0;
}
else if(this.slideIndex<0){
  this.slideIndex=3;
}
console.log(this.slideIndex);
}
 @Input() cardsSlider=[
    {
      title:"WareHouses",
    content:`We give you a special storage spaces
     to store your goods in our warehouses in China,
      America and Saudi Arabia through your own mail address.

    Warehouses are equipped with the best modern technologies to 
    receive and store your goods. We also provide your goods in warehouses
     with many professional logistic services to ensure their safety and 
     preservation until the time of shipment.`,
    imageUrl:"../../assets/images/warehouse.jpg"
  },
    {
      title:"Shippin Services",
      content:`Fast and safe shipping from China or USA to the world, the customer is given an address in our warehouse in China or USA to store and consolidate products, and ship it to any address you want, whether sea or air freight, including all customs clearance procedures through various shipping companies.`,
      imageUrl:"../../assets/images/shippingservices.jpg"
    },
    {
      title:"Shopper",
      content:`We enable you to import from China with ease through the shopper service, as we provide you with various products and classifications from the most famous Chinese stores and factories, Alibaba Chinese, Taobao, Tmall at wholesale prices, and product details are displayed in Arabic.
      You can also search for a specific product through the product link or product image.
      We provide a specialized team to check the products and make sure that they are as per your request after purchasing them.`,
      imageUrl:"../../assets/images/shopper.jpg"
    },
    {
      title:"On Line StoreAnd Drop Shipping Services",
      content:`We enable you to start your business to sell your products and achieve profits by creating an integrated online store with professional advantages, the most important of which are: distinctive and modern design, easy user experience, adding endless sections and products, more than one payment method, linking with reliable shipping and delivery companies, receiving an unlimited number of customers Providing marketing tools that help you reach customers faster to expand your business, and a lot of endless benefits.`,
      imageUrl:"../../assets/images/onlinestore.jpg"
    }   
  ];
 

  rows=[
    {
      mediaList: [
        {
          imageUrl: "https://mycn.io/en/image/image_1604929481163777757.png",
          title: "Product Shipping",
          content: `Packaging And Consolidating The Shipments In One Parcel, To Reduce A Shipping Cost, And Shipping The Products To Your Address Including Customs Clearance.`
        },
        {
          imageUrl: "https://mycn.io/en/image/image_16233132551924960361.png",
          title: "Personal Shopper",
          content: `A Service That Enables You To Import From China At Wholesale Price And With The Highest Quality, And Ensuring The Product As Required.`
        },
        {
          imageUrl: "https://mycn.io/en/image/image_1623313279856270374.png",
          title: "Warehouse For Storing Products ",
          content: `Giving An Address To The Customer In China, Saudi Arabia, And USA Warehouses To Receive And Store His Products Easily, And Providing Distinguished Logistics Services.`
        }
      ]
    },
    {


      mediaList: [
        {
          imageUrl: "https://mycn.io/en/image/image_16092332801779834481.png",
          title: "Own A Store At The Lowest Costs",
          content: `You Can Create Your Own Design Store Within Minutes At The Lowest Costs, And Integrated With All Services.`
        },
        {
          imageUrl: "https://mycn.io/en/image/image_1609236993229466419.png",
          title: "Drop Shipping",
          content: `You Can Create An Online Store And Display Products That You Copy From Other Stores, With An Increase In The Price Of The Product Over The Original Price For It, And You Have The Profit Difference Between The Two Prices.`
        },
        {
          imageUrl: "https://mycn.io/en/image/image_16092337081841811786.png",
          title: "Marketing Tools To Increase Your Sales",
          content: `We Are Keen To Enable Merchants To Promote Their Stores With Ease And Provide Professional Tools For Your Store's Success.`
        }
      ]

    }
  ]
}
