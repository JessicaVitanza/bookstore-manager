// Book properties: title, author, editor, type, price, copies, pages, yop, discount

// methods: 
// toString()
// getPublicPrice() => price + tax 10% - discount + 30%

class Book{ 

    constructor(title, author, publisher, type, price, copies, pages, yop, discount){ 
        this.title = title; 
        this.author = author; 
        this.publisher = publisher; 
        this.type = type; 
        this.price = price; 
        this.copies = copies; 
        this.pages = pages; 
        this.yop = yop; 
        this.discount = discount; 
    } 

    toString(){ 
        const bookString = 'Title: ' + this.title + '\n' + 
                           'Author: ' + this.author + '\n' + 
                           'Publisher: ' + this.publisher + '\n' + 
                           'Type: ' + this.type + '\n'+  
                           'Price: ' + this.price + '\n' + 
                           'Copies: ' + this.copies + '\n' + 
                           'Pages: ' + this.pages + '\n' + 
                           'Year of Production: ' + this.yop + '\n' +
                           'Discount: ' + this.discount + '%'; 
                           
        return bookString;
    } 

    getPublicPrice(book){ 

        const tax = this.price * 10 /100; 
        const discount = this.price * this.discount / 100; 
        const library = this.price * 30 / 100; 
        const publicPrice = this.price + tax - discount + library; 

        //const publicPrice = (this.price * 10 /100) - (this.price * this.discount / 100) + (this.price * 30 / 100); 

        return publicPrice;
    }
}















