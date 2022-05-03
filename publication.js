class Publication {

    constructor(title, publisher, type, price, copies, discount){ 
        this.title = title; 
        this.publisher = publisher; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.discount = discount; 
    } 

 toString (){
  const publicString =  
    'Title: ' + this.title + '\n' + 
    'Publisher: ' + this.publisher + '\n' + 
    'Type: ' + this.type + '\n'+  
    'Price: ' + this.getPublicPrice().toFixed(2) + '$' + '\n' + 
    'Copies: ' + this.copies + '\n' + 
    'Discount: ' + this.discount + '%'; 
    
 return publicString;
 }



 getPublicPriceWithOutTax(){
     const discount = this.price * this.discount / 100;
     const library = this.price * 0.3;
     const publicPriceWithOutTax = this.price - discount + library;
     return publicPriceWithOutTax;
 }




}