// Magazine properties: title, publisher, periodicy, cadence, type, price, copies, discount, releaseDate

// methods: 
// toString()
// getPublicPrice() => price + tax 20% - discount + 30%

class Magazine extends Publication{ 

    constructor(title, publisher, release, periodicity, type, price, copies, discount, releaseDate){ 
        super(title, publisher, type, price, copies, discount);
        this. release = release;
        this.periodicity = periodicity; 
        this.releaseDate = releaseDate;
    } 

    toString(){ 
        const magazineString = super.toString() + '\n' + 
                               'Number: ' + this.release + '\n' + 
                               'Periodicity: ' + this.periodicity + '\n' + 
                               'Release Date: ' + this.releaseDate;
                           
        return magazineString;
    } 

    getPublicPrice(){ 

                const publicPriceWithOutTax = super.getPublicPriceWithOutTax();
                const tax = this.price * 0.2; 
                const publicPrice = publicPriceWithOutTax + tax;
                
                return publicPrice;
            }
}