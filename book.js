// Book properties: title, author, editor, type, price, copies, pages, yop, discount

// methods: 
// toString()
// getPublicPrice() => price + tax 10% - discount + 30%

class Book extends Publication { 

    constructor(title, author, publisher, type, price, copies, pages, yop, discount){ 
        super(title, publisher, type, price, copies, discount)
        this.author = author;
        this.pages = pages; 
        this.yop = yop; 
    } 

    toString(){ 
        const bookString = super.toString() + '\n' + 
                           'Author: ' + this.author + '\n' +  
                           'Pages: ' + this.pages + '\n' + 
                           'Year of Production: ' + this.yop;
                           
        return bookString;
    } 

    getPublicPrice(){ 

        const publicPriceWithOutTax = super.getPublicPriceWithOutTax();
        const tax = this.price * 0.1; 
        const publicPrice = publicPriceWithOutTax + tax;

        return publicPrice;
    }
}















