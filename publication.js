class Publication {

    constructor(title, publisher, type, price, copies, discount, tax){ 
        this.title = title; 
        this.publisher = publisher; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.discount = discount; 
        this.tax = tax;
    } 

 toString (){
  const publicString =  
    'Title: ' + this.title + '\n' + 
    'Publisher: ' + this.publisher + '\n' + 
    'Type: ' + this.type + '\n'+  
    'Price: ' + this.getPublicPrice() + '$' + '\n' + 
    'Copies: ' + this.copies + '\n' + 
    'Discount: ' + this.discount + '%'; 
    
 return publicString;
 }


//  getPublicPriceWithOutTax(){
//     const discount = this.price * this.discount / 100;
//     const margin = this.price * 0.3;
//     const publicPriceWithOutTax = this.price - discount + margin;
//     return publicPriceWithOutTax;
// }


 getPublicPrice(){
     const discount = this.price * this.discount / 100;
     const margin = this.price * 0.3;
     const tax = this.price * this.tax / 100;
     const publicPrice = this.price + tax - discount + margin;
     const roundedPublicPrice = this.round(publicPrice, 2)
     return roundedPublicPrice;
 }


 round(number, decimalPlace){
     const roundedString = number.toFixed(decimalPlace);
     const roundedNumber = parseFloat(roundedString);
     return roundedNumber;
 }





}