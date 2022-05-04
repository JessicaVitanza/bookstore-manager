class Magazine extends Publication{

    constructor(title, publisher, release, periodicy, type, price, copies, discount, releaseDate){
      super(title, publisher, type, price, copies, discount, 20);
      this.release = release;
      this.periodicy = periodicy;
      this._releaseDate = releaseDate.getTime();
    }
  
    get releaseDate(){
      const date = new Date(this._releaseDate);
      return date;
    }
  
    set releaseDate(value){
      const time = value.getTime();
      this._releaseDate = time;
    }
  
    toString() {
  
      const magazineString = super.toString() + '\n' +
                             'Numero: ' + this.release + '\n' +
                             'Periodicità: ' + this.periodicy + '\n' +
                             'Data di Pubblicazione: ' + this.releaseDate;
        
      return magazineString;
  
    }
  
  
    // getPublicPrice(){
  
    //   const publicPriceWithoutTax = super.getPublicPriceWithoutTax();
    //   const tax = this.price * 0.2;
    //   const publicPrice = publicPriceWithoutTax + tax;
    //   const roundedPrice = this.round(publicPrice, 2);
  
    //   return roundedPrice;
  
    // }
  
  
  }